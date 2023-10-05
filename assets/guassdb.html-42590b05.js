import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as s}from"./app-c3a8131f.js";const n={},r=s(`<h1 id="guassdb" tabindex="-1"><a class="header-anchor" href="#guassdb" aria-hidden="true">#</a> guassdb</h1><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><ul><li>1、删除表dim_shop_sales_target在字段target_date上的索引（注：列存表非必要无需创建索引，如创建，可选用btree索引，不要创建默认的psort索引，贵司当前列存表上，基本都是psort索引）</li><li>2、dim_jd_erp_shop表，建议修改为复制表（数据总量较小的维度表，建议调整为复制表）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在各DN的数据分布倾斜
select table_skewness(&#39;ads_sales_shop_notdis&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动更新时间" tabindex="-1"><a class="header-anchor" href="#自动更新时间" aria-hidden="true">#</a> 自动更新时间</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE public.ads_order_city_rank (
pkey varchar(50) NOT NULL,
sdate date NOT NULL,
shop_code_inner varchar(255) NOT NULL,
shop_name varchar(200) NULL DEFAULT NULL::character varying,
city varchar(200) NULL DEFAULT NULL::character varying,
city_rank int4 NOT NULL,
city_rank_last float8 NOT NULL,
city_rank_first float8 NOT NULL,
avg_city_sales float8 NOT NULL,
distance_avg_sales float8 NOT NULL,
divided_avg_sales float8 NOT NULL,
city_rank_max int4 NOT NULL,
distance_max_sales float8 NOT NULL,
divided_max_sales float8 NOT NULL,
create_time timestamp NULL DEFAULT now()::timestamp without time zone,
update_time timestamp DEFAULT current_timestamp ON UPDATE current_timestamp,
CONSTRAINT ads_order_city_rank_pkey PRIMARY KEY (pkey)
)
WITH (
orientation=row,
compression=no
);
CREATE INDEX idx_shop_code_inner ON ads_order_city_rank USING btree (shop_code_inner) TABLESPACE pg_default;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><p>CREATE TABLE T2<br> (<br> id int not null default nextval(&#39;seq1&#39;),<br> name text<br> );</p><p>CREATE SEQUENCE seq1 cache 100;</p><p>查看分布式列的分布<br> select * from table_skewness(&#39;public.ads_order_item_sales&#39;,&#39;shop_code_inner&#39;);</p><p>修改分布式列<br> ALTER TABLE public.ads_order_item_sales DISTRIBUTE BY HASH(shop_code_inner);</p><p>查看分布式列<br> select pg_get_tabledef(&#39;ads_order_sales_dws_row&#39;)</p><p>查看数据倾斜<br> SELECT a.count,b.node_name FROM (SELECT count(*) AS count,xc_node_id FROM ads_order_item_sales GROUP BY xc_node_id) a, pgxc_node b<br> WHERE a.xc_node_id=b.node_id ORDER BY a.count desc;</p><p>查看数据倾斜<br> SELECT schemaname,tablename,pg_size_pretty(totalsize),skewratio FROM PGXC_GET_TABLE_SKEWNESS WHERE SKEWRATIO &gt; 0.05 ORDER BY TOTALSIZE DESC;</p><p>查看最耗时的10个sql<br> SELECT * FROM pgxc_wlm_session_info<br> where start_time &gt;= &#39;2023-03-26 00:00:00&#39;<br> and query not like &#39;delete%&#39;<br> and query not like &#39;select count%&#39;<br> and query not like &#39;CREATE%&#39;<br> order by duration desc limit 10;</p><p>-- 查询指定表占用的磁盘存储空间<br> select pg_size_pretty(pg_relation_size(&#39;public.ads_order_sales&#39;)); -- 99 GB<br> -- 查询表的脏页率信息<br> select dirty_page_rate from PGXC_GET_STAT_ALL_TABLES where relname = &#39;ads_order_sales&#39;; -- 64.68<br> select * from PGXC_GET_STAT_ALL_TABLES where dirty_page_rate&gt;30;</p>`,16),d=[r];function t(l,_){return a(),i("div",null,d)}const m=e(n,[["render",t],["__file","guassdb.html.vue"]]);export{m as default};
