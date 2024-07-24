---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 工具
tag:
  - git
---

# git

## Git Commit 规范

提交说明的结构如下所示：

原文：
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
译文：
```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```
Type:
   
* feat: 新特性或功能（feature）
* fix: 修复 bug
* docs: 文档更新（documentation）
* style: 代码风格或者组件样式更新（不影响代码运行的变动）
* refactor: 代码重构，不引入新功能和缺陷修复
* perf: 优化相关，比如提升性能、体验
* test: 增加测试
* chore: 构建过程或辅助工具的变动
* revert: 回滚到上一个版本

## git 设置代理和取消
```shell
git config --global http.proxy http://127.0.0.1:4455
git config --global https.proxy https://127.0.0.1:4455

git config --global http.proxy 'socks5://127.0.0.1:4455'
git config --global https.proxy 'socks5://127.0.0.1:4455'

git config --global --unset http.proxy
git config --global --unset https.proxy
```
## git 初次提交到远程空的仓库
```shell
git init
git remote add origin [仓库地址]
git add .
git commit -m "Initial commit"
git push -u origin master
```
如果您使用的是其他分支名称而不是 master，请在 git push 命令中将其替换为您的分支名称。

## git保存用户名和密码
```
git config --global credential.helper store
```

## 把git的默认分支master修改成main
```
git config --global init.defaultBranch main # 修改本地配置文件
git branch -M main # 修改已创建项目的主分支为main
git push -u origin main #  更新远程仓库
```

## gitpython中使用代理
https://github.com/gitpython-developers/GitPython/discussions/1458

## git强制覆盖本地仓库
```
main覆盖本地
git fetch --all && git reset --hard origin/main && git pull
master
git fetch --all && git reset --hard origin/master && git pull
```

## git强制提交本地分支覆盖远程分支
```
git push origin 分支名 --force
```

## git 删除历史记录
```
git checkout --orphan <new_branch>
git add -A
git commit -am "Initial commit"
git branch -D master
git branch -m master
git push -f origin master
```
这将创建一个新的分支，添加所有文件，提交并删除原来的主分支，最后将当前分支重命名为主分支并将其推送到远程仓库。请注意，这将删除所有历史记录，包括分支和标记。

## git pull报错fatal: refusing to merge unrelated histories
git pull命令中添加–allow-unrelated-histories

## git新增一个推送地址
```
git remote set-url --add origin <url>
```

## 推送本地dev分支到远程master分支，再切回dev分支
```
git checkout master && git pull  && git merge dev && git push && git checkout dev
```
