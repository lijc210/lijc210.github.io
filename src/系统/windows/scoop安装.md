---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - windows
tag:
  - windows
---

# scoop安装

[Scoop](https://link.zhihu.com/?target=https%3A//scoop.sh/) 是一个 Windows 包管理工具，类似于 Debian 的 apt、macOS 的 homebrew。它由开源社区驱动，体验可能是是目前所有 Windows 包管理工具中最好的。

Scoop 可以很方便的安装一些常用软件，尤其是开源软件，免去了手动去官网下载的繁琐步骤，而且后续对软件进行升级只需要输入一行命令，非常便捷。

## 环境要求

-   Windows 7 SP1 + / Windows Server 2008+
-   PowerShell 5（或更高版本，包括 PowerShell Core）和 .NET Framework 4.5（或更高版本）

可以运行如下命令进行查看 PowerShell 版本：

`$psversiontable.psversion.major # should be >= 5.0`

-   Windows 用户名为英文（Windows 用户环境变量中路径值不支持中文字符）
-   正常、快速的访问 GitHub 并下载资源

## 安装

Scoop 默认使用普通用户权限，其本体和安装的软件默认会放在 %USERPROFILE%\\scoop(即 C:\\Users\\用户名\\scoop)，使用管理员权限进行全局安装 (-g) 的软件在 C:\\ProgramData\\scoop。如果有自定安装路径的需求，那么要提前设置好环境变量，否则后续再改不是一件容易的事情。

设置用户安装路径

```
$env:SCOOP='D:\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
```

设置全局安装路径（需要管理员权限）

```
$env:SCOOP_GLOBAL='D:\Scoop_Global'
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', $env:SCOOP_GLOBAL, 'Machine')
```

设置允许 PowerShell 执行本地脚本

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

安装 Scoop

```
iwr -useb get.scoop.sh | iex
或
iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
```

## 基础使用

查看命令列表

测试是否安装成功，安装 curl 测试

然后运行 curl

```
curl -L https://get.scoop.sh
```

常用命令

-   `scoop search` - 搜索软件
-   `scoop install` - 安装软件
-   `scoop info` - 查看软件详细信息
-   `scoop list` - 查看已安装软件
-   `scoop uninstall` - 卸载软件，-p删除配置文件。
-   `scoop update` - 更新 scoop 本体和软件列表
-   `scoop update` - 更新指定软件
-   `scoop update *` - 更新所有已安装的软件

## 进阶使用

添加 bucket bucket 就是 Scoop 中的软件仓库。

Scoop 默认软件仓库（main bucket）软件数量是有限的，但是可以进行额外的添加。通过 `scoop bucket known` 命令可以查看官方认可的 bucket。

以上官方认可的 bucket 可以通过下面这个命令直接添加：

```
scoop bucket add <bucketname>
```

extras 涵盖了大部分因为种种原因不能被收录进主仓库的常用软件，这个是强推荐添加的。

除了官方的软件仓库，Scoop也支持用户自建仓库并共享，于是又有很多大佬提供了许多好用的软件仓库。这里强推dorado仓库，里面有许多适合中国用户的软件。