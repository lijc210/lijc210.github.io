# Artalk 评论系统 docker 部署

## build docker 镜像（因官方镜像不支持传递端口参数，所以自己构建镜像）

git clone https://github.com/walinejs/waline.git

修改packages/server/Dockerfile文件，添加以下内容：
RUN echo "module.exports.port = 9000;" >> node_modules/@waline/vercel/src/config/config.js

docker build -t waline -f packages/server/Dockerfile .

# 腾讯云函数不支持arm架构，在mac环境下构建docker镜像
docker buildx build --platform linux/amd64 -t waline -f packages/server/Dockerfile .

## 运行docker容器，腾讯云函数必须要9000端口

docker run -d \
    --name artalk \
    -p 8080:23366 \
    -v $HOME/workspace/workconf/artalk:/data \
    --restart=always \
    artalk/artalk-go

## 推送到腾讯云容器镜像仓库

```shell

# 初始化个人版服务，密码 Sysz0210
docker login ccr.ccs.tencentyun.com --username=100008301194

# 推送容器镜像
docker tag waline:latest ccr.ccs.tencentyun.com/self-hub/waline:latest
docker push ccr.ccs.tencentyun.com/self-hub/waline:latest
```