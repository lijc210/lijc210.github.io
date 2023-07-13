import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-35aa363c.js";const d={},l=s(`<h1 id="订阅说明" tabindex="-1"><a class="header-anchor" href="#订阅说明" aria-hidden="true">#</a> 订阅说明</h1><h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h2><p>使用ttrss.py启动订阅服务接口，使用rsshub订阅插件，将Tiny Tiny RSS地址改为订阅接口地址，即可直接订阅网站，存入rss.csv。</p><p>定时执行write2csv.py<span></span>，抓取网络上的订阅地址，存入rss.csv。</p><p>定时执行write2md.py<span></span>，读取rss.csv，获取今日新增文章，写入md文档，提交git，自动显示在每日悦读。</p><p>参考代码：</p><h2 id="ttrss-py" tabindex="-1"><a class="header-anchor" href="#ttrss-py" aria-hidden="true">#</a> ttrss.py<span></span></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># coding: utf-8
&quot;&quot;&quot;
@File    :   main.py
@Time    :   2023/05/05 18:46:35
@Author  :   lijc210@163.com
@Desc    :   模拟rsshub订阅插件，将Tiny Tiny RSS订阅到此地址
依赖模块 pip install fastapi,feedparser,uvicorn,requests
订阅请求地址 http://localhost:8000/public.php?op=bookmarklets--subscribe&amp;feed_url=https://rustcc.cn/rss
&quot;&quot;&quot;
import time
import traceback
import uvicorn
from datetime import datetime, timedelta
from typing import Union
from fastapi import FastAPI
from write2csv import write2csv

app = FastAPI()

order: str = time.strftime(&quot;%Y%m%d&quot;, time.localtime(time.time()))
date: str = time.strftime(&quot;%Y-%m-%d&quot;, time.localtime(time.time()))
tomorrow = (datetime.now() + timedelta(days=1)).strftime(&quot;%Y-%m-%d&quot;)


@app.get(&quot;/&quot;)
def read_root():
    return {&quot;Hello&quot;: &quot;World&quot;}


@app.get(&quot;/items/{item_id}&quot;)
def read_item(item_id: int, q: Union[str, None] = None):
    return {&quot;item_id&quot;: item_id, &quot;q&quot;: q}


@app.get(&quot;/public.php&quot;)
def public(op: str, feed_url: str):
    try:
        # print(op)
        # print(feed_url)
        success, msg = write2csv(feed_url)
    except Exception:
        print(traceback.format_exc())
        success, msg = False, traceback.format_exc()
    return {&quot;success&quot;: success, &quot;msg&quot;: msg}


if __name__ == &quot;__main__&quot;:
    uvicorn.run(app=&quot;ttrss:app&quot;, host=&quot;0.0.0.0&quot;, port=8000, reload=True)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write2md-py" tabindex="-1"><a class="header-anchor" href="#write2md-py" aria-hidden="true">#</a> write2md.py<span></span></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># coding: utf-8
&quot;&quot;&quot;
@File    :   main.py
@Time    :   2023/05/05 18:46:35
@Author  :   lijc210@163.com
@Desc    :   定时抓取所有订阅地址，获取今日新增文章，写入md文档，自动显示在每日悦读。
&quot;&quot;&quot;
import os
import csv
import json
import time
import logging
import traceback
import feedparser
from time import mktime
from concurrent import futures
from datetime import datetime, timedelta
from collections import defaultdict
from http.client import IncompleteRead
from urllib.error import URLError
from utils import headers, http, https, proxy_handler, open_google, send_text


def dingyue2md(sdate):
    dingyue_md = f&quot;&quot;&quot;---
order: -2
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
# 订阅列表
&quot;&quot;&quot;
    with open(&quot;rss.json&quot;, &quot;r&quot;) as f:
        old_json = json.loads(f.read())

    data_list = []
    with open(&quot;rss.csv&quot;, &quot;r&quot;) as f:
        reader = csv.reader(f)
        data_list = list(reader)
    if data_list != old_json:  # 有更新才提交
        logging.info(&quot;有新增订阅地址&quot;)
        # 将所有订阅地址写入订阅列表.md
        with open(&quot;src/每日悦读/订阅列表.md&quot;, &quot;w&quot;) as fw:
            with open(&quot;rss.csv&quot;, &quot;r&quot;) as f:
                reader = csv.reader(f)
                for i, line in enumerate(data_list):
                    title, url, rss, tags, source = line
                    if i == 0:
                        dingyue_md += f&quot;|{title}|{rss}|{tags}|{source}|\\n&quot;
                        dingyue_md += &quot;| :-----| :-----| :-----| :-----|\\n&quot;
                    else:
                        dingyue_md += (
                            f&quot;|[{title}]({url})|[rss]({rss})|{tags}|{source}|\\n&quot;
                        )
                fw.write(dingyue_md)
        with open(&quot;rss.json&quot;, &quot;w&quot;) as f:
            f.write(json.dumps(data_list, ensure_ascii=False, indent=4))
    else:
        logging.info(&quot;无新增订阅地址&quot;)


def get_updated_time(feed_dict):
    &quot;&quot;&quot;rss更新的时间&quot;&quot;&quot;
    update_time_parsed = datetime.fromtimestamp(0)
    for k, v in feed_dict.items():
        if isinstance(v, time.struct_time):
            update_time_parsed = datetime.fromtimestamp(mktime(v))
    return update_time_parsed


def get_entry_updated_time(entry):
    &quot;&quot;&quot;文章的发布时间&quot;&quot;&quot;

    entry_published_parsed = datetime.fromtimestamp(0)
    for k, v in entry.items():
        if isinstance(v, time.struct_time):
            try:
                entry_published_parsed = datetime.fromtimestamp(mktime(v))
            except Exception:
                msg = traceback.format_exc()
                if &quot;year 0 is out of range&quot; in msg is False:
                    traceback.print_exc()
    return entry_published_parsed


def get_article(args, debug=False):
    index, feed_url, feed_title, sdate = args
    start_date = sdate
    end_date = (datetime.strptime(sdate, &quot;%Y-%m-%d&quot;) + timedelta(days=+1)).strftime(
        &quot;%Y-%m-%d&quot;
    )
    lines = []
    feed_dict = {}
    try:
        feed_dict = feedparser.parse(
            feed_url, request_headers=headers, handlers=[proxy_handler]
        )
    except IncompleteRead:
        logging.error(f&quot;{index}\\t{feed_url}\\t{feed_title}\\t0\\tIncompleteRead错误&quot;)
    except URLError:
        logging.error(f&quot;{index}\\t{feed_url}\\t{feed_title}\\t0\\tURLError错误&quot;)
    except Exception:
        msg = traceback.format_exc()
        logging.error(f&quot;{index}\\t{feed_url}\\t{feed_title}\\t0\\n{msg}&quot;)
    else:
        if debug:
            with open(&quot;tmp.json&quot;, &quot;w&quot;) as f:
                try:
                    f.write(json.dumps(feed_dict, ensure_ascii=False, indent=4))
                except Exception:
                    feed_dict[&quot;bozo_exception&quot;] = str(feed_dict[&quot;bozo_exception&quot;])
                    f.write(json.dumps(feed_dict, ensure_ascii=False, indent=4))
        entries = feed_dict[&quot;entries&quot;]
        feed = feed_dict[&quot;feed&quot;]
        bozo_exception = str(feed_dict.get(&quot;feed_dict&quot;, &quot;&quot;))
        if &quot;error&quot; in bozo_exception:
            logging.error(f&quot;{index}\\t{feed_url}\\t{feed_title}\\t0\\t{bozo_exception}错误&quot;)
        if not entries and not feed:
            logging.warning(f&quot;{index}\\t{feed_url}\\t{feed_title}\\t{len(entries)}\\t没有数据&quot;)
            return feed_title, lines
        logging.info(f&quot;{index}\\t{feed_url}\\t{feed_title}\\t{len(entries)}&quot;)
        updated_time = get_updated_time(feed_dict)
        for entry in entries:
            # import json
            # print(json.dumps(entry,ensure_ascii=False))
            # print(entry[&quot;summary&quot;])
            title = entry[&quot;title&quot;]
            link = entry.get(&quot;link&quot;)
            if not link:
                logging.warning(
                    &quot;{index}\\t{feed_url}\\t{feed_title}\\t{len(entries)}\\tlink不存在&quot;
                )
            else:
                entry_updated_time = get_entry_updated_time(entry)
                # if not entry_updated_time:
                #     entry_updated_time = updated_time
                if debug:
                    logging.info(
                        f&quot;{index}\\t{feed_url}\\t{feed_title}\\t{len(entries)}\\t{title}\\t{link}\\t{updated_time}\\t{entry_updated_time}&quot;
                    )
                if start_date &lt;= entry_updated_time.strftime(&quot;%Y-%m-%d&quot;) &lt; end_date:
                    published_time = entry_updated_time.strftime(&quot;%H:%M:%S&quot;)
                    lines.append(f&quot;* [{title}]({link}) *{published_time}* \\n&quot;)
    return feed_title, lines


def write2md(sdate, top, workers=1):
    order: str = time.strftime(&quot;%Y%m%d&quot;, time.strptime(sdate, &quot;%Y-%m-%d&quot;))

    yuedu_md = f&quot;&quot;&quot;---
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
&quot;&quot;&quot;
    success, msg = open_google()
    if success:
        # 遍历读取订阅地址，获取当日更新，写入每日悦读.md
        data_dict = defaultdict(list)
        args_list = []
        with open(&quot;rss.csv&quot;, &quot;r&quot;) as f:
            reader = csv.reader(f)
            for i, line in enumerate(reader):
                feed_title, url, feed_url, tags, source = line
                if i == 0 or i &gt; top:
                    continue
                # if &quot;coolshell&quot; not in feed_url:
                #     continue
                args_list.append((i, feed_url, feed_title, sdate))

        if workers &lt;= 1:
            res = [get_article(args) for args in args_list]
        else:
            with futures.ThreadPoolExecutor(workers) as executor:
                res = executor.map(get_article, args_list)

        for r in res:
            feed_title, lines = r
            if lines:
                logging.info(f&quot;今日新增\\t{feed_title}\\t{len(lines)}&quot;)
                aline = f&quot;## {feed_title}&lt;span&gt;&lt;/span&gt;\\n&quot;
                for line in lines:
                    aline += line
                yuedu_md += aline
                data_dict[feed_title].extend(lines)

        with open(&quot;data_dict.json&quot;, &quot;r&quot;) as f:
            old_json = json.loads(f.read())

        if data_dict != old_json:  # 有更新才提交
            logging.info(&quot;有内容更新&quot;)
            with open(&quot;data_dict.json&quot;, &quot;w&quot;) as f:
                f.write(json.dumps(data_dict, ensure_ascii=False, indent=4))

            with open(f&quot;src/每日悦读/{sdate}.md&quot;, &quot;w&quot;) as f:
                f.write(yuedu_md)

            # 提交git
            os.system(f&quot;git config http.proxy {http}&quot;)
            os.system(f&quot;git config https.proxy {https}&quot;)
            os.system(&quot;git pull &amp;&amp; git add . &amp;&amp; git commit -m &#39;rss&#39; &amp;&amp; git push&quot;)
        else:
            logging.info(&quot;无内容更新&quot;)


def run(args=None):
    try:
        if args:
            sdate = args
        else:
            sdate: str = time.strftime(&quot;%Y-%m-%d&quot;, time.localtime(time.time()))
        print(&quot;日期：&quot;, sdate)
        dingyue2md(sdate)  # 将所有订阅地址写入订阅说明.md
        write2md(sdate, 2000, workers=10)
    except Exception:
        logging.error(traceback.format_exc())
        send_text(&quot;write2md.py执行失败&quot;)


def test(feed_url):
    sdate: str = time.strftime(&quot;%Y-%m-%d&quot;, time.localtime(time.time()))
    res = get_article((0, feed_url, &quot;test&quot;, sdate), debug=True)
    print(res)


if __name__ == &quot;__main__&quot;:
    import sys

    if len(sys.argv) == 1:
        run()
    else:
        args = sys.argv[1]
        if len(args) == 10:
            # args = &quot;2023-06-14&quot;
            run(args)
        else:
            test(args)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write2csv-py" tabindex="-1"><a class="header-anchor" href="#write2csv-py" aria-hidden="true">#</a> write2csv.py<span></span></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># coding: utf-8
&quot;&quot;&quot;
@File    :   main.py
@Time    :   2023/05/05 18:46:35
@Author  :   lijc210@163.com
@Desc    :   将rss地址写入rss.csv
&quot;&quot;&quot;
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


def write2csv(feed_url=&quot;&quot;):
    success, msg = open_google()
    if success:
        feed = feedparser.parse(
            feed_url, request_headers=headers, handlers=[proxy_handler]
        )
        # print(feed[&quot;feed&quot;])
        feed_title = feed[&quot;feed&quot;].get(&quot;title&quot;)
        if not feed_title:
            success, msg = False, &quot;地址无效&quot;
        else:
            rss_set = set()
            with open(&quot;rss.csv&quot;, &quot;r&quot;) as f:
                reader = csv.reader(f)
                for i, line in enumerate(reader):
                    # print(line)
                    if i &gt; 0:
                        title, url, rss, tags, source = line
                        rss_set.add(rss)

            if feed_url in rss_set:
                success, msg = True, &quot;已订阅过&quot;
            else:
                # 保存
                url = urlparse(feed_url).scheme + &quot;://&quot; + urlparse(feed_url).netloc
                alist = [feed_title, url, feed_url, &quot;&quot;, &quot;ttrss&quot;]
                with open(&quot;rss.csv&quot;, &quot;a&quot;, newline=&quot;&quot;) as csvfile:
                    spamwriter = csv.writer(csvfile)
                    spamwriter.writerow(alist)
                # sdate: str = time.strftime(&quot;%Y-%m-%d&quot;, time.localtime(time.time()))
                # dingyue2md(sdate)  # 将所有订阅地址写入订阅说明.md
                # write2md(sdate, 2000)
                success, msg = True, &quot;订阅成功&quot;

            # 提交git
            os.system(f&quot;git config http.proxy {http}&quot;)
            os.system(f&quot;git config https.proxy {https}&quot;)
            os.system(&quot;git pull &amp;&amp; git add . &amp;&amp; git commit -m &#39;rss&#39; &amp;&amp; git push&quot;)
    return success, msg


def download2csv():
    sdatetime: str = time.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;, time.localtime(time.time()))
    url = &quot;https://raw.githubusercontent.com/timqian/chinese-independent-blogs/master/blogs-original.csv&quot;
    opener = build_opener(proxy_handler)
    request = Request(url)
    r = opener.open(request, timeout=60)

    rss_set = set()
    with open(&quot;rss.csv&quot;, &quot;r&quot;) as f:
        reader = csv.reader(f)
        for i, line in enumerate(reader):
            # print(line)
            if i &gt; 0:
                title, url, rss, tags, source = line
                rss_set.add(rss)

    with NamedTemporaryFile(suffix=&quot;blogs-original.csv&quot;, delete=True) as ntf:
        ntf.write(r.read())
        date_list = []
        with open(ntf.name) as f:
            reader = csv.reader(f)
            for i, line in enumerate(reader):
                # print(line)
                if i &gt; 0:
                    # print(line)
                    title = line[0].replace(&quot; &quot;, &quot;&quot;)
                    url = line[1].replace(&quot; &quot;, &quot;&quot;)
                    rss = line[2].replace(&quot; &quot;, &quot;&quot;)
                    tags = line[3].replace(&quot; &quot;, &quot;&quot;)
                    alist = [title, url, rss, tags, &quot;github&quot;]
                    if rss not in rss_set:
                        date_list.append(alist)

    with open(&quot;rss.csv&quot;, &quot;a&quot;, newline=&quot;&quot;) as csvfile:
        spamwriter = csv.writer(csvfile)
        spamwriter.writerows(date_list)
        # for row in date_list:
        #     spamwriter.writerow(row)

    logging.info(f&quot;新增{len(date_list)}条rss&quot;)


def run():
    try:
        download2csv()
    except Exception:
        print(traceback.format_exc())
        send_text(&quot;write2md.py执行失败&quot;)


def test():
    feed_url = &quot;https://www.barretlee.com/rss2.xml&quot;
    success, msg = write2csv(feed_url=feed_url)
    print(success, msg)


if __name__ == &quot;__main__&quot;:
    # test()
    run()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="utils-py" tabindex="-1"><a class="header-anchor" href="#utils-py" aria-hidden="true">#</a> utils.py<span></span></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># coding: utf-8
&quot;&quot;&quot;
@File    :   utils.py
@Time    :   2023/06/16 17:37:32
@Author  :   lijc210@163.com
@Desc    :   None
&quot;&quot;&quot;
import ssl
import logging
import socket
import requests
from urllib.parse import urlencode
from urllib.request import ProxyHandler

socket.setdefaulttimeout(30)
# 日志输出
fh = logging.FileHandler(&quot;rss.log&quot;, encoding=&quot;utf-8&quot;, mode=&quot;w&quot;)  # 用于输出到文件
hdr = logging.StreamHandler()  # 用于输出到控制台
logging.basicConfig(
    level=logging.INFO,  # 控制台打印的日志级别
    handlers=[fh, hdr],
    format=&quot;[%(asctime)s] %(levelname)s %(filename)s[%(lineno)d]: %(message)s&quot;
    # 日志格式
)

# certificate verify failed 报错
if hasattr(ssl, &quot;_create_unverified_context&quot;):
    ssl._create_default_https_context = ssl._create_unverified_context


if socket.gethostname() == &quot;SHBGDZ05373&quot;:
    http, https = &quot;http://172.17.15.93:7890&quot;, &quot;http://172.17.15.93:7890&quot;
else:
    http, https = &quot;http://127.0.0.1:7890&quot;, &quot;http://127.0.0.1:7890&quot;

proxies = {&quot;http&quot;: http, &quot;https&quot;: https}
proxy_handler = ProxyHandler(proxies)
headers = {
    # &quot;Accept&quot;: &quot;application/json, text/javascript, */*; q=0.01&quot;,
    &quot;Accept-Encoding&quot;: &quot;gzip, deflate, br&quot;,
    &quot;Accept-Language&quot;: &quot;zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6&quot;,
    &quot;Connection&quot;: &quot;close&quot;,
    &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,
    &quot;User-Agent&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&quot;,
    &quot;Sec-Ch-Ua-Platform&quot;: &quot;Windows&quot;,
}

ftqq = &quot;xxxxxxxxxxxxxxxxxxx&quot;
key = &quot;xxxxxxxxxxxxxxxxxxx&quot;


def send_text(msg):
    # 通知到微信
    wd = urlencode({&quot;title&quot;: msg, &quot;desp&quot;: &quot;&quot;})
    try:
        # https://sct.ftqq.com/
        req = requests.get(
            f&quot;https://sctapi.ftqq.com/{ftqq}.send?{wd}&quot;,
            headers=headers,
        )
        logging.info(req.text)
        if req.json()[&quot;code&quot;] == 40001:
            logging.info(&quot;条数限制&quot;)
            raise ValueError(&quot;条数限制&quot;)
    except Exception:
        # 通知到企业微信
        url = f&quot;https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={key}&quot;
        data = {
            &quot;msgtype&quot;: &quot;text&quot;,
            &quot;text&quot;: {
                &quot;content&quot;: msg,
                &quot;mentioned_list&quot;: [],
            },
        }
        req = requests.post(url=url, json=data, headers=headers)
        logging.info(req.text)


def open_google():
    try:
        req = requests.get(
            &quot;https://www.google.com/&quot;, proxies=proxies, timeout=5, headers=headers
        )
        success, msg = True, &quot;访问成功&quot;
    except Exception:
        print(&quot;write2md不能访问谷歌&quot;)
        # print(traceback.format_exc())
        success, msg = False, &quot;write2md不能访问谷歌&quot;
        send_text(msg)
    return success, msg


if __name__ == &quot;__main__&quot;:
    open_google()
    # send_text(&quot;test&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function r(u,v){return i(),n("div",null,t)}const c=e(d,[["render",r],["__file","订阅说明.html.vue"]]);export{c as default};
