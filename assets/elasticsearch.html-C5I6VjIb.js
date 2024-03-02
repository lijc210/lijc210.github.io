import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as u,c as d,a as n,b as e,d as t,e as a}from"./app-ClUidLAY.js";const o={},r=a(`<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>elasticsearch</span></a></h1><h2 id="查看集群状态-修复" tabindex="-1"><a class="header-anchor" href="#查看集群状态-修复"><span>查看集群状态，修复</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET _cluster/allocation/explain?pretty

GET /_cluster/allocation/explain

get /_cluster/settings

PUT /_cluster/settings
{
  &quot;transient&quot;: {
    &quot;cluster.routing.allocation.enable&quot;: &quot;none&quot;
  }
}
#分片配置

PUT /_cluster/settings
{
  &quot;transient&quot;: {
    &quot;cluster.routing.allocation.enable&quot;: &quot;all&quot;
  }
}

#分片重新均衡分配

PUT /_cluster/settings
{
  &quot;transient&quot;: {
    &quot;cluster.routing.rebalance.enable&quot;: &quot;all&quot;
  }
}

# 设置副本数量
PUT /aabb/_settings
{
&quot;number_of_replicas&quot; : 2
}

get _cluster/health?level=indices


GET _cat/nodes?v&amp;h=ip,heap.current,heap.percent,heap.max,ram.max,disk.avail,node.role,m

curl http://localhost:9200/_cat/nodes?v&amp;h=ip,heap.current,heap.percent,heap.max,ram.max,disk.avail,node.role,m

get _cat/master

post /_cluster/reroute
{
  &quot;commands&quot;: [
    {
      &quot;allocate_empty_primary&quot;: {
        &quot;index&quot;: &quot;wap_yonghu_v1&quot;,
        &quot;shard&quot;: 2,
        &quot;node&quot;: &quot;Ee6ubnnmT52LJchcw0P-pQ&quot;,
        &quot;accept_data_loss&quot;: false
      }
    }
  ]
}


#数据丢失
post /_cluster/reroute
{
&quot;commands&quot;: [
{
&quot;allocate_empty_primary&quot;: {
&quot;index&quot;: &quot;aabb_v2&quot;,
&quot;shard&quot;: 0,
&quot;node&quot;: &quot;Ee6ubnnmT52LJchcw0P-pQ&quot;,
&quot;accept_data_loss&quot;: true
}
}
]
}

#数据不丢失
post /_cluster/reroute
{
&quot;commands&quot; : [ {
&quot;allocate_stale_primary&quot; : {
&quot;index&quot; : &quot;aabb_v2&quot;,
&quot;shard&quot; :0,
&quot;node&quot; : &quot;Ee6ubnnmT52LJchcw0P-pQ&quot;,
&quot;accept_data_loss&quot; : true
}
}]
}


POST /_cluster/reroute?retry_failed=true


手动迁移分片
POST /_cluster/reroute
{
  &quot;commands&quot;: [
    {
      &quot;move&quot;: {
        &quot;index&quot;: &quot;aabb_v1&quot;,
        &quot;shard&quot;: 1,
        &quot;from_node&quot;: &quot;10.10.20.143&quot;,
        &quot;to_node&quot;: &quot;10.10.20.153&quot;
      }
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="记录慢日志-重启也生效" tabindex="-1"><a class="header-anchor" href="#记录慢日志-重启也生效"><span>记录慢日志，重启也生效</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PUT /_settings
{
&quot;index.search.slowlog.level&quot;: &quot;trace&quot;,            
&quot;index.search.slowlog.threshold.query.warn&quot;: &quot;10s&quot;,  
&quot;index.search.slowlog.threshold.query.info&quot;: &quot;5s&quot;,  
&quot;index.search.slowlog.threshold.query.debug&quot;: &quot;2s&quot;,  
&quot;index.search.slowlog.threshold.query.trace&quot;: &quot;500ms&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="记录慢查询日志" tabindex="-1"><a class="header-anchor" href="#记录慢查询日志"><span>记录慢查询日志</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl -XPUT &#39;http://localhost:9200/_all/_settings?preserve_existing=true&#39; -d &#39;{
  &quot;index.indexing.slowlog.threshold.index.debug&quot; : &quot;500ms&quot;,
  &quot;index.indexing.slowlog.threshold.index.info&quot; : &quot;2s&quot;,
  &quot;index.indexing.slowlog.threshold.index.warn&quot; : &quot;5s&quot;,
  &quot;index.search.slowlog.threshold.fetch.debug&quot; : &quot;500ms&quot;,
  &quot;index.search.slowlog.threshold.fetch.info&quot; : &quot;2s&quot;,
  &quot;index.search.slowlog.threshold.fetch.warn&quot; : &quot;5s&quot;,
  &quot;index.search.slowlog.threshold.query.debug&quot; : &quot;500ms&quot;,
  &quot;index.search.slowlog.threshold.query.info&quot; : &quot;2s&quot;,
  &quot;index.search.slowlog.threshold.query.warn&quot; : &quot;5s&quot;
}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量按条件更新" tabindex="-1"><a class="header-anchor" href="#批量按条件更新"><span>批量按条件更新</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>POST pyspider/result/_update_by_query
{
  &quot;script&quot;: {
    &quot;inline&quot;: &quot;ctx._source.result.company_list=0;&quot;
  },
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;_id&quot;: {
        &quot;value&quot;: &quot;qichacha:ecde53ee4b22383478536ee7d976046b&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索词分权重" tabindex="-1"><a class="header-anchor" href="#搜索词分权重"><span>搜索词分权重</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>post aabb/v9_news/_search
{
&quot;query&quot;: {
&quot;bool&quot;: {
&quot;must&quot;: {
&quot;multi_match&quot;: {
&quot;query&quot;: &quot;温馨的客厅&quot;,
&quot;fields&quot;: [
&quot;title&quot;
]
}
},
&quot;should&quot;: [
{
&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;客厅&quot;,
&quot;boost&quot;: 4
}
}
},
{
&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;温馨&quot;,
&quot;boost&quot;: 2
}
}
}
]
}
},&quot;_source&quot;:[&quot;title&quot;,&quot;create_time&quot;]
,&quot;size&quot;: 50
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统一更改刷新时间" tabindex="-1"><a class="header-anchor" href="#统一更改刷新时间"><span>统一更改刷新时间</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl -XPUT &#39;http://10.10.20.165:9200/_all/_settings?preserve_existing=true&#39; -d &#39;{
  &quot;index.refresh_interval&quot; : &quot;15s&quot;
}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化性能" tabindex="-1"><a class="header-anchor" href="#优化性能"><span>优化性能</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET _nodes/hot_threads?pretty


PUT /aabb/_settings
{
    &quot;index&quot;:{
        &quot;refresh_interval&quot;:&quot;30s&quot;,
        &quot;translog&quot;:{
            &quot;flush_threshold_size&quot;:&quot;2048m&quot;,
            &quot;sync_interval&quot;:&quot;120s&quot;,
            &quot;durability&quot;:&quot;async&quot;
        },
        &quot;merge&quot;:{
            &quot;policy.max_merge_at_once&quot;:5,
            &quot;policy.max_merge_at_once_explicit&quot;:15,
            &quot;policy.floor_segment&quot;:&quot;1mb&quot;,
            &quot;scheduler.max_thread_count&quot;:&quot;1&quot;
        }
    }
}


PUT /uc/_settings
{
    &quot;index&quot;:{
        &quot;refresh_interval&quot;:&quot;-1&quot;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引复制数据" tabindex="-1"><a class="header-anchor" href="#索引复制数据"><span>索引复制数据</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>http://localhost:9200/_reindex
{
    &quot;source&quot;:{
        &quot;index&quot;:&quot;old_index&quot;
    },
    &quot;dest&quot;:{
        &quot;index&quot;:&quot;new_index&quot;,
        &quot;op_type&quot;:&quot;create&quot;
    }
}
http://localhost:9200/_reindex
{
    &quot;source&quot;:{
        &quot;index&quot;:&quot;cut_word_data_v1&quot;
    },
    &quot;dest&quot;:{
        &quot;index&quot;:&quot;cut_word_data_v2&quot;,
        &quot;op_type&quot;:&quot;create&quot;
    }
}
curl -l -H &quot;Content-type: application/json&quot; -d &#39;{&quot;source&quot;:{&quot;index&quot;:&quot;crm-address_v2&quot;},&quot;dest&quot;:{&quot;index&quot;:&quot;crm-address_v1&quot;,&quot;op_type&quot;:&quot;create&quot; }}&#39;  http://localhost:9200/_reindex


curl -l -H &quot;Content-type: application/json&quot; -d &#39;{&quot;source&quot;:{&quot;index&quot;:&quot;aabb_v1&quot;},&quot;dest&quot;:{&quot;index&quot;:&quot;aabb_v2&quot;,&quot;op_type&quot;:&quot;create&quot; }}&#39;  http://localhost:9200/_reindex


curl -l -H &quot;Content-type: application/json&quot; -d &#39;{&quot;source&quot;:{&quot;index&quot;:&quot;wap_anli_v2&quot;},&quot;dest&quot;:{&quot;index&quot;:&quot;wap_anli_v1&quot;,&quot;op_type&quot;:&quot;create&quot; }}&#39;  http://localhost:9200/_reindex


curl -l -H &quot;Content-type: application/json&quot; -d &#39;{&quot;source&quot;:{&quot;remote&quot;:{&quot;host&quot;:&quot;http://10.10.20.33:9200&quot;},&quot;index&quot;:&quot;kn2_es_v1&quot;},&quot;dest&quot;:{&quot;index&quot;:&quot;kn2_es_v1&quot;,&quot;op_type&quot;:&quot;create&quot;}}&#39;  http://localhost:9200/_reindex

curl -l -H &quot;Content-type: application/json&quot; -d &#39;{&quot;source&quot;:{&quot;remote&quot;:{&quot;host&quot;:&quot;http://10.10.20.33:9200&quot;},&quot;index&quot;:&quot;pyspider&quot;},&quot;dest&quot;:{&quot;index&quot;:&quot;pyspider_v1&quot;,&quot;op_type&quot;:&quot;create&quot;}}&#39;  http://localhost:9200/_reindex


http://localhost:9200/_reindex
{
    &quot;source&quot;:{
        &quot;index&quot;:&quot;kn2_es_v1&quot;
    },
    &quot;dest&quot;:{
        &quot;index&quot;:&quot;kn2_es_v2&quot;,
        &quot;op_type&quot;:&quot;create&quot;
    }
}


远程复制：

POST _reindex
{
    &quot;source&quot;:{
        &quot;remote&quot;:{
            &quot;host&quot;:&quot;http://10.10.20.33:9200&quot;
        },
        &quot;index&quot;:&quot;test1&quot;
    },
    &quot;dest&quot;:{
        &quot;index&quot;:&quot;test2&quot;,
        &quot;op_type&quot;:&quot;create&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂时移除一个节点" tabindex="-1"><a class="header-anchor" href="#暂时移除一个节点"><span>暂时移除一个节点</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
下线：
PUT _cluster/settings
{
&quot;transient&quot; : {
&quot;cluster.routing.allocation.exclude._name&quot; : &quot;node-2&quot;
}
}
注意 这个操作是transient集群重启后，这个设置会失效



上线
PUT _cluster/settings
{
&quot;transient&quot; : {
&quot;cluster.routing.allocation.exclude._name&quot; : &quot;&quot;
}
}
只要让_name匹配不到对用的node即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索结果返回不一致问题" tabindex="-1"><a class="header-anchor" href="#搜索结果返回不一致问题"><span>搜索结果返回不一致问题</span></a></h2><p>一、背景</p>`,21),c=n("br",null,null,-1),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/consistent-scoring.html",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),q=n("br",null,null,-1),b={href:"https://www.elastic.co/guide/en/elasticsearch/guide/2.x/_search_options.html#_preference%EF%BC%89%EF%BC%8C%E5%8D%B3%E5%9C%A8%E6%90%9C%E7%B4%A2%E6%97%B6%E8%AE%BE%E7%BD%AEpreference%E7%89%B9%E6%80%A7%E3%80%82%E5%A6%82%E4%B8%8B%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),p=n("br",null,null,-1),_=n("br",null,null,-1),x=n("br",null,null,-1),g=n("br",null,null,-1),y=n("br",null,null,-1),f=n("br",null,null,-1),E=n("br",null,null,-1),w=n("br",null,null,-1),T=n("br",null,null,-1),P=n("br",null,null,-1),k=n("br",null,null,-1),B=n("br",null,null,-1),A=n("br",null,null,-1),U=n("br",null,null,-1);function C(S,z){const i=l("ExternalLinkIcon");return u(),d("div",null,[r,n("p",null,[e("这周在使用Elasticsearch搜索的时候遇到一个，对于同一个搜索请求，会出现top50返回结果和排序不一致的问题。那么为什么会出现这样的问题？"),c,e(" 后来通过百度和google，发现这是因为Elastcisearch的分布式搜索特性导致。Elasticsearch在搜索时，会循环的选择主分片和其副本中的一个来计算和返回搜索结果，而由于主分片和副本中相关统计信息的不同，从而导致了同一个搜索串的评分的不一致，进而导致排序不一样。而造成这种主分片和副本统计信息不一致的具体原因，是因为文档删除时造成的，具体可以参考官方给出的解释："),n("a",v,[e("https://www.elastic.co/guide/en/elasticsearch/reference/current/consistent-scoring.html"),t(i)]),m,e(" 二、解决办法"),q,e(" 针对上述问题，Elasticsearch官方也给出了解决方案（"),n("a",b,[e("https://www.elastic.co/guide/en/elasticsearch/guide/2.x/_search_options.html#_preference），即在搜索时设置preference特性。如下："),t(i)]),h,e(" SearchRequestBuilder builder = client.prepareSearch(offLin.index)"),p,e(" .setTypes(offLin.type)"),_,e(" .setQuery(queryBuilder)"),x,e(" .setFetchSource(fetchFields, null)"),g,e(" .setSize(limit)"),y,e(' .setPreference("_primary_first");'),f,e(" 那么preference可以取哪些值，每个值的含义是什么呢，可以参考下面解释："),E,e(" （1）randomizeacross shards：随机选择分片或其副本查询数据，es的默认方式。"),w,e(" （2）_local：优先在本地节点上的分片查询数据然后再去其他节点上的分片查询，本地节点没有IO问题但有可能造成负载不均问题。"),T,e(" （3）_primary：搜索只在主分片执行搜索请求，副本不参与搜索；性能会打折扣，达不到性能的水平扩展。"),P,e(" （4）_primary_first：优先在主分片执行，如果主分片挂掉，会在副本执行请求。"),k,e(" （5）_only_node:123 ：只在123这个节点执行搜索。"),B,e(" （6）_prefer_node:123：搜索请求优先在节点123执行。"),A,e(" （7）_shards:1,2：搜索只在分片2、3执行，可以与_primary参数一起使用如：_shards:2,3;_primary"),U,e(" （8）随机字符串：指定一个随机字符串，可以保证同样的请求，被分配到同样的副本上面，从而保证同一请求结果的稳定性。我遇到的问题就可以使用这种方式，把搜索串的hash值作为随机字符串，这样可以保证同一个搜索条件的请求的返回结果和排序一致。")])])}const D=s(o,[["render",C],["__file","elasticsearch.html.vue"]]),O=JSON.parse('{"path":"/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E5%BA%93/elasticsearch.html","title":"elasticsearch","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["数据库"],"tag":["elasticsearch"],"description":"elasticsearch 查看集群状态，修复 记录慢日志，重启也生效 记录慢查询日志 批量按条件更新 搜索词分权重 统一更改刷新时间 优化性能 索引复制数据 暂时移除一个节点 搜索结果返回不一致问题 一、背景 这周在使用Elasticsearch搜索的时候遇到一个，对于同一个搜索请求，会出现top50返回结果和排序不一致的问题。那么为什么会出现这样的...","head":[["meta",{"property":"og:url","content":"https://www.cizai.io/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E5%BA%93/elasticsearch.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"elasticsearch"}],["meta",{"property":"og:description","content":"elasticsearch 查看集群状态，修复 记录慢日志，重启也生效 记录慢查询日志 批量按条件更新 搜索词分权重 统一更改刷新时间 优化性能 索引复制数据 暂时移除一个节点 搜索结果返回不一致问题 一、背景 这周在使用Elasticsearch搜索的时候遇到一个，对于同一个搜索请求，会出现top50返回结果和排序不一致的问题。那么为什么会出现这样的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-13T06:58:32.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"elasticsearch"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-13T06:58:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"elasticsearch\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-13T06:58:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://www.cizai.io\\"}]}"]]},"headers":[{"level":2,"title":"查看集群状态，修复","slug":"查看集群状态-修复","link":"#查看集群状态-修复","children":[]},{"level":2,"title":"记录慢日志，重启也生效","slug":"记录慢日志-重启也生效","link":"#记录慢日志-重启也生效","children":[]},{"level":2,"title":"记录慢查询日志","slug":"记录慢查询日志","link":"#记录慢查询日志","children":[]},{"level":2,"title":"批量按条件更新","slug":"批量按条件更新","link":"#批量按条件更新","children":[]},{"level":2,"title":"搜索词分权重","slug":"搜索词分权重","link":"#搜索词分权重","children":[]},{"level":2,"title":"统一更改刷新时间","slug":"统一更改刷新时间","link":"#统一更改刷新时间","children":[]},{"level":2,"title":"优化性能","slug":"优化性能","link":"#优化性能","children":[]},{"level":2,"title":"索引复制数据","slug":"索引复制数据","link":"#索引复制数据","children":[]},{"level":2,"title":"暂时移除一个节点","slug":"暂时移除一个节点","link":"#暂时移除一个节点","children":[]},{"level":2,"title":"搜索结果返回不一致问题","slug":"搜索结果返回不一致问题","link":"#搜索结果返回不一致问题","children":[]}],"git":{"createdTime":1689218642000,"updatedTime":1689231512000,"contributors":[{"name":"lijc210","email":"lijc210@163.com","commits":2}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"大数据/数据库/elasticsearch.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>查看集群状态，修复</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>GET _cluster/allocation/explain?pretty\\n\\nGET /_cluster/allocation/explain\\n\\nget /_cluster/settings\\n\\nPUT /_cluster/settings\\n{\\n  \\"transient\\": {\\n    \\"cluster.routing.allocation.enable\\": \\"none\\"\\n  }\\n}\\n#分片配置\\n\\nPUT /_cluster/settings\\n{\\n  \\"transient\\": {\\n    \\"cluster.routing.allocation.enable\\": \\"all\\"\\n  }\\n}\\n\\n#分片重新均衡分配\\n\\nPUT /_cluster/settings\\n{\\n  \\"transient\\": {\\n    \\"cluster.routing.rebalance.enable\\": \\"all\\"\\n  }\\n}\\n\\n# 设置副本数量\\nPUT /aabb/_settings\\n{\\n\\"number_of_replicas\\" : 2\\n}\\n\\nget _cluster/health?level=indices\\n\\n\\nGET _cat/nodes?v&amp;h=ip,heap.current,heap.percent,heap.max,ram.max,disk.avail,node.role,m\\n\\ncurl http://localhost:9200/_cat/nodes?v&amp;h=ip,heap.current,heap.percent,heap.max,ram.max,disk.avail,node.role,m\\n\\nget _cat/master\\n\\npost /_cluster/reroute\\n{\\n  \\"commands\\": [\\n    {\\n      \\"allocate_empty_primary\\": {\\n        \\"index\\": \\"wap_yonghu_v1\\",\\n        \\"shard\\": 2,\\n        \\"node\\": \\"Ee6ubnnmT52LJchcw0P-pQ\\",\\n        \\"accept_data_loss\\": false\\n      }\\n    }\\n  ]\\n}\\n\\n\\n#数据丢失\\npost /_cluster/reroute\\n{\\n\\"commands\\": [\\n{\\n\\"allocate_empty_primary\\": {\\n\\"index\\": \\"aabb_v2\\",\\n\\"shard\\": 0,\\n\\"node\\": \\"Ee6ubnnmT52LJchcw0P-pQ\\",\\n\\"accept_data_loss\\": true\\n}\\n}\\n]\\n}\\n\\n#数据不丢失\\npost /_cluster/reroute\\n{\\n\\"commands\\" : [ {\\n\\"allocate_stale_primary\\" : {\\n\\"index\\" : \\"aabb_v2\\",\\n\\"shard\\" :0,\\n\\"node\\" : \\"Ee6ubnnmT52LJchcw0P-pQ\\",\\n\\"accept_data_loss\\" : true\\n}\\n}]\\n}\\n\\n\\nPOST /_cluster/reroute?retry_failed=true\\n\\n\\n手动迁移分片\\nPOST /_cluster/reroute\\n{\\n  \\"commands\\": [\\n    {\\n      \\"move\\": {\\n        \\"index\\": \\"aabb_v1\\",\\n        \\"shard\\": 1,\\n        \\"from_node\\": \\"10.10.20.143\\",\\n        \\"to_node\\": \\"10.10.20.153\\"\\n      }\\n    }\\n  ]\\n}\\n\\n</code></pre></div>","autoDesc":true}');export{D as comp,O as data};
