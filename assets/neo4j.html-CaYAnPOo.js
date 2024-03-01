import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as a}from"./app-Dq4Ww1u5.js";const i={},s=a(`<h1 id="neo4j" tabindex="-1"><a class="header-anchor" href="#neo4j"><span>neo4j</span></a></h1><h2 id="neo4j-查询" tabindex="-1"><a class="header-anchor" href="#neo4j-查询"><span>neo4j 查询</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 查某人全部关系
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="neo4j-load-csv" tabindex="-1"><a class="header-anchor" href="#neo4j-load-csv"><span>neo4j load csv</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建店铺与品类，品牌，标签的关系图

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[s];function d(o,l){return n(),t("div",null,r)}const v=e(i,[["render",d],["__file","neo4j.html.vue"]]),p=JSON.parse('{"path":"/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E5%BA%93/neo4j.html","title":"neo4j","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["数据库"],"tag":["neo4j"],"description":"neo4j neo4j 查询 neo4j load csv ","head":[["meta",{"property":"og:url","content":"https://www.cizai.io/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E5%BA%93/neo4j.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"neo4j"}],["meta",{"property":"og:description","content":"neo4j neo4j 查询 neo4j load csv "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-13T06:58:32.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"neo4j"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-13T06:58:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"neo4j\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-13T06:58:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://www.cizai.io\\"}]}"]]},"headers":[{"level":2,"title":"neo4j 查询","slug":"neo4j-查询","link":"#neo4j-查询","children":[]},{"level":2,"title":"neo4j load csv","slug":"neo4j-load-csv","link":"#neo4j-load-csv","children":[]}],"git":{"createdTime":1689218642000,"updatedTime":1689231512000,"contributors":[{"name":"lijc210","email":"lijc210@163.com","commits":2}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"大数据/数据库/neo4j.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>neo4j 查询</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># 查某人全部关系\\nreturn (:star{starname:\\"张国荣\\"})--&gt;();\\n# 查某人朋友的朋友（5层关系）\\nmatch p=(n:star{starname:\\"张国荣\\"})-[*..5]-&gt;() return p limit 50;\\n# 查询特定关系\\nmatch p=()-[:rel{relation:\\"旧爱\\"}]-&gt;() return p LIMIT 25;\\n# 使用函数，查询张国荣与张卫健的最短路径\\nmatch p=shortestpath((:star{starname:\\"张国荣\\"})-[*..5]-&gt;(:star{starname:\\"张卫健\\"})) return p;\\n\\n# 查询某节点\\nMATCH (n:shop) where n.shop_name=\\"奥普浴霸苏州专卖店\\" RETURN n LIMIT 200\\n# 查询和某节点的全部关系\\nMATCH p=(:shop{shop_name:\\"长沙华艺卫浴专营店\\"})--&gt;() return p LIMIT 200;\\n# 查询特定关系\\nMATCH p=()-[r:`品牌`]-&gt;() RETURN p LIMIT 200\\n\\n# 查某节点（5层关系）\\nmatch p=(n:shop{shop_name:\\"长沙华艺卫浴专营店\\"})-[*..5]-&gt;() return p limit 50;\\n\\n删除节点和关系\\nMATCH (n:shop) DETACH DELETE n\\n</code></pre></div>","autoDesc":true}');export{v as comp,p as data};
