# coding: utf-8
"""
@File    :   main.py
@Time    :   2023/05/05 18:46:35
@Author  :   lijc210@163.com
@Desc    :   将rss地址写入rss.csv
"""
import os
import csv
import feedparser
import time
import traceback
import logging
from tempfile import NamedTemporaryFile
from urllib.request import build_opener, Request
from urllib.parse import urlparse
from utils import headers, http, https, proxy_handler, open_google, send_text


def write2csv(feed_url=""):
    success, msg = open_google()
    if success:
        feed = feedparser.parse(
            feed_url, request_headers=headers, handlers=[proxy_handler]
        )
        # import pprint
        # pprint.pprint(feed, depth=2)
        bozo_exception = feed.get("bozo_exception", "")
        if bozo_exception:
            success, msg = False, str(bozo_exception)
        else:
            feed_title = feed["feed"].get("title")
            if not feed_title:
                success, msg = False, "地址无效"
            else:
                rss_set = set()
                with open("rss.csv", "r") as f:
                    reader = csv.reader(f)
                    for i, line in enumerate(reader):
                        # print(line)
                        if i > 0:
                            title, url, rss, tags, source = line
                            rss_set.add(rss)

                if feed_url in rss_set:
                    success, msg = True, "已订阅过"
                else:
                    # 保存
                    url = urlparse(feed_url).scheme + "://" + urlparse(feed_url).netloc
                    alist = [feed_title, url, feed_url, "", "ttrss"]
                    with open("rss.csv", "a", newline="") as csvfile:
                        spamwriter = csv.writer(csvfile)
                        spamwriter.writerow(alist)
                    # sdate: str = time.strftime("%Y-%m-%d", time.localtime(time.time()))
                    # dingyue2md(sdate)  # 将所有订阅地址写入订阅说明.md
                    # write2md(sdate, 2000)
                    success, msg = True, "订阅成功"

                # 提交git
                # os.system(f"git config http.proxy {http}")
                # os.system(f"git config https.proxy {https}")
                os.system("git pull && git add . && git commit -m 'rss' && git push")
    return success, msg


def download2csv():
    url = "https://raw.githubusercontent.com/timqian/chinese-independent-blogs/master/blogs-original.csv"
    opener = build_opener(proxy_handler)
    request = Request(url)
    r = opener.open(request, timeout=60)

    rss_set = set()
    with open("rss.csv", "r") as f:
        reader = csv.reader(f)
        for i, line in enumerate(reader):
            # print(line)
            if i > 0:
                title, url, rss, tags, source = line
                rss_set.add(rss)

    with NamedTemporaryFile(suffix="blogs-original.csv", delete=True) as ntf:
        ntf.write(r.read())
        date_list = []
        with open(ntf.name) as f:
            reader = csv.reader(f)
            for i, line in enumerate(reader):
                # print(line)
                if i > 0:
                    # print(line)
                    title = line[0].replace(" ", "")
                    url = line[1].replace(" ", "")
                    rss = line[2].replace(" ", "")
                    tags = line[3].replace(" ", "")
                    alist = [title, url, rss, tags, "github"]
                    if rss not in rss_set:
                        date_list.append(alist)

    with open("rss.csv", "a", newline="") as csvfile:
        spamwriter = csv.writer(csvfile)
        spamwriter.writerows(date_list)
        # for row in date_list:
        #     spamwriter.writerow(row)

    logging.info(f"新增{len(date_list)}条rss")


def run():
    try:
        download2csv()
    except Exception:
        print(traceback.format_exc())
        send_text("write2md.py执行失败")


def test(feed_url):
    success, msg = write2csv(feed_url=feed_url)
    print(success, msg)


if __name__ == "__main__":
    import sys

    if len(sys.argv) == 1:
        run()
    else:
        feed_url = sys.argv[1]
        test(feed_url)
