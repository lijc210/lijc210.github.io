---
order: -1
icon: read
date: 2023-06-15
# timeline: false
category:
- 每日悦读
# tag:
#   - 红
#   - 大
#   - 圆
---
# 订阅说明

## 实现原理
使用ttrss.py启动订阅服务接口，使用rsshub订阅插件，将Tiny Tiny RSS地址改为订阅接口地址，即可直接订阅网站，存入rss.csv。

定时执行write2csv.py<span></span>，抓取网络上的订阅地址，存入rss.csv。

定时执行write2md.py<span></span>，读取rss.csv，获取今日新增文章，写入md文档，提交git，自动显示在每日悦读。

参考代码：
https://github.com/lijc210/lijc210.github.io/blob/main/write2md.py