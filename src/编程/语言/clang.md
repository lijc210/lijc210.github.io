---
icon: edit
date: 2022-01-01
category:
  - 语言
tag:
  - clang
---

# clang

## C 语言教程：
http://www.runoob.com/cprogramming/c-tutorial.html

## C++ 教程：
http://www.runoob.com/cplusplus/cpp-tutorial.html


## cmake编译命令
```
cd build
cmake ..
make
make install
```

## 编译rocksdb代码
linux:
```
g++ -std=c++11 -o rocksdbtest2 rocksdbtest.cpp -I /root/rocksdb-master/include/rocksdb/ -L /root/rocksdb-master/ -lrocksdb -ldl
```
windows:
```
g++ -std=c++11 -o rocksdb.exe src/rocksdb_example/main.cpp src/rocksdb_example/rocksdb_eg.cpp src/rocksdb_example/rocksdb_eg.h -I include -L lib/rocksdb -lrocksdb

g++ -std=c++11 -o rocksdb.exe src/rocksdb_example/main.cpp src/rocksdb_example/rocksdb_eg.cpp src/rocksdb_example/rocksdb_eg.h -I include -L lib -lrocksdb
```

## 编译llibcurl代码
动态链接库
linux（libcurl.so已加入到系统）:
```
g++ -std=c++11 -o curl.exe src/libcurl_example/main.cpp src/libcurl_example/libcurl_eg.cpp src/libcurl_example/libcurl_eg.h -I include -lcurl
```
windows:
```
g++ -std=c++11 -o curl.exe src/libcurl_example/main.cpp src/libcurl_example/libcurl_eg.cpp src/libcurl_example/libcurl_eg.h -I include -L lib/curl -llibcurl
```
静态链接库
```
g++ -std=c++11 -o curl.exe src/libcurl_example/main.cpp src/libcurl_example/libcurl_eg.cpp src/libcurl_example/libcurl_eg.h -I include -L lib/curl -lcurl -lwldap32 -lws2_32 -DCURL_STATICLIB
```

## gcc/g++编译工具生成动态库和静态库

动态库生成
```
gcc -fPIC -shared xxx1.c xxx2.c xxx3.c -o libxxx.so
```
静态库生成
```
gcc xxx1.c xxx2.c xxx3.c
ar -rc libxxx.a xxx1.o xxx2.o xxx3.o
```
动态库生成（linux）
```
g++ one.cpp two.cpp three.cpp -fPIC -shared -o libtest.so
```
动态库生成（windows）
```
gcc -fPIC -shared demo.cpp -o libDemo.dll
```

静态库生成
```
g++ -c add.cpp
ar -crv libadd.a add.o
```

## 查看动态库有哪些函数
```
readelf --dyn-syms py_test.so
```