import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as t,a as e,b as i,d as a,e as l}from"./app-1d11dd94.js";const o={},c=e("h1",{id:"sftp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sftp","aria-hidden":"true"},"#"),i(" sftp")],-1),u=e("p",null,"「Linux 命令详解」这个系列的文章将会介绍 Linux/Unix/macOS 系统中使用到的常用命令，包括该命令的简单介绍、常用参数解释以及最佳实践，如果需要快速使用这个命令，直接跳到最佳实践部分即可。",-1),m=e("p",null,"「Linux 命令详解」系列文章：",-1),p={href:"https://link.zhihu.com/?target=http%3A//jiayuanzhang.com/post/linux-sftp-tutorial/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"一、介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、介绍","aria-hidden":"true"},"#"),i(" 一、介绍")],-1),h={href:"https://link.zhihu.com/?target=http%3A//jiayuanzhang.com/post/linux-sftp-tutorial/%23fn%3A1",target:"_blank",rel:"noopener noreferrer"},g=l(`<figure><img src="https://pic3.zhimg.com/v2-e634bd69cc808310fe0380199dee9c52_b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>与 FTP 协议相比，SFTP 在客户端与服务器间提供了一种更为安全的文件传输方式，如果你还在使用 FTP 来进行文件传输，强烈建议切换到更为安全的 SFTP 上来。</p><p>本篇文章将会介绍 SFTP 的链接，以及在交互式命令行中的一些常用命令，并对一些参数进行解释，最后给出实际使用中的最佳实践。目前已经有很多 GUI 客户端支持 SFTP 协议，但是不在本篇文章的讨论范围之内。</p><p>因为 SFTP 是基于 SSH 协议的，所以默认的身份认证方法与 SSH 协议保持一致。通常我们使用 SSH Key 来进行连接，如果你已经可以使用 SSH 连接到远程服务器上，那么可以使用以下命令来连接 SFTP：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp user_name@remote_server_address[:path]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果远程服务器自定义了连接的端口，可以使用 <code>-P</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp -P remote_port user_name@remote_server_address[:path]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接成功后将进入一个 SFTP 的解释器，可以发现命令行提示符变成了 <code>sftp&gt;</code>，使用 <code>exit</code> 命令可以退出连接。</p><p>如果连接地址存在 <code>path</code> 并且 <code>path</code> 不是一个目录，那么 SFTP 会直接从服务器端取回这个文件。</p><h2 id="三、连接参数详解" tabindex="-1"><a class="header-anchor" href="#三、连接参数详解" aria-hidden="true">#</a> 三、连接参数详解</h2><ul><li><code>-B</code>: buffer_size，制定传输 buffer 的大小，更大的 buffer 会消耗更多的内存，默认为 32768 bytes；</li><li><code>-P</code>: port，制定连接的端口号；</li><li><code>-R</code>: num_requests，制定一次连接的请求数，可以略微提升传输速度，但是会增加内存的使用量。</li></ul><h2 id="四、目录管理" tabindex="-1"><a class="header-anchor" href="#四、目录管理" aria-hidden="true">#</a> 四、目录管理</h2><p>在 SFTP 解释器中可以使用 <code>help</code> 命令来查看帮助文档。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; help
Available commands:
bye                                Quit sftp
cd path                            Change remote directory to &#39;path&#39;
chgrp grp path                     Change group of file &#39;path&#39; to &#39;grp&#39;
chmod mode path                    Change permissions of file &#39;path&#39; to &#39;mode&#39;
chown own path                     Change owner of file &#39;path&#39; to &#39;own&#39;
df [-hi] [path]                    Display statistics for current directory or
                                   filesystem containing &#39;path&#39;
exit                               Quit sftp
get [-afPpRr] remote [local]       Download file
reget [-fPpRr] remote [local]      Resume download file
reput [-fPpRr] [local] remote      Resume upload file
help                               Display this help text
lcd path                           Change local directory to &#39;path&#39;
lls [ls-options [path]]            Display local directory listing
lmkdir path                        Create local directory
ln [-s] oldpath newpath            Link remote file (-s for symlink)
lpwd                               Print local working directory
ls [-1afhlnrSt] [path]             Display remote directory listing
lumask umask                       Set local umask to &#39;umask&#39;
mkdir path                         Create remote directory
progress                           Toggle display of progress meter
put [-afPpRr] local [remote]       Upload file
pwd                                Display remote working directory
quit                               Quit sftp
rename oldpath newpath             Rename remote file
rm path                            Delete remote file
rmdir path                         Remove remote directory
symlink oldpath newpath            Symlink remote file
version                            Show SFTP version
!command                           Execute &#39;command&#39; in local shell
!                                  Escape to local shell
?                                  Synonym for help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SFTP 解释器中预置了常用的命令，但是没有自带的 Bash 来得丰富。</p><p>1）显示当前的工作目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; pwd
Remote working directory: /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2）查看当前目录的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; ls
Summary.txt     info.html       temp.txt        testDirectory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）使用 <code>-la</code> 参数可以以列表形式查看，并显示隐藏文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; ls -la
drwxr-xr-x    5 demouser   demouser       4096 Aug 13 15:11 .
drwxr-xr-x    3 root       root           4096 Aug 13 15:02 ..
-rw-------    1 demouser   demouser          5 Aug 13 15:04 .bash_history
-rw-r--r--    1 demouser   demouser        220 Aug 13 15:02 .bash_logout
-rw-r--r--    1 demouser   demouser       3486 Aug 13 15:02 .bashrc
drwx------    2 demouser   demouser       4096 Aug 13 15:04 .cache
-rw-r--r--    1 demouser   demouser        675 Aug 13 15:02 .profile
. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）切换目录：</p><p>5）建立文件夹：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; mkdir anotherDirectory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上的命令都是用来操作远程服务器的，如果想要操作本地目录呢？只需要在每个命令前添加 <code>l</code>即可，例如显示本地操作目录下的文件：</p><p>使用 <code>!</code> 可以直接运行 Shell 中的指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; !df -h
Filesystem      Size   Used  Avail Capacity iused               ifree %iused  Mounted on
/dev/disk1s1   466Gi  360Gi  101Gi    79% 3642919 9223372036851132888    0%   /
devfs          336Ki  336Ki    0Bi   100%    1162                   0  100%   /dev
/dev/disk1s4   466Gi  4.0Gi  101Gi     4%       5 9223372036854775802    0%   /private/var/vm
map -hosts       0Bi    0Bi    0Bi   100%       0                   0  100%   /net
map auto_home    0Bi    0Bi    0Bi   100%       0                   0  100%   /home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、传输文件" tabindex="-1"><a class="header-anchor" href="#五、传输文件" aria-hidden="true">#</a> 五、传输文件</h2><h2 id="_5-1-从远程服务器拉取文件" tabindex="-1"><a class="header-anchor" href="#_5-1-从远程服务器拉取文件" aria-hidden="true">#</a> 5.1 从远程服务器拉取文件</h2><p>使用 <code>get</code> 命令可以从远程服务器拉取文件到本地：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; get remoteFile [newName]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不指定 <code>newName</code>，将使用和远程服务器相同的文件名。</p><p>使用 <code>-r</code> 参数可以拉取整个目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; get -r remoteDirectory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-2-从本地上传文件到服务器" tabindex="-1"><a class="header-anchor" href="#_5-2-从本地上传文件到服务器" aria-hidden="true">#</a> 5.2 从本地上传文件到服务器</h2><p>使用 <code>put</code> 命令可以从本地上传文件到服务器：</p><p>同样的，可以使用 <code>-r</code> 参数来上传整个目录，但是有一点要注意，<strong>如果服务器上不存在这个目录需要首先新建</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp&gt; mkdir folderName
sftp&gt; put -r folderName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、最佳实践" tabindex="-1"><a class="header-anchor" href="#六、最佳实践" aria-hidden="true">#</a> 六、最佳实践</h2><p>1）连接远程服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp remote_user@remote_host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）使用端口进行连接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sftp -P remote_port remote_user@remote_host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）从远程服务器拉取文件</p><p>4）上传本地文件到服务器</p><p>5）查看远程服务器目录内容</p><p>6）查看本地目录内容</p><p>7）执行本地 Shell 命令</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),b={href:"https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"},f={href:"https://link.zhihu.com/?target=https%3A//www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server",target:"_blank",rel:"noopener noreferrer"};function x(_,S){const n=r("ExternalLinkIcon");return s(),t("div",null,[c,u,m,e("ul",null,[e("li",null,[e("a",p,[i("Linux命令详解：SFTP"),a(n)])])]),v,e("p",null,[i("SFTP（Secure File Transfer Protocol，安全文件传输协议）是一种基于可靠数据流（data stream），提供文件存取和管理的网络传输协议，它在网络协议层的结构如下图"),e("a",h,[i("1"),a(n)]),i("所示：")]),g,e("ul",null,[e("li",null,[e("a",b,[i("SSH File Transfer Protocol"),a(n)])]),e("li",null,[e("a",f,[i("How To Use SFTP to Securely Transfer Files with a Remote Server"),a(n)])])])])}const k=d(o,[["render",x],["__file","sftp.html.vue"]]);export{k as default};
