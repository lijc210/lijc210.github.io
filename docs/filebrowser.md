# filebrowser 镜像

docker pull filebrowser/filebrowser

## 启动容器并支持 ssh 登录

docker run -d -p 8080:80 -v $HOME/workspace/workconf/v2raya:/srv/filebrowser --name filebrowser filebrowser/filebrowser

## 推送到腾讯云容器镜像仓库

```shell

# 初始化个人版服务，密码 Sysz0210
docker login ccr.ccs.tencentyun.com --username=100008301194

# 查看本地镜像架构
docker inspect filebrowser/filebrowser | grep Architecture
# 如果不是amd64架构，则不能直接推送到腾讯云容器镜像仓库，需要需要拉取 amd64 架构的镜像

# 拉取 amd64 架构的镜像
docker pull --platform linux/amd64 filebrowser/filebrowser:latest

# 推送容器镜像
docker tag filebrowser/filebrowser:latest ccr.ccs.tencentyun.com/self-hub/filebrowser:latest
docker push ccr.ccs.tencentyun.com/self-hub/filebrowser:latest
```