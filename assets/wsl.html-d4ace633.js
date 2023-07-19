import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as n}from"./app-4e5f1847.js";const i={},d=n(`<h1 id="wsl" tabindex="-1"><a class="header-anchor" href="#wsl" aria-hidden="true">#</a> wsl</h1><h2 id="列出wsl子系统" tabindex="-1"><a class="header-anchor" href="#列出wsl子系统" aria-hidden="true">#</a> 列出WSL子系统</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wslconfig /list
wsl --list
wsl -l -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭ubuntu子系统" tabindex="-1"><a class="header-anchor" href="#关闭ubuntu子系统" aria-hidden="true">#</a> 关闭Ubuntu子系统</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wsl --terminate Ubuntu
wsl -t Ubuntu
wsl --shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动wsl" tabindex="-1"><a class="header-anchor" href="#启动wsl" aria-hidden="true">#</a> 启动WSL</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wsl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="限制wsl2内存" tabindex="-1"><a class="header-anchor" href="#限制wsl2内存" aria-hidden="true">#</a> 限制wsl2内存</h2><p>C:\\Users\\YourUsername\\.wslconfig</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[wsl2]
memory=4GB  # Limits VM memory in WSL 2GB
swap=4GB
localhostForwarding=true
processors=4 # Makes the WSL 2 VM use two virtual processors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何在局域网的其他主机上中访问本机的wsl2" tabindex="-1"><a class="header-anchor" href="#如何在局域网的其他主机上中访问本机的wsl2" aria-hidden="true">#</a> 如何在局域网的其他主机上中访问本机的WSL2</h2><p>listenport 后面跟本机端口（你提供给手机访问的端口），connectaddress 后面跟WSL2的ip地址，connectport 后面跟WSL2里服务使用的端口。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netsh interface portproxy add v4tov4 listenport=15603 connectaddress= 172.26.35.90 connectport=15603 listenaddress=0.0.0.0 protocol=tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),r=[d];function t(l,c){return s(),a("div",null,r)}const v=e(i,[["render",t],["__file","wsl.html.vue"]]);export{v as default};
