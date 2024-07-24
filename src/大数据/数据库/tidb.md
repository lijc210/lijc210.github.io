---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 数据库
tag:
  - tidb
---

# tidb

## 查看表大小
```
SELECT TABLE_NAME,TABLE_ROWS FROM information_schema.TABLES
    where TABLE_SCHEMA  = 'rt'
    order by TABLE_ROWS desc
```

## 限制tidb内存使用
```
show config where name like '%cache%' and name like '%block%' and name like '%capacity%'
set config tikv `storage.block-cache.capacity`='10240MiB'
```