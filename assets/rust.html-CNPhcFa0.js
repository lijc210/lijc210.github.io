import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,d as r}from"./app-DzFNIPv7.js";const s={},n=r(`<h1 id="rust" tabindex="-1"><a class="header-anchor" href="#rust"><span>rust</span></a></h1><h2 id="rust-教程" tabindex="-1"><a class="header-anchor" href="#rust-教程"><span>rust 教程</span></a></h2><ul><li><a href="https://course.rs/" target="_blank" rel="noopener noreferrer">rust 圣言</a></li><li><a href="https://www.runoob.com/rust/rust-tutorial.html" target="_blank" rel="noopener noreferrer">rust 菜鸟教程</a></li></ul><h2 id="rustlings-练习" tabindex="-1"><a class="header-anchor" href="#rustlings-练习"><span>rustlings 练习</span></a></h2><p>MacOS/Linux</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl -L https://raw.githubusercontent.com/rust-lang/rustlings/main/install.sh | bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行成功之后，当前目录会有rustlings，使用 vscode 打开此文件 在此目录终端运行rustlings watch，根据提示修改代码，保存会自动验证，成功后根据提示练习下一题 在rustlings watch下输入 hint 可以获得提示。</p><h2 id="rust-安装" tabindex="-1"><a class="header-anchor" href="#rust-安装"><span>rust 安装</span></a></h2><p>在 Linux 或 macOS $ curl --proto &#39;=https&#39; --tlsv1.2 https://sh.rustup.rs -sSf | sh</p><h2 id="在windows-安装" tabindex="-1"><a class="header-anchor" href="#在windows-安装"><span>在windows 安装</span></a></h2><p>https://course.rs/first-try/installation.html#在-windows-上安装-rustup</p><h2 id="rust更换源-cargo-config-toml" tabindex="-1"><a class="header-anchor" href="#rust更换源-cargo-config-toml"><span>rust更换源 ~.cargo/config.toml</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[http]
check-revoke = false

# 注释使用默认
[source.crates-io]
replace-with = &#39;rsproxy&#39;

[source.ustc]
registry = &quot;git://mirrors.ustc.edu.cn/crates.io-index&quot;

# 字节跳动
[source.rsproxy]
registry = &quot;https://rsproxy.cn/crates.io-index&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><p>cargo new rust_test</p><h2 id="升级rust" tabindex="-1"><a class="header-anchor" href="#升级rust"><span>升级rust</span></a></h2><p>rustup update</p><h2 id="升级cargo" tabindex="-1"><a class="header-anchor" href="#升级cargo"><span>升级cargo</span></a></h2><p>cargo install cargo</p><h2 id="升级所有依赖" tabindex="-1"><a class="header-anchor" href="#升级所有依赖"><span>升级所有依赖</span></a></h2><p>cargo update</p><h2 id="升级指定依赖" tabindex="-1"><a class="header-anchor" href="#升级指定依赖"><span>升级指定依赖</span></a></h2><p>cargo update -p axum</p><h2 id="搜索包" tabindex="-1"><a class="header-anchor" href="#搜索包"><span>搜索包</span></a></h2><p>cargo search log --registry crates-io</p><h2 id="添加包" tabindex="-1"><a class="header-anchor" href="#添加包"><span>添加包</span></a></h2><p>cargo add log</p><h2 id="更新所有已安装的cargo插件和二进制文件-非项目" tabindex="-1"><a class="header-anchor" href="#更新所有已安装的cargo插件和二进制文件-非项目"><span>更新所有已安装的Cargo插件和二进制文件(非项目)</span></a></h2><p>cargo install cargo-update cargo install-update -a cargo install-update cargo</p><p>cargo run cargo doc</p><h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试"><span>单元测试</span></a></h2><p>cargo test -- --test-threads=1 cargo test -- --show-output cargo test one_hundred cargo test --no-run</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><p>cargo run --example eg1_variable</p><h2 id="基准测试-只能在非-stable-下使用" tabindex="-1"><a class="header-anchor" href="#基准测试-只能在非-stable-下使用"><span>基准测试（只能在非 stable 下使用）</span></a></h2><p>安装 nightly 版本： rustup install nightly 使用以下命令确认版本已经安装成功 rustup toolchain list rustup override set nightly 切换回 stable 版本 rustup override set stable cargo bench</p><h2 id="cargo-git" tabindex="-1"><a class="header-anchor" href="#cargo-git"><span>cargo git</span></a></h2><p>cargo install --git https://github.com/mitsuhiko/rye rye</p>`,38),i=[n];function l(o,c){return a(),e("div",null,i)}const h=t(s,[["render",l],["__file","rust.html.vue"]]),p=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B/%E8%AF%AD%E8%A8%80/rust.html","title":"rust","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["语言"],"tag":["rust"],"description":"rust rust 教程 rust 圣言 rust 菜鸟教程 rustlings 练习 MacOS/Linux 运行成功之后，当前目录会有rustlings，使用 vscode 打开此文件 在此目录终端运行rustlings watch，根据提示修改代码，保存会自动验证，成功后根据提示练习下一题 在rustlings watch下输入 hint 可以获...","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E8%AF%AD%E8%A8%80/rust.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"rust"}],["meta",{"property":"og:description","content":"rust rust 教程 rust 圣言 rust 菜鸟教程 rustlings 练习 MacOS/Linux 运行成功之后，当前目录会有rustlings，使用 vscode 打开此文件 在此目录终端运行rustlings watch，根据提示修改代码，保存会自动验证，成功后根据提示练习下一题 在rustlings watch下输入 hint 可以获..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T17:45:45.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T17:45:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rust\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T17:45:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"rust 教程","slug":"rust-教程","link":"#rust-教程","children":[]},{"level":2,"title":"rustlings 练习","slug":"rustlings-练习","link":"#rustlings-练习","children":[]},{"level":2,"title":"rust 安装","slug":"rust-安装","link":"#rust-安装","children":[]},{"level":2,"title":"在windows 安装","slug":"在windows-安装","link":"#在windows-安装","children":[]},{"level":2,"title":"rust更换源 ~.cargo/config.toml","slug":"rust更换源-cargo-config-toml","link":"#rust更换源-cargo-config-toml","children":[]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"升级rust","slug":"升级rust","link":"#升级rust","children":[]},{"level":2,"title":"升级cargo","slug":"升级cargo","link":"#升级cargo","children":[]},{"level":2,"title":"升级所有依赖","slug":"升级所有依赖","link":"#升级所有依赖","children":[]},{"level":2,"title":"升级指定依赖","slug":"升级指定依赖","link":"#升级指定依赖","children":[]},{"level":2,"title":"搜索包","slug":"搜索包","link":"#搜索包","children":[]},{"level":2,"title":"添加包","slug":"添加包","link":"#添加包","children":[]},{"level":2,"title":"更新所有已安装的Cargo插件和二进制文件(非项目)","slug":"更新所有已安装的cargo插件和二进制文件-非项目","link":"#更新所有已安装的cargo插件和二进制文件-非项目","children":[]},{"level":2,"title":"单元测试","slug":"单元测试","link":"#单元测试","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"基准测试（只能在非 stable 下使用）","slug":"基准测试-只能在非-stable-下使用","link":"#基准测试-只能在非-stable-下使用","children":[]},{"level":2,"title":"cargo git","slug":"cargo-git","link":"#cargo-git","children":[]}],"git":{"createdTime":1710697545000,"updatedTime":1710697545000,"contributors":[{"name":"sampan","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"编程/语言/rust.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>rust 教程</h2>\\n<ul>\\n<li><a href=\\"https://course.rs/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">rust 圣言</a></li>\\n<li><a href=\\"https://www.runoob.com/rust/rust-tutorial.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">rust 菜鸟教程</a></li>\\n</ul>\\n<h2>rustlings 练习</h2>\\n<p>MacOS/Linux</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>curl -L https://raw.githubusercontent.com/rust-lang/rustlings/main/install.sh | bash\\n</code></pre></div>","autoDesc":true}');export{h as comp,p as data};