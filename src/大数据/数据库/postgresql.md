---
icon: edit
date: 2022-01-01
category:
  - 数据库
tag:
  - postgresql
---

# postgresql

## 关联更新
```
UPDATE (要更新的表) table1 t1 
SET 字段1 = t2.字段1, 字段2 = t2.字段2, 
FROM (数据来源表) table2 t2 
WHERE t1.key = t2.key
```
## 列出某个表的所有字段和描述

```
select * from information_schema.columns
where table_schema='public' and table_name='tmp_ol_api_buloding_info';
```

## 将public下所有表开放所有权限给某用户
```
GRANT ALL PRIVILEGES ON all tables in schema public TO flink;
```