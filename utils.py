# coding: utf-8
"""
@File    :   utils.py
@Time    :   2023/06/16 17:37:32
@Author  :   lijc210@163.com
@Desc    :   None
"""
import logging
import socket
import ssl
from urllib.request import ProxyHandler

import requests

socket.setdefaulttimeout(30)
# 日志输出
fh = logging.FileHandler("rss.log", encoding="utf-8", mode="w")  # 用于输出到文件
hdr = logging.StreamHandler()  # 用于输出到控制台
logging.basicConfig(
    level=logging.INFO,  # 控制台打印的日志级别
    handlers=[fh, hdr],
    format="[%(asctime)s] %(levelname)s %(filename)s[%(lineno)d]: %(message)s"
    # 日志格式
)

# certificate verify failed 报错
if hasattr(ssl, "_create_unverified_context"):
    ssl._create_default_https_context = ssl._create_unverified_context


if socket.gethostname() == "SHBGDZ05373":
    http, https = "http://172.17.15.93:7890", "http://172.17.15.93:7890"
else:
    http, https = "http://127.0.0.1:7890", "http://127.0.0.1:7890"

proxies = {"http": http, "https": https}
proxy_handler = ProxyHandler(proxies)
headers = {
    # "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6",
    "Connection": "close",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Sec-Ch-Ua-Platform": "Windows",
}

key = "71433998-1bc6-44d6-9f1f-22d447f4fb80"  # 通知机器人


def send_text(msg):
    # 通知到企业微信
    url = f"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={key}"
    data = {
        "msgtype": "text",
        "text": {
            "content": msg,
            "mentioned_list": [],
        },
    }
    req = requests.post(url=url, json=data, headers=headers)
    logging.info(req.text)


def open_google():
    try:
        req = requests.get(
            "https://www.google.com/", proxies=proxies, timeout=5, headers=headers
        )
        success, msg = True, "访问成功"
    except Exception:
        print("write2md不能访问谷歌")
        # print(traceback.format_exc())
        success, msg = False, "write2md不能访问谷歌"
        send_text(msg)
    return success, msg


if __name__ == "__main__":
    open_google()
    # send_text("test")
