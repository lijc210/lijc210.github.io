import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,d as t}from"./app-DSAv1yHq.js";const n={},s=t(`<h1 id="tauri" tabindex="-1"><a class="header-anchor" href="#tauri"><span>tauri</span></a></h1><h2 id="tauri-桌面端开发" tabindex="-1"><a class="header-anchor" href="#tauri-桌面端开发"><span>tauri 桌面端开发</span></a></h2><h2 id="tauri-移动端开发" tabindex="-1"><a class="header-anchor" href="#tauri-移动端开发"><span>tauri 移动端开发</span></a></h2><h3 id="安装基础依赖" tabindex="-1"><a class="header-anchor" href="#安装基础依赖"><span>安装基础依赖</span></a></h3><p>https://beta.tauri.app/2/guide/prerequisites/ 包含需要安装Android Studio和Xcode</p><h3 id="升级安装tauri-cli" tabindex="-1"><a class="header-anchor" href="#升级安装tauri-cli"><span>升级安装tauri-cli</span></a></h3><p>cargo install tauri-cli --version &quot;^2.0.0-alpha&quot;</p><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cargo create-tauri-app</span></span>
<span class="line"><span>cd tauri-mobile</span></span>
<span class="line"><span>pnpm add -D internal-ip</span></span>
<span class="line"><span>pnpm i</span></span>
<span class="line"><span>pnpm update @tauri-apps/cli@next @tauri-apps/api@next</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>src-tauri/</span></span>
<span class="line"><span>cargo add tauri@2.0.0-alpha.&lt;VERSION&gt;</span></span>
<span class="line"><span>cargo add tauri-build@2.0.0-alpha.&lt;VERSION&gt; --build</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照文档修改以下4个文件 vite.config.ts src-tauri/tauri.conf.json src-tauri/Cargo.toml src-tauri/src/main.rs 新增 src-tauri/src/lib.rs src-tauri/src/mobile.rs</p><h3 id="启动和编译" tabindex="-1"><a class="header-anchor" href="#启动和编译"><span>启动和编译</span></a></h3><p>ios需要： brew install cocoapods</p><p>pnpm tauri [android|ios] init pnpm tauri [android|ios] dev pnpm tauri [android|ios] build</p><p>pnpm tauri [android|ios] dev --open 可打开Android Studio和Xcode</p><p>###参考文档 https://beta.tauri.app/2/guide/create/mobile/#conditional-compilation https://dev.to/adimac93/tauri-mobile-for-ios-4dp6 https://zhuanlan.zhihu.com/p/611630596 https://www.http5.cn/index.php/archives/22/</p>`,16),r=[s];function l(p,d){return e(),a("div",null,r)}const u=i(n,[["render",l],["__file","tauri.html.vue"]]),h=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B/%E6%A1%86%E6%9E%B6/tauri.html","title":"tauri","lang":"zh-CN","frontmatter":{"icon":"fa-solid fa-book-open-reader","date":"2022-01-01T00:00:00.000Z","category":["框架"],"tag":["tauri"],"description":"tauri tauri 桌面端开发 tauri 移动端开发 安装基础依赖 https://beta.tauri.app/2/guide/prerequisites/ 包含需要安装Android Studio和Xcode 升级安装tauri-cli cargo install tauri-cli --version \\"^2.0.0-alpha\\" 创建项目...","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E6%A1%86%E6%9E%B6/tauri.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"tauri"}],["meta",{"property":"og:description","content":"tauri tauri 桌面端开发 tauri 移动端开发 安装基础依赖 https://beta.tauri.app/2/guide/prerequisites/ 包含需要安装Android Studio和Xcode 升级安装tauri-cli cargo install tauri-cli --version \\"^2.0.0-alpha\\" 创建项目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-24T07:22:17.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"tauri"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-24T07:22:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tauri\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-24T07:22:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"tauri 桌面端开发","slug":"tauri-桌面端开发","link":"#tauri-桌面端开发","children":[]},{"level":2,"title":"tauri 移动端开发","slug":"tauri-移动端开发","link":"#tauri-移动端开发","children":[{"level":3,"title":"安装基础依赖","slug":"安装基础依赖","link":"#安装基础依赖","children":[]},{"level":3,"title":"升级安装tauri-cli","slug":"升级安装tauri-cli","link":"#升级安装tauri-cli","children":[]},{"level":3,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":3,"title":"启动和编译","slug":"启动和编译","link":"#启动和编译","children":[]}]}],"git":{"createdTime":1710697545000,"updatedTime":1721805737000,"contributors":[{"name":"lijc210","email":"lijc210@163.com","commits":1},{"name":"sampan","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"编程/框架/tauri.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>tauri 桌面端开发</h2>\\n<h2>tauri 移动端开发</h2>\\n<h3>安装基础依赖</h3>\\n<p>https://beta.tauri.app/2/guide/prerequisites/\\n包含需要安装Android Studio和Xcode</p>\\n<h3>升级安装tauri-cli</h3>\\n<p>cargo install tauri-cli --version \\"^2.0.0-alpha\\"</p>\\n<h3>创建项目</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>cargo create-tauri-app</span></span>\\n<span class=\\"line\\"><span>cd tauri-mobile</span></span>\\n<span class=\\"line\\"><span>pnpm add -D internal-ip</span></span>\\n<span class=\\"line\\"><span>pnpm i</span></span>\\n<span class=\\"line\\"><span>pnpm update @tauri-apps/cli@next @tauri-apps/api@next</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,h as data};