import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,d as s}from"./app-CI-7CPEM.js";const n={},o=s(`<h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>vscode</span></a></h1><h2 id="如何关闭-vscode-的-rust-analyzer-插件的自动类型提示" tabindex="-1"><a class="header-anchor" href="#如何关闭-vscode-的-rust-analyzer-插件的自动类型提示"><span>如何关闭 vscode 的 rust-analyzer 插件的自动类型提示</span></a></h2><p>打开vode的设置界面搜索：</p><p><strong>typeHints</strong> 和 <strong>parameterHints</strong> ，并设置为 diable</p><p>或者直接打开 vscode 的配置文件 /C:/Users/your_user_name/AppData/Roaming/Code/User/settings.json：</p><p>并添加：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> &quot;rust-analyzer.inlayHints.typeHints.enable&quot;: false,
 &quot;rust-analyzer.inlayHints.parameterHints.enable&quot;: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：</p><ul><li>https://rust-analyzer.github.io/manual.html#configuration</li><li>https://stackoverflow.com/questions/69909997/can-i-remove-type-annotation-help-from-rust-analyzer</li></ul><p>谷歌关键字： rust analyzer disable type hints</p>`,10),r=[o];function i(l,p){return a(),t("div",null,r)}const m=e(n,[["render",i],["__file","vscode.html.vue"]]),u=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/vscode.html","title":"vscode","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["工具"],"tag":["vscode"],"description":"vscode 如何关闭 vscode 的 rust-analyzer 插件的自动类型提示 打开vode的设置界面搜索： typeHints 和 parameterHints ，并设置为 diable 或者直接打开 vscode 的配置文件 /C:/Users/your_user_name/AppData/Roaming/Code/User/settin...","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/vscode.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"vscode"}],["meta",{"property":"og:description","content":"vscode 如何关闭 vscode 的 rust-analyzer 插件的自动类型提示 打开vode的设置界面搜索： typeHints 和 parameterHints ，并设置为 diable 或者直接打开 vscode 的配置文件 /C:/Users/your_user_name/AppData/Roaming/Code/User/settin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T17:45:45.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"vscode"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T17:45:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vscode\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T17:45:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"如何关闭 vscode 的 rust-analyzer 插件的自动类型提示","slug":"如何关闭-vscode-的-rust-analyzer-插件的自动类型提示","link":"#如何关闭-vscode-的-rust-analyzer-插件的自动类型提示","children":[]}],"git":{"createdTime":1710697545000,"updatedTime":1710697545000,"contributors":[{"name":"sampan","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":0.33,"words":98},"filePathRelative":"编程/工具/vscode.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>如何关闭 vscode 的 rust-analyzer 插件的自动类型提示</h2>\\n<p>打开vode的设置界面搜索：</p>\\n<p><strong>typeHints</strong> 和 <strong>parameterHints</strong> ，并设置为 diable</p>\\n<p>或者直接打开 vscode 的配置文件 /C:/Users/your_user_name/AppData/Roaming/Code/User/settings.json：</p>\\n<p>并添加：</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code> \\"rust-analyzer.inlayHints.typeHints.enable\\": false,\\n \\"rust-analyzer.inlayHints.parameterHints.enable\\": false\\n</code></pre></div>","autoDesc":true}');export{m as comp,u as data};