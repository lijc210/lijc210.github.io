# Artalk 评论系统 docker 部署

docker pull artalk/artalk-go:latest

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
    -e ATK_TRUSRED_DOMAINS=https://blog.cizai.io,http://127.0.0.1:8080,http://localhost:8080 \
    -e ATK_EMAIL_ENABLE=true \
    -e ATK_EMAIL_SMTP_HOST=smtp.exmail.qq.com \
    -e ATK_EMAIL_SMTP_PORT=465 \
    -e ATK_EMAIL_SMTP_USERNAME=admin@cizai.io \
    -e ATK_EMAIL_SMTP_PASSWORD=feJStiU58iU58K7z \
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

# 查看本地镜像架构
docker inspect artalk/artalk-go | grep Architecture
# 如果不是amd64架构，则不能直接推送到腾讯云容器镜像仓库，需要需要拉取 amd64 架构的镜像

# 拉取 amd64 架构的镜像
docker pull --platform linux/amd64 artalk/artalk-go:latest

# 推送容器镜像
docker tag artalk/artalk-go:latest ccr.ccs.tencentyun.com/self-hub/artalk:latest
docker push ccr.ccs.tencentyun.com/self-hub/artalk:latest
```