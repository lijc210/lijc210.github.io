---
icon: edit
date: 2022-01-01
category:
  - 语言
tag:
  - nodejs
---

# nodejs

## npm更换淘宝镜像源

* 默认源
```
npm config set registry https://registry.npmjs.org
```
* 设成淘宝的：
```
npm config set registry https://registry.npm.taobao.org
npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
```
* 换成原来的
```
npm config set registry https://registry.npmjs.org/
```
* 配置后通过以下方法验证是否成功:
```
npm config get registry
```