---
icon: edit
date: 2022-01-01
category:
  - 组件
tag:
  - hadoop
---

# hadoop

## 常用命令
```
hadoop fs -ls /
hadoop fs -ls /user
hadoop fs -ls /kn1

hadoop fs -ls /user/lijicong/warehouse/kn1/kn1_tf_pictures_cut_title_dt

-- 查看数据库所在路径
describe database database_name;
--获取table的真实hdfs路径
desc formatted my_table;
--获取partition的真实hdfs路径
desc formatted my_table(pt='20140804');

Hive查看表所有分区
show partitions t_test_order;



hadoop查找文件
hadoop fs -lsr  / | grep foods



hdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018

hdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018

hdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018/001



alter table test.ods_traf_toutiao_search drop if exists partition (dt='20161018');
alter table test.ods_traf_toutiao_search add partition (dt='20161018') location '/ods/ods_traf_toutiao_search/dt=20161018';
```

## hdfs 清理28天前数据
```
#! /bin/bash
tt=`date -d "28 day ago" +%Y-%m-%d`
tt1=`date -d $tt +%s`
hdfs dfs -ls /flink/checkpoints/ | while read line
do
    echo $line
    file_dt=`echo $line| awk '{print $6}'`
    #echo $file_dt
    file=`echo $line | awk '{print $NF}'`
    #echo $file
    # 将日期转换成数字
    file_dt_num=$(date -d ${file_dt} +%s)
    #echo $file_dt_num
    # 删除28天之前的数据
    if [ $file_dt_num -le $tt1 ];then
        echo $file" was deleted"
        hdfs dfs -rm -r -skipTrash $file
    fi
done
```

## yarn参数
```
-c,--class <classname> 如果没有在jar包中指定入口类，则需要在这里通过这个参数指定
-m,--jobmanager <host:port> 指定需要连接的jobmanager(主节点)地址，使用这个参数可以指定一个不同于配置文件中的jobmanager
-p,--parallelism <parallelism> 指定程序的并行度。可以覆盖配置文件中的默认值
-yn taskmanager个数
-yjm  jobmanager内存大小
-ytm  taskmanager内存大小
-ys    一个taskmanager的slot个数
```
