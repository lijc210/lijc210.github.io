import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-DSAv1yHq.js";const n={},t=e(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h1><h2 id="git-commit-规范" tabindex="-1"><a class="header-anchor" href="#git-commit-规范"><span>Git Commit 规范</span></a></h2><p>提交说明的结构如下所示：</p><p>原文：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;type&gt;[optional scope]: &lt;description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[optional body]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[optional footer(s)]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>译文：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;类型&gt;[可选 范围]: &lt;描述&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[可选 正文]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[可选 脚注]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Type:</p><ul><li>feat: 新特性或功能（feature）</li><li>fix: 修复 bug</li><li>docs: 文档更新（documentation）</li><li>style: 代码风格或者组件样式更新（不影响代码运行的变动）</li><li>refactor: 代码重构，不引入新功能和缺陷修复</li><li>perf: 优化相关，比如提升性能、体验</li><li>test: 增加测试</li><li>chore: 构建过程或辅助工具的变动</li><li>revert: 回滚到上一个版本</li></ul><h2 id="git-设置代理和取消" tabindex="-1"><a class="header-anchor" href="#git-设置代理和取消"><span>git 设置代理和取消</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://127.0.0.1:4455</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://127.0.0.1:4455</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;socks5://127.0.0.1:4455&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;socks5://127.0.0.1:4455&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-初次提交到远程空的仓库" tabindex="-1"><a class="header-anchor" href="#git-初次提交到远程空的仓库"><span>git 初次提交到远程空的仓库</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [仓库地址]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Initial commit&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您使用的是其他分支名称而不是 master，请在 git push 命令中将其替换为您的分支名称。</p><h2 id="git保存用户名和密码" tabindex="-1"><a class="header-anchor" href="#git保存用户名和密码"><span>git保存用户名和密码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global credential.helper store</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="把git的默认分支master修改成main" tabindex="-1"><a class="header-anchor" href="#把git的默认分支master修改成main"><span>把git的默认分支master修改成main</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git config --global init.defaultBranch main # 修改本地配置文件</span></span>
<span class="line"><span>git branch -M main # 修改已创建项目的主分支为main</span></span>
<span class="line"><span>git push -u origin main #  更新远程仓库</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitpython中使用代理" tabindex="-1"><a class="header-anchor" href="#gitpython中使用代理"><span>gitpython中使用代理</span></a></h2><p>https://github.com/gitpython-developers/GitPython/discussions/1458</p><h2 id="git强制覆盖本地仓库" tabindex="-1"><a class="header-anchor" href="#git强制覆盖本地仓库"><span>git强制覆盖本地仓库</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>main覆盖本地</span></span>
<span class="line"><span>git fetch --all &amp;&amp; git reset --hard origin/main &amp;&amp; git pull</span></span>
<span class="line"><span>master</span></span>
<span class="line"><span>git fetch --all &amp;&amp; git reset --hard origin/master &amp;&amp; git pull</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git强制提交本地分支覆盖远程分支" tabindex="-1"><a class="header-anchor" href="#git强制提交本地分支覆盖远程分支"><span>git强制提交本地分支覆盖远程分支</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git push origin 分支名 --force</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="git-删除历史记录" tabindex="-1"><a class="header-anchor" href="#git-删除历史记录"><span>git 删除历史记录</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git checkout --orphan &lt;new_branch&gt;</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -am &quot;Initial commit&quot;</span></span>
<span class="line"><span>git branch -D master</span></span>
<span class="line"><span>git branch -m master</span></span>
<span class="line"><span>git push -f origin master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将创建一个新的分支，添加所有文件，提交并删除原来的主分支，最后将当前分支重命名为主分支并将其推送到远程仓库。请注意，这将删除所有历史记录，包括分支和标记。</p><h2 id="git-pull报错fatal-refusing-to-merge-unrelated-histories" tabindex="-1"><a class="header-anchor" href="#git-pull报错fatal-refusing-to-merge-unrelated-histories"><span>git pull报错fatal: refusing to merge unrelated histories</span></a></h2><p>git pull命令中添加–allow-unrelated-histories</p><h2 id="git新增一个推送地址" tabindex="-1"><a class="header-anchor" href="#git新增一个推送地址"><span>git新增一个推送地址</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git remote set-url --add origin &lt;url&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="推送本地dev分支到远程master分支-再切回dev分支" tabindex="-1"><a class="header-anchor" href="#推送本地dev分支到远程master分支-再切回dev分支"><span>推送本地dev分支到远程master分支，再切回dev分支</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git checkout master &amp;&amp; git pull  &amp;&amp; git merge dev &amp;&amp; git push &amp;&amp; git checkout dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="git-删除历史提交" tabindex="-1"><a class="header-anchor" href="#git-删除历史提交"><span>git 删除历史提交</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git rebase -i HEAD~1</span></span>
<span class="line"><span># 其中N为要删除的提交的个数</span></span>
<span class="line"><span>git push -f origin master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-重命名分支" tabindex="-1"><a class="header-anchor" href="#git-重命名分支"><span>git 重命名分支</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git branch -m master main</span></span>
<span class="line"><span>git push origin HEAD:main</span></span>
<span class="line"><span>git push origin --delete master</span></span>
<span class="line"><span># 可能是默认分支删除不掉，需要登陆到平台修改默认分支</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),l=[t];function r(h,p){return a(),s("div",null,l)}const c=i(n,[["render",r],["__file","git.html.vue"]]),o=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/git.html","title":"git","lang":"zh-CN","frontmatter":{"icon":"fa-solid fa-book-open-reader","date":"2022-01-01T00:00:00.000Z","category":["工具"],"tag":["git"],"description":"git Git Commit 规范 提交说明的结构如下所示： 原文： 译文： Type: feat: 新特性或功能（feature） fix: 修复 bug docs: 文档更新（documentation） style: 代码风格或者组件样式更新（不影响代码运行的变动） refactor: 代码重构，不引入新功能和缺陷修复 perf: 优化相关，比如...","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/git.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"git"}],["meta",{"property":"og:description","content":"git Git Commit 规范 提交说明的结构如下所示： 原文： 译文： Type: feat: 新特性或功能（feature） fix: 修复 bug docs: 文档更新（documentation） style: 代码风格或者组件样式更新（不影响代码运行的变动） refactor: 代码重构，不引入新功能和缺陷修复 perf: 优化相关，比如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T02:43:31.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T02:43:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-26T02:43:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"Git Commit 规范","slug":"git-commit-规范","link":"#git-commit-规范","children":[]},{"level":2,"title":"git 设置代理和取消","slug":"git-设置代理和取消","link":"#git-设置代理和取消","children":[]},{"level":2,"title":"git 初次提交到远程空的仓库","slug":"git-初次提交到远程空的仓库","link":"#git-初次提交到远程空的仓库","children":[]},{"level":2,"title":"git保存用户名和密码","slug":"git保存用户名和密码","link":"#git保存用户名和密码","children":[]},{"level":2,"title":"把git的默认分支master修改成main","slug":"把git的默认分支master修改成main","link":"#把git的默认分支master修改成main","children":[]},{"level":2,"title":"gitpython中使用代理","slug":"gitpython中使用代理","link":"#gitpython中使用代理","children":[]},{"level":2,"title":"git强制覆盖本地仓库","slug":"git强制覆盖本地仓库","link":"#git强制覆盖本地仓库","children":[]},{"level":2,"title":"git强制提交本地分支覆盖远程分支","slug":"git强制提交本地分支覆盖远程分支","link":"#git强制提交本地分支覆盖远程分支","children":[]},{"level":2,"title":"git 删除历史记录","slug":"git-删除历史记录","link":"#git-删除历史记录","children":[]},{"level":2,"title":"git pull报错fatal: refusing to merge unrelated histories","slug":"git-pull报错fatal-refusing-to-merge-unrelated-histories","link":"#git-pull报错fatal-refusing-to-merge-unrelated-histories","children":[]},{"level":2,"title":"git新增一个推送地址","slug":"git新增一个推送地址","link":"#git新增一个推送地址","children":[]},{"level":2,"title":"推送本地dev分支到远程master分支，再切回dev分支","slug":"推送本地dev分支到远程master分支-再切回dev分支","link":"#推送本地dev分支到远程master分支-再切回dev分支","children":[]},{"level":2,"title":"git 删除历史提交","slug":"git-删除历史提交","link":"#git-删除历史提交","children":[]},{"level":2,"title":"git 重命名分支","slug":"git-重命名分支","link":"#git-重命名分支","children":[]}],"git":{"createdTime":1710697545000,"updatedTime":1721961811000,"contributors":[{"name":"sampan","email":"lijc210@163.com","commits":3},{"name":"lijc210","email":"lijc210@163.com","commits":2}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"编程/工具/git.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>Git Commit 规范</h2>\\n<p>提交说明的结构如下所示：</p>\\n<p>原文：</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>&lt;type&gt;[optional scope]: &lt;description&gt;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>[optional body]</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>[optional footer(s)]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,o as data};