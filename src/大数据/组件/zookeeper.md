---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 组件
tag:
  - zookeeper
---

# zookeeper

## zookeeper删除数据


./zkCli.sh
ls /clickhouse/tables/01-03/abs_activity_item_info_day_replica

deleteall /clickhouse/tables/01-01/abs_activity_item_info_day_replica
