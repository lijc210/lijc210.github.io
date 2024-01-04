import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as d}from"./app-9726d832.js";const n={},s=d(`<h1 id="impala" tabindex="-1"><a class="header-anchor" href="#impala" aria-hidden="true">#</a> Impala</h1><h2 id="impala时间戳分组" tabindex="-1"><a class="header-anchor" href="#impala时间戳分组" aria-hidden="true">#</a> Impala时间戳分组</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select   
from_unixtime(cast(siyu_add_time/1000 as int) , &#39;yyyy-MM-dd&#39;) as sdate,
count(1),
count(if(second_id is null,1,null))
from users 
-- 2023-06-14 00:00:00
where siyu_add_time &gt; 1686672000000
group by from_unixtime(cast(siyu_add_time/1000 as int) , &#39;yyyy-MM-dd&#39;)
order by from_unixtime(cast(siyu_add_time/1000 as int) , &#39;yyyy-MM-dd&#39;) desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[s];function l(r,c){return i(),a("div",null,t)}const o=e(n,[["render",l],["__file","Impala.html.vue"]]);export{o as default};
