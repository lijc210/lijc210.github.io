---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 工具
tag:
  - docker
---

# docker

## orbstack设置国内镜像加速
```
{
    "registry-mirrors": [
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com",
        "https://registry.hub.docker.com"
    ]
}
```

## portainer 重置密码
```
docker stop portainer
docker run --rm -v /data/docker_data/portainer_data:/data portainer/helper-reset-password
docker start portainer

其中/data/docker_data/portainer_data为本地挂载路径，执行完后会输出用户名和密码
```


## docker 安装与启动
Windows WSL2 
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo service docker start
```
macbook
```
brew install --cask docker
```
## docker常用命令
先上图：

![](https://ask.qcloudimg.com/http-save/yehe-7565276/6lldlbgfhn.png?imageView2/2/w/1200)

## Dcoker基本概念

[Docker](https://cloud.tencent.com/product/tke?from=20065&from_column=20065) 包括三个基本概念：

-   镜像（`Image`）：Docker 镜像是一个特殊的文件系统，除了提供[容器](https://cloud.tencent.com/product/tke?from=20065&from_column=20065)运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。
-   容器（`Container`）：镜像（`Image`）和容器（`Container`）的关系，就像是面向对象程序设计中的 `类` 和 `实例` 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。
-   仓库（`Repository`）：仓库（`Repository`）类似Git的远程仓库，集中存放镜像文件。

三者关系可以用下图表示：

![](https://ask.qcloudimg.com/http-save/yehe-7565276/joa65awgh4.png?imageView2/2/w/1200)

接下来看一看Docker的常用命令。

## 服务

-   查看Docker版本信息
```
docker version
```
-   查看docker简要信息
```
docker -v
```
-   启动Docker
```
systemctl start docker
```
-   关闭docker
```
systemctl stop docker
```
-   设置开机启动
```
systemctl enable docker
```
-   重启docker服务
```
service docker restart
```
-   关闭docker服务
```
service docker stop
```
## 镜像

## 镜像仓库

[Docker Hub](https://hub.docker.com/search?q=&type=image) 等[镜像仓库](https://cloud.tencent.com/product/tcr?from=20065&from_column=20065)上有大量的高质量的镜像可以用，可以从仓库获取镜像。

-   检索镜像
```
docker search 关键字
```

-   检索指定镜像tag
```
sudo apt-get install jq
curl -s https://registry.hub.docker.com/v2/repositories/library/ubuntu/tags/ | jq '."results"[]["name"]'
curl -s https://registry.hub.docker.com/v2/repositories/amancevice/superset/tags/ | jq '."results"[]["name"]'
curl -s https://registry.hub.docker.com/v2/repositories/apache/superset/tags/ | jq '."results"[]["name"]'
```
-   拉取镜像

```
docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
```

## 镜像管理

-   列出镜像

```
docker image ls
docker images
```

-   删除镜像

```
# 删除指定镜像
docker rmi <镜像Id>
```

-   导出镜像
```
# 将镜像保存为归档文件
docker save
```
-   导入镜像
```
docker load
```

## Dockerfile构建镜像

Dockerfile 是一个文本格式的配 文件，用户可以使用 Dockerfile 来快速创建自定义的镜像。

Dockerfile 由一行行行命令语句组成，并且支持以＃开头的注释行.

### Dockerfile常见指令

下面是Dockerfile中一些常见的指令：

-   FROM：指定基础镜像
-   RUN：执行命令
-   COPY：复制文件
-   ADD：更高级的复制文件
-   CMD：容器启动命令
-   ENV：设置环境变量
-   EXPOSE：暴露端口

其它的指令还有ENTRYPOINT、ARG、VOLUME、WORKDIR、USER、HEALTHCHECK、ONBUILD、LABEL等等。

以下是一个Dockerfile实例：

```
FROM java:8
MAINTAINER "jinshw"<jinshw@qq.com>
ADD mapcharts-0.0.1-SNAPSHOT.jar mapcharts.jar
EXPOSE 8080
CMD java -jar mapcharts.jar
```

### 镜像构建
```
docker build
```

### 镜像运行

镜像运行，就是新建并运行一个容器。
```
docker run [镜像ID]
```

## 容器

## 容器生命周期

-   启动：启动容器有两种方式，一种是基于镜像新建一个容器并启动，另外一个是将在终止状态（stopped）的容器重新启动。

```
# 新建并启动
docker run [镜像名/镜像ID]
# 启动已终止容器
docker start [容器ID]
```

-   查看容器

```
# 列出本机运行的容器
$ docker ps 
# 列出本机所有的容器（包括停止和运行）
$ docker ps -a
```

-   停止容器

```
# 停止运行的容器
docker stop [容器ID]
# 杀死容器进程
docker  kill [容器ID] 
```

-   重启容器
```
docker restart [容器ID] 
```
-   删除容器
```
docker  rm [容器ID]
```

## 进入容器

进入容器有两种方式：

```
# 如果从这个 stdin 中 exit，会导致容器的停止
docker attach [容器ID]
# 交互式进入容器
docker exec [容器ID]
```

进入容器通常使用第二种方式，`docker exec`后面跟的常见参数如下：

* -d, --detach 在容器中后台执行命令； 
* -i, --interactive=true I false ：打开标准输入接受用户输入命令

## 导出和导入

-   导出容器

```
#导出一个已经创建的容器到一个文件
docker export [容器ID]
```

-   导入容器

```
# 导出的容器快照文件可以再导入为镜像
docker import [路径]
```

## 其它

-   查看日志

```
# 导出的容器快照文件可以再导入为镜像
docker logs [容器ID]
```

这个命令有以下常用参数 -f : 跟踪日志输出

```
--since :显示某个开始时间的所有日志

-t : 显示时间戳

--tail :仅列出最新N条容器日志
```

-   复制文件

```
# 从主机复制到容器
sudo docker cp host_path containerID:container_path 
# 从容器复制到主机
sudo docker cp containerID:container_path host_path
```

**参考：**

【1】：[一张脑图整理Docker常用命令
](https://cloud.tencent.com/developer/article/1772136)


## build技巧
```
guoquan-apocalypse-app项目使用alpine  镜像804.3 MB 
加上--virtual .build-deps    RUN apk del .build-deps  加上后没有变化

guoquan-apocalypse-app项目使用slim
安装gcc libpq-dev（psycopg2） 镜像604.3MB
加上--no-install-recommends和rm -rf /var/lib/apt/lists/*  镜像574 MB

使用dockerignore排除.venv文件

所以alpine镜像安装一堆依赖后，可能比slim镜像大，所以在需要安装很多依赖的时候，推荐使用slim镜像
```