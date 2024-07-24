---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 数据库
tag:
  - elasticsearch
---

# elasticsearch

## 查看集群状态，修复
```
GET _cluster/allocation/explain?pretty

GET /_cluster/allocation/explain

get /_cluster/settings

PUT /_cluster/settings
{
  "transient": {
    "cluster.routing.allocation.enable": "none"
  }
}
#分片配置

PUT /_cluster/settings
{
  "transient": {
    "cluster.routing.allocation.enable": "all"
  }
}

#分片重新均衡分配

PUT /_cluster/settings
{
  "transient": {
    "cluster.routing.rebalance.enable": "all"
  }
}

# 设置副本数量
PUT /aabb/_settings
{
"number_of_replicas" : 2
}

get _cluster/health?level=indices


GET _cat/nodes?v&h=ip,heap.current,heap.percent,heap.max,ram.max,disk.avail,node.role,m

curl http://localhost:9200/_cat/nodes?v&h=ip,heap.current,heap.percent,heap.max,ram.max,disk.avail,node.role,m

get _cat/master

post /_cluster/reroute
{
  "commands": [
    {
      "allocate_empty_primary": {
        "index": "wap_yonghu_v1",
        "shard": 2,
        "node": "Ee6ubnnmT52LJchcw0P-pQ",
        "accept_data_loss": false
      }
    }
  ]
}


#数据丢失
post /_cluster/reroute
{
"commands": [
{
"allocate_empty_primary": {
"index": "aabb_v2",
"shard": 0,
"node": "Ee6ubnnmT52LJchcw0P-pQ",
"accept_data_loss": true
}
}
]
}

#数据不丢失
post /_cluster/reroute
{
"commands" : [ {
"allocate_stale_primary" : {
"index" : "aabb_v2",
"shard" :0,
"node" : "Ee6ubnnmT52LJchcw0P-pQ",
"accept_data_loss" : true
}
}]
}


POST /_cluster/reroute?retry_failed=true


手动迁移分片
POST /_cluster/reroute
{
  "commands": [
    {
      "move": {
        "index": "aabb_v1",
        "shard": 1,
        "from_node": "10.10.20.143",
        "to_node": "10.10.20.153"
      }
    }
  ]
}

```

## 记录慢日志，重启也生效

```
PUT /_settings
{
"index.search.slowlog.level": "trace",            
"index.search.slowlog.threshold.query.warn": "10s",  
"index.search.slowlog.threshold.query.info": "5s",  
"index.search.slowlog.threshold.query.debug": "2s",  
"index.search.slowlog.threshold.query.trace": "500ms"
}
```

## 记录慢查询日志
```
curl -XPUT 'http://localhost:9200/_all/_settings?preserve_existing=true' -d '{
  "index.indexing.slowlog.threshold.index.debug" : "500ms",
  "index.indexing.slowlog.threshold.index.info" : "2s",
  "index.indexing.slowlog.threshold.index.warn" : "5s",
  "index.search.slowlog.threshold.fetch.debug" : "500ms",
  "index.search.slowlog.threshold.fetch.info" : "2s",
  "index.search.slowlog.threshold.fetch.warn" : "5s",
  "index.search.slowlog.threshold.query.debug" : "500ms",
  "index.search.slowlog.threshold.query.info" : "2s",
  "index.search.slowlog.threshold.query.warn" : "5s"
}'
```

## 批量按条件更新
```
POST pyspider/result/_update_by_query
{
  "script": {
    "inline": "ctx._source.result.company_list=0;"
  },
  "query": {
    "term": {
      "_id": {
        "value": "qichacha:ecde53ee4b22383478536ee7d976046b"
      }
    }
  }
}
```

## 搜索词分权重
```
post aabb/v9_news/_search
{
"query": {
"bool": {
"must": {
"multi_match": {
"query": "温馨的客厅",
"fields": [
"title"
]
}
},
"should": [
{
"match": {
"title": {
"query": "客厅",
"boost": 4
}
}
},
{
"match": {
"title": {
"query": "温馨",
"boost": 2
}
}
}
]
}
},"_source":["title","create_time"]
,"size": 50
}
```

## 统一更改刷新时间

```
curl -XPUT 'http://10.10.20.165:9200/_all/_settings?preserve_existing=true' -d '{
  "index.refresh_interval" : "15s"
}'
```

## 优化性能
```
GET _nodes/hot_threads?pretty


PUT /aabb/_settings
{
    "index":{
        "refresh_interval":"30s",
        "translog":{
            "flush_threshold_size":"2048m",
            "sync_interval":"120s",
            "durability":"async"
        },
        "merge":{
            "policy.max_merge_at_once":5,
            "policy.max_merge_at_once_explicit":15,
            "policy.floor_segment":"1mb",
            "scheduler.max_thread_count":"1"
        }
    }
}


PUT /uc/_settings
{
    "index":{
        "refresh_interval":"-1"
        }
}
```

## 索引复制数据
```
http://localhost:9200/_reindex
{
    "source":{
        "index":"old_index"
    },
    "dest":{
        "index":"new_index",
        "op_type":"create"
    }
}
http://localhost:9200/_reindex
{
    "source":{
        "index":"cut_word_data_v1"
    },
    "dest":{
        "index":"cut_word_data_v2",
        "op_type":"create"
    }
}
curl -l -H "Content-type: application/json" -d '{"source":{"index":"crm-address_v2"},"dest":{"index":"crm-address_v1","op_type":"create" }}'  http://localhost:9200/_reindex


curl -l -H "Content-type: application/json" -d '{"source":{"index":"aabb_v1"},"dest":{"index":"aabb_v2","op_type":"create" }}'  http://localhost:9200/_reindex


curl -l -H "Content-type: application/json" -d '{"source":{"index":"wap_anli_v2"},"dest":{"index":"wap_anli_v1","op_type":"create" }}'  http://localhost:9200/_reindex


curl -l -H "Content-type: application/json" -d '{"source":{"remote":{"host":"http://10.10.20.33:9200"},"index":"kn2_es_v1"},"dest":{"index":"kn2_es_v1","op_type":"create"}}'  http://localhost:9200/_reindex

curl -l -H "Content-type: application/json" -d '{"source":{"remote":{"host":"http://10.10.20.33:9200"},"index":"pyspider"},"dest":{"index":"pyspider_v1","op_type":"create"}}'  http://localhost:9200/_reindex


http://localhost:9200/_reindex
{
    "source":{
        "index":"kn2_es_v1"
    },
    "dest":{
        "index":"kn2_es_v2",
        "op_type":"create"
    }
}


远程复制：

POST _reindex
{
    "source":{
        "remote":{
            "host":"http://10.10.20.33:9200"
        },
        "index":"test1"
    },
    "dest":{
        "index":"test2",
        "op_type":"create"
    }
}
```

## 暂时移除一个节点
```

下线：
PUT _cluster/settings
{
"transient" : {
"cluster.routing.allocation.exclude._name" : "node-2"
}
}
注意 这个操作是transient集群重启后，这个设置会失效



上线
PUT _cluster/settings
{
"transient" : {
"cluster.routing.allocation.exclude._name" : ""
}
}
只要让_name匹配不到对用的node即可
```
## 搜索结果返回不一致问题

一、背景

这周在使用Elasticsearch搜索的时候遇到一个，对于同一个搜索请求，会出现top50返回结果和排序不一致的问题。那么为什么会出现这样的问题？
后来通过百度和google，发现这是因为Elastcisearch的分布式搜索特性导致。Elasticsearch在搜索时，会循环的选择主分片和其副本中的一个来计算和返回搜索结果，而由于主分片和副本中相关统计信息的不同，从而导致了同一个搜索串的评分的不一致，进而导致排序不一样。而造成这种主分片和副本统计信息不一致的具体原因，是因为文档删除时造成的，具体可以参考官方给出的解释：https://www.elastic.co/guide/en/elasticsearch/reference/current/consistent-scoring.html
二、解决办法
针对上述问题，Elasticsearch官方也给出了解决方案（https://www.elastic.co/guide/en/elasticsearch/guide/2.x/_search_options.html#_preference），即在搜索时设置preference特性。如下：
SearchRequestBuilder builder = client.prepareSearch(offLin.index)
        .setTypes(offLin.type)
        .setQuery(queryBuilder)
        .setFetchSource(fetchFields, null)
        .setSize(limit)
        .setPreference("_primary_first");
那么preference可以取哪些值，每个值的含义是什么呢，可以参考下面解释：
（1）randomizeacross shards：随机选择分片或其副本查询数据，es的默认方式。
（2）_local：优先在本地节点上的分片查询数据然后再去其他节点上的分片查询，本地节点没有IO问题但有可能造成负载不均问题。
（3）_primary：搜索只在主分片执行搜索请求，副本不参与搜索；性能会打折扣，达不到性能的水平扩展。
（4）_primary_first：优先在主分片执行，如果主分片挂掉，会在副本执行请求。
（5）_only_node:123 ：只在123这个节点执行搜索。
（6）_prefer_node:123：搜索请求优先在节点123执行。
（7）_shards:1,2：搜索只在分片2、3执行，可以与_primary参数一起使用如：_shards:2,3;_primary
（8）随机字符串：指定一个随机字符串，可以保证同样的请求，被分配到同样的副本上面，从而保证同一请求结果的稳定性。我遇到的问题就可以使用这种方式，把搜索串的hash值作为随机字符串，这样可以保证同一个搜索条件的请求的返回结果和排序一致。
