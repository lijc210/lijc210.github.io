---
icon: edit
date: 2022-01-01
category:
  - linux
tag:
  - linux
---

# linux

## linux常用命令详解

> 引言: 做开发好多年，收集了一堆的Linux命令，每次用的时候都得现翻各种帖子，抽空做了个常用的命令总结，后续将继续补全，有空再做个chm文档出来，希望喜欢的朋友点个赞再走  
> 
> -   [目录](https://www.cnblogs.com/Survivalist/p/11250330.html#%E7%9B%AE%E5%BD%95)
> -   [软件包管理](https://www.cnblogs.com/Survivalist/p/11250330.html#%E8%BD%AF%E4%BB%B6%E5%8C%85%E7%AE%A1%E7%90%86)
>     -   [yum](https://www.cnblogs.com/Survivalist/p/11250330.html#yum)
> -   [文件管理](https://www.cnblogs.com/Survivalist/p/11250330.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86)
>     -   [rm](https://www.cnblogs.com/Survivalist/p/11250330.html#rm)
>     -   [mv](https://www.cnblogs.com/Survivalist/p/11250330.html#mv)
>     -   [cp](https://www.cnblogs.com/Survivalist/p/11250330.html#cp)
>     -   [cat](https://www.cnblogs.com/Survivalist/p/11250330.html#cat)
>     -   [more](https://www.cnblogs.com/Survivalist/p/11250330.html#more)
>     -   [less](https://www.cnblogs.com/Survivalist/p/11250330.html#less)
>     -   [head](https://www.cnblogs.com/Survivalist/p/11250330.html#head)
>     -   [tail](https://www.cnblogs.com/Survivalist/p/11250330.html#tail)
>     -   [which](https://www.cnblogs.com/Survivalist/p/11250330.html#which)
>     -   [whereis](https://www.cnblogs.com/Survivalist/p/11250330.html#whereis)
>     -   [locate](https://www.cnblogs.com/Survivalist/p/11250330.html#locate)
>     -   [find](https://www.cnblogs.com/Survivalist/p/11250330.html#find)
>     -   [grep](https://www.cnblogs.com/Survivalist/p/11250330.html#grep)
> -   [多个文件](https://www.cnblogs.com/Survivalist/p/11250330.html#%E5%A4%9A%E4%B8%AA%E6%96%87%E4%BB%B6)
> -   [一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0。选项 -b -o 一般总是配合使用。](https://www.cnblogs.com/Survivalist/p/11250330.html#%E4%B8%80%E8%A1%8C%E4%B8%AD%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%AD%97%E7%AC%A6%E4%BE%BF%E5%AE%9C%E6%98%AF%E4%BB%8E%E8%AF%A5%E8%A1%8C%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E5%BC%80%E5%A7%8B%E8%AE%A1%E7%AE%97%E8%B5%B7%E5%A7%8B%E5%80%BC%E4%B8%BA0%E9%80%89%E9%A1%B9--b--o-%E4%B8%80%E8%88%AC%E6%80%BB%E6%98%AF%E9%85%8D%E5%90%88%E4%BD%BF%E7%94%A8)
>     -   [chmod](https://www.cnblogs.com/Survivalist/p/11250330.html#chmod)
>     -   [ln](https://www.cnblogs.com/Survivalist/p/11250330.html#ln)
>     -   [chown](https://www.cnblogs.com/Survivalist/p/11250330.html#chown)
>     -   [wc](https://www.cnblogs.com/Survivalist/p/11250330.html#wc)
> -   [文件传输](https://www.cnblogs.com/Survivalist/p/11250330.html#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93)
> -   [备份压缩](https://www.cnblogs.com/Survivalist/p/11250330.html#%E5%A4%87%E4%BB%BD%E5%8E%8B%E7%BC%A9)
>     -   [tar](https://www.cnblogs.com/Survivalist/p/11250330.html#tar)
> -   [磁盘管理](https://www.cnblogs.com/Survivalist/p/11250330.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86)
>     -   [ls](https://www.cnblogs.com/Survivalist/p/11250330.html#ls)
>     -   [cd命令](https://www.cnblogs.com/Survivalist/p/11250330.html#cd%E5%91%BD%E4%BB%A4)
>     -   [pwd](https://www.cnblogs.com/Survivalist/p/11250330.html#pwd)
>     -   [mkdir](https://www.cnblogs.com/Survivalist/p/11250330.html#mkdir)
>     -   [rmdir](https://www.cnblogs.com/Survivalist/p/11250330.html#rmdir)
>     -   [df](https://www.cnblogs.com/Survivalist/p/11250330.html#df)
>     -   [du](https://www.cnblogs.com/Survivalist/p/11250330.html#du)
> -   [系统设置](https://www.cnblogs.com/Survivalist/p/11250330.html#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE)
>     -   [date](https://www.cnblogs.com/Survivalist/p/11250330.html#date)
>     -   [export](https://www.cnblogs.com/Survivalist/p/11250330.html#export)
> -   [source /etc/profile](https://www.cnblogs.com/Survivalist/p/11250330.html#source-etcprofile)
> -   [系统管理](https://www.cnblogs.com/Survivalist/p/11250330.html#%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86)
>     -   [service](https://www.cnblogs.com/Survivalist/p/11250330.html#service)
>     -   [chkconfig](https://www.cnblogs.com/Survivalist/p/11250330.html#chkconfig)
>     -   [systemctl](https://www.cnblogs.com/Survivalist/p/11250330.html#systemctl)
>     -   [useradd](https://www.cnblogs.com/Survivalist/p/11250330.html#useradd)
>     -   [ps](https://www.cnblogs.com/Survivalist/p/11250330.html#ps)
> -   [文档编辑](https://www.cnblogs.com/Survivalist/p/11250330.html#%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91)
> -   [网络管理](https://www.cnblogs.com/Survivalist/p/11250330.html#%E7%BD%91%E7%BB%9C%E7%AE%A1%E7%90%86)
>     -   [telnet](https://www.cnblogs.com/Survivalist/p/11250330.html#telnet)
>     -   [netstat](https://www.cnblogs.com/Survivalist/p/11250330.html#netstat)
> -   [其他](https://www.cnblogs.com/Survivalist/p/11250330.html#%E5%85%B6%E4%BB%96)
>     -   [cal](https://www.cnblogs.com/Survivalist/p/11250330.html#cal)
>     -   [free](https://www.cnblogs.com/Survivalist/p/11250330.html#free)
>     -   [kill](https://www.cnblogs.com/Survivalist/p/11250330.html#kill)
> -   [好用的学习网址](https://www.cnblogs.com/Survivalist/p/11250330.html#%E5%A5%BD%E7%94%A8%E7%9A%84%E5%AD%A6%E4%B9%A0%E7%BD%91%E5%9D%80)

## 目录

```
软件包管理
    yum                 查找/添加/删除/更新RPM包,自动解决包的依赖问题以及系统更新升级
文件管理
    rm                  删除(单个/多个)文件/文件夹
    mv                  移动文件或修改文件名
    cp                  文件复制
    cat                 显示、创建、合并文件
    more                逐页阅读文件内容
    less                可以随意浏览文件，支持向后查看
    head                用来显示文件的开头
    tail                用来显示文件的末尾
    which               查看可执行文件的位置，以及查看该文件是否存在
    whereis             用于程序名的搜索
    locate              快速查找文件
    find                用于在文件树中查找文件，并作出相应的处理
    grep                管道过滤
    chmod               文件/文件夹授权、剥权
    ln                  用于建立文件间的链接，文件挂载
    chown               将指定文件的拥有者改为指定的用户或组
    wc                  统计指定的文件中字节数、字数、行数，并将统计结果输出
备份压缩    
    tar                 用来压缩和解压文件
磁盘管理
    ls                  查看文件权限(包括目录、文件夹、文件权限)信息等   
    cd                  目录切换
    pwd                 显示当前路径
    mkdir               创建文件夹
    rmdir               删除文件夹 
    df                  显示磁盘空间使用情况
    du                  对文件和目录磁盘使用的空间的查看
系统设置
    date                显示和设置日期
    export              环境变量显示、设置
    vim /etc/profile
系统管理
    service             用于对系统服务进行管理
    chkconfig           命令检查、设置系统的各种服务
    systemctl           系统服务管理器指令，它是service和chkconfig命令的组合体
    useradd             对系统用户的创建、删除等管理
    ps                  用来查看当前运行的进程状态
网络管理
    telnet              用于登录远程、服务器ping通
    netstat             查看网络系统的状态信息
其他
    cal                 日历
    free                显示系统内存使用情况
    kill                杀死进程
好用的学习网址    
```

## 软件包管理

## yum

用于查找/添加/删除/更新RPM包,自动解决包的依赖问题以及系统更新升级

语法

> yum(选项)(参数)

选项

```
-h：显示帮助信息；
-y：对所有的提问都回答“yes”；
-c：指定配置文件；
-q：安静模式；
-v：详细模式；
-d：设置调试等级（0-10）；
-e：设置错误等级（0-10）；
-R：设置yum处理一个命令的最大等待时间；
-C：完全从缓存中运行，而不去下载或者更新任何头文件。
```

参数

```
install：安装rpm软件包；
update：更新rpm软件包；
check-update：检查是否有可用的更新rpm软件包；
remove：删除指定的rpm软件包；
list：显示软件包的信息；
search：检查软件包的信息；
info：显示指定的rpm软件包的描述信息和概要信息；
clean：清理yum过期的缓存；
shell：进入yum的shell提示符；
resolvedep：显示rpm软件包的依赖关系；
localinstall：安装本地的rpm软件包；
localupdate：显示本地rpm软件包进行更新；
deplist：显示rpm软件包的所有依赖关系。
```

实例

部分常用的命令包括：

-   自动搜索最快镜像插件：yum install yum-fastestmirror
-   安装yum图形窗口插件：yum install yumex
-   查看可能批量安装的列表：yum grouplist

安装

> yum install #全部安装  
> yum install package1 #安装指定的安装包package1  
> yum groupinsall group1 #安装程序组group1

更新和升级

> yum update #全部更新  
> yum update package1 #更新指定程序包package1  
> yum check-update #检查可更新的程序  
> yum upgrade package1 #升级指定程序包package1  
> yum groupupdate group1 #升级程序组group1

查找和显示

> yum info package1 #显示安装包信息package1  
> yum list #显示所有已经安装和可以安装的程序包  
> yum list package1 #显示指定程序包安装情况package1  
> yum groupinfo group1 #显示程序组group1信息yum search string 根据关键字string查找安装包

删除程序

> yum remove | erase package1 #删除程序包package1  
> yum groupremove group1 #删除程序组group1  
> yum deplist package1 #查看程序package1依赖情况

清除缓存

> yum clean packages #清除缓存目录下的软件包  
> yum clean headers #清除缓存目录下的 headers  
> yum clean oldheaders #清除缓存目录下旧的 headers

## 文件管理

## rm

```
     删除一个目录中的一个或多个文件或目录，如果没有使用- r选项，则rm不会删除目录。如果使用              rm 来删除文件，通常仍可以将该文件恢复原状

     rm [选项] 文件…
```

实例：

（1）删除任何.log文件；删除前逐一询问确认

> rm -i \*.log

（2）删除test子目录及子目录中所有档案删除,并且不用一一确认

> rm -rf test

（3）删除以-f开头的文件

> rm -- -f\*

## mv

```
     移动文件或修改文件名，根据第二参数类型（如目录，则移动文件；如为文件则重命令该文件）。      

     当第二个参数为目录时，可刚多个文件以空格分隔作为第一参数，移动多个文件到参数2指定的目录中
```

实例：

（1）将文件test.log重命名为test1.txt

> mv test.log test1.txt

（2）将文件log1.txt,log2.txt,log3.txt移动到根的test3目录中

> mv llog1.txt log2.txt log3.txt /test3

（3）将文件file1改名为file2，如果file2已经存在，则询问是否覆盖

> mv -i log1.txt log2.txt

（4）移动当前文件夹下的所有文件到上一级目录

> mv \* ../

## cp

```
     将源文件复制至目标文件，或将多个源文件复制至目标目录。

     注意：命令行复制，如果目标文件已经存在会提示是否覆盖，而在shell脚本中，如果不加-i参数，则不会提示，而是直接覆盖！

     -i 提示

     -r 复制目录及目录内所有项目

     -a 复制的文件与原文件时间一样
```

实例：

（1）复制a.txt到test目录下，保持原文件时间,如果原文件存在提示是否覆盖

> cp -ai a.txt test

（2）为a.txt建议一个链接（快捷方式）

> cp -s a.txt link\_a.txt

## cat

```
     cat主要有三大功能：

     1.一次显示整个文件:cat filename

     2.从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.

     3.将几个文件合并为一个文件:cat file1 file2 > file

     -b对非空输出行号

     -n输出所有行号
```

实例：  
（1）查看系统版本

> cat /etc/issue

（3）把 log2012.log 的文件内容加上行号后输入 log2013.log 这个文件里

> cat -n log2012.log log2013.log

（3）把 log2012.log 和 log2013.log 的文件内容加上行号（空白行不加）之后将内容附加到 log.log 里

> cat -b log2012.log log2013.log log.log

（4）使用here doc生成新文件

```
cat >log.txt <<EOF

 >Hello

 >World

 >PWD=$(pwd)

 >EOF

 ls -l log.txt
```

```

cat log.txt

Hello

World

PWD=/opt/soft/test
```

（5）反向列示

```
tac log.txt

 PWD=/opt/soft/test

 World

 Hello
```

## more

```
     功能类似于cat, more会以一页一页的显示方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示

     ->>命令参数：

     +n      从笫n行开始显示

     -n       定义屏幕大小为n行

     +/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示 

     -c       从顶部清屏，然后显示

     -d       提示“Press space to continue，’q’ to quit（按空格键继续，按q键退出）”，禁用响铃功能

     -l        忽略Ctrl+l（换页）字符

     -p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似

     -s       把连续的多个空行显示为一行

     -u       把文件内容中的下画线去掉

     ->>常用操作命令：

     Enter    向下n行，需要定义。默认为1行

     Ctrl+F   向下滚动一屏

     空格键  向下滚动一屏

     Ctrl+B  返回上一屏

     =       输出当前行的行号

     ：f     输出文件名和当前行的行号

     V      调用vi编辑器

     !命令   调用Shell，并执行命令

     q       退出more
```

实例：

（1）显示文件中从第3行起的内容

> more +3 text.txt

（2）在所列出文件目录详细信息，借助管道使每次显示5行

> ls -l | more -5

按空格显示下5行

## less

```
     less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

     常用命令参数

     -i  忽略搜索时的大小写

     -N  显示每行的行号

     -o  <文件名> 将less 输出的内容在指定文件中保存起来

     -s  显示连续空行为一行

     /字符串：向下搜索“字符串”的功能

     ?字符串：向上搜索“字符串”的功能

     n：重复前一个搜索（与 / 或 ? 有关）

     N：反向重复前一个搜索（与 / 或 ? 有关）

     -x <数字> 将“tab”键显示为规定的数字空格

     b  向后翻一页

     d  向后翻半页

     h  显示帮助界面

     Q  退出less 命令

     u  向前滚动半页

     y  向前滚动一行

     空格键 滚动一行

     回车键 滚动一页

     [pagedown]： 向下翻动一页

     [pageup]：   向上翻动一页
```

实例：

（1）ps查看进程信息并通过less分页显示

> ps -aux | less -N

（2）查看多个文件

> less 1.log 2.log

可以使用n查看下一个，使用p查看前一个

## head

```
     head 用来显示档案的开头至标准输出中，默认head命令打印其相应文件的开头10行。

     常用参数：

     -n<行数> 显示的行数（行数为复数表示从最后向前数）
```

实例：

（1）显示1.log文件中前20行

> head 1.log -n 20

（2）显示1.log文件前20字节

> head -c 20 log2014.log

（3）显示t.log最后10行

> head -n -10 t.log

## tail

```
     用于显示指定文件末尾内容，不指定文件时，作为输入信息进行处理。常用查看日志文件。

     常用参数：

     -f 循环读取（常用于查看递增的日志文件）

     -n<行数> 显示行数（从后向前）
```

（1）循环读取逐渐增加的文件内容

> ping 127.0.0.1 > ping.log &（后台运行：可使用jobs -l查看，也可使用fg将其移到前台运行） tail -f ping.log（查看日志）

## which

```
     在linux要查找某个文件，但不知道放在哪里了，可以使用下面的一些命令来搜索：

     which     查看可执行文件的位置。

     whereis 查看文件的位置。

     locate  配合数据库查看文件位置。

     find        实际搜寻硬盘查询文件名称。

    

     which是在PATH就是指定的路径中，搜索某个系统命令的位置，并返回第一个搜索结果。使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。

     常用参数：

     -n 　指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。
```

实例：

（1）查看ls命令是否存在，执行哪个

> which ls

（2）查看which

> which which

（3）查看cd

> which cd（显示不存在，因为cd是内建命令，而which查找显示是PATH中的命令）

查看当前PATH配置：echo $PATH；或使用env查看所有环境变量及对应值

## whereis

```
     whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。whereis及locate都是基于系统内建的数据库进行搜索，因此效率很高，而find则是遍历硬盘查找文件。

     常用参数：

     -b   定位可执行文件。

     -m   定位帮助文件。

     -s   定位源代码文件。

     -u   搜索默认路径下除可执行文件、源代码文件、帮助文件以外的其它文件。
```

实例：

（1）查找locate程序相关文件

> whereis locate

（2）查找locate的源码文件

> whereis -s locate

（3）查找lcoate的帮助文件

> whereis -m locate

## locate

```
     locate通过搜寻系统内建文档数据库达到快速找到档案，数据库由updatedb程序来更新，updatedb是由cron daemon周期性调用的。默认情况下locate命令在搜寻数据库时比由整个由硬盘资料来搜寻资料来得快，但较差劲的是locate所找到的档案若是最近才建立或 刚更名的，可能会找不到，在内定值中，updatedb每天会跑一次，可以由修改crontab来更新设定值。(etc/crontab)。

     locate与find命令相似，可以使用如*、?等进行正则匹配查找

     常用参数：

     -l num（要显示的行数）

     -f   将特定的档案系统排除在外，如将proc排除在外

     -r   使用正则运算式做为寻找条件
```

实例：

（1）查找和pwd相关的所有文件(文件名中包含pwd）

> locate pwd

（2）搜索etc目录下所有以sh开头的文件

> locate /etc/sh

（3）查找/var目录下，以reason结尾的文件

> locate -r '^/var._reason$'（其中.表示一个字符，_表示任务多个；.\*表示任意多个字符）

## find

```
     用于在文件树中查找文件，并作出相应的处理

     命令格式：

     find pathname -options [-print -exec -ok ...]

     命令参数：

     pathname: find命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。

     -print： find命令将匹配的文件输出到标准输出。

     -exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为'command' {  } \;，注意{   }和\；之间的空格。

     -ok： 和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。

     命令选项：

     -name 按照文件名查找文件

     -perm 按文件权限查找文件

     -user 按文件属主查找文件

     -group  按照文件所属的组来查找文件。

     -type  查找某一类型的文件，诸如：

               b - 块设备文件

               d - 目录

               c - 字符设备文件

               l - 符号链接文件

               p - 管道文件

               f - 普通文件

     -size n :[c] 查找文件长度为n块文件，带有c时表文件字节大小

     -amin n   查找系统中最后N分钟访问的文件

     -atime n  查找系统中最后n*24小时访问的文件

     -cmin n   查找系统中最后N分钟被改变文件状态的文件

     -ctime n  查找系统中最后n*24小时被改变文件状态的文件

     -mmin n   查找系统中最后N分钟被改变文件数据的文件

     -mtime n  查找系统中最后n*24小时被改变文件数据的文件

     (用减号-来限定更改时间在距今n日以内的文件，而用加号+来限定更改时间在距今n日以前的文件。 )

     -maxdepth n 最大查找目录深度

     -prune选项来指出需要忽略的目录。在使用-prune选项时要当心，因为如果你同时使用了-depth选项，那么-prune选项就会被find命令忽略

     -newer 如果希望查找更改时间比某个文件新但比另一个文件旧的所有文件，可以使用-newer选项
```

实例：

（1）查找48小时内修改过的文件

> find -atime -2

（2）在当前目录查找 以.log结尾的文件。 ". "代表当前目录

> find ./ -name '\*.log'

（3）查找/opt目录下 权限为 777的文件

> find /opt -perm 777

（4）查找大于1K的文件

> find -size +1000c

> find -size 1000c 查找等于1000字符的文件

```
     -exec         参数后面跟的是command命令，它的终止是以;为结束标志的，所以这句命令后面的分号是不可缺少的，考虑到各个系统中分号会有不同的意义，所以前面加反斜杠。{}   花括号代表前面find查找出来的文件名。
```

实例：

（5）在当前目录中查找更改时间在10日以前的文件并删除它们(无提醒）

> find . -type f -mtime +10 -exec rm -f {} ;

（6）当前目录中查找所有文件名以.log结尾、更改时间在5日以上的文件，并删除它们，只不过在删除之前先给出提示。 按y键删除文件，按n键不删除

> find . -name '\*.log' mtime +5 -ok -exec rm {} ;

（7）当前目录下查找文件名以passwd开头，内容包含"pkg"字符的文件

> find . -f -name 'passwd\*' -exec grep "pkg" {} ;

（8）用exec选项执行cp命令

> find . -name '\*.log' -exec cp {} test3 ;

```
    -xargs find命令把匹配到的文件传递给xargs命令，而xargs命令每次只获取一部分文件而不是全部，不像-exec选项那样。这样它可以先处理最先获取的一部分文件，然后是下一批，并如此继续下去。
```

实例：

（9）查找当前目录下每个普通文件，然后使用xargs来判断文件类型

> find . -type f -print | xargs file

（10）查找当前目录下所有以js结尾的并且其中包含'editor'字符的普通文件

> find . -type f -name "\*.js" -exec grep -lF 'ueditor' {} ;

> find -type f -name '\*.js' | xargs grep -lF 'editor'

（11）利用xargs执行mv命令

> find . -name "\*.log" | xargs -i mv {} test4

（12）用grep命令在当前目录下的所有普通文件中搜索hostnames这个词,并标出所在行

> find . -name \*(转义） -type f -print | xargs grep -n 'hostnames'

（13）查找当前目录中以一个小写字母开头，最后是4到9加上.log结束的文件

> find . -name '\[a-z\]\*\[4-9\].log' -print

（14）在test目录查找不在test4子目录查找

> find test -path 'test/test4' -prune -o -print

（15）实例1：查找更改时间比文件log2012.log新但比文件log2017.log旧的文件

> find -newer log2012.log ! -newer log2017.log

```
     使用depth选项：

     depth选项可以使find命令向磁带上备份文件系统时，希望首先备份所有的文件，其次再备份子目录中的文件。 
```

实例：find命令从文件系统的根目录开始，查找一个名为CON.FILE的文件。 它将首先匹配所有的文件然后再进入子目录中查找

> find / -name "CON.FILE" -depth -print

## grep

grep（global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来

选项

```
-a 不要忽略二进制数据。
-A<显示列数> 除了显示符合范本样式的那一行之外，并显示该行之后的内容。
-b 在显示符合范本样式的那一行之外，并显示该行之前的内容。
-c 计算符合范本样式的列数。
-C<显示列数>或-<显示列数>  除了显示符合范本样式的那一列之外，并显示该列之前后的内容。
-d<进行动作> 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。
-e<范本样式> 指定字符串作为查找文件内容的范本样式。
-E 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。
-f<范本文件> 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。
-F 将范本样式视为固定字符串的列表。
-G 将范本样式视为普通的表示法来使用。
-h 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。
-H 在显示符合范本样式的那一列之前，标示该列的文件名称。
-i 忽略字符大小写的差别。
-l 列出文件内容符合指定的范本样式的文件名称。
-L 列出文件内容不符合指定的范本样式的文件名称。
-n 在显示符合范本样式的那一列之前，标示出该列的编号。
-q 不显示任何信息。
-R/-r 此参数的效果和指定“-d recurse”参数相同。
-s 不显示错误信息。
-v 反转查找。
-w 只显示全字符合的列。
-x 只显示全列符合的列。
-y 此参数效果跟“-i”相同。
-o 只输出文件中匹配到的部分。
```

**grep命令常见用法**

在文件中搜索一个单词，命令会返回一个包含“match\_pattern”的文本行：

> grep match\_pattern file\_name  
> grep "match\_pattern" file\_name

在多个文件中查找：

> grep "match\_pattern" file\_1 file\_2 file\_3 ...

输出除之外的所有行 -v 选项：

> grep -v "match\_pattern" file\_name

标记匹配颜色 --color=auto 选项：

> grep "match\_pattern" file\_name --color=auto

使用正则表达式 -E 选项：

> grep -E "\[1-9\]+"

或

> egrep "\[1-9\]+"

只输出文件中匹配到的部分 -o 选项：

> echo this is a test line. | grep -o -E "\[a-z\]+."  
> line.

> echo this is a test line. | egrep -o "\[a-z\]+."  
> line.

统计文件或者文本中包含匹配字符串的行数 -c 选项：

> grep -c "text" file\_name

输出包含匹配字符串的行数 -n 选项：

> grep "text" -n file\_name

或

> cat file\_name | grep "text" -n

## 多个文件

> grep "text" -n file\_1 file\_2

打印样式匹配所位于的字符或字节偏移：

> echo gun is not unix | grep -b -o "not"  
> 7:not
> 
> ## 一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0。选项 -b -o 一般总是配合使用。

搜索多个文件并查找匹配文本在哪些文件中：

> grep -l "text" file1 file2 file3...

**grep递归搜索文件**

在多级目录中对文本进行递归搜索：

```
grep "text" . -r -n  
# .表示当前目录。
```

忽略匹配样式中的字符大小写

> echo "hello world" | grep -i "HELLO"  
> hello

选项 -e 制动多个匹配样式：

```
echo this is a text line | grep -e "is" -e "line" -o
is
line

#也可以使用-f选项来匹配多个样式，在样式文件中逐行写出需要匹配的字符。
cat patfile
aaa
bbb

echo aaa bbb ccc ddd eee | grep -f patfile -o
```

在grep搜索结果中包括或者排除指定文件：

```
#只在目录中所有的.php和.html文件中递归搜索字符"main()"
grep "main()" . -r --include *.{php,html}

#在搜索结果中排除所有README文件
grep "main()" . -r --exclude "README"

#在搜索结果中排除filelist文件列表里的文件
grep "main()" . -r --exclude-from filelist
```

使用0值字节后缀的grep与xargs：

```
#测试文件：
echo "aaa" > file1
echo "bbb" > file2
echo "aaa" > file3

grep "aaa" file* -lZ | xargs -0 rm

#执行后会删除file1和file3，grep输出用-Z选项来指定以0值字节作为终结符文件名（\0），xargs -0 读取输入并用0值字节终结符分隔文件名，然后删除匹配文件，-Z通常和-l结合使用。
```

grep静默输出：

```
grep -q "test" filename

#不会输出任何信息，如果命令运行成功返回0，失败则返回非0值。一般用于条件测试。
```

打印出匹配文本之前或者之后的行：

```
#显示匹配某个结果之后的3行，使用 -A 选项：
seq 10 | grep "5" -A 3
5
6
7
8

#显示匹配某个结果之前的3行，使用 -B 选项：
seq 10 | grep "5" -B 3
2
3
4
5

#显示匹配某个结果的前三行和后三行，使用 -C 选项：
seq 10 | grep "5" -C 3
2
3
4
5
6
7
8

#如果匹配结果有多个，会用“--”作为各匹配结果之间的分隔符：
echo -e "a\nb\nc\na\nb\nc" | grep a -A 1
a
b
--
a
b
```

## chmod

```
     用于改变linux系统文件或目录的访问权限。用它控制文件或目录的访问权限。该命令有两种用法。一种是包含字母和操作符表达式的文字设定法；另一种是包含数字的数字设定法。

     每一文件或目录的访问权限都有三组，每组用三位表示，分别为文件属主的读、写和执行权限；与属主同组的用户的读、写和执行权限；系统中其他用户的读、写和执行权限。可使用ls -l test.txt查找

     以文件log2012.log为例：

     -rw-r--r-- 1 root root 296K 11-13 06:03 log2012.log

     第一列共有10个位置，第一个字符指定了文件类型。在通常意义上，一个目录也是一个文件。如果第一个字符是横线，表示是一个非目录的文件。如果是d，表示是一个目录。从第二个字符开始到第十个共9个字符，3个字符一组，分别表示了3组用户对文件或者目录的权限。权限字符用横线代表空许可，r代表只读，w代表写，x代表可执行。

     常用参数：

     -c 当发生改变时，报告处理信息

     -R 处理指定目录以及其子目录下所有文件

     权限范围：

     u ：目录或者文件的当前的用户

     g ：目录或者文件的当前的群组

     o ：除了目录或者文件的当前用户或群组之外的用户或者群组

     a ：所有的用户及群组



     权限代号：

     r ：读权限，用数字4表示

     w ：写权限，用数字2表示

     x ：执行权限，用数字1表示

     - ：删除权限，用数字0表示

     s ：特殊权限
```

实例：

（1）增加文件t.log所有用户可执行权限

> chmod a+x t.log

（2）撤销原来所有的权限，然后使拥有者具有可读权限,并输出处理信息

> chmod u=r t.log -c

（3）给file的属主分配读、写、执行(7)的权限，给file的所在组分配读、执行(5)的权限，给其他用户分配执行(1)的权限

> chmod 751 t.log -c（或者：chmod u=rwx,g=rx,o=x t.log -c)

（4）将test目录及其子目录所有文件添加可读权限

> chmod u+r,g+r,o+r -R text/ -c

## ln

```
     功能是为文件在另外一个位置建立一个同步的链接，当在不同目录需要该问题时，就不需要为每一个目录创建同样的文件，通过ln创建的链接（link）减少磁盘占用量。

     链接分类：软件链接及硬链接

     软链接：

     1.软链接，以路径的形式存在。类似于Windows操作系统中的快捷方式

     2.软链接可以 跨文件系统 ，硬链接不可以

     3.软链接可以对一个不存在的文件名进行链接

     4.软链接可以对目录进行链接

     硬链接:

     1.硬链接，以文件副本的形式存在。但不占用实际空间。

     2.不允许给目录创建硬链接

     3.硬链接只有在同一个文件系统中才能创建

     需要注意：

     第一：ln命令会保持每一处链接文件的同步性，也就是说，不论你改动了哪一处，其它的文件都会发生相同的变化；

     第二：ln的链接又分软链接和硬链接两种，软链接就是ln –s 源文件 目标文件，它只会在你选定的位置上生成一个文件的镜像，不会占用磁盘空间，硬链接 ln 源文件 目标文件，没有参数-s， 它会在你选定的位置上生成一个和源文件大小相同的文件，无论是软链接还是硬链接，文件都保持同步变化。

     第三：ln指令用在链接文件或目录，如同时指定两个以上的文件或目录，且最后的目的地是一个已经存在的目录，则会把前面指定的所有文件或目录复制到该目录中。若同时指定多个文件或目录，且最后的目的地并非是一个已存在的目录，则会出现错误信息。

     常用参数：

     -b 删除，覆盖以前建立的链接

     -s 软链接（符号链接）

     -v 显示详细处理过程
```

实例：

（1）给文件创建软链接，并显示操作信息

> ln -sv source.log link.log

（2）给文件创建硬链接，并显示操作信息

> ln -v source.log link1.log

（3）给目录创建软链接

ln -sv /opt/soft/test/test3 /opt/soft/test/test5

## chown

```
     chown将指定文件的拥有者改为指定的用户或组，用户可以是用户名或者用户ID；组可以是组名或者组ID；文件是以空格分开的要改变权限的文件列表，支持通配符

     -c 显示更改的部分的信息

     -R 处理指定目录及子目录
```

实例：

（1）改变拥有者和群组 并显示改变信息

> chown -c mail:mail log2012.log

（2）改变文件群组

> chown -c :mail t.log

（3）改变文件夹及子文件目录属主及属组为mail

> chown -cR mail: test/

（4）改变文件

## wc

```
     wc(word count)功能为统计指定的文件中字节数、字数、行数，并将统计结果输出

     命令格式：

     wc [option] file..

     命令参数：

     -c 统计字节数

     -l 统计行数

     -m 统计字符数

     -w 统计词数，一个字被定义为由空白、跳格或换行字符分隔的字符串
```

实例：

（1）查找文件的 行数 单词数 字节数 文件名

> wc text.txt 结果：7 8 70 test.txt

（2）统计输出结果的行数

> cat test.txt | wc -l

## 文件传输

## 备份压缩

## tar

```
     用来压缩和解压文件。tar本身不具有压缩功能，只具有打包功能，有关压缩及解压是调用其它的功能来完成。

     弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件

     常用参数：

     -c 建立新的压缩文件

     -f 指定压缩文件

     -r 添加文件到已经压缩文件包中

     -u 添加改了和现有的文件到压缩包中

     -x 从压缩包中抽取文件

     -t 显示压缩文件中的内容

     -z 支持gzip压缩

     -j 支持bzip2压缩

     -Z 支持compress解压文件

     -v 显示操作过程

     有关gzip及bzip2压缩

     gzip实例：压缩gzip fileName .tar.gz和.tgz  解压：gunzip filename.gz或gzip -d filename.gz

     对应：tar zcvf filename.tar.gz     tar zxvf filename.tar.gz

     bz2实例：压缩bzip2 -z filename .tar.bz2 解压：bunzip filename.bz2或bzip -d filename.bz2

     对应：tar jcvf filename.tar.gz         解压：tar jxvf filename.tar.bz2
```

实例：

（1）将文件全部打包成tar包

> tar -cvf log.tar 1.log,2.log 或tar -cvf log.\*

（2）将/etc下的所有文件及目录打包到指定目录，并使用gz压缩

> tar -zcvf /tmp/etc.tar.gz /etc

（3）查看刚打包的文件内容（一定加z，因为是使用gzip压缩的）

> tar -ztvf /tmp/etc.tar.gz

（4）要压缩打包/home, /etc ，但不要 /home/dmtsai

> tar --exclude /home/dmtsai -zcvf myfile.tar.gz /home/\* /etc

## 磁盘管理

## ls

```
     就是list的缩写，通过ls 命令不仅可以查看linux文件夹包含的文件，而且可以查看文件权限(包括目录、文件夹、文件权限)查看目录信息等等

     常用参数搭配：

     ls -a 列出目录所有文件，包含以.开始的隐藏文件

     ls -A 列出除.及..的其它文件

     ls -r 反序排列

     ls -t 以文件修改时间排序

     ls -S 以文件大小排序

     ls -h 以易读大小显示

     ls -l 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来
```

实例：

(1) 按易读方式按时间反序排序，并显示文件详细信息

> ls -lhrt

(2) 按大小反序显示文件详细信息

> ls -lrS

(3)列出当前目录中所有以“t”开头的目录的详细内容

> ls -l t\*

(4) 列出文件绝对路径（不包含隐藏文件）

> ls | sed "s:^:`pwd`/:"

(5) 列出文件绝对路径（包含隐藏文件）

> find $pwd -maxdepth 1 | xargs ls -ld

(6) 查看当前文件夹的隐藏文件

> ls -al

## cd命令

```
     (changeDirectory),命令语法：cd [目录名]。说明：切换当前目录至dirName
```

实例：

（1）进入要目录

> cd /

（2）进入"家"目录

> cd ~

（3）进入上一次工作路径

> cd -

（4）把上个命令的参数作为cd参数使用。

> cd !$

## pwd

```
     查看当前工作目录路径
```

实例：

> （1）查看当前路径

pwd

（2）查看软链接的实际路径

> pwd -P

## mkdir

```
     创建文件夹

     可用选项：

     -m: 对新建目录设置存取权限,也可以用chmod命令设置;

         -p: 可以是一个路径名称。此时若路径中的某些目录尚不存在,加上此选项后,系统将自动建立好那                      些尚不在的目录,即一次可以建立多个目录;
```

实例：

（1）当前工作目录下创建名为t的文件夹

> mkdir t

（2）在tmp目录下创建路径为test/t1/t的目录，若不存在，则创建

> mkdir -p /tmp/test/t1/t

## rmdir

```
     从一个目录中删除一个或多个子目录项，删除某目录时也必须具有对其父目录的写权限。

     注意：不能删除非空目录
```

实例：

（1）当parent子目录被删除后使它也成为空目录的话，则顺便一并删除

> rmdir -p parent/child/child11

## df

```
     显示磁盘空间使用情况。获取硬盘被占用了多少空间，目前还剩下多少空间等信息，如果没有文件名被指定，则所有当前被挂载的文件系统的可用空间将被显示。默认情况下，磁盘空间将以 1KB 为单位进行显示，除非环境变量 POSIXLY_CORRECT 被指定，那样将以512字节为单位进行显示

     -a 全部文件系统列表

     -h 以方便阅读的方式显示信息

     -i 显示inode信息

     -k 区块为1024字节

     -l 只显示本地磁盘

     -T 列出文件系统类型
```

实例：

（1）显示磁盘使用情况

> df -l

（2）以易读方式列出所有文件系统及其类型

> df -haT

## du

```
     du命令也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看

     命令格式：

     du [选项] [文件]

     常用参数：

     -a 显示目录中所有文件大小

     -k 以KB为单位显示文件大小

     -m 以MB为单位显示文件大小

     -g 以GB为单位显示文件大小

     -h 以易读方式显示文件大小

     -s 仅显示总计

     -c或--total  除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和
```

实例：

（1）以易读方式显示文件夹内及子文件夹大小

> du -h scf/

（2）以易读方式显示文件夹内所有文件大小

> du -ah scf/

（3）显示几个文件或目录各自占用磁盘空间的大小，还统计它们的总和

> du -hc test/ scf/

（4）输出当前目录下各个子目录所使用的空间

> du -hc --max-depth=1 scf/

## 系统设置

## date

```
     显示或设定系统的日期与时间

     命令参数：

     -d<字符串> 　显示字符串所指的日期与时间。字符串前后必须加上双引号。

     -s<字符串> 　根据字符串来设置日期与时间。字符串前后必须加上双引号。

     -u 　显示GMT。

     %H 小时(00-23)

     %I 小时(00-12)

     %M 分钟(以00-59来表示)

     %s 总秒数。起算时间为1970-01-01 00:00:00 UTC。

     %S 秒(以本地的惯用法来表示)

     %a 星期的缩写。

     %A 星期的完整名称。

     %d 日期(以01-31来表示)。

     %D 日期(含年月日)。

     %m 月份(以01-12来表示)。

     %y 年份(以00-99来表示)。

     %Y 年份(以四位数来表示)。
```

实例：

（1）显示下一天

> date +%Y%m%d --date="+1 day" //显示下一天的日期

（2）-d参数使用  
今年的 11 月 22 日是星期三

> date -d "nov 22"

2周后的日期

> date -d '2 weeks'

(下周一的日期)

> date -d 'next monday'

（明天的日期）或者：date -d tomorrow +%Y%m%d

> date -d next-day +%Y%m%d

(昨天的日期) 或者：date -d yesterday +%Y%m%d

> date -d last-day +%Y%m%d

(上个月是几月)

> date -d last-month +%Y%m

(下个月是几月)

> date -d next-month +%Y%m

## export

export命令用于将shell变量输出为环境变量，或者将shell函数输出为环境变量。

一个变量创建时，它不会自动地为在它之后创建的shell进程所知。而命令export可以向后面的shell传递变量的值。当一个shell脚本调用并执 行时，它不会自动得到原为脚本（调用者）里定义的变量的访问权，除非这些变量已经被显式地设置为可用。export命令可以用于传递一个或多个变量的值到任何后继脚本。

语法

> export(选项)(参数)

选项

```
-f：代表[变量名称]中为函数名称；
-n：删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中；
-p：列出所有的shell赋予程序的环境变量。
```

参数

变量：指定要输出或者删除的环境变量。

实例

一般来说，配置交叉编译工具链的时候需要指定编译工具的路径，此时就需要设置环境变量。

1.  查看已经存在的环境变量：

```
[root@localhost ~]# export
declare -x G_BROKEN_FILENAMES="1"
declare -x HISTSIZE="1000"
declare -x HOME="/root"
declare -x hostname="localhost"
declare -x INPUTRC="/etc/inputrc"
declare -x LANG="zh_CN.UTF-8"
declare -x LESSOPEN="|/usr/bin/lesspipe.sh %s"
declare -x logname="root"
declare -x LS_COLORS="no=00:fi=00:di=01;34:ln=01;36:pi=40;33:so=01;35:bd=40;33;01:cd=40;33;01:or=01;05;37;41:mi=01;05;37;41:ex=01;32:*.cmd=01;32:*.exe=01;32:*.com=01;32:*.btm=01;32:*.bat=01;32:*.sh=01;32:*.csh=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.bz=01;31:*.tz=01;31:*.rpm=01;31:*.cpio=01;31:*.jpg=01;35:*.gif=01;35:*.bmp=01;35:*.xbm=01;35:*.xpm=01;35:*.png=01;35:*.tif=01;35:"
declare -x mail="/var/spool/mail/root"
declare -x OLDPWD
declare -x PATH="/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin"
declare -x pwd="/root"
declare -x SHELL="/bin/bash"
declare -x SHLVL="1"
declare -x SSH_CLIENT="192.168.2.111 2705 22"
declare -x SSH_CONNECTION="192.168.2.111 2705 192.168.2.2 22"
declare -x SSH_TTY="/dev/pts/0"
declare -x TERM="linux"
declare -x USER="root"
```

2.  单独查看PATH环境变量，可用

```
[root@localhost u-boot-sh4]#echo $PATH
/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```

3.  添加PATH环境变量(临时)，可用：

```
[root@localhost u-boot-sh4]#export PATH=/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH
```

再次查看

```
[root@localhost u-boot-sh4]# echo $PATH
/opt/STM/STLinux-2.3/devkit/sh4/bin:/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```

说明添加PATH成功。

上述方法的PATH 在终端关闭 后就会消失。

4.  永久添加环境变量(影响当前用户)

```
#vim ~/.bashrc
export PATH="/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH"
```

5.  永久添加环境变量(影响所有用户)

> vim /etc/profile

在文档最后，添加:

> export PATH="/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH"

保存，退出，然后运行：

> ## source /etc/profile

不报错则成功。

注意事项：  
做了各实验，在/etc/profile, ~/.profile, <sub>/.bashrc中加入新PATH，重启都没有效果，只有使用source才可以，ubunt12.04找到原因，</sub>/.zshrc导致的，因为在zshrc中直接对PATH重新赋值，而没有继承之前的$PATH，导致启动加载完/etc/profile后，PATH又被重新赋值。

## 系统管理

## service

service命令用于对系统服务进行管理，比如启动（start）、停止（stop）、重启（restart）、重新加载配置（reload）、查看状态（status）等。

语法

> service < option > | --status-all | \[ service\_name \[ command | --full-restart \] \]

选项（option）

```
-h：显示帮助信息；
--status-all：显示所服务的状态。
```

参数

-   服务名：自动要控制的服务名，即/etc/init.d目录下的脚本文件名；

-   控制命令：系统服务脚本支持的控制命令。

实例  
当修改了主机名、ip地址等信息时，经常需要把网络重启使之生效。

```
service network status
配置设备：
lo eth0
当前的活跃设备：
lo eth0

service network restart
正在关闭接口 eth0：                                        [  确定  ]
关闭环回接口：                                             [  确定  ]
设置网络参数：                                             [  确定  ]
弹出环回接口：                                             [  确定  ]
弹出界面 eth0：                                            [  确定  ]
```

重启docker

```
[root@localhost bin]# service docker status
Redirecting to /bin/systemctl status  docker.service
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
   Active: active (running) since 一 2019-05-27 09:12:31 CST; 1 months 28 days ago
     Docs: https://docs.docker.com
 Main PID: 4305 (dockerd)
   Memory: 117.6M
   CGroup: /system.slice/docker.service
           ├─ 4305 /usr/bin/dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:5678
           ├─ 4823 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 16379 -container-ip 172.17.0.7 -container-port 6379
           ├─38986 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 13306 -container-ip 172.17.0.6 -container-port 3306
           ├─55861 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 5000 -container-ip 172.17.0.2 -container-port 8081
           ├─85749 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 5001 -container-ip 172.17.0.4 -container-port 8081
           └─88167 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 8081 -container-ip 172.17.0.3 -container-port 8081


service docker restart
停止 MySQL：                                               [  确定  ]
启动 MySQL：                                               [  确定  ]
```

\------关闭、开启防火墙（临时生效，重启后复原）

开启：

> service iptables start

关闭：

> service iptables stop

查看防火墙状态（绿的running表示防火墙开启）

> systemctl status firewalld.service

## chkconfig

chkconfig命令检查、设置系统的各种服务。这是Red Hat公司遵循GPL规则所开发的程序，它可查询操作系统在每一个执行等级中会执行哪些系统服务，其中包括各类常驻服务。谨记chkconfig不是立即自动禁止或激活一个服务，它只是简单的改变了符号连接。

## systemctl

systemctl命令是系统服务管理器指令，它实际上将 service 和 chkconfig 这两个命令组合到一起。

| 任务                 | 旧指令                        | 新指令                                                                                                 |
| -------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| 使某服务自动启动     | chkconfig --level 3 httpd on  | systemctl enable httpd.service                                                                         |
| 使某服务不自动启动   | chkconfig --level 3 httpd off | systemctl disable httpd.service                                                                        |
| 检查服务状态         | service httpd status          | systemctl status httpd.service （服务详细信息） systemctl is-active httpd.service （仅显示是否 Active) |
| 显示所有已启动的服务 | chkconfig --list              | systemctl list-units --type=service                                                                    |
| 启动某服务           | service httpd start           | systemctl start httpd.service                                                                          |
| 停止某服务           | service httpd stop            | systemctl stop httpd.service                                                                           |
| 重启某服务           | service httpd restart         | systemctl restart httpd.service                                                                        |

实例

> 注: nfs-server为系统服务名称

1.  启动nfs服务

> systemctl start nfs-server.service

2.  设置开机自启动

> systemctl enable nfs-server.service

3.  停止开机自启动

> systemctl disable nfs-server.service

4.  查看服务当前状态

> systemctl status nfs-server.service

5.  重新启动某服务

> systemctl restart nfs-server.service

6.  查看所有已启动的服务

> systemctl list -units --type=service

7.  开启防火墙22端口

> iptables -I INPUT -p tcp --dport 22 -j accept

如果仍然有问题，就可能是[SELinux](https://www.cnblogs.com/davidshen/p/8145946.html)导致的

关闭SElinux：

修改/etc/selinux/config文件中的SELINUX=””为disabled，然后重启。

8.  永久关闭防火墙

执行查看防火墙命令

> sudo systemctl status firewalld.service

永久关闭防火墙

> sudo systemctl stop firewalld.service

执行开机禁用防火墙自启命令

> sudo systemctl disable firewalld.service

9.  启动防火墙

> systemctl start firewalld.service

防火墙随系统开启启动

> systemctl enable firewalld.service

## useradd

useradd命令用于Linux中创建的新的系统用户。useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在/etc/passwd文本文件中。

在Slackware中，adduser指令是个script程序，利用交谈的方式取得输入的用户帐号资料，然后再交由真正建立帐号的useradd命令建立新用户，如此可方便管理员建立用户帐号。在Red Hat Linux中，adduser命令则是useradd命令的符号连接，两者实际上是同一个指令。

语法

> useradd(选项)(参数)

选项

```
-c<备注>：加上备注文字。备注文字会保存在passwd的备注栏位中；
-d<登入目录>：指定用户登入时的启始目录；
-D：变更预设值；
-e<有效期限>：指定帐号的有效期限；
-f<缓冲天数>：指定在密码过期后多少天即关闭该帐号；
-g<群组>：指定用户所属的群组；
-G<群组>：指定用户所属的附加群组；
-m：自动建立用户的登入目录；
-M：不要自动建立用户的登入目录；
-n：取消建立以用户名称为名的群组；
-r：建立系统帐号；
-s<shell>：指定用户登入后所使用的shell；
-u<uid>：指定用户id。
```

参数

用户名：要创建的用户名。

实例  
新建用户加入组

> useradd –g sales jack –G company,employees //-g：加入主要组、-G：加入次要组

建立一个新用户账户，并设置ID

> useradd caojh -u 544

需要说明的是，设定ID值时尽量要大于500，以免冲突。因为Linux安装后会建立一些特殊用户，一般0到499之间的值留给bin、mail这样的系统账号。

## ps

```
     ps(process status)，用来查看当前运行的进程状态，一次性查看，如果需要动态连续结果使用top

     linux上进程有5种状态:

     1. 运行(正在运行或在运行队列中等待)

     2. 中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号)

     3. 不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)

     4. 僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)

     5. 停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)

     ps工具标识进程的5种状态码:

     D 不可中断 uninterruptible sleep (usually IO)

     R 运行 runnable (on run queue)

     S 中断 sleeping

     T 停止 traced or stopped

     Z 僵死 a defunct (”zombie”) process

     命令参数：

     -A 显示所有进程

     a 显示所有进程

     -a 显示同一终端下所有进程

     c 显示进程真实名称

     e 显示环境变量

     f 显示进程间的关系

     r 显示当前终端运行的进程

     -aux 显示所有包含其它使用的进程
```

实例：

（1）显示当前所有进程环境变量及进程间关系

> ps -ef

（2）使用管道过滤查看mysql的进程

> ps -ef | grep icweb

（3）显示当前所有进程

> ps -A

（4）与grep联用查找某进程

> ps -aux | grep apache

（5）找出与 cron 与 syslog 这两个服务有关的 PID 号码

> ps aux | grep '(cron|syslog)'

## 文档编辑

## 网络管理

## telnet

telnet命令用于登录远程主机，对远程主机进行管理。

telnet因为采用明文传送报文，安全性不好，很多Linux服务器都不开放telnet服务，而改用更安全的ssh方式了。但仍然有很多别的系统可能采用了telnet方式来提供远程登录，因此弄清楚telnet客户端的使用方式仍是很有必要的。

语法

> telnet(选项)(参数)

选项

```
-8：允许使用8位字符资料，包括输入与输出；
-a：尝试自动登入远端系统；
-b<主机别名>：使用别名指定远端主机名称；
-c：不读取用户专属目录里的.telnetrc文件；
-d：启动排错模式；
-e<脱离字符>：设置脱离字符；
-E：滤除脱离字符；
-f：此参数的效果和指定"-F"参数相同；
-F：使用Kerberos V5认证时，加上此参数可把本地主机的认证数据上传到远端主机；
-k<域名>：使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名；
-K：不自动登入远端主机；
-l<用户名称>：指定要登入远端主机的用户名称；
-L：允许输出8位字符资料；
-n<记录文件>：指定文件记录相关信息；
-r：使用类似rlogin指令的用户界面；
-S<服务类型>：设置telnet连线所需的ip TOS信息；
-x：假设主机有支持数据加密的功能，就使用它；
-X<认证形态>：关闭指定的认证形态。
```

参数

-   远程主机：指定要登录进行管理的远程主机；
-   端口：指定TELNET协议使用的端口号。

实例

判断ip端口是否能ping通：

> telnet ip 端口

```
telnet 192.168.2.10
Trying 192.168.2.10...
Connected to 192.168.2.10 (192.168.2.10).
Escape character is '^]'.

    localhost (Linux release 2.6.18-274.18.1.el5 #1 SMP Thu Feb 9 12:45:44 EST 2012) (1)

login: root
Password: 
Login incorrect
```

## netstat

netstat命令用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况。

语法

> netstat(选项)

选项

```
-a或--all：显示所有连线中的Socket；
-A<网络类型>或--<网络类型>：列出该网络类型连线中的相关地址；
-c或--continuous：持续列出网络状态；
-C或--cache：显示路由器配置的快取信息；
-e或--extend：显示网络其他相关信息；
-F或--fib：显示FIB；
-g或--groups：显示多重广播功能群组组员名单；
-h或--help：在线帮助；
-i或--interfaces：显示网络界面信息表单；
-l或--listening：显示监控中的服务器的Socket；
-M或--masquerade：显示伪装的网络连线；
-n或--numeric：直接使用ip地址，而不通过域名服务器；
-N或--netlink或--symbolic：显示网络硬件外围设备的符号连接名称；
-o或--timers：显示计时器；
-p或--programs：显示正在使用Socket的程序识别码和程序名称；
-r或--route：显示Routing Table；
-s或--statistice：显示网络工作信息统计表；
-t或--tcp：显示TCP传输协议的连线状况；
-u或--udp：显示UDP传输协议的连线状况；
-v或--verbose：显示指令执行过程；
-V或--version：显示版本信息；
-w或--raw：显示RAW传输协议的连线状况；
-x或--unix：此参数的效果和指定"-A unix"参数相同；
--ip或--inet：此参数的效果和指定"-A inet"参数相同。
```

实例  
列出所有端口 (包括监听和未监听的)

> netstat -a #列出所有端口  
> netstat -at #列出所有tcp端口  
> netstat -au #列出所有udp端口

列出所有处于监听状态的 Sockets

> netstat -l #只显示监听端口  
> netstat -lt #只列出所有监听 tcp 端口  
> netstat -lu #只列出所有监听 udp 端口  
> netstat -lx #只列出所有监听 UNIX 端口

显示每个协议的统计信息

> netstat -s 显示所有端口的统计信息  
> netstat -st 显示TCP端口的统计信息  
> netstat -su 显示UDP端口的统计信息

在netstat输出中显示 PID 和进程名称

> netstat -pt

查看端口号为60080的服务

```
[root@localhost nodejs]# netstat -anp |grep 60080
tcp6       0      0 :::60080                :::*                    LISTEN      91260/basechain 
```

## 其他

## cal

```
     可以用户显示公历（阳历）日历如只有一个参数，则表示年份(1-9999)，如有两个参数，则表示月份和年份

     常用参数：

     -3 显示前一月，当前月，后一月三个月的日历

     -m 显示星期一为第一列

     -j 显示在当前年第几天

     -y [year]显示当前年[year]份的日历
```

实例：

（1）显示指定年月日期

> cal 9 2012

（2）显示2013年每个月日历

> cal -y 2013

（3）将星期一做为第一列,显示前中后三月

> cal -3m

26、grep命令  
强大的文本搜索命令，grep(Global Regular Expression Print)全局正则表达式搜索

```
     grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格，则必须被引用，模板后的所有字符串被看作文件名。搜索的结果被送到标准输出，不影响原文件内容。

     命令格式：

     grep [option] pattern file|dir

     常用参数：

     -A n --after-context显示匹配字符后n行

     -B n --before-context显示匹配字符前n行

     -C n --context 显示匹配字符前后n行

     -c --count 计算符合样式的列数

     -i 忽略大小写

     -l 只列出文件内容符合指定的样式的文件名称

     -f 从文件中读取关键词

     -n 显示匹配内容的所在文件中行数

     -R 递归查找文件夹

     grep的规则表达式:

     ^  #锚定行的开始 如：'^grep'匹配所有以grep开头的行。   

     $  #锚定行的结束 如：'grep$'匹配所有以grep结尾的行。   

     .  #匹配一个非换行符的字符 如：'gr.p'匹配gr后接一个任意字符，然后是p。   

     *  #匹配零个或多个先前字符 如：'*grep'匹配所有一个或多个空格后紧跟grep的行。   

     .*   #一起用代表任意字符。  

     []   #匹配一个指定范围内的字符，如'[Gg]rep'匹配Grep和grep。   

     [^]  #匹配一个不在指定范围内的字符，如：'[^A-FH-Z]rep'匹配不包含A-R和T-Z的一个字母开头，紧跟rep的行。   

     \(..\)  #标记匹配字符，如'\(love\)'，love被标记为1。   

     \<      #锚定单词的开始，如:'\<grep'匹配包含以grep开头的单词的行。   

     \>      #锚定单词的结束，如'grep\>'匹配包含以grep结尾的单词的行。   

     x\{m\}  #重复字符x，m次，如：'0\{5\}'匹配包含5个o的行。   

     x\{m,\}  #重复字符x,至少m次，如：'o\{5,\}'匹配至少有5个o的行。   

     x\{m,n\}  #重复字符x，至少m次，不多于n次，如：'o\{5,10\}'匹配5--10个o的行。  

     \w    #匹配文字和数字字符，也就是[A-Za-z0-9]，如：'G\w*p'匹配以G后跟零个或多个文字或数字字符，然后是p。  

     \W    #\w的反置形式，匹配一个或多个非单词字符，如点号句号等。  

     \b    #单词锁定符，如: '\bgrep\b'只匹配grep。
```

实例：

（1）查找指定进程

> ps -ef | grep svn

（2）查找指定进程个数

> ps -ef | grep svn -c

（3）从文件中读取关键词

> cat test1.txt | grep -f key.log

（4）从文件夹中递归查找以grep开头的行，并只列出文件

> grep -lR '^grep' /tmp

（5）查找非x开关的行内容

> grep '<sup>[</sup>x\]' test.txt

（6）显示包含ed或者at字符的内容行

> grep -E 'ed|at' test.txt

## free

```
     显示系统内存使用情况，包括物理内存、交互区内存(swap)和内核缓冲区内存。

     命令参数：

     -b 以Byte显示内存使用情况

     -k 以kb为单位显示内存使用情况

     -m 以mb为单位显示内存使用情况

     -g 以gb为单位显示内存使用情况

     -s<间隔秒数> 持续显示内存

     -t 显示内存使用总合
```

实例：

（1）显示内存使用情况

> free

> free -k

> free -m

（2）以总和的形式显示内存的使用信息

> free -t

（3）周期性查询内存使用情况

> free -s 10

## kill

```
     发送指定的信号到相应进程。不指定型号将发送SIGTERM（15）终止指定进程。如果任无法终止该程序可用“-KILL” 参数，其发送的信号为SIGKILL(9) ，将强制结束进程，使用ps命令或者jobs 命令可以查看进程号。root用户将影响用户的进程，非root用户只能影响自己的进程。

     常用参数：

     -l  信号，若果不加信号的编号参数，则使用“-l”参数会列出全部的信号名称

     -a  当处理当前进程时，不限制命令名和进程号的对应关系

     -p  指定kill 命令只打印相关进程的进程号，而不发送任何信号

     -s  指定发送信号

     -u  指定用户
```

实例：

（1）先使用ps查找进程pro1，然后用kill杀掉

> kill -9 $(ps -ef | grep pro1)

## 好用的学习网址

Linux常用命令大全（非常全！！！）  
[https://www.cnblogs.com/yjd\_hycf\_space/p/7730690.html](https://www.cnblogs.com/yjd_hycf_space/p/7730690.html)

Linux命令手册  
[http://linux.51yip.com](http://linux.51yip.com/)

Linux命令大全  
[http://man.linuxde.net](http://man.linuxde.net/)

软件测试人员必备Linux命令（初、中、高级）  
[https://www.cnblogs.com/Javame/p/3968343.html](https://www.cnblogs.com/Javame/p/3968343.html)