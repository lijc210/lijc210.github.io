import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as e,b as r,d as l,e as t}from"./app-b42be4c5.js";const u={},c=t(`<h1 id="hbase" tabindex="-1"><a class="header-anchor" href="#hbase" aria-hidden="true">#</a> hbase</h1><h2 id="hbase-常用shell命令" tabindex="-1"><a class="header-anchor" href="#hbase-常用shell命令" aria-hidden="true">#</a> HBase 常用Shell命令</h2><table><thead><tr><th>hbase shell命令</th><th>描述</th></tr></thead><tbody><tr><td>alter</td><td>修改列族（column family）模式</td></tr><tr><td>count</td><td>统计表中行的数量</td></tr><tr><td>create</td><td>创建表</td></tr><tr><td>describe</td><td>显示表相关的详细信息</td></tr><tr><td>delete</td><td>删除指定对象的值（可以为表，行，列对应的值，另外也可以指定时间戳的值）</td></tr><tr><td>deleteall</td><td>删除指定行的所有元素值</td></tr><tr><td>disable</td><td>使表无效</td></tr><tr><td>drop</td><td>删除表</td></tr><tr><td>enable</td><td>使表有效</td></tr><tr><td>exists</td><td>测试表是否存在</td></tr><tr><td>exit</td><td>退出hbase shell</td></tr><tr><td>get</td><td>获取行或单元（cell）的值</td></tr><tr><td>incr</td><td>增加指定表，行或列的值</td></tr><tr><td>list</td><td>列出hbase中存在的所有表</td></tr><tr><td>put</td><td>向指向的表单元添加值</td></tr><tr><td>tools</td><td>列出hbase所支持的工具</td></tr><tr><td>scan</td><td>通过对表的扫描来获取对用的值</td></tr><tr><td>status</td><td>返回hbase集群的状态信息</td></tr><tr><td>shutdown</td><td>关闭hbase集群（与exit不同）</td></tr><tr><td>truncate</td><td>重新创建指定表</td></tr><tr><td>version</td><td>返回hbase版本信息</td></tr></tbody></table><h2 id="hbase-scan-limit" tabindex="-1"><a class="header-anchor" href="#hbase-scan-limit" aria-hidden="true">#</a> hbase scan limit</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scan &#39;user_info&#39;,{LIMIT=&gt;5}
scan &#39;city_code_yzh&#39;,{LIMIT=&gt;5}
scan &#39;user_base_info_new&#39;,{LIMIT=&gt;5}
scan &#39;cookie_userid&#39;,{LIMIT=&gt;5}

扫描一段时间内的
scan &#39;route:zto_route_cross_center_time_come&#39;,{TIMERANGE =&gt;[1517958000000,1517961600000]}

scan &#39;basescan:zto_order_no_finish&#39;,{TIMERANGE =&gt;[1518062463000,1518063003000]}


scan &#39;bls_organization:company_lock_order&#39;,{TIMERANGE =&gt;[1556000243000,1556003843000]}


scan &#39;crm_job&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hbase建表" tabindex="-1"><a class="header-anchor" href="#hbase建表" aria-hidden="true">#</a> hbase建表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create &#39;user_mobile_userid_tmp&#39;,&#39;info&#39;

删除某条记录
deleteall &#39;ods_decoration_build_ana_new&#39;,&#39;xxxxxx&#39;
清空表
truncate  &#39;kn1_ana_tg_sign_up_new&#39;
truncate  &#39;user_base_info_new&#39;
truncate  &#39;userid_cookie&#39;
truncate  &#39;cookie_userid&#39;
truncate  &#39;simresult:total&#39;
truncate  &#39;recresult:total&#39;

列出所有命名空间
list_namespace
新建命名空间
create_namespace &#39;ns1&#39;
删除命名空间
drop_namespace &#39;ns1&#39;
修改命名空间
alter_namespace &#39;ns&#39;, {METHOD =&gt; &#39;set&#39;, &#39;PROPERTY_NAME&#39; =&gt; &#39;PROPERTY_VALUE&#39;}
新建表
create &#39;recresult:quality_v9_special&#39;, &#39;info&#39;
create &#39;recresult:total&#39;, &#39;info&#39;
删除表
drop &#39;features:top_ite&#39;
create_namespace &#39;attrresult&#39;
create &#39;attrresult:tagsresult&#39;, &#39;info&#39;
drop_namespace &#39;hotresult&#39;
create &#39;features:user&#39;, &#39;info&#39;

type_list = [(&quot;/user/hadoop/rec/simresult/quality_v9_news/&quot;, &quot;simresult:quality_v9_news&quot;),
(&quot;/user/hadoop/rec/simresult/quality_v9_video/&quot;, &quot;simresult:quality_v9_video&quot;),
(&quot;/user/hadoop/rec/simresult/quality_note_new/&quot;, &quot;simresult:quality_note_new&quot;),
(&quot;/user/hadoop/rec/simresult/quality_design_case/&quot;, &quot;simresult:quality_design_case&quot;),
(&quot;/user/hadoop/rec/simresult/quality_question/&quot;, &quot;simresult:quality_question&quot;),
(&quot;/user/hadoop/rec/simresult/quality_v9_design/&quot;, &quot;simresult:quality_v9_design&quot;),
(&quot;/user/hadoop/rec/simresult/quality_v9_special/&quot;, &quot;simresult:quality_v9_special&quot;)]

create &#39;simresult:quality_note_new&#39;, &#39;info&#39;
create &#39;simresult:quality_question&#39;, &#39;info&#39;
create &#39;simresult:quality_v9_design&#39;, &#39;info&#39;
create &#39;simresult:quality_v9_special&#39;, &#39;info&#39;
create &#39;simresult:quality_v9_news&#39;, &#39;info&#39;
create &#39;simresult:quality_v9_video&#39;, &#39;info&#39;

create &#39;features:item&#39;, &#39;info&#39;

create_namespace &#39;recresult&#39;
create_namespace &#39;simresult&#39;

create &#39;features_data&#39;,&#39;info&#39;


create &#39;simresult:total&#39;, &#39;info&#39;


create &#39;attrresult:qltyresult&#39;, &#39;info&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hbase启动命令" tabindex="-1"><a class="header-anchor" href="#hbase启动命令" aria-hidden="true">#</a> hbase启动命令</h2>`,8),v={href:"https://blog.csdn.net/kelonsen/article/details/78477152",target:"_blank",rel:"noopener noreferrer"},o=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/cloudera/parcels/CDH-5.11.1-1.cdh5.11.1.p0.4/lib/hbase/bin/
./hbase-daemon.sh start thrift2 --infoport 9096 -p 9091

cd /opt/cloudera/parcels/CDH-5.12.1-1.cdh5.12.1.p0.3/lib/hbase/bin/
./hbase-daemon.sh start thrift2 --infoport 9096 -p 9091

hbase-daemon.sh start thrift2 --infoport 9096 -p 9091
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,_){const i=s("ExternalLinkIcon");return d(),a("div",null,[c,e("p",null,[e("a",v,[r("https://blog.csdn.net/kelonsen/article/details/78477152"),l(i)])]),o])}const q=n(u,[["render",m],["__file","hbase.html.vue"]]);export{q as default};
