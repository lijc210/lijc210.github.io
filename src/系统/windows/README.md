---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - windows
tag:
  - windows
---

# windows

## windows查看端口是否监听
```
netstat -ano | findstr 8866

tskill  12882
```

## windows临时文件路径
C:\Users\Administrator\AppData\Local\Temp


## windows删除指定目录下几天前的文件
删除c盘test目录2天前的文件
```
forfiles /p "c:\test" /d -2 /c "cmd /c echo deleting @file ... && del /f @path"
```

## windows下判断是否ping通
```
ping -n 1 -w 3 www.baidu.com | findstr TTL>nul&& echo 成功！|| echo 失败！
```

## windows终端设置代理
cmd
```
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890
```
powershell
```
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="https://127.0.0.1:7890"
```