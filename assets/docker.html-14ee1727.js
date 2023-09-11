import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as t,a as i,b as e,d,e as n}from"./app-34dde8b3.js";const c={},u=n(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><h2 id="docker-安装与启动" tabindex="-1"><a class="header-anchor" href="#docker-安装与启动" aria-hidden="true">#</a> docker 安装与启动</h2><p>Windows WSL2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo service docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>macbook</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install --cask docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker常用命令" tabindex="-1"><a class="header-anchor" href="#docker常用命令" aria-hidden="true">#</a> docker常用命令</h2><p>先上图：</p><figure><img src="https://ask.qcloudimg.com/http-save/yehe-7565276/6lldlbgfhn.png?imageView2/2/w/1200" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="dcoker基本概念" tabindex="-1"><a class="header-anchor" href="#dcoker基本概念" aria-hidden="true">#</a> Dcoker基本概念</h2>`,10),o={href:"https://cloud.tencent.com/product/tke?from=20065&from_column=20065",target:"_blank",rel:"noopener noreferrer"},v=i("code",null,"Image",-1),m={href:"https://cloud.tencent.com/product/tke?from=20065&from_column=20065",target:"_blank",rel:"noopener noreferrer"},h=n("<li>容器（<code>Container</code>）：镜像（<code>Image</code>）和容器（<code>Container</code>）的关系，就像是面向对象程序设计中的 <code>类</code> 和 <code>实例</code> 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</li><li>仓库（<code>Repository</code>）：仓库（<code>Repository</code>）类似Git的远程仓库，集中存放镜像文件。</li>",2),p=n(`<p>三者关系可以用下图表示：</p><figure><img src="https://ask.qcloudimg.com/http-save/yehe-7565276/joa65awgh4.png?imageView2/2/w/1200" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来看一看Docker的常用命令。</p><h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h2><ul><li>查看Docker版本信息</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看docker简要信息</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动Docker</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭docker</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置开机启动</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重启docker服务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service docker restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭docker服务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service docker stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h2><h2 id="镜像仓库" tabindex="-1"><a class="header-anchor" href="#镜像仓库" aria-hidden="true">#</a> 镜像仓库</h2>`,20),b={href:"https://hub.docker.com/search?q=&type=image",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cloud.tencent.com/product/tcr?from=20065&from_column=20065",target:"_blank",rel:"noopener noreferrer"},x=n(`<ul><li>检索镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search 关键字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>检索指定镜像tag</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install jq
curl -s https://registry.hub.docker.com/v2/repositories/library/ubuntu/tags/ | jq &#39;.&quot;results&quot;[][&quot;name&quot;]&#39;
curl -s https://registry.hub.docker.com/v2/repositories/amancevice/superset/tags/ | jq &#39;.&quot;results&quot;[][&quot;name&quot;]&#39;
curl -s https://registry.hub.docker.com/v2/repositories/apache/superset/tags/ | jq &#39;.&quot;results&quot;[][&quot;name&quot;]&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>拉取镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理" aria-hidden="true">#</a> 镜像管理</h2><ul><li>列出镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker image ls
docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除指定镜像
docker rmi &lt;镜像Id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导出镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 将镜像保存为归档文件
docker save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker load
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dockerfile构建镜像" tabindex="-1"><a class="header-anchor" href="#dockerfile构建镜像" aria-hidden="true">#</a> Dockerfile构建镜像</h2><p>Dockerfile 是一个文本格式的配 文件，用户可以使用 Dockerfile 来快速创建自定义的镜像。</p><p>Dockerfile 由一行行行命令语句组成，并且支持以＃开头的注释行.</p><h3 id="dockerfile常见指令" tabindex="-1"><a class="header-anchor" href="#dockerfile常见指令" aria-hidden="true">#</a> Dockerfile常见指令</h3><p>下面是Dockerfile中一些常见的指令：</p><ul><li>FROM：指定基础镜像</li><li>RUN：执行命令</li><li>COPY：复制文件</li><li>ADD：更高级的复制文件</li><li>CMD：容器启动命令</li><li>ENV：设置环境变量</li><li>EXPOSE：暴露端口</li></ul><p>其它的指令还有ENTRYPOINT、ARG、VOLUME、WORKDIR、USER、HEALTHCHECK、ONBUILD、LABEL等等。</p><p>以下是一个Dockerfile实例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM java:8
MAINTAINER &quot;jinshw&quot;&lt;jinshw@qq.com&gt;
ADD mapcharts-0.0.1-SNAPSHOT.jar mapcharts.jar
EXPOSE 8080
CMD java -jar mapcharts.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像构建" tabindex="-1"><a class="header-anchor" href="#镜像构建" aria-hidden="true">#</a> 镜像构建</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="镜像运行" tabindex="-1"><a class="header-anchor" href="#镜像运行" aria-hidden="true">#</a> 镜像运行</h3><p>镜像运行，就是新建并运行一个容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run [镜像ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2><h2 id="容器生命周期" tabindex="-1"><a class="header-anchor" href="#容器生命周期" aria-hidden="true">#</a> 容器生命周期</h2><ul><li>启动：启动容器有两种方式，一种是基于镜像新建一个容器并启动，另外一个是将在终止状态（stopped）的容器重新启动。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 新建并启动
docker run [镜像名/镜像ID]
# 启动已终止容器
docker start [容器ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 列出本机运行的容器
$ docker ps 
# 列出本机所有的容器（包括停止和运行）
$ docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>停止容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 停止运行的容器
docker stop [容器ID]
# 杀死容器进程
docker  kill [容器ID] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart [容器ID] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker  rm [容器ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h2><p>进入容器有两种方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 如果从这个 stdin 中 exit，会导致容器的停止
docker attach [容器ID]
# 交互式进入容器
docker exec [容器ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器通常使用第二种方式，<code>docker exec</code>后面跟的常见参数如下：</p><ul><li>-d, --detach 在容器中后台执行命令；</li><li>-i, --interactive=true I false ：打开标准输入接受用户输入命令</li></ul><h2 id="导出和导入" tabindex="-1"><a class="header-anchor" href="#导出和导入" aria-hidden="true">#</a> 导出和导入</h2><ul><li>导出容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#导出一个已经创建的容器到一个文件
docker export [容器ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导出的容器快照文件可以再导入为镜像
docker import [路径]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><ul><li>查看日志</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导出的容器快照文件可以再导入为镜像
docker logs [容器ID]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令有以下常用参数 -f : 跟踪日志输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--since :显示某个开始时间的所有日志

-t : 显示时间戳

--tail :仅列出最新N条容器日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>复制文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 从主机复制到容器
sudo docker cp host_path containerID:container_path 
# 从容器复制到主机
sudo docker cp containerID:container_path host_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考：</strong></p>`,59),k={href:"https://cloud.tencent.com/developer/article/1772136",target:"_blank",rel:"noopener noreferrer"},f=i("br",null,null,-1),_=n(`<h2 id="build技巧" tabindex="-1"><a class="header-anchor" href="#build技巧" aria-hidden="true">#</a> build技巧</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>guoquan-apocalypse-app项目使用alpine  镜像804.3 MB 
加上--virtual .build-deps    RUN apk del .build-deps  加上后没有变化

guoquan-apocalypse-app项目使用slim
安装gcc libpq-dev（psycopg2） 镜像604.3MB
加上--no-install-recommends和rm -rf /var/lib/apt/lists/*  镜像574 MB

使用dockerignore排除.venv文件

所以alpine镜像安装一堆依赖后，可能比slim镜像大，所以在需要安装很多依赖的时候，推荐使用slim镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="portainer-安装" tabindex="-1"><a class="header-anchor" href="#portainer-安装" aria-hidden="true">#</a> portainer 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull portainer/portainer-ce
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /data/portainer:/data --restart=always --name portainer portainer/portainer-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -a
docker rm 705fd5bce67a
docker pull portainer/portainer-ce
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /data/portainer:/data --restart=always --name portainer portainer/portainer-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-安装" tabindex="-1"><a class="header-anchor" href="#mysql-安装" aria-hidden="true">#</a> mysql 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:latest
docker run -d -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function D(q,y){const a=r("ExternalLinkIcon");return s(),t("div",null,[u,i("p",null,[i("a",o,[e("Docker"),d(a)]),e(" 包括三个基本概念：")]),i("ul",null,[i("li",null,[e("镜像（"),v,e("）：Docker 镜像是一个特殊的文件系统，除了提供"),i("a",m,[e("容器"),d(a)]),e("运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),h]),p,i("p",null,[i("a",b,[e("Docker Hub"),d(a)]),e(" 等"),i("a",g,[e("镜像仓库"),d(a)]),e("上有大量的高质量的镜像可以用，可以从仓库获取镜像。")]),x,i("p",null,[e("【1】："),i("a",k,[e("一张脑图整理Docker常用命令"),f,d(a)])]),_])}const R=l(c,[["render",D],["__file","docker.html.vue"]]);export{R as default};
