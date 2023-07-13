import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as a,a as e,b as n,d as t,e as r}from"./app-8c60f79f.js";const c={},u=e("h1",{id:"clash",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clash","aria-hidden":"true"},"#"),n(" clash")],-1),v=e("h2",{id:"linux下配置定时更新订阅",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux下配置定时更新订阅","aria-hidden":"true"},"#"),n(" linux下配置定时更新订阅")],-1),o={href:"http://clash.sh",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env bash

# 订阅链接地址
SUBSCRIBE=&quot;&quot;
# web-ui存放目录，留空则保持默认不修改
WEB_UI=&quot;&quot;
# API 端口，留空则保持默认不修改
CONTROLLER_API_PROT=&quot;&quot;
# API 口令，留空则保持默认不修改
SECRET=&quot;&quot;

CLASH_CONFIG=&quot;/etc/clash/config.yaml&quot;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加定时任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*/30 * * * * bash ~/clash.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function b(h,_){const i=l("ExternalLinkIcon");return d(),a("div",null,[u,v,e("p",null,[e("a",o,[n("clash.sh"),t(i)])]),m])}const f=s(c,[["render",b],["__file","clash.html.vue"]]);export{f as default};
