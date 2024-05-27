# webdav 镜像

docker pull bytemark/webdav

## 启动容器并支持 ssh 登录

docker run -d -p 80:80 -v $HOME/workspace/workconf/webdav:/var/lib/dav -e AUTH_TYPE=Basic -e USERNAME=admin -e PASSWORD=E5YdHu9D3 --name webdav bytemark/webdav

## 推送到腾讯云容器镜像仓库

```shell

# 初始化个人版服务，密码 Sysz0210
docker login ccr.ccs.tencentyun.com --username=100008301194

# 查看本地镜像架构
docker inspect bytemark/webdav | grep Architecture
# 如果不是amd64架构，则不能直接推送到腾讯云容器镜像仓库，需要需要拉取 amd64 架构的镜像

# 拉取 amd64 架构的镜像
docker pull --platform linux/amd64 bytemark/webdav:latest

# 推送容器镜像
docker tag bytemark/webdav:latest ccr.ccs.tencentyun.com/self-hub/webdav:latest
docker push ccr.ccs.tencentyun.com/self-hub/webdav:latest
```