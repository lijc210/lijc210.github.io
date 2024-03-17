# coding: utf-8
"""
@File    :   main.py
@Time    :   2023/05/05 18:46:35
@Author  :   lijc210@163.com
@Desc    :   模拟rsshub订阅插件，将Tiny Tiny RSS订阅到此地址
依赖模块 pip install fastapi,feedparser,uvicorn,requests
订阅请求地址 http://localhost:8000/public.php?op=bookmarklets--subscribe&feed_url=https://rustcc.cn/rss
"""
import time
import traceback
import uvicorn
from datetime import datetime, timedelta
from typing import Union
from fastapi import FastAPI
from write2csv import write2csv

app = FastAPI()

order: str = time.strftime("%Y%m%d", time.localtime(time.time()))
date: str = time.strftime("%Y-%m-%d", time.localtime(time.time()))
tomorrow = (datetime.now() + timedelta(days=1)).strftime("%Y-%m-%d")


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/public.php")
def public(op: str, feed_url: str):
    try:
        # print(op)
        # print(feed_url)
        success, msg = write2csv(feed_url)
    except Exception:
        print(traceback.format_exc())
        success, msg = False, traceback.format_exc()
    return {"success": success, "msg": msg}


if __name__ == "__main__":
    uvicorn.run(app="ttrss:app", host="0.0.0.0", port=8000, reload=True)
