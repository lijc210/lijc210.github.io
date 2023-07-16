import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,e as s}from"./app-aa58134a.js";const i={},n=s(`<h1 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> postgresql</h1><h2 id="关联更新" tabindex="-1"><a class="header-anchor" href="#关联更新" aria-hidden="true">#</a> 关联更新</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE (要更新的表) table1 t1 
SET 字段1 = t2.字段1, 字段2 = t2.字段2, 
FROM (数据来源表) table2 t2 
WHERE t1.key = t2.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列出某个表的所有字段和描述" tabindex="-1"><a class="header-anchor" href="#列出某个表的所有字段和描述" aria-hidden="true">#</a> 列出某个表的所有字段和描述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from information_schema.columns
where table_schema=&#39;public&#39; and table_name=&#39;tmp_ol_api_buloding_info&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[n];function r(l,c){return a(),t("div",null,d)}const m=e(i,[["render",r],["__file","postgresql.html.vue"]]);export{m as default};
