import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,d as a}from"./app-DzFNIPv7.js";const t={},l=a(`<h1 id="clash" tabindex="-1"><a class="header-anchor" href="#clash"><span>clash</span></a></h1><h2 id="docker-clash安装配置" tabindex="-1"><a class="header-anchor" href="#docker-clash安装配置"><span>docker clash安装配置</span></a></h2><p>docker配置 ~/.config/docker-compose.yml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
  clash:
    image: ghcr.io/dreamacro/clash
    restart: always
    volumes:
      - ~/.config/clash/config.yaml:/root/.config/clash/config.yaml:ro
    ports:
      - &quot;7890:7890&quot;
      - &quot;7891:7891&quot;
      - &quot;9090:9090&quot; # The External Controller (RESTful API)
    network_mode: &quot;bridge&quot;
    restart: always
  clash-ui:
    image: haishanh/yacd
    container_name: clash-ui
    ports:
      - 1234:80
    network_mode: &quot;bridge&quot;
    restart: always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 docker-compose up -d 管理界面 http://127.0.0.1:9090/ui</p><h2 id="linux下配置定时更新订阅" tabindex="-1"><a class="header-anchor" href="#linux下配置定时更新订阅"><span>linux下配置定时更新订阅</span></a></h2><p>clash.sh</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/usr/bin/env bash

# 订阅链接地址
SUBSCRIBE=&quot;&quot;
# web-ui存放目录，留空则保持默认不修改
WEB_UI=&quot;&quot;
# API 端口，留空则保持默认不修改
CONTROLLER_API_PROT=&quot;9090&quot;
# API 口令，留空则保持默认不修改
SECRET=&quot;&quot;

CLASH_CONFIG=&quot;~/.config/clash/config.yaml&quot;

if [ -z &quot;\${SUBSCRIBE}&quot; ]; then
    echo &quot;Subscription address cannot be empty&quot;
    exit 1
fi

sudo systemctl stop clash

wget --no-proxy -O \${CLASH_CONFIG} \${SUBSCRIBE}

if [ -n &quot;\${WEB_UI}&quot; ]; then
sed -i &quot;s?^#\\{0,1\\} \\{0,1\\}external-ui.*?external-ui: \${WEB_UI}?&quot; \${CLASH_CONFIG}
fi

if [ -n &quot;\${CONTROLLER_API_PROT}&quot; ]; then
sed -i &quot;s?^external-controller.*?external-controller: &#39;0.0.0.0:\${CONTROLLER_API_PROT}&#39;?&quot; \${CLASH_CONFIG}
fi

if [ -n &quot;\${SECRET}&quot; ]; then
sed -i &quot;s?^secret.*?secret: &#39;\${SECRET}&#39;?&quot; \${CLASH_CONFIG}
fi

sudo systemctl start clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加定时任务</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>*/30 * * * * bash ~/.config/clash/clash.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),s=[l];function c(r,d){return n(),i("div",null,s)}const m=e(t,[["render",c],["__file","clash.html.vue"]]),v=JSON.parse(`{"path":"/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/clash.html","title":"clash","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["工具"],"tag":["clash"],"description":"clash docker clash安装配置 docker配置 ~/.config/docker-compose.yml 启动 docker-compose up -d 管理界面 http://127.0.0.1:9090/ui linux下配置定时更新订阅 clash.sh 添加定时任务","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/clash.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"clash"}],["meta",{"property":"og:description","content":"clash docker clash安装配置 docker配置 ~/.config/docker-compose.yml 启动 docker-compose up -d 管理界面 http://127.0.0.1:9090/ui linux下配置定时更新订阅 clash.sh 添加定时任务"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T17:45:45.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"clash"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T17:45:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"clash\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T17:45:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"docker clash安装配置","slug":"docker-clash安装配置","link":"#docker-clash安装配置","children":[]},{"level":2,"title":"linux下配置定时更新订阅","slug":"linux下配置定时更新订阅","link":"#linux下配置定时更新订阅","children":[]}],"git":{"createdTime":1710697545000,"updatedTime":1710697545000,"contributors":[{"name":"sampan","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":0.76,"words":227},"filePathRelative":"编程/工具/clash.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>docker clash安装配置</h2>\\n<p>docker配置\\n~/.config/docker-compose.yml</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>version: '3'\\nservices:\\n  clash:\\n    image: ghcr.io/dreamacro/clash\\n    restart: always\\n    volumes:\\n      - ~/.config/clash/config.yaml:/root/.config/clash/config.yaml:ro\\n    ports:\\n      - \\"7890:7890\\"\\n      - \\"7891:7891\\"\\n      - \\"9090:9090\\" # The External Controller (RESTful API)\\n    network_mode: \\"bridge\\"\\n    restart: always\\n  clash-ui:\\n    image: haishanh/yacd\\n    container_name: clash-ui\\n    ports:\\n      - 1234:80\\n    network_mode: \\"bridge\\"\\n    restart: always\\n</code></pre></div>","autoDesc":true}`);export{m as comp,v as data};
