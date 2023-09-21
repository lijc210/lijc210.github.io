import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as s,a as e,b as r,d as l,e as i}from"./app-2dcd7e43.js";const c={},o=i(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1><h2 id="git-commit-规范" tabindex="-1"><a class="header-anchor" href="#git-commit-规范" aria-hidden="true">#</a> Git Commit 规范</h2><p>提交说明的结构如下所示：</p><p>原文：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;[optional scope]: &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>译文：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;类型&gt;[可选 范围]: &lt;描述&gt;

[可选 正文]

[可选 脚注]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Type:</p><ul><li>feat: 新特性或功能（feature）</li><li>fix: 修复 bug</li><li>docs: 文档更新（documentation）</li><li>style: 代码风格或者组件样式更新（不影响代码运行的变动）</li><li>refactor: 代码重构，不引入新功能和缺陷修复</li><li>perf: 优化相关，比如提升性能、体验</li><li>test: 增加测试</li><li>chore: 构建过程或辅助工具的变动</li><li>revert: 回滚到上一个版本</li></ul><h2 id="git-设置代理和取消" tabindex="-1"><a class="header-anchor" href="#git-设置代理和取消" aria-hidden="true">#</a> git 设置代理和取消</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global http.proxy http://127.0.0.1:4455
git config --global https.proxy https://127.0.0.1:4455

git config --global http.proxy &#39;socks5://127.0.0.1:4455&#39;
git config --global https.proxy &#39;socks5://127.0.0.1:4455&#39;

git config --global --unset http.proxy
git config --global --unset https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-初次提交到远程空的仓库" tabindex="-1"><a class="header-anchor" href="#git-初次提交到远程空的仓库" aria-hidden="true">#</a> git 初次提交到远程空的仓库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git remote add origin [仓库地址]
git add .
git commit -m &quot;Initial commit&quot;
git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您使用的是其他分支名称而不是 master，请在 git push 命令中将其替换为您的分支名称。</p><h2 id="git保存用户名和密码" tabindex="-1"><a class="header-anchor" href="#git保存用户名和密码" aria-hidden="true">#</a> git保存用户名和密码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="把git的默认分支master修改成main" tabindex="-1"><a class="header-anchor" href="#把git的默认分支master修改成main" aria-hidden="true">#</a> 把git的默认分支master修改成main</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global init.defaultBranch main

# 修改已创建项目的主分支为main
git branch -M main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitpython中使用代理" tabindex="-1"><a class="header-anchor" href="#gitpython中使用代理" aria-hidden="true">#</a> gitpython中使用代理</h2>`,19),g={href:"https://github.com/gitpython-developers/GitPython/discussions/1458",target:"_blank",rel:"noopener noreferrer"},u=i(`<h2 id="git强制覆盖本地仓库" tabindex="-1"><a class="header-anchor" href="#git强制覆盖本地仓库" aria-hidden="true">#</a> git强制覆盖本地仓库</h2><p>main覆盖本地<br> git fetch --all &amp;&amp; git reset --hard origin/main &amp;&amp; git pull<br> master<br> git fetch --all &amp;&amp; git reset --hard origin/master &amp;&amp; git pull</p><h2 id="git-删除历史记录" tabindex="-1"><a class="header-anchor" href="#git-删除历史记录" aria-hidden="true">#</a> git 删除历史记录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout --orphan &lt;new_branch&gt;
git add -A
git commit -am &quot;Initial commit&quot;
git branch -D master
git branch -m master
git push -f origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将创建一个新的分支，添加所有文件，提交并删除原来的主分支，最后将当前分支重命名为主分支并将其推送到远程仓库。请注意，这将删除所有历史记录，包括分支和标记。</p><h2 id="git-pull报错fatal-refusing-to-merge-unrelated-histories" tabindex="-1"><a class="header-anchor" href="#git-pull报错fatal-refusing-to-merge-unrelated-histories" aria-hidden="true">#</a> git pull报错fatal: refusing to merge unrelated histories</h2><p>git pull命令中添加–allow-unrelated-histories</p><h2 id="git新增一个推送地址" tabindex="-1"><a class="header-anchor" href="#git新增一个推送地址" aria-hidden="true">#</a> git新增一个推送地址</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote set-url --add origin &lt;url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="推送本地dev分支到远程master分支-再切回dev分支" tabindex="-1"><a class="header-anchor" href="#推送本地dev分支到远程master分支-再切回dev分支" aria-hidden="true">#</a> 推送本地dev分支到远程master分支，再切回dev分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout master &amp;&amp; git pull  &amp;&amp; git merge dev &amp;&amp; git push &amp;&amp; git checkout dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function m(h,v){const a=n("ExternalLinkIcon");return d(),s("div",null,[o,e("p",null,[e("a",g,[r("https://github.com/gitpython-developers/GitPython/discussions/1458"),l(a)])]),u])}const x=t(c,[["render",m],["__file","git.html.vue"]]);export{x as default};
