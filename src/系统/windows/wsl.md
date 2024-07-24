---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - windows
tag:
  - wsl
---

# wsl

## 列出WSL子系统
```
wslconfig /list
wsl --list
wsl -l -v
```
## 关闭Ubuntu子系统
```
wsl --terminate Ubuntu
wsl -t Ubuntu
wsl --shutdown
```
## 启动WSL
```
wsl
```
## windows下访问wsl2下的ubuntu文件
```
\\wsl.localhost\Ubuntu
```

## 限制wsl2内存
C:\Users\YourUsername\\.wslconfig
```
[wsl2]
memory=4GB  # Limits VM memory in WSL 2GB
swap=4GB
localhostForwarding=true
processors=4 # Makes the WSL 2 VM use two virtual processors
```

## 如何在局域网的其他主机上中访问本机的WSL2
listenport 后面跟本机端口（你提供给手机访问的端口），connectaddress 后面跟WSL2的ip地址，connectport 后面跟WSL2里服务使用的端口。
```
netsh interface portproxy add v4tov4 listenport=15603 connectaddress= 172.26.35.90 connectport=15603 listenaddress=0.0.0.0 protocol=tcp
```

## WSL2文件迁移到D盘

### 查看当前wsl

通过输出看到当前的wsl名称是Ubuntu

```
wsl -l

适用于 Linux 的 Windows 子系统分发版:
Ubuntu (默认)
```

### 导出

导出到D盘，文件名为ubuntu.tar，这里需要等一段时间。

```
wsl --export Ubuntu d://ubuntu.tar
```

### 注销原wsl

```
wsl --unregister Ubuntu
正在注销...
```

### 导入

先在D盘新建文件夹存放wls文件，然后将上面导出的ubuntu.tar文件，通过wsl的import命令导入，指定导入的wsl文件夹和上面导出的tar文件。导入也需要等待。

```
wsl --import Ubuntu d:\wsl\Ubuntu D:\ubuntu.tar
```

导入成功后，启动

```
wsl
```

发现是root用户登陆的，在powershell中执行命令，修改默认登陆账户

```
Ubuntu config --default-user ubuntu
```

### 开启自动启动服务
1. 在windows系统上，使用 windows + r 键，调出运行，输入 shell:startup 进入开机启动项文件夹
2. 新建文件：wsl.vbs，名字自定义，但必须使用 vbs 作为扩展名
3. 添加如下内容：
```
Set ws = CreateObject("Wscript.Shell")
ws.run "wsl -d ubuntu -u root python3 /home/lijc/.config/init.py", vbhide
```