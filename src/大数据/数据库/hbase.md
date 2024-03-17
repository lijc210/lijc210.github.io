---
icon: edit
date: 2022-01-01
category:
  - 数据库
tag:
  - hbase
---

# hbase

## HBase 常用Shell命令

| hbase shell命令 | 描述                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| alter           | 修改列族（column family）模式                                          |
| count           | 统计表中行的数量                                                       |
| create          | 创建表                                                                 |
| describe        | 显示表相关的详细信息                                                   |
| delete          | 删除指定对象的值（可以为表，行，列对应的值，另外也可以指定时间戳的值） |
| deleteall       | 删除指定行的所有元素值                                                 |
| disable         | 使表无效                                                               |
| drop            | 删除表                                                                 |
| enable          | 使表有效                                                               |
| exists          | 测试表是否存在                                                         |
| exit            | 退出hbase shell                                                        |
| get             | 获取行或单元（cell）的值                                               |
| incr            | 增加指定表，行或列的值                                                 |
| list            | 列出hbase中存在的所有表                                                |
| put             | 向指向的表单元添加值                                                   |
| tools           | 列出hbase所支持的工具                                                  |
| scan            | 通过对表的扫描来获取对用的值                                           |
| status          | 返回hbase集群的状态信息                                                |
| shutdown        | 关闭hbase集群（与exit不同）                                            |
| truncate        | 重新创建指定表                                                         |
| version         | 返回hbase版本信息                                                      |



## hbase scan limit
```
scan 'user_info',{LIMIT=>5}
scan 'city_code_yzh',{LIMIT=>5}
scan 'user_base_info_new',{LIMIT=>5}
scan 'cookie_userid',{LIMIT=>5}

扫描一段时间内的
scan 'route:zto_route_cross_center_time_come',{TIMERANGE =>[1517958000000,1517961600000]}

scan 'basescan:zto_order_no_finish',{TIMERANGE =>[1518062463000,1518063003000]}


scan 'bls_organization:company_lock_order',{TIMERANGE =>[1556000243000,1556003843000]}


scan 'crm_job' 
```

## hbase建表

```
create 'user_mobile_userid_tmp','info'

删除某条记录
deleteall 'ods_decoration_build_ana_new','xxxxxx'
清空表
truncate  'kn1_ana_tg_sign_up_new'
truncate  'user_base_info_new'
truncate  'userid_cookie'
truncate  'cookie_userid'
truncate  'simresult:total'
truncate  'recresult:total'

列出所有命名空间
list_namespace
新建命名空间
create_namespace 'ns1'
删除命名空间
drop_namespace 'ns1'
修改命名空间
alter_namespace 'ns', {METHOD => 'set', 'PROPERTY_NAME' => 'PROPERTY_VALUE'}
新建表
create 'recresult:quality_v9_special', 'info'
create 'recresult:total', 'info'
删除表
drop 'features:top_ite'
create_namespace 'attrresult'
create 'attrresult:tagsresult', 'info'
drop_namespace 'hotresult'
create 'features:user', 'info'

type_list = [("/user/hadoop/rec/simresult/quality_v9_news/", "simresult:quality_v9_news"),
("/user/hadoop/rec/simresult/quality_v9_video/", "simresult:quality_v9_video"),
("/user/hadoop/rec/simresult/quality_note_new/", "simresult:quality_note_new"),
("/user/hadoop/rec/simresult/quality_design_case/", "simresult:quality_design_case"),
("/user/hadoop/rec/simresult/quality_question/", "simresult:quality_question"),
("/user/hadoop/rec/simresult/quality_v9_design/", "simresult:quality_v9_design"),
("/user/hadoop/rec/simresult/quality_v9_special/", "simresult:quality_v9_special")]

create 'simresult:quality_note_new', 'info'
create 'simresult:quality_question', 'info'
create 'simresult:quality_v9_design', 'info'
create 'simresult:quality_v9_special', 'info'
create 'simresult:quality_v9_news', 'info'
create 'simresult:quality_v9_video', 'info'

create 'features:item', 'info'

create_namespace 'recresult'
create_namespace 'simresult'

create 'features_data','info'


create 'simresult:total', 'info'


create 'attrresult:qltyresult', 'info'
```

## hbase启动命令

https://blog.csdn.net/kelonsen/article/details/78477152
```
cd /opt/cloudera/parcels/CDH-5.11.1-1.cdh5.11.1.p0.4/lib/hbase/bin/
./hbase-daemon.sh start thrift2 --infoport 9096 -p 9091

cd /opt/cloudera/parcels/CDH-5.12.1-1.cdh5.12.1.p0.3/lib/hbase/bin/
./hbase-daemon.sh start thrift2 --infoport 9096 -p 9091

hbase-daemon.sh start thrift2 --infoport 9096 -p 9091
```