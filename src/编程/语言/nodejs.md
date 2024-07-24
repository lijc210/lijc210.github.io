---
icon: edit
date: 2022-01-01
category:
  - 语言
tag:
  - nodejs
---

# nodejs

## npm 更换淘宝镜像源

- 默认源

```shell
npm config set registry https://registry.npmjs.org
```

- 设成淘宝的：

```shell
npm config set registry https://registry.npmmirror.com
```

- 换成原来的

```shell
npm config set registry https://registry.npmjs.org/
```

- 配置后通过以下方法验证是否成功:

```shell
npm config get registry
```
