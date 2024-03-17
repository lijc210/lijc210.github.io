---
icon: edit
date: 2022-01-01
category:
  - 数据库
tag:
  - neo4j
---

# neo4j

## neo4j 查询
```
# 查某人全部关系
return (:star{starname:"张国荣"})-->();
# 查某人朋友的朋友（5层关系）
match p=(n:star{starname:"张国荣"})-[*..5]->() return p limit 50;
# 查询特定关系
match p=()-[:rel{relation:"旧爱"}]->() return p LIMIT 25;
# 使用函数，查询张国荣与张卫健的最短路径
match p=shortestpath((:star{starname:"张国荣"})-[*..5]->(:star{starname:"张卫健"})) return p;

# 查询某节点
MATCH (n:shop) where n.shop_name="奥普浴霸苏州专卖店" RETURN n LIMIT 200
# 查询和某节点的全部关系
MATCH p=(:shop{shop_name:"长沙华艺卫浴专营店"})-->() return p LIMIT 200;
# 查询特定关系
MATCH p=()-[r:`品牌`]->() RETURN p LIMIT 200

# 查某节点（5层关系）
match p=(n:shop{shop_name:"长沙华艺卫浴专营店"})-[*..5]->() return p limit 50;

删除节点和关系
MATCH (n:shop) DETACH DELETE n
```

## neo4j load csv

```
创建店铺与品类，品牌，标签的关系图

LOAD CSV FROM 'file:///店铺.csv' AS data CREATE (:shop{shop_id:data[0], shop_name:data[1]});
LOAD CSV FROM 'file:///品类.csv' AS data CREATE (:category{category_id:data[0], name:data[1]});
LOAD CSV FROM 'file:///品牌.csv' AS data CREATE (:brand{id:data[0], name:data[1]});
LOAD CSV FROM 'file:///标签.csv' AS data CREATE (:label{id:data[0], name:data[1]});

USING periodic commit 1000
LOAD CSV FROM 'file:///店铺对应品类.csv' AS data
MATCH (from:shop{shop_id:data[0]}),(to:category{category_id:data[3]})
create (from)-[r:品类{relation:data[2]}]-> (to);


LOAD CSV FROM 'file:///店铺对应品牌.csv' AS data
MATCH (from:shop{shop_id:data[0]}),(to:brand{id:data[3]})
create (from)-[r:品牌{relation:data[2]}]-> (to);


LOAD CSV FROM 'file:///店铺对应标签.csv' AS data
MATCH (from:shop{shop_id:data[0]}),(to:label{id:data[3]})
Create (from)-[r:标签{relation:data[2]}]-> (to);
```