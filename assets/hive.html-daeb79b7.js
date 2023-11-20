import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as d}from"./app-5195d3f7.js";const n={},s=d(`<h1 id="hive" tabindex="-1"><a class="header-anchor" href="#hive" aria-hidden="true">#</a> hive</h1><h2 id="hive-写入分区" tabindex="-1"><a class="header-anchor" href="#hive-写入分区" aria-hidden="true">#</a> hive 写入分区</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert overwrite table dws_jd_erp_purchase_transfer partition(dt)
select * from
data_kezhi.dws_jd_erp_purchase_transfer
where dt = &#39;\${bizdate}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive导数据到csv" tabindex="-1"><a class="header-anchor" href="#hive导数据到csv" aria-hidden="true">#</a> hive导数据到csv</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert overwrite local directory &#39;/home/hadoop/lijicong/test&#39; row format delimited fields terminated by &#39;,&#39; select * from dw.ol_api_consume_channel_fact where month_num = 201902;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hive新增字段" tabindex="-1"><a class="header-anchor" href="#hive新增字段" aria-hidden="true">#</a> hive新增字段</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table dw.ods_aabb_v9_design add columns(status int);


alter table detail_flow_test add columns(original_union_id string);


alter table dw. ods_aabb_v9_mp_account add columns(is_quality int);


alter table dw.ods_traf_already_recommended add columns(version string);


alter table dw.ods_aabb_v9_picture_page add columns(recommend int);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive优化" tabindex="-1"><a class="header-anchor" href="#hive优化" aria-hidden="true">#</a> hive优化</h2><ul><li>1、小表放前面，使用map join</li><li>2、避免数据倾斜</li><li>3、合理设置map、reduce数</li><li>4、优化sql写法减少job数</li><li>5、尽量不对字段进行函数计算</li></ul>`,9),l=[s];function r(t,c){return i(),a("div",null,l)}const h=e(n,[["render",r],["__file","hive.html.vue"]]);export{h as default};
