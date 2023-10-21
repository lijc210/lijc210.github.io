import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as t,a as e,b as n,d as s,e as l}from"./app-fe88c2a9.js";const c={},o=l(`<h1 id="clash" tabindex="-1"><a class="header-anchor" href="#clash" aria-hidden="true">#</a> clash</h1><h2 id="docker-clash安装配置" tabindex="-1"><a class="header-anchor" href="#docker-clash安装配置" aria-hidden="true">#</a> docker clash安装配置</h2><p>docker配置<br> ~/.config/docker-compose.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=e("br",null,null,-1),v=e("br",null,null,-1),m=e("br",null,null,-1),b={href:"http://127.0.0.1:9090/ui",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"linux下配置定时更新订阅",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux下配置定时更新订阅","aria-hidden":"true"},"#"),n(" linux下配置定时更新订阅")],-1),_={href:"http://clash.sh",target:"_blank",rel:"noopener noreferrer"},q=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env bash

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加定时任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*/30 * * * * bash ~/.config/clash/clash.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function p(f,x){const i=a("ExternalLinkIcon");return r(),t("div",null,[o,e("p",null,[n("启动"),u,n(" docker-compose up -d"),v,n(" 管理界面"),m,e("a",b,[n("http://127.0.0.1:9090/ui"),s(i)])]),h,e("p",null,[e("a",_,[n("clash.sh"),s(i)])]),q])}const E=d(c,[["render",p],["__file","clash.html.vue"]]);export{E as default};
