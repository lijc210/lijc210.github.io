---
icon: edit
date: 2022-01-01
category:
  - 组件
tag:
  - kafka
---

# kafka

## kafka connet  sql server从指定位置修
### 发送一条数据到connect-offsets
```
key：
["sqlserver-cdc-source-AIS20201114225525",{"server":"AIS20201114225525"}]
value：
{"transaction_id":null,"event_serial_no":2,"commit_lsn":"000F9F22:00001660:0003","change_lsn":"000F9F22:00001220:0003"}
```

### 重启相关connector无用，要重启指定任务
* /connectors/sqlserver-cdc-source-AIS20201114225525/tasks
* /connectors/sqlserver-cdc-source-AIS20201114225525/tasks/0/restart


## kafka常用命令

1、启动kafka服务

```
bin/kafka-server-start.sh config/server.properties &
```

2、停止kafka服务

```
./kafka-server-stop.sh 
```

3、查看所有的话题

```
./kafka-topics.sh --list --zookeeper localhost:9092
```

4、查看所有话题的详细信息

```
./kafka-topics.sh --zookeeper localhost:2181 --describe
```

5、列出指定话题的详细信息

```
./kafka-topics.sh --zookeeper localhost:2181 --describe  --topic demo
```

6、删除一个话题

```
./kafka-topics.sh --zookeeper localhost:2181 --delete  --topic test
```

7、创建一个叫test的话题，有两个分区，每个分区3个副本

```
./kafka-topics.sh --zookeeper localhost:2181 --create --topic test --replication-factor 3 --partitions 2
```

 8、测试kafka发送和接收消息（启动两个终端）

```
#发送消息（注意端口号为配置文件里面的端口号）
./kafka-console-producer.sh --broker-list localhost:9092 --topic test
#消费消息（可能端口号与配置文件保持一致，或与发送端口保持一致）
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning   #加了--from-beginning 重头消费所有的消息./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test         #不加--from-beginning 从最新的一条消息开始消费
```

9、查看某个topic对应的消息数量

```
./kafka-run-class.sh  kafka.tools.GetOffsetShell --broker-list localhost:9092 --topic test --time -1
```

10、显示所有消费者

```
./kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list
```

11、获取正在消费的topic（console-consumer-63307）的group的offset

```
./kafka-consumer-groups.sh --describe --group console-consumer-63307 --bootstrap-server localhost:9092
```

11、显示消费者

```
./kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list
```

