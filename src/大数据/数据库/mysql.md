---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 数据库
tag:
  - mysql
---

# mysql

## 查看和修改 MySQL 的最大连接数
默认是100

查看方法
```
show variables like '%max_connections%'
```

修改有两种方法:
1.修改my.cnf里的max_connections例如:
```
max_connections=500
```
2.进入到mysql后执行:
```
set GLOBAL max_connections=500
```

## 清除mysql-bin与减少ibdata的方法
进入myqsl命令行，执行下面命令清除mysql-bin.000050以前的bin日志
 purge master logs to 'mysql-bin.000050';


减少ibdata的方法如下


- 1. 用mysqldump等工具导出数据
- 2. 停止 mysqld
- 3. 删除ibdata*, ib_logfile* 文件
- 4. 重新启动 mysqld（这时mysqld就会自动创建 idbdata*, ib_logfile* 文件）
- 5. 将到出来的数据导回去，体积才会减小。

## mysql 查看表大小
```
SELECT TABLE_NAME,DATA_LENGTH,INDEX_LENGTH,(DATA_LENGTH+INDEX_LENGTH) as length,TABLE_ROWS,
concat(round((DATA_LENGTH+INDEX_LENGTH)/1024/1024,3), 'MB') as
total_size FROM information_schema.TABLES order by length desc
```

## mysql按比例缩小
```
SELECT ceil(LOG(SQRT(2),50000)*10) -- 313
SELECT ceil(LOG(SQRT(2),5000)*10) -- 246
SELECT ceil(LOG(SQRT(2),500)*10) -- 180
```