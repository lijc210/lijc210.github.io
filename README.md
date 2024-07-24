# lijc210.github.com

## vuepress-theme-hope

## Node版本

```bash
nvm install 20.11.1
nvm use v20.11.1
npm install pnpm@8.15.4 -g
pnpm -v 8.15.4
```

## 创建项目

```bash
pnpm create vuepress-theme-hope lijc210.github.io
```

## 启动命令

```bash
pnpm install
pnpm docs:dev # 启动开发服务器
pnpm docs:build # 构建项目并输出
pnpm docs:clean-dev # 清除缓存并启动开发服务器
```

## 升级主题和 VuePress 版本

```bash
pnpm dlx vp-update
```

## 安装插件

```bash
pnpm add -D @waline/client @vuepress/plugin-pwa @vuepress/plugin-pwa@next reveal.js @vuepress/plugin-feed @vuepress/plugin-shiki@next @vuepress/plugin-docsearch@next artalk
```

## Markdown 教程

[Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)

## VSCode中使用Markdown

安装Markdown Notes Pack插件

## theme-hope.vuejs.press

* [主题教程](https://theme-hope.vuejs.press/zh/cookbook/tutorial/)
* [Newzone](https://newzone.top/)

## 访问

* [Cizai](https://www.cizai.io)
* [GitHub Pages](https://lijc210.github.io)
* [Gitee Pages](https://lijc210.gitee.io)

## GitHub地址

[GitHub Repo](https://github.com/lijc210/lijc210.github.io.git)

## 问题

WSL Ubuntu环境下不能热加载Windows目录下的改动，需要把目录放到Ubuntu环境

## 图片画质增强

[Upscale Media](https://www.upscale.media/)

## 图片移除背景

[Remove BG](https://www.remove.bg/)

## SVG转PNG

[SVG to PNG](https://svgtopng.com/zh/)

## 每日悦读

```bash
cd ~/lijc210.github.io && nohup python3 ttrss.py >~/ttrss.log 2>&1 &
```

## 订阅地址

[订阅地址](http://124.222.129.36/public.php?op=bookmarklets--subscribe&feed_url=https://rustcc.cn/rss)

## 字体图标

[fontawesome](https://fontawesome.com)

## Artalk测试

将以下代码保存为 html 文件，然后进行调试

```html
<!-- CSS -->
<link href="http://127.0.0.1:9000/dist/Artalk.css" rel="stylesheet" />

<!-- JS -->
<script src="http://127.0.0.1:9000/dist/Artalk.js"></script>

<!-- Artalk -->
<div id="Comments"></div>
<script>
  Artalk.init({
    el: "#Comments", // 绑定元素的 Selector
    pageKey: "/post/1", // 固定链接 (留空自动获取)
    pageTitle: "关于引入 Artalk 的这档子事", // 页面标题 (留空自动获取)
    server: "http://127.0.0.1:9000", // 后端地址
    site: "Artalk 的博客", // 你的站点名
  });
</script>

```

## Artalk正式环境

将以下代码保存为 html 文件，然后进行调试

```html
<!-- CSS -->
<link href="https://artalk.cizai.net/dist/Artalk.css" rel="stylesheet" />

<!-- JS -->
<script src="https://artalk.cizai.net/dist/Artalk.js"></script>

<!-- Artalk -->
<div id="Comments"></div>
<script>
  Artalk.init({
    el: "#Comments", // 绑定元素的 Selector
    pageKey: "/post/1", // 固定链接 (留空自动获取)
    pageTitle: "关于引入 Artalk 的这档子事", // 页面标题 (留空自动获取)
    server: "https://artalk.cizai.net", // 后端地址
    site: "此在笔记", // 你的站点名
  });
</script>

```