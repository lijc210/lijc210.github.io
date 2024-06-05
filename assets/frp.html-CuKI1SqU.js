import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-DySYHPss.js";const t={},i=e(`<h1 id="反向代理应用frp" tabindex="-1"><a class="header-anchor" href="#反向代理应用frp"><span>反向代理应用frp</span></a></h1><p>拥有公网IP的情况下，可以使用frp来实现内网机器的端口映射和访问。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>linux</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget https://github.com/fatedier/frp/releases/download/v0.57.0/frp_0.57.0_linux_amd64.tar.gz
tar -zxvf frp_0.57.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mac</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget https://github.com/fatedier/frp/releases/download/v0.57.0/frp_0.57.0_darwin_arm64.tar.gz
tar -zxvf frp_0.57.0_darwin_arm64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过tcp访问内网机器端口" tabindex="-1"><a class="header-anchor" href="#通过tcp访问内网机器端口"><span>通过tcp访问内网机器端口</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>公网服务器上编辑frps.toml
bindPort <span class="token operator">=</span> <span class="token number">7000</span>

内网服务器上编辑frpc.toml
serverAddr <span class="token operator">=</span> <span class="token string">&quot;x.x.x.x&quot;</span> <span class="token comment"># 公网服务器的 IP 地址</span>
serverPort <span class="token operator">=</span> <span class="token number">7000</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span>proxies<span class="token punctuation">]</span><span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;ssh&quot;</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;tcp&quot;</span>
localIP <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>
localPort <span class="token operator">=</span> <span class="token number">22</span>
remotePort <span class="token operator">=</span> <span class="token number">2222</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span>proxies<span class="token punctuation">]</span><span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;web&quot;</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;tcp&quot;</span>
localIP <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>
localPort <span class="token operator">=</span> <span class="token number">5500</span>
remotePort <span class="token operator">=</span> <span class="token number">5555</span>

<span class="token comment"># localIP 和 localPort 配置为需要从公网访问的内网服务的地址和端口。</span>
<span class="token comment"># remotePort 表示在 frp 服务端监听的端口，访问此端口的流量将被转发到本地服务的相应端口。</span>

启动 frps 和 frpc
./frps <span class="token parameter variable">-c</span> frps.toml
./frpc <span class="token parameter variable">-c</span> frpc.toml

使用以下命令通过 SSH 访问内网机器，假设用户名为 test：
<span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">Port</span><span class="token operator">=</span><span class="token number">2222</span> test@x.x.x.x

使用以下命令通过 Web 服务访问内网机器，假设服务运行在 <span class="token number">5555</span> 端口：
<span class="token function">curl</span> http://x.x.x.x:5555

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过自定义域名访问内网的-web-服务" tabindex="-1"><a class="header-anchor" href="#通过自定义域名访问内网的-web-服务"><span>通过自定义域名访问内网的 Web 服务</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>公网服务器上编辑frps.toml
bindPort <span class="token operator">=</span> <span class="token number">7000</span>

内网服务器上编辑frpc.toml
serverAddr <span class="token operator">=</span> <span class="token string">&quot;x.x.x.x&quot;</span> <span class="token comment"># 公网服务器的 IP 地址</span>
serverPort <span class="token operator">=</span> <span class="token number">7000</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span>proxies<span class="token punctuation">]</span><span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;web&quot;</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;http&quot;</span>
localIP <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>
localPort <span class="token operator">=</span> <span class="token number">80</span>
customDomains <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;www.yourdomain.com&quot;</span><span class="token punctuation">]</span>

启动 frps 和 frpc
./frps <span class="token parameter variable">-c</span> frps.toml
./frpc <span class="token parameter variable">-c</span> frpc.toml

将 www.yourdomain.com的域名 A 记录解析到服务器的 IP 地址 x.x.x.x

访问 http://www.yourdomain.com 即可访问内网的 Web 服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理上网-无法打开被强的网站" tabindex="-1"><a class="header-anchor" href="#代理上网-无法打开被强的网站"><span>代理上网 （无法打开被强的网站）</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>公网服务器上编辑frps.toml
bindPort <span class="token operator">=</span> <span class="token number">7000</span>

内网服务器上编辑frpc.toml
serverAddr <span class="token operator">=</span> <span class="token string">&quot;x.x.x.x&quot;</span> <span class="token comment"># 公网服务器的 IP 地址</span>
server_port <span class="token operator">=</span> <span class="token number">7000</span> 

<span class="token punctuation">[</span><span class="token punctuation">[</span>proxies<span class="token punctuation">]</span><span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;plugin_http_proxy&quot;</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;tcp&quot;</span>
remotePort <span class="token operator">=</span> <span class="token number">6004</span>
<span class="token punctuation">[</span>proxies.plugin<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;http_proxy&quot;</span>
httpUser <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
httpPassword <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span>proxies<span class="token punctuation">]</span><span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;plugin_socks5&quot;</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;tcp&quot;</span>
remotePort <span class="token operator">=</span> <span class="token number">6005</span>
<span class="token punctuation">[</span>proxies.plugin<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;socks5&quot;</span>
username <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>
password <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>

启动 frps 和 frpc
./frps <span class="token parameter variable">-c</span> frps.toml
./frpc <span class="token parameter variable">-c</span> frpc.toml

<span class="token comment"># 设置代理</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://abc:abc@x.x.x.x:6004
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token variable">$http_proxy</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">all_proxy</span><span class="token operator">=</span>socks5://abc:abc@x.x.x.x:6005
<span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">&quot;localhost,127.0.0.1,x.x.x.x&quot;</span>

<span class="token function">wget</span> https://www.baidu.com 可以代理访问
<span class="token function">wget</span> https://www.google.com 无法打开被强的网站，因为没有伪装加密

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function p(o,r){return a(),s("div",null,l)}const u=n(t,[["render",p],["__file","frp.html.vue"]]),m=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/frp.html","title":"反向代理应用frp","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2024-04-02T00:00:00.000Z","category":["工具"],"tag":["frp"],"description":"反向代理应用frp 拥有公网IP的情况下，可以使用frp来实现内网机器的端口映射和访问。 安装 linux mac 通过tcp访问内网机器端口 通过自定义域名访问内网的 Web 服务 代理上网 （无法打开被强的网站）","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/frp.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"反向代理应用frp"}],["meta",{"property":"og:description","content":"反向代理应用frp 拥有公网IP的情况下，可以使用frp来实现内网机器的端口映射和访问。 安装 linux mac 通过tcp访问内网机器端口 通过自定义域名访问内网的 Web 服务 代理上网 （无法打开被强的网站）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T11:22:56.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"frp"}],["meta",{"property":"article:published_time","content":"2024-04-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-28T11:22:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"反向代理应用frp\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-28T11:22:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"通过tcp访问内网机器端口","slug":"通过tcp访问内网机器端口","link":"#通过tcp访问内网机器端口","children":[]},{"level":2,"title":"通过自定义域名访问内网的 Web 服务","slug":"通过自定义域名访问内网的-web-服务","link":"#通过自定义域名访问内网的-web-服务","children":[]},{"level":2,"title":"代理上网 （无法打开被强的网站）","slug":"代理上网-无法打开被强的网站","link":"#代理上网-无法打开被强的网站","children":[]}],"git":{"createdTime":1714303376000,"updatedTime":1714303376000,"contributors":[{"name":"lijc210","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":1.67,"words":501},"filePathRelative":"编程/工具/frp.md","localizedDate":"2024年4月2日","excerpt":"\\n<p>拥有公网IP的情况下，可以使用frp来实现内网机器的端口映射和访问。</p>\\n<h2>安装</h2>\\n<p>linux</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>wget https://github.com/fatedier/frp/releases/download/v0.57.0/frp_0.57.0_linux_amd64.tar.gz\\ntar -zxvf frp_0.57.0_linux_amd64.tar.gz\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
