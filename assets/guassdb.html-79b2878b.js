import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as r,a as i,b as e,d as l,e as a}from"./app-b2275169.js";const c={},m=a(`<h1 id="guassdb" tabindex="-1"><a class="header-anchor" href="#guassdb" aria-hidden="true">#</a> guassdb</h1><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><ul><li>1、删除表dim_shop_sales_target在字段target_date上的索引（注：列存表非必要无需创建索引，如创建，可选用btree索引，不要创建默认的psort索引，贵司当前列存表上，基本都是psort索引）</li><li>2、dim_jd_erp_shop表，建议修改为复制表（数据总量较小的维度表，建议调整为复制表）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在各DN的数据分布倾斜
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><p>CREATE TABLE T2<br> (<br> id int not null default nextval(&#39;seq1&#39;),<br> name text<br> );</p><p>CREATE SEQUENCE seq1 cache 100;</p><p>查看分布式列的分布<br> select * from table_skewness(&#39;public.ads_order_item_sales&#39;,&#39;shop_code_inner&#39;);</p><p>修改分布式列<br> ALTER TABLE public.ads_order_item_sales DISTRIBUTE BY HASH(shop_code_inner);</p><p>查看分布式列<br> select pg_get_tabledef(&#39;ads_order_sales_dws_row&#39;)</p><p>查看数据倾斜<br> SELECT a.count,b.node_name FROM (SELECT count(*) AS count,xc_node_id FROM ads_order_item_sales GROUP BY xc_node_id) a, pgxc_node b<br> WHERE a.xc_node_id=b.node_id ORDER BY a.count desc;</p><p>查看数据倾斜<br> SELECT schemaname,tablename,pg_size_pretty(totalsize),skewratio FROM PGXC_GET_TABLE_SKEWNESS WHERE SKEWRATIO &gt; 0.05 ORDER BY TOTALSIZE DESC;</p><p>查看最耗时的10个sql<br> SELECT * FROM pgxc_wlm_session_info<br> where start_time &gt;= &#39;2023-03-26 00:00:00&#39;<br> and query not like &#39;delete%&#39;<br> and query not like &#39;select count%&#39;<br> and query not like &#39;CREATE%&#39;<br> order by duration desc limit 10;</p><p>-- 查询指定表占用的磁盘存储空间<br> select pg_size_pretty(pg_relation_size(&#39;public.ads_order_sales&#39;)); -- 99 GB<br> -- 查询表的脏页率信息<br> select dirty_page_rate from PGXC_GET_STAT_ALL_TABLES where relname = &#39;ads_order_sales&#39;; -- 64.68<br> select * from PGXC_GET_STAT_ALL_TABLES where dirty_page_rate&gt;30;</p><h2 id="clickhouse-bitmap用法" tabindex="-1"><a class="header-anchor" href="#clickhouse-bitmap用法" aria-hidden="true">#</a> Clickhouse bitmap用法</h2><p>bitmap主要用于快速去重计算，集合计算，节约空间与时间，典型场景是根据标签来进行用户的圈选。</p><p>简单示例：</p><p>假如有一张用户标签表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.users_table_replica ON CLUSTER ck_cluster1
(
uid UInt64,
tag1 String,
tag2 String
)
ENGINE = ReplicatedMergeTree
ORDER BY uid;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分布式表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.users_table
ON CLUSTER ck_cluster1
AS tmp.users_table_replica
ENGINE = Distributed(ck_cluster1, tmp, users_table_replica, rand())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入测试数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tmp.users_table (uid, tag1, tag2) VALUES
(1, &#39;男&#39;,&#39;北京&#39;),
(2, &#39;女&#39;,&#39;天津&#39;),
(3, &#39;男&#39;,&#39;上海&#39;),
(4, &#39;女&#39;,&#39;北京&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果大数据量的情况下，clickhouse按任意条件做去重查询效率不高，可使用bitmap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.users_table_bitmap_replica ON CLUSTER ck_cluster1

(
tag_id String,
users AggregateFunction(groupBitmap, UInt64)
)
ENGINE = ReplicatedMergeTree
ORDER BY tag_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分布式表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.users_table_bitmap
ON CLUSTER ck_cluster1
AS tmp.users_table_bitmap_replica
ENGINE = Distributed(ck_cluster1, tmp, users_table_bitmap_replica, rand())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tmp.users_table_bitmap select tag1,groupBitmapState(uid) from tmp.users_table group by tag1;
insert into tmp.users_table_bitmap select tag2,groupBitmapState(uid) from tmp.users_table group by tag2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询性别是男的所有用户（只返回uid，需要明细数据还得再关联）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT bitmapToArray(users) FROM tmp.users_table_bitmap WHERE tag_id = &#39;男&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>展开成行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT arrayJoin(bitmapToArray(users)) FROM tmp.users_table_bitmap WHERE tag_id = &#39;男&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询性别是男的用户数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select bitmapCardinality(users) FROM tmp.users_table_bitmap WHERE tag_id = &#39;男&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上示例还可以如此建表（如果标签是年龄或者是日期，需要做大于小于等计算，则必须如此建表）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.users_table_bitmap_replica1 ON CLUSTER ck_cluster1
(
tag1 String,
tag2 String,
users AggregateFunction(groupBitmap, UInt64)
)
ENGINE = ReplicatedMergeTree
ORDER BY (tag1,tag2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分布式表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.users_table_bitmap1
ON CLUSTER ck_cluster1
AS tmp.users_table_bitmap_replica1
ENGINE = Distributed(ck_cluster1, tmp, users_table_bitmap_replica1, rand())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tmp.users_table_bitmap1 select tag1,tag2,groupBitmapState(uid) from tmp.users_table group by tag1,tag2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询性别是男的所有用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT tag1,bitmapToArray(users) FROM tmp.users_table_bitmap1 WHERE tag1 = &#39;男&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>展开成行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT tag1,arrayJoin(bitmapToArray(users)) FROM tmp.users_table_bitmap1 WHERE tag1 = &#39;男&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询性别是男的用户数（会返回多条数据）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select tag1,tag2,bitmapCardinality(users) FROM tmp.users_table_bitmap1 WHERE tag1 = &#39;男&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询性别是男的总用户数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT countDistinct(arrayJoin(bitmapToArray(users))) AS merged_users_count FROM tmp.users_table_bitmap1 WHERE tag1 = &#39;男&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,51),u=i("br",null,null,-1),v=i("br",null,null,-1),b={href:"https://clickhouse.com/docs/zh/sql-reference/functions/bitmap-functions/",target:"_blank",rel:"noopener noreferrer"},p=a(`<p>arrayJoin 宽表转Bitmap表需要行转列，要用arrayJoin把多列数组炸成行。<br> bitmapAnd 求两个Bitmap值的交集<br> bitmapOr 求两个Bitmap值的并集<br> bitmapXor 求两个Bitmap值的差集(异或)<br> bitmapToArray 把Bitmap转换成数值数组<br> bitmapToArray 把Bitmap转换成数值数组<br> bitmapCardinality 返回一个bitmap数据的个数</p><h3 id="bitmap性能测试" tabindex="-1"><a class="header-anchor" href="#bitmap性能测试" aria-hidden="true">#</a> bitmap性能测试:</h3><p>-- 创建分布式表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.member_order_bitmap_replica ON CLUSTER ck_cluster1
(
sdate String,
store_shop_code String,
users AggregateFunction(groupBitmap, UInt64)
)
ENGINE = ReplicatedMergeTree
ORDER BY (sdate, store_shop_code);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 创建分布式表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE tmp.member_order_bitmap ON CLUSTER ck_cluster1
AS tmp.member_order_bitmap_replica
ENGINE = Distributed(ck_cluster1, tmp, member_order_bitmap_replica, rand());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 插入 6800 万数据（耗时十秒）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO tmp.member_order_bitmap
SELECT
sdate,
store_shop_code,
groupBitmapState(toUInt64(coalesce(user_id, 0))) AS bitmap_result
FROM
bas.abs_member_order_lastyear
WHERE
store_shop_code IS NOT NULL
-- and sdate &gt;= &#39;2023-10-15&#39;
GROUP BY
sdate,
store_shop_code;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 最近一年明细数据量为 3400 万条<br> -- 查询最近一年用户明细（耗时442毫秒）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT sdate, bitmapToArray(users) FROM tmp.member_order_bitmap
WHERE sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 查询最近一年用户明细（展开成行，耗时382毫秒）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT sdate, arrayJoin(bitmapToArray(users)) FROM tmp.member_order_bitmap
WHERE sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 按日期、门店分组查询最近一年用户数（耗时285毫秒）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT sdate, store_shop_code, bitmapCardinality(users) FROM tmp.member_order_bitmap
WHERE sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 按日期分组查询最近一年用户数（耗时1.3秒）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT sdate, countDistinct(arrayJoin(bitmapToArray(users))) AS merged_users_count
FROM tmp.member_order_bitmap
WHERE sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;
GROUP BY sdate;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者（建议用这个，性能更快）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT sdate, bitmapCardinality(groupBitmapMergeState(users)) AS merged_users_count

FROM tmp.member_order_bitmap

WHERE sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;

GROUP BY sdate;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-- 查询最近一年总用户数（耗时2秒）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT countDistinct(arrayJoin(bitmapToArray(users))) AS merged_users_count
FROM tmp.member_order_bitmap
WHERE sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者（性能略微快一点）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select bitmapCardinality(groupBitmapOrState(users)) from(
select users from tmp.member_order_bitmap where sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者（性能快一倍多）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select bitmapCardinality(groupBitmapMergeState(users))
from tmp.member_order_bitmap where sdate BETWEEN &#39;2022-11-17&#39; AND &#39;2023-11-17&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>--查询2022-11-15和2022-11-16连续两天消费的用户数（交集），将bitmapToArray改为bitmapCardinality即返回用户数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT
bitmapToArray(bitmapAnd(r1.users_bitmap, r2.users_bitmap)) AS res
FROM
(
SELECT groupBitmapMergeState(users) AS users_bitmap
FROM tmp.member_order_bitmap
WHERE sdate = &#39;2023-11-15&#39;
) AS r1,
(
SELECT groupBitmapMergeState(users) AS users_bitmap
FROM tmp.member_order_bitmap
WHERE sdate = &#39;2023-11-16&#39;
) AS r2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function o(_,g){const s=d("ExternalLinkIcon");return t(),r("div",null,[m,i("p",null,[e("如有多张bitmap表可以进行交并计算（要比普通的用户表进行JOIN或者IN计算要高效很多）"),u,e(" clickhouse同样提供了一系列函数来进行bitmap之间的集合运算，包括并集、交集、差集、补集等。"),v,e(" 具体使用可查阅官方文档：bitmap函数"),i("a",b,[e("https://clickhouse.com/docs/zh/sql-reference/functions/bitmap-functions/"),l(s)])]),p])}const T=n(c,[["render",o],["__file","guassdb.html.vue"]]);export{T as default};
