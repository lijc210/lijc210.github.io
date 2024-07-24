---
icon: fa-solid fa-book-open-reader
date: 2024-04-02
category:
  - 工具
tag:
  - frp
---
# 反向代理应用frp

拥有公网IP的情况下，可以使用frp来实现内网机器的端口映射和访问。

## 安装

linux
```
wget https://github.com/fatedier/frp/releases/download/v0.57.0/frp_0.57.0_linux_amd64.tar.gz
tar -zxvf frp_0.57.0_linux_amd64.tar.gz
```
mac
```
wget https://github.com/fatedier/frp/releases/download/v0.57.0/frp_0.57.0_darwin_arm64.tar.gz
tar -zxvf frp_0.57.0_darwin_arm64.tar.gz
```

## 通过tcp访问内网机器端口

```shell
公网服务器上编辑frps.toml
bindPort = 7000

内网服务器上编辑frpc.toml
serverAddr = "x.x.x.x" # 公网服务器的 IP 地址
serverPort = 7000

[[proxies]]
name = "ssh"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 2222

[[proxies]]
name = "web"
type = "tcp"
localIP = "127.0.0.1"
localPort = 5500
remotePort = 5555

# localIP 和 localPort 配置为需要从公网访问的内网服务的地址和端口。
# remotePort 表示在 frp 服务端监听的端口，访问此端口的流量将被转发到本地服务的相应端口。

启动 frps 和 frpc
./frps -c frps.toml
./frpc -c frpc.toml

使用以下命令通过 SSH 访问内网机器，假设用户名为 test：
ssh -o Port=2222 test@x.x.x.x

使用以下命令通过 Web 服务访问内网机器，假设服务运行在 5555 端口：
curl http://x.x.x.x:5555

```

## 通过自定义域名访问内网的 Web 服务

```shell
公网服务器上编辑frps.toml
bindPort = 7000

内网服务器上编辑frpc.toml
serverAddr = "x.x.x.x" # 公网服务器的 IP 地址
serverPort = 7000

[[proxies]]
name = "web"
type = "http"
localIP = "127.0.0.1"
localPort = 80
customDomains = ["www.yourdomain.com"]

启动 frps 和 frpc
./frps -c frps.toml
./frpc -c frpc.toml

将 www.yourdomain.com的域名 A 记录解析到服务器的 IP 地址 x.x.x.x

访问 http://www.yourdomain.com 即可访问内网的 Web 服务
```

## 代理上网 （无法打开被强的网站）

```shell
公网服务器上编辑frps.toml
bindPort = 7000

内网服务器上编辑frpc.toml
serverAddr = "x.x.x.x" # 公网服务器的 IP 地址
server_port = 7000 

[[proxies]]
name = "plugin_http_proxy"
type = "tcp"
remotePort = 6004
[proxies.plugin]
type = "http_proxy"
httpUser = "abc"
httpPassword = "abc"

[[proxies]]
name = "plugin_socks5"
type = "tcp"
remotePort = 6005
[proxies.plugin]
type = "socks5"
username = "abc"
password = "abc"

启动 frps 和 frpc
./frps -c frps.toml
./frpc -c frpc.toml

# 设置代理
export http_proxy=http://abc:abc@x.x.x.x:6004
export https_proxy=$http_proxy
export all_proxy=socks5://abc:abc@x.x.x.x:6005
export no_proxy="localhost,127.0.0.1,x.x.x.x"

wget https://www.baidu.com 可以代理访问
wget https://www.google.com 无法打开被强的网站，因为没有伪装加密

```