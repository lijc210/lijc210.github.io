---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 数据库
tag:
  - rocksdb
---

# rocksdb

## rocksdb编译安装
```
yum install gflags
yum install snappy snappy-devel
yum install zlib zlib-devel
yum install bzip2 bzip2-devel
yum install lz4-devel
yum install libasan


wget https://github.com/facebook/zstd/archive/v1.1.3.tar.gz
mv v1.1.3.tar.gz zstd-1.1.3.tar.gz
tar zxvf zstd-1.1.3.tar.gz
cd zstd-1.1.3
make && make install


// 1，解压rocksDB
tar -zxvf rocksdb-6.4.6.tar.gz
// 2 进入解压后的目录
cd rocksdb-6.4.6
/// 3，编译静态库，获得 librocksdb.a
make static_lib
// 4，编译动态库，获得 lbrocksdb.so
make shared_lib


// 1
cp librocksdb.so.6.4.6 /usr/local/lib
// 2
ln -s librocksdb.so.6.4.6 /usr/local/lib/librocksdb.so.6
// 3
ln -s librocksdb.so.6.4.6 /usr/local/lib/librocksdb.so

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib

我们最好在环境变量中添加:export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
```