import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-62a24d06.js";const d={},a=s(`<h1 id="hadoop" tabindex="-1"><a class="header-anchor" href="#hadoop" aria-hidden="true">#</a> hadoop</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hadoop fs -ls /
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hdfs-清理28天前数据" tabindex="-1"><a class="header-anchor" href="#hdfs-清理28天前数据" aria-hidden="true">#</a> hdfs 清理28天前数据</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#! /bin/bash
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn参数" tabindex="-1"><a class="header-anchor" href="#yarn参数" aria-hidden="true">#</a> yarn参数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-c,--class &lt;classname&gt; 如果没有在jar包中指定入口类，则需要在这里通过这个参数指定
-m,--jobmanager &lt;host:port&gt; 指定需要连接的jobmanager(主节点)地址，使用这个参数可以指定一个不同于配置文件中的jobmanager
-p,--parallelism &lt;parallelism&gt; 指定程序的并行度。可以覆盖配置文件中的默认值
-yn taskmanager个数
-yjm  jobmanager内存大小
-ytm  taskmanager内存大小
-ys    一个taskmanager的slot个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[a];function t(r,c){return i(),n("div",null,l)}const u=e(d,[["render",t],["__file","hadoop.html.vue"]]);export{u as default};
