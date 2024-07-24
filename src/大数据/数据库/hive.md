---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 数据库
tag:
  - hive
---

# hive

## hive 写入分区
```
insert overwrite table dws_jd_erp_purchase_transfer partition(dt)
select * from
data_kezhi.dws_jd_erp_purchase_transfer
where dt = '${bizdate}'
```

## hive导数据到csv
```
insert overwrite local directory '/home/hadoop/lijicong/test' row format delimited fields terminated by ',' select * from dw.ol_api_consume_channel_fact where month_num = 201902;
```

## hive新增字段

```
alter table dw.ods_aabb_v9_design add columns(status int);


alter table detail_flow_test add columns(original_union_id string);


alter table dw. ods_aabb_v9_mp_account add columns(is_quality int);


alter table dw.ods_traf_already_recommended add columns(version string);


alter table dw.ods_aabb_v9_picture_page add columns(recommend int);
```

## hive优化
* 1、小表放前面，使用map join
* 2、避免数据倾斜
* 3、合理设置map、reduce数
* 4、优化sql写法减少job数
* 5、尽量不对字段进行函数计算