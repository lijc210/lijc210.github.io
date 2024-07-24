---
icon: fa-solid fa-book-open-reader
date: 2024-04-02
category:
  - 工具
tag:
  - nc端口测试
---
# nc端口测试

nc (netcat) 是 Linux/Unix 下的一个网络工具，它可以用来测试和调试网络连接和端口。

## 安装

```bash
ubuntu: 
sudo apt-get install netcat
mac: 
brew install nc
```

## 测试 tcp

```bash
# 监听 12345 端口
nc -l 12345

# 连接到目标主机的 12345 端口
nc -vz 127.0.0.1 12345

显示 succeeded!, 表示连接成功。
```


## 测试 udp

```bash
# 监听 12345 端口
nc -lu 12345

# 连接到目标主机的 12345 端口
nc -vu 127.0.0.1 12345

如果立即结束，表示连接不成功，如果没有立即结束，不代表一定成功，可能有防火墙阻挡，需要在目标端使用tcpdump进行判断

```