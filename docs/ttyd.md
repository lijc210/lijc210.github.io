# ttyd 通过网络共享您的终端

docker pull tsl0922/ttyd:latest

## 运行docker容器，腾讯云函数必须要9000端口

docker run -d -p 7681:7681 --name ttyd tsl0922/ttyd:latest


docker run -d -p 7681:7681 --name ttyd tsl0922/ttyd:latest /usr/bin/tini -- ttyd -W -c a:b bash

## 推送到腾讯云容器镜像仓库

```shell

# 初始化个人版服务，密码 Sysz0210
docker login ccr.ccs.tencentyun.com --username=100008301194

# 查看本地镜像架构
docker inspect tsl0922/ttyd | grep Architecture
# 如果不是amd64架构，则不能直接推送到腾讯云容器镜像仓库，需要需要拉取 amd64 架构的镜像

# 拉取 amd64 架构的镜像
docker pull --platform linux/amd64 tsl0922/ttyd:latest

# 推送容器镜像
docker tag tsl0922/ttyd:latest ccr.ccs.tencentyun.com/self-hub/ttyd:latest
docker push ccr.ccs.tencentyun.com/self-hub/ttyd:latest
```


## 注意

腾讯云函数不支持同时监听 http 和 websocket，因此在腾讯云函数上不支持。

创建ubuntu 镜像，然后挂载 nfs，通过网页文件浏览管理