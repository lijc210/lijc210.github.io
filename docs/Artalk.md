# Artalk 评论系统 docker 部署

## build docker 镜像（因官方镜像不支持传递端口参数，所以自己构建镜像）

git clone https://github.com/walinejs/waline.git

修改packages/server/Dockerfile文件，添加以下内容：
RUN echo "module.exports.port = 9000;" >> node_modules/@waline/vercel/src/config/config.js

docker build -t waline -f packages/server/Dockerfile .

# 腾讯云函数不支持arm架构，在mac环境下构建docker镜像

docker buildx build --platform linux/amd64 -t waline -f packages/server/Dockerfile .

## 运行docker容器，腾讯云函数必须要9000端口

以下不会自动创建用户，

docker run -d \
    --name artalk \
    -p 9000:9000 \
    -e ATK_PORT=9000 \
    -e ATK_DB_TYPE=mysql \
    -e ATK_DB_NAME=artalk \
    -e ATK_DB_HOST=gateway01.eu-central-1.prod.aws.tidbcloud.com \
    -e ATK_DB_PORT=4000 \
    -e ATK_DB_USER=JfwhE2DYnoXsami.root \
    -e ATK_DB_PASSWORD=OBHiPr9QeCxpVAA3 \
    -e ATK_DB_CHARSET=utf8mb4 \
    -e ATK_DB_TABLE_PREFIX=atk_ \
    -e ATK_DB_SSL=true \
    -e ATK_DB_PREPARE_STMT=true \
    -e ATK_SITE_NAME=此在笔记 \
    -e ATK_SITE_URL=https://blog.cizai.io \
    -e ATK_SITE_LANG=zh-CN \
    -e ARK_TRUSRED_DOMAINS=https://blog.cizai.io,http://127.0.0.1:8080 \
    -v $HOME/workspace/workconf/artalk:/data \
    --restart=always \
    artalk/artalk-go

命令行创建用户
docker exec -it artalk artalk admin

password: PJqKTAkytW

## 推送到腾讯云容器镜像仓库

```shell

# 初始化个人版服务，密码 Sysz0210
docker login ccr.ccs.tencentyun.com --username=100008301194

# 推送容器镜像
docker tag waline:latest ccr.ccs.tencentyun.com/self-hub/waline:latest
docker push ccr.ccs.tencentyun.com/self-hub/waline:latest
```