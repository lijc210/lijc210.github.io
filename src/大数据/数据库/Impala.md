---
icon: edit
date: 2022-01-01
category:
  - 数据库
tag:
  - Impala
---

# Impala

## Impala时间戳分组
```
select   
from_unixtime(cast(siyu_add_time/1000 as int) , 'yyyy-MM-dd') as sdate,
count(1),
count(if(second_id is null,1,null))
from users 
-- 2023-06-14 00:00:00
where siyu_add_time > 1686672000000
group by from_unixtime(cast(siyu_add_time/1000 as int) , 'yyyy-MM-dd')
order by from_unixtime(cast(siyu_add_time/1000 as int) , 'yyyy-MM-dd') desc
```
