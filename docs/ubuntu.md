# Ubuntu 镜像 并支持 ssh 登录

docker build -t ubuntu-ssh -f Dockerfile-ubuntu-ssh .

## 腾讯云函数不支持arm架构，在mac环境下构建docker镜像

docker buildx build --platform linux/amd64 -t ubuntu-ssh -f Dockerfile-ubuntu-ssh .

## 启动容器并支持 ssh 登录

docker run -d -p 2222:22 --name ubuntu-ssh ubuntu-ssh

## 连接 ssh 客户端  

ssh -p 2222 root@localhost