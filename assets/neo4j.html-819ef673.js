import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as a}from"./app-20003115.js";const d={},s=a(`<h1 id="neo4j" tabindex="-1"><a class="header-anchor" href="#neo4j" aria-hidden="true">#</a> neo4j</h1><h2 id="neo4j-查询" tabindex="-1"><a class="header-anchor" href="#neo4j-查询" aria-hidden="true">#</a> neo4j 查询</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查某人全部关系
return (:star{starname:&quot;张国荣&quot;})--&gt;();
# 查某人朋友的朋友（5层关系）
match p=(n:star{starname:&quot;张国荣&quot;})-[*..5]-&gt;() return p limit 50;
# 查询特定关系
match p=()-[:rel{relation:&quot;旧爱&quot;}]-&gt;() return p LIMIT 25;
# 使用函数，查询张国荣与张卫健的最短路径
match p=shortestpath((:star{starname:&quot;张国荣&quot;})-[*..5]-&gt;(:star{starname:&quot;张卫健&quot;})) return p;

# 查询某节点
MATCH (n:shop) where n.shop_name=&quot;奥普浴霸苏州专卖店&quot; RETURN n LIMIT 200
# 查询和某节点的全部关系
MATCH p=(:shop{shop_name:&quot;长沙华艺卫浴专营店&quot;})--&gt;() return p LIMIT 200;
# 查询特定关系
MATCH p=()-[r:\`品牌\`]-&gt;() RETURN p LIMIT 200

# 查某节点（5层关系）
match p=(n:shop{shop_name:&quot;长沙华艺卫浴专营店&quot;})-[*..5]-&gt;() return p limit 50;

删除节点和关系
MATCH (n:shop) DETACH DELETE n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="neo4j-load-csv" tabindex="-1"><a class="header-anchor" href="#neo4j-load-csv" aria-hidden="true">#</a> neo4j load csv</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建店铺与品类，品牌，标签的关系图

LOAD CSV FROM &#39;file:///店铺.csv&#39; AS data CREATE (:shop{shop_id:data[0], shop_name:data[1]});
LOAD CSV FROM &#39;file:///品类.csv&#39; AS data CREATE (:category{category_id:data[0], name:data[1]});
LOAD CSV FROM &#39;file:///品牌.csv&#39; AS data CREATE (:brand{id:data[0], name:data[1]});
LOAD CSV FROM &#39;file:///标签.csv&#39; AS data CREATE (:label{id:data[0], name:data[1]});

USING periodic commit 1000
LOAD CSV FROM &#39;file:///店铺对应品类.csv&#39; AS data
MATCH (from:shop{shop_id:data[0]}),(to:category{category_id:data[3]})
create (from)-[r:品类{relation:data[2]}]-&gt; (to);


LOAD CSV FROM &#39;file:///店铺对应品牌.csv&#39; AS data
MATCH (from:shop{shop_id:data[0]}),(to:brand{id:data[3]})
create (from)-[r:品牌{relation:data[2]}]-&gt; (to);


LOAD CSV FROM &#39;file:///店铺对应标签.csv&#39; AS data
MATCH (from:shop{shop_id:data[0]}),(to:label{id:data[3]})
Create (from)-[r:标签{relation:data[2]}]-&gt; (to);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[s];function l(r,v){return n(),i("div",null,t)}const u=e(d,[["render",l],["__file","neo4j.html.vue"]]);export{u as default};
