import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as a}from"./app-C-hYVthU.js";const n={},s=a(`<h1 id="hadoop" tabindex="-1"><a class="header-anchor" href="#hadoop"><span>hadoop</span></a></h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hadoop fs -ls /
hadoop fs -ls /user
hadoop fs -ls /kn1

hadoop fs -ls /user/lijicong/warehouse/kn1/kn1_tf_pictures_cut_title_dt

-- 查看数据库所在路径
describe database database_name;
--获取table的真实hdfs路径
desc formatted my_table;
--获取partition的真实hdfs路径
desc formatted my_table(pt=&#39;20140804&#39;);

Hive查看表所有分区
show partitions t_test_order;



hadoop查找文件
hadoop fs -lsr  / | grep foods



hdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018

hdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018

hdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018/001



alter table test.ods_traf_toutiao_search drop if exists partition (dt=&#39;20161018&#39;);
alter table test.ods_traf_toutiao_search add partition (dt=&#39;20161018&#39;) location &#39;/ods/ods_traf_toutiao_search/dt=20161018&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hdfs-清理28天前数据" tabindex="-1"><a class="header-anchor" href="#hdfs-清理28天前数据"><span>hdfs 清理28天前数据</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#! /bin/bash
tt=\`date -d &quot;28 day ago&quot; +%Y-%m-%d\`
tt1=\`date -d $tt +%s\`
hdfs dfs -ls /flink/checkpoints/ | while read line
do
    echo $line
    file_dt=\`echo $line| awk &#39;{print $6}&#39;\`
    #echo $file_dt
    file=\`echo $line | awk &#39;{print $NF}&#39;\`
    #echo $file
    # 将日期转换成数字
    file_dt_num=$(date -d \${file_dt} +%s)
    #echo $file_dt_num
    # 删除28天之前的数据
    if [ $file_dt_num -le $tt1 ];then
        echo $file&quot; was deleted&quot;
        hdfs dfs -rm -r -skipTrash $file
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn参数" tabindex="-1"><a class="header-anchor" href="#yarn参数"><span>yarn参数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-c,--class &lt;classname&gt; 如果没有在jar包中指定入口类，则需要在这里通过这个参数指定
-m,--jobmanager &lt;host:port&gt; 指定需要连接的jobmanager(主节点)地址，使用这个参数可以指定一个不同于配置文件中的jobmanager
-p,--parallelism &lt;parallelism&gt; 指定程序的并行度。可以覆盖配置文件中的默认值
-yn taskmanager个数
-yjm  jobmanager内存大小
-ytm  taskmanager内存大小
-ys    一个taskmanager的slot个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[s];function o(l,r){return t(),i("div",null,d)}const u=e(n,[["render",o],["__file","hadoop.html.vue"]]),h=JSON.parse(`{"path":"/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E7%BB%84%E4%BB%B6/hadoop.html","title":"hadoop","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["组件"],"tag":["hadoop"],"description":"hadoop 常用命令 hdfs 清理28天前数据 yarn参数 ","head":[["meta",{"property":"og:url","content":"https://www.cizai.io/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E7%BB%84%E4%BB%B6/hadoop.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"hadoop"}],["meta",{"property":"og:description","content":"hadoop 常用命令 hdfs 清理28天前数据 yarn参数 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-13T06:58:32.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"hadoop"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-13T06:58:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hadoop\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-13T06:58:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://www.cizai.io\\"}]}"]]},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"hdfs 清理28天前数据","slug":"hdfs-清理28天前数据","link":"#hdfs-清理28天前数据","children":[]},{"level":2,"title":"yarn参数","slug":"yarn参数","link":"#yarn参数","children":[]}],"git":{"createdTime":1689218642000,"updatedTime":1689231512000,"contributors":[{"name":"lijc210","email":"lijc210@163.com","commits":2}]},"readingTime":{"minutes":1.13,"words":339},"filePathRelative":"大数据/组件/hadoop.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>常用命令</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>hadoop fs -ls /\\nhadoop fs -ls /user\\nhadoop fs -ls /kn1\\n\\nhadoop fs -ls /user/lijicong/warehouse/kn1/kn1_tf_pictures_cut_title_dt\\n\\n-- 查看数据库所在路径\\ndescribe database database_name;\\n--获取table的真实hdfs路径\\ndesc formatted my_table;\\n--获取partition的真实hdfs路径\\ndesc formatted my_table(pt='20140804');\\n\\nHive查看表所有分区\\nshow partitions t_test_order;\\n\\n\\n\\nhadoop查找文件\\nhadoop fs -lsr  / | grep foods\\n\\n\\n\\nhdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018\\n\\nhdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018\\n\\nhdfs dfs -put /home/lijicong/tmp/ods_traf_toutiao_search_20161018.txt /user/lijicong/warehouse/ods/ods_traf_toutiao_search/dt=20161018/001\\n\\n\\n\\nalter table test.ods_traf_toutiao_search drop if exists partition (dt='20161018');\\nalter table test.ods_traf_toutiao_search add partition (dt='20161018') location '/ods/ods_traf_toutiao_search/dt=20161018';\\n</code></pre></div>","autoDesc":true}`);export{u as comp,h as data};
