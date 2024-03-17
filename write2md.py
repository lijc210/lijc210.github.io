# coding: utf-8
"""
@File    :   main.py
@Time    :   2023/05/05 18:46:35
@Author  :   lijc210@163.com
@Desc    :   定时抓取所有订阅地址，获取今日新增文章，写入md文档，自动显示在每日悦读。
"""

import csv
import json
import logging
import os
import time
import traceback
from collections import defaultdict
from concurrent import futures
from datetime import datetime, timedelta
from http.client import IncompleteRead
from time import mktime
from urllib.error import URLError

import feedparser

from utils import headers, open_google, proxy_handler, send_text


def get_updated_time(feed_dict):
    """rss更新的时间"""
    update_time_parsed = datetime.fromtimestamp(0)
    for k, v in feed_dict.items():
        if isinstance(v, time.struct_time):
            update_time_parsed = datetime.fromtimestamp(mktime(v))
    return update_time_parsed


def get_entry_updated_time(entry):
    """文章的发布时间"""

    entry_published_parsed = datetime.fromtimestamp(0)
    for k, v in entry.items():
        if isinstance(v, time.struct_time):
            try:
                entry_published_parsed = datetime.fromtimestamp(mktime(v))
            except Exception:
                msg = traceback.format_exc()
                if "year 0 is out of range" in msg is False:
                    traceback.print_exc()
    return entry_published_parsed


def get_article(args, debug=False):
    index, feed_url, feed_title, sdate = args
    start_date = sdate
    end_date = (datetime.strptime(sdate, "%Y-%m-%d") + timedelta(days=+1)).strftime(
        "%Y-%m-%d"
    )
    lines = []
    feed_dict = {}
    try:
        feed_dict = feedparser.parse(
            feed_url, request_headers=headers, handlers=[proxy_handler]
        )
    except IncompleteRead:
        logging.error(f"{index}\t{feed_url}\t{feed_title}\t0\tIncompleteRead错误")
    except URLError:
        logging.error(f"{index}\t{feed_url}\t{feed_title}\t0\tURLError错误")
    except Exception:
        msg = traceback.format_exc()
        logging.error(f"{index}\t{feed_url}\t{feed_title}\t0\n{msg}")
    else:
        if debug:
            with open("tmp.json", "w") as f:
                try:
                    f.write(json.dumps(feed_dict, ensure_ascii=False, indent=4))
                except Exception:
                    feed_dict["bozo_exception"] = str(feed_dict["bozo_exception"])
                    f.write(json.dumps(feed_dict, ensure_ascii=False, indent=4))
        entries = feed_dict["entries"]
        feed = feed_dict["feed"]
        bozo_exception = str(feed_dict.get("feed_dict", ""))
        if "error" in bozo_exception:
            logging.error(f"{index}\t{feed_url}\t{feed_title}\t0\t{bozo_exception}错误")
        if not entries and not feed:
            logging.warning(
                f"{index}\t{feed_url}\t{feed_title}\t{len(entries)}\t没有数据"
            )
            return feed_title, lines
        logging.info(f"{index}\t{feed_url}\t{feed_title}\t{len(entries)}")
        updated_time = get_updated_time(feed_dict)
        for entry in entries:
            # import json
            # print(json.dumps(entry,ensure_ascii=False))
            # print(entry["summary"])
            title = entry["title"]
            title = (
                title.replace("[", "\[")
                .replace("]", "\]")
                .replace("<", "\<")
                .replace(">", "\>")
            )
            link = entry.get("link")
            if not link:
                logging.warning(
                    "{index}\t{feed_url}\t{feed_title}\t{len(entries)}\tlink不存在"
                )
            else:
                entry_updated_time = get_entry_updated_time(entry)
                # if not entry_updated_time:
                #     entry_updated_time = updated_time
                if debug:
                    logging.info(
                        f"{index}\t{feed_url}\t{feed_title}\t{len(entries)}\t{title}\t{link}\t{updated_time}\t{entry_updated_time}"
                    )
                if start_date <= entry_updated_time.strftime("%Y-%m-%d") < end_date:
                    published_time = entry_updated_time.strftime("%H:%M:%S")
                    lines.append(f"* [{title}]({link}) *{published_time}* \n")
    return feed_title, lines


def write2md(sdate, top, workers=1):
    order: str = time.strftime("%Y%m%d", time.strptime(sdate, "%Y-%m-%d"))

    yuedu_md = f"""---
order: -{order}
icon: read
date: {sdate}
# timeline: false
article: false
category:
- 每日悦读
# tag:
#   - 红
#   - 大
#   - 圆
---

# {sdate} 
"""
    success, msg = open_google()
    if success:
        # 遍历读取订阅地址，获取当日更新，写入每日悦读.md
        data_dict = defaultdict(list)
        args_list = []
        with open("rss.csv", "r") as f:
            reader = csv.reader(f)
            for i, line in enumerate(reader):
                feed_title, url, feed_url, tags, source = line
                if i == 0 or i > top:
                    continue
                # if "coolshell" not in feed_url:
                #     continue
                args_list.append((i, feed_url, feed_title, sdate))

        if workers <= 1:
            res = [get_article(args) for args in args_list]
        else:
            with futures.ThreadPoolExecutor(workers) as executor:
                res = executor.map(get_article, args_list)

        for r in res:
            feed_title, lines = r
            if lines:
                logging.info(f"今日新增\t{feed_title}\t{len(lines)}")
                aline = f"## {feed_title}<span></span>\n"
                for line in lines:
                    aline += line
                yuedu_md += aline
                data_dict[feed_title].extend(lines)

        with open("data_dict.json", "r") as f:
            old_json = json.loads(f.read())

        if data_dict != old_json:  # 有更新才提交
            logging.info("有内容更新")
            with open("data_dict.json", "w") as f:
                f.write(json.dumps(data_dict, ensure_ascii=False, indent=4))

            with open(f"src/每日悦读/{sdate}.md", "w") as f:
                f.write(yuedu_md)

            # 提交git
            # os.system(f"git config http.proxy {http}")
            # os.system(f"git config https.proxy {https}")
            os.system("git pull && git add . && git commit -m 'rss' && git push")
        else:
            logging.info("无内容更新")


def run(args=None):
    try:
        if args:
            sdate = args
        else:
            sdate: str = time.strftime("%Y-%m-%d", time.localtime(time.time()))
        print("日期：", sdate)
        write2md(sdate, 2000, workers=10)
    except Exception:
        logging.error(traceback.format_exc())
        send_text("write2md.py执行失败")


def test(feed_url):
    sdate: str = time.strftime("%Y-%m-%d", time.localtime(time.time()))
    res = get_article((0, feed_url, "test", sdate), debug=True)
    print(res)


if __name__ == "__main__":
    import sys

    if len(sys.argv) == 1:
        run()
    else:
        args = sys.argv[1]
        if len(args) == 10:
            # args = "2023-06-14"
            run(args)
        else:
            test(args)
