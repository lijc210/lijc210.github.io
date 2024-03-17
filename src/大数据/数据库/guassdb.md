---
icon: edit
date: 2022-01-01
category:
  - 数据库
tag:
  - guassdb
---

# guassdb

## 优化

* 1、删除表dim_shop_sales_target在字段target_date上的索引（注：列存表非必要无需创建索引，如创建，可选用btree索引，不要创建默认的psort索引，贵司当前列存表上，基本都是psort索引）
* 2、dim_jd_erp_shop表，建议修改为复制表（数据总量较小的维度表，建议调整为复制表）

```
在各DN的数据分布倾斜
select table_skewness('ads_sales_shop_notdis');

```


## 自动更新时间

```
CREATE TABLE public.ads_order_city_rank (
pkey varchar(50) NOT NULL,
sdate date NOT NULL,
shop_code_inner varchar(255) NOT NULL,
shop_name varchar(200) NULL DEFAULT NULL::character varying,
city varchar(200) NULL DEFAULT NULL::character varying,
city_rank int4 NOT NULL,
city_rank_last float8 NOT NULL,
city_rank_first float8 NOT NULL,
avg_city_sales float8 NOT NULL,
distance_avg_sales float8 NOT NULL,
divided_avg_sales float8 NOT NULL,
city_rank_max int4 NOT NULL,
distance_max_sales float8 NOT NULL,
divided_max_sales float8 NOT NULL,
create_time timestamp NULL DEFAULT now()::timestamp without time zone,
update_time timestamp DEFAULT current_timestamp ON UPDATE current_timestamp,
CONSTRAINT ads_order_city_rank_pkey PRIMARY KEY (pkey)
)
WITH (
orientation=row,
compression=no
);
CREATE INDEX idx_shop_code_inner ON ads_order_city_rank USING btree (shop_code_inner) TABLESPACE pg_default;
```

## 常用命令

CREATE TABLE T2 
( 
    id   int not null default nextval('seq1'),
    name text
);


CREATE SEQUENCE seq1 cache 100;



查看分布式列的分布
select * from table_skewness('public.ads_order_item_sales','shop_code_inner');


修改分布式列
ALTER TABLE public.ads_order_item_sales DISTRIBUTE BY HASH(shop_code_inner); 


查看分布式列
select pg_get_tabledef('ads_order_sales_dws_row')


查看数据倾斜
 SELECT a.count,b.node_name FROM (SELECT count(*) AS count,xc_node_id FROM ads_order_item_sales GROUP BY xc_node_id) a, pgxc_node b
WHERE a.xc_node_id=b.node_id ORDER BY a.count desc;

查看数据倾斜
SELECT schemaname,tablename,pg_size_pretty(totalsize),skewratio FROM PGXC_GET_TABLE_SKEWNESS WHERE SKEWRATIO > 0.05 ORDER BY TOTALSIZE DESC;

查看最耗时的10个sql
SELECT * FROM pgxc_wlm_session_info
where start_time >= '2023-03-26 00:00:00'
and query not like 'delete%'
and query not like 'select count%'
and query not like 'CREATE%'
order by duration desc limit 10;

-- 查询指定表占用的磁盘存储空间
select pg_size_pretty(pg_relation_size('public.ads_order_sales'));  -- 99 GB
-- 查询表的脏页率信息
select dirty_page_rate from PGXC_GET_STAT_ALL_TABLES where relname = 'ads_order_sales';  -- 64.68
select * from PGXC_GET_STAT_ALL_TABLES where dirty_page_rate>30;


## Clickhouse bitmap用法

bitmap主要用于快速去重计算，集合计算，节约空间与时间，典型场景是根据标签来进行用户的圈选。



简单示例：

假如有一张用户标签表
```
CREATE TABLE tmp.users_table_replica ON CLUSTER ck_cluster1
(
uid UInt64,
tag1 String,
tag2 String
)
ENGINE = ReplicatedMergeTree
ORDER BY uid;
```

分布式表
```
CREATE TABLE tmp.users_table
ON CLUSTER ck_cluster1
AS tmp.users_table_replica
ENGINE = Distributed(ck_cluster1, tmp, users_table_replica, rand())
```
 

写入测试数据
```
insert into tmp.users_table (uid, tag1, tag2) VALUES
(1, '男','北京'),
(2, '女','天津'),
(3, '男','上海'),
(4, '女','北京')
```
 
如果大数据量的情况下，clickhouse按任意条件做去重查询效率不高，可使用bitmap

```
CREATE TABLE tmp.users_table_bitmap_replica ON CLUSTER ck_cluster1

(
tag_id String,
users AggregateFunction(groupBitmap, UInt64)
)
ENGINE = ReplicatedMergeTree
ORDER BY tag_id;
```

分布式表
```
CREATE TABLE tmp.users_table_bitmap
ON CLUSTER ck_cluster1
AS tmp.users_table_bitmap_replica
ENGINE = Distributed(ck_cluster1, tmp, users_table_bitmap_replica, rand())
```
 
写入数据
```
insert into tmp.users_table_bitmap select tag1,groupBitmapState(uid) from tmp.users_table group by tag1;
insert into tmp.users_table_bitmap select tag2,groupBitmapState(uid) from tmp.users_table group by tag2;
```

查询性别是男的所有用户（只返回uid，需要明细数据还得再关联）
```
SELECT bitmapToArray(users) FROM tmp.users_table_bitmap WHERE tag_id = '男';
```
展开成行
```
SELECT arrayJoin(bitmapToArray(users)) FROM tmp.users_table_bitmap WHERE tag_id = '男';
```
查询性别是男的用户数
```
select bitmapCardinality(users) FROM tmp.users_table_bitmap WHERE tag_id = '男';
```
 
以上示例还可以如此建表（如果标签是年龄或者是日期，需要做大于小于等计算，则必须如此建表）
```
CREATE TABLE tmp.users_table_bitmap_replica1 ON CLUSTER ck_cluster1
(
tag1 String,
tag2 String,
users AggregateFunction(groupBitmap, UInt64)
)
ENGINE = ReplicatedMergeTree
ORDER BY (tag1,tag2);
```
分布式表
```
CREATE TABLE tmp.users_table_bitmap1
ON CLUSTER ck_cluster1
AS tmp.users_table_bitmap_replica1
ENGINE = Distributed(ck_cluster1, tmp, users_table_bitmap_replica1, rand())
```
 

 写入
```
insert into tmp.users_table_bitmap1 select tag1,tag2,groupBitmapState(uid) from tmp.users_table group by tag1,tag2;
```
查询性别是男的所有用户
```
SELECT tag1,bitmapToArray(users) FROM tmp.users_table_bitmap1 WHERE tag1 = '男';
```
 展开成行
```
SELECT tag1,arrayJoin(bitmapToArray(users)) FROM tmp.users_table_bitmap1 WHERE tag1 = '男';
```
查询性别是男的用户数（会返回多条数据）
```
select tag1,tag2,bitmapCardinality(users) FROM tmp.users_table_bitmap1 WHERE tag1 = '男';
```
 查询性别是男的总用户数
```
SELECT countDistinct(arrayJoin(bitmapToArray(users))) AS merged_users_count FROM tmp.users_table_bitmap1 WHERE tag1 = '男'
```


如有多张bitmap表可以进行交并计算（要比普通的用户表进行JOIN或者IN计算要高效很多）
clickhouse同样提供了一系列函数来进行bitmap之间的集合运算，包括并集、交集、差集、补集等。
具体使用可查阅官方文档：bitmap函数https://clickhouse.com/docs/zh/sql-reference/functions/bitmap-functions/

arrayJoin                宽表转Bitmap表需要行转列，要用arrayJoin把多列数组炸成行。
bitmapAnd             求两个Bitmap值的交集
bitmapOr                求两个Bitmap值的并集
bitmapXor              求两个Bitmap值的差集(异或)
bitmapToArray      把Bitmap转换成数值数组
bitmapToArray      把Bitmap转换成数值数组
bitmapCardinality 返回一个bitmap数据的个数
 

### bitmap性能测试:
-- 创建分布式表
```
CREATE TABLE tmp.member_order_bitmap_replica ON CLUSTER ck_cluster1
(
sdate String,
store_shop_code String,
users AggregateFunction(groupBitmap, UInt64)
)
ENGINE = ReplicatedMergeTree
ORDER BY (sdate, store_shop_code);
```

-- 创建分布式表
```
CREATE TABLE tmp.member_order_bitmap ON CLUSTER ck_cluster1
AS tmp.member_order_bitmap_replica
ENGINE = Distributed(ck_cluster1, tmp, member_order_bitmap_replica, rand());
```
-- 插入 6800 万数据（耗时十秒）
```
INSERT INTO tmp.member_order_bitmap
SELECT
sdate,
store_shop_code,
groupBitmapState(toUInt64(coalesce(user_id, 0))) AS bitmap_result
FROM
bas.abs_member_order_lastyear
WHERE
store_shop_code IS NOT NULL
-- and sdate >= '2023-10-15'
GROUP BY
sdate,
store_shop_code;
```

-- 最近一年明细数据量为 3400 万条
-- 查询最近一年用户明细（耗时442毫秒）
```
SELECT sdate, bitmapToArray(users) FROM tmp.member_order_bitmap
WHERE sdate BETWEEN '2022-11-17' AND '2023-11-17';
```

-- 查询最近一年用户明细（展开成行，耗时382毫秒）
```
SELECT sdate, arrayJoin(bitmapToArray(users)) FROM tmp.member_order_bitmap
WHERE sdate BETWEEN '2022-11-17' AND '2023-11-17';
```

-- 按日期、门店分组查询最近一年用户数（耗时285毫秒）
```
SELECT sdate, store_shop_code, bitmapCardinality(users) FROM tmp.member_order_bitmap
WHERE sdate BETWEEN '2022-11-17' AND '2023-11-17';
```

-- 按日期分组查询最近一年用户数（耗时1.3秒）
```
SELECT sdate, countDistinct(arrayJoin(bitmapToArray(users))) AS merged_users_count
FROM tmp.member_order_bitmap
WHERE sdate BETWEEN '2022-11-17' AND '2023-11-17'
GROUP BY sdate;
```
或者（建议用这个，性能更快）
```
SELECT sdate, bitmapCardinality(groupBitmapMergeState(users)) AS merged_users_count

FROM tmp.member_order_bitmap

WHERE sdate BETWEEN '2022-11-17' AND '2023-11-17'

GROUP BY sdate;
```
-- 查询最近一年总用户数（耗时2秒）
```
SELECT countDistinct(arrayJoin(bitmapToArray(users))) AS merged_users_count
FROM tmp.member_order_bitmap
WHERE sdate BETWEEN '2022-11-17' AND '2023-11-17';
```
或者（性能略微快一点）
```
select bitmapCardinality(groupBitmapOrState(users)) from(
select users from tmp.member_order_bitmap where sdate BETWEEN '2022-11-17' AND '2023-11-17'
)
```
或者（性能快一倍多）
```
select bitmapCardinality(groupBitmapMergeState(users))
from tmp.member_order_bitmap where sdate BETWEEN '2022-11-17' AND '2023-11-17';
```
--查询2022-11-15和2022-11-16连续两天消费的用户数（交集），将bitmapToArray改为bitmapCardinality即返回用户数
```
SELECT
bitmapToArray(bitmapAnd(r1.users_bitmap, r2.users_bitmap)) AS res
FROM
(
SELECT groupBitmapMergeState(users) AS users_bitmap
FROM tmp.member_order_bitmap
WHERE sdate = '2023-11-15'
) AS r1,
(
SELECT groupBitmapMergeState(users) AS users_bitmap
FROM tmp.member_order_bitmap
WHERE sdate = '2023-11-16'
) AS r2;
```
 




 
