---
icon: edit
date: 2022-01-01
category:
  - 锅圈 
tag:
  # - 红
  # - 大
  # - 圆
---

# 群公告

## 20230606
ALTER TABLE public.dwd_gqsh_order_gqsh_order ADD order_equity int4 NULL;
停掉DwdGqshOrderGqshOrderKafka_0522，启动	DwdGqshOrderGqshOrderKafka_0606

## 群公告
2021年目标：
 - 提升工作的可见性、数据分析的专业性（数据分析牵头）
 - 工作推进项目制、流程化（数据产品牵头）
 - 开发工作标准化、把控头尾启动及验收，全流程牵头及负责开发质量（数据质量牵头）
 - 延伸到业务系统的数据治理（数据库架构师牵头，现有优化+未来规划）

重点项目
 - 指南针报表体系（泽东）
 - S级项目报表中台含标签、会员、营销等（数仓产品牵头） 
 - 埋点（数据产品牵头）

基础支持类项目（开发牵头） 
 - CDH中台规划
 - 璇玑
 - 天启

团队内部管理
 - 完善组织架构  +1产品线负责人 、+1数据库架构师，内部明确数仓架构师职能
 - 产品+项目+质量在一个组织内
 - 加强分析师团队与业务的结合深度

## 城市排名 city_rank

城市排名            city_rank
上一名销售金额  city_rank_last
下一名销售金额  city_rank_first
城市平均            city_avg_sales
距离平均            distance_avg_sales [销售应收金额]-[城市平均]
比平均               divided_avg_sales  [距离平均]/[城市平均]
城市最高            city_max_sales
距离最高            distance_max_sales [销售应收金额]-[城市最高]
比最高               divided_max_sales [距离最高]/[城市最高]

商品销售额排名 取TOP20
商品销量排名 取TOP20


新建ads_order_sales_sum表

停掉 AdsOrderSalesAndItem_0501
修改数据库链接，启动 AdsOrderSalesAndItem_0517
这四个数据集替换到生产

![](/assets/images/CC4C4AE8-F806-44C0-8983-CAFDB3B063A8.png)


## 华为云
flink上传依赖jar包
上传到 /opt/client/Flink/flink/lib


以下步骤不需要：
把jar放到flinkserver，master2和master3路径
/opt/Bigdata/FusionInsight_Flink_8.1.2.1/1_14_FlinkServer/install/flink/lib
把jar上传到hdfs
hdfs dfs -put mysql-connector-java-8.0.22.jar /FusionInsight_FlinkServer/8.1.2-312019/lib/
hdfs dfs -ls /FusionInsight_FlinkServer/8.1.2-312019/lib
hdfs dfs -rm /FusionInsight_FlinkServer/8.1.2-312019/lib/fastjson-1.2.62.jar
最后重启FlinkServer
cp /opt/Bigdata/adapters/FusionInsight_HD_8.1.2.1/Yarn/backup/controller/lib/fastjson-1.2.72.jar ./



flink run -m yarn-cluster  -ynm dwdOrderHbase -ytm 12288 -ys 4 -yjm 2048 -c com.guoquan.flink_dwd_gqsh_order.dwdOrderHbase flink_dwd_gqsh_order-1.0-SNAPSHOT.jar -scan_startup_mode timestamp -timestamp 1675915200000

flink run -m yarn-cluster -ynm order -ytm 10240 -ys 4 -yjm 2048 -c com.guoquan.flink_gqsh_order.order flink_gqsh_order-1.0-SNAPSHOT.jar -scan_startup_mode timestamp -timestamp 1673789470000

flink run -m yarn-cluster  -ynm datasc -ytm 8192 -ys 4 -yjm 2048 -c com.guoquan.flink_gqsh_datasc.Datasc flink_gqsh_datasc-1.0-SNAPSHOT.jar -scan_startup_mode timestamp -timestamp 1672968394000

flink run -m yarn-cluster -ynm odsHbase -ytm 2048 -ys 4 -yjm 1024 -c com.guoquan.flink_ods.odsHbase flink_ods-1.0-SNAPSHOT.jar 



source /home/omm/.bashrc && cd /home/omm && flink run -m yarn-cluster -ytm 2048 -ynm dimMemberInfoLabelHistory -c com.guoquan.flink_gqsh_datasc.DatascHistory flink_gqsh_datasc-1.0-SNAPSHOT.jar -function memberRechargeCompletedHistory



历史补数
flink run -m yarn-cluster  -ynm DatascHistory -c com.guoquan.flink_gqsh_order.DatascHistory  flink_gqsh_datasc-1.0-SNAPSHOT.jar -function unionidHistory


查看包冲突：
grep -Rn 'com.alibaba.fastjson.JSON' ./*


clickhouse：
/opt/Bigdata/FusionInsight_ClickHouse_8.1.2.1/1_13_ClickHouseServer/etc/config.xml




yarn application -list
yarn application -kill application_1656347359893_0083




定时任务：
0 1 * * * cd /home/omm && flink run -m yarn-cluster  -ynm orderInit -c com.guoquan.flink_gqsh_order.orderInit flink_data_init-1.0-SNAPSHOT.jar
5 1 * * * cd /home/omm && flink run -m yarn-cluster  -ynm orderInit -c com.guoquan.flink_gqsh_order.stockInit flink_data_init-1.0-SNAPSHOT.jar

0 5 * * * cd /home/omm && flink run -m yarn-cluster  -ynm dimStoreShopHistory -c com.guoquan.flink_gqsh_order.DatascHistory flink_gqsh_datasc-1.0-SNAPSHOT.jar -function dimStoreShopHistory

10 5 * * * cd /home/omm && flink run -m yarn-cluster  -ynm dimStoreShopCashierSystemHistory -c com.guoquan.flink_gqsh_order.DatascHistory flink_gqsh_datasc-1.0-SNAPSHOT.jar -function dimStoreShopCashierSystemHistory

20 5 * * * cd /home/omm && flink run -m yarn-cluster  -ynm dimMemberInfoLabelHistory -c com.guoquan.flink_gqsh_order.DatascHistory flink_gqsh_datasc-1.0-SNAPSHOT.jar -function dimMemberInfoLabelHistory

0 7 * * * cd /home/omm && java -cp guoquan-dataprocess-1.0-SNAPSHOT-jar-with-dependencies.jar com.guoquan.dataprocess.icc.IccCustomDataCk


java -cp guoquan-dataprocess-app-1.0-SNAPSHOT-jar-with-dependencies.jar com.guoquan.dataprocess.icc.IccPush

java -cp guoquan-dataprocess-app-1.0-SNAPSHOT-jar-with-dependencies.jar com.guoquan.dataprocess.kafka.KafkaToDatabase

## 监控中心值班管理规范
监控中心值班管理规范

为了将技术中心 Oncall 值班管理规范落到实处，真正把 Oncall 值班电话的威力发挥出来，从而提高故障响应时效和处理效率，减少公司损失，保障生产系统健康有序运行；要求所有产品技术部门在Oncall 
值班每周五更新人员名单确保可用。

监控中心值班：周一到周日9点-21点企业微信，非工作时间第一联系：监控中心企业微信。第二联系人：忻夏勇 电话：13818091903，第三联系人：温春杰 电话：13564860377


Oncall 
    值班人员作为所负责模块的第一责任人，在接收到故障处理、告警短信或电话等时应当主动上线进行处理，并及时汇报相关信息给监控中心-企业微信；
    监控中心联系相关系统 Oncall 值班人员时，Oncall 值班人员要立即跟进或协调本部门最适合的人员跟进；Oncall 值班人员如拨打两次无响应将逐级上升直到部门总监。


人员要求
    Oncall 值班人员需对负责的告警和故障处理较为熟悉；
    Oncall 值班人员应积极配合监控中心处理故障，不能因为资源限制影响故障处理；
    Oncall 值班人员在接到监控中心电话后要 5 分钟内做出响应，10 分钟内上线处理告警或故障。
违规通报
    拨打 Oncall 
值班人员电话三次及以上仍无应答的；
    Oncall 值班人员不响应监控中心请求超过 5 分钟的； 
    Oncall 值班名单未及时更新导致无法联系到支持人员的。
 如有上行为的将依照《事故综合评分及处罚办法》奖惩措施中的惩戒措施进行相关通报。


 ## 金蝶

```
select
t1.fdate as 日期,
--t1.jd_stock_name as 仓库名称,
t1.province as 省份,
t1.city as 城市,
t1.is_jinchu as 是否进出口业务,
t1.fnumber as  物料编码,
t1.fname as  物料名称,
t1.fpriceunitqty as 计价数量,
t1.famount as 金额,
t1.FALLAMOUNT as 价税合计,
t2.fmaterialgroupname_1 as  一级分类,
t2.fmaterialgroupname_2 as  二级分类,
t2.fmaterialgroupname_parentname as 三级分类,
t2.fmaterialgroupname 四级分类
 from (
select CONVERT(varchar(100), a.fcreatedate, 23)+' '+DATENAME(HOUR, a.fcreatedate)+':00:00' as fdate
     --,t2.jd_stock_name
      ,t1.province
      ,t1.city
      ,case when d.fuseorgid = 855361 then '是' else '否' end as is_jinchu
      ,d.fnumber
      ,e.fname
      ,sum(b.fbaseunitqty*f.fstoreurnom/f.fstoreurnum)  as  fpriceunitqty    --计价数量
      ,sum(c.famount) as famount
      ,sum(c.FALLAMOUNT) as FALLAMOUNT
from t_sal_order(nolock) a
left join t_sal_orderentry(nolock) b on a.fid = b.fid
left join t_sal_orderentry_f(nolock) c on b.fid = c.fid and b.fentryid = c.fentryid
left join t_bd_material(nolock) d on b.FMATERIALID = d.fmaterialid
left join t_bd_material_l(nolock) e on d.FMATERIALID = e.fmaterialid
left join t_bd_materialstock(nolock) f on b.FMATERIALID = f.FMATERIALID
left join (
    select distinct a.fcustid as fcustid
        ,b.fdatavalue province
        ,c.fdatavalue city
from t_bd_customerext(nolock) a
left join t_bas_assistantdataentry_l(nolock) b on b.fentryid = a.fprovince
left join t_bas_assistantdataentry_l(nolock) c on c.fentryid = a.fcity
    )t1 on a.fcustid = t1.fcustid
where CONVERT(varchar(100), a.fcreatedate, 23)+' '+DATENAME(HOUR, a.fcreatedate)+':00:00' >= concat( '2023-02-07',' 16:00:00')
and CONVERT(varchar(100), a.fcreatedate, 23)+' '+DATENAME(HOUR, a.fcreatedate)+':00:00' <= concat( '2023-02-07',' 16:59:59')
group by
CONVERT(varchar(100), a.fcreatedate, 23)+' '+DATENAME(HOUR, a.fcreatedate)+':00:00'
      -- ,t2.jd_stock_name
      ,t1.province
      ,t1.city
      ,case when d.fuseorgid = 855361 then '是' else '否' end
      ,d.fnumber
      ,e.fname
)t1 left join (
select
    a.fnumber,
    b.FNAME as fmaterialgroupname_1,
    c.FNAME as fmaterialgroupname_2,
    d.FNAME as fmaterialgroupname,
    e.FNAME as fmaterialgroupname_parentname
  from(
  select
    a.FNUMBER,
    a.fid,
    a.fparentid,
    b.fparentid as dd,
    a.erji,
    a.FFULLPARENTID
  from
    (
      select
         a.fnumber,
        a.fid,
        a.FFULLPARENTID,
        b.fparentid,
        a.fparentid as erji
      from
        (
          select
            b.fid,
            b.FFULLPARENTID,
            a.fnumber,
            b.fparentid
          from
            t_bd_material(nolock)  a
            left join T_BD_MATERIALGROUP(nolock) b on a.fmaterialgroup = b.fid
        ) a,
        (
          select
            cast(fparentid as varchar) as fparentid
          from
            t_bd_materialgroup(nolock)
          where
            len(FFULLPARENTID) - len(
              REPLACE(FFULLPARENTID, '.', '')
            )= 1
        ) b
      where
        ';' + a.FFULLPARENTID + ';' LIKE '%' + b.fparentid + '%'
        group by
         a.fnumber,
        a.fid,
        a.FFULLPARENTID,
        b.fparentid,
        a.fparentid
    ) a,
    (
      select
        cast(fparentid as varchar) as fparentid
      from
        t_bd_materialgroup(nolock)
      where
        len(FFULLPARENTID) - len(
          REPLACE(FFULLPARENTID, '.', '')
        )= 2
    ) b
  where
    ';' + a.FFULLPARENTID + ';' LIKE '%' + b.fparentid + '%'
      group by
      a.FNUMBER,
    a.fid,
    a.fparentid,
    b.fparentid ,
    a.erji,
    a.FFULLPARENTID
      )a
        left join t_bd_materialgroup_l(nolock) b on a.fparentid = b.fid
    left join t_bd_materialgroup_l(nolock) c on a.dd = c.fid
    left join t_bd_materialgroup_l(nolock) d on a.fid = d.fid
    left join t_bd_materialgroup_l(nolock) e on a.erji = e.fid
)t2 on t1.FNUMBER = t2.FNUMBER
where t1.fnumber='06034' and t1.fname='锅圈食汇火锅川粉' and t1.city='济宁'



select * from ads_jd_order_sales
 where sdatetime = '2023-02-07 16:00:00' and city='济宁'
 and fnumber = '06034'





select
  a.FDATE as 入库单日期,
  b.FNUMBER as 物料编码,
  c.FNAME as 物料名称,
  f.fmaterialgroupname_1 as 一级分类,
  f.fmaterialgroupname_2 as 二级分类,
  f.fmaterialgroupname as 四级分类,
  f.fmaterialgroupname_parentname as 三级分类,
  d.jd_stock_name as 仓库名称,
  e.fprice as 配送价,
  sum(frealqty) as 入库单实收数量,
  sum(fallamount) as 入库金额
from (
  select
    t1.fdate,
    t2.FSTOCKID,
    t2.fmaterialid,
    t2.frealqty,
    t3.fallamount
  from
    t_stk_instock(nolock) t1
    left join t_stk_instockentry(nolock) t2 on t1.fid = t2.fid
    left join t_stk_instockentry_f(nolock) t3 on t2.fid = t3.fid
    and t2.fentryid = t3.fentryid
  where
       t1.fdate >= concat( '2023-04-06',' 00:00:00')
    and t1.fdate <= concat( '2023-04-06',' 23:59:59')
  union all
  select
    t1.FDATE,
    t2.fstockid,
    t2.FMATERIALID,
    - t2.FRMREALQTY,
    - t3.fallamount
  from
    T_PUR_MRB(nolock) t1
    left join T_PUR_MRBENTRY(nolock) t2 on t1.FID = t2.fid
    left join T_PUR_MRBENTRY_F(nolock) t3 on t2.FENTRYID = t3.FENTRYID
  where
     t1.fdate >= concat( '2023-04-06',' 00:00:00')
    and t1.fdate <= concat( '2023-04-06',' 23:59:59')
    and t1.FCANCELSTATUS = 'A'
)a
left join t_bd_material(nolock) b on a.FMATERIALID = b.fmaterialid
left join t_bd_material_l(nolock) c on b.FMATERIALID = c.fmaterialid
left join (
  select
    a.fstockid,
    a.fnumber as jd_stock_no,
    b.fname as jd_stock_name
  from
    t_bd_stock(nolock) a
    left join t_bd_stock_l(nolock) b on a.fstockid = b.fstockid
  where
    a.fuseorgid = 105382
)d on a.FSTOCKID = d.fstockid
left join (
  select
    t1.fnumber as fnumber,
    max(a.fprice) fprice
  from
    t_sal_pricelistentry(nolock) a
    left join t_sal_pricelist(nolock) b on a.fid = b.fid
    LEFT JOIN t_bd_material(nolock) t1 ON a.FMATERIALID = t1.fmaterialid
  where
    b.fnumber = '015'
    and a.fforbidstatus = 'A'
  group by
    t1.fnumber
)e on b.FNUMBER = e.fnumber
left join (
select
    a.fnumber,
    b.FNAME as fmaterialgroupname_1,
    c.FNAME as fmaterialgroupname_2,
    d.FNAME as fmaterialgroupname,
    e.FNAME as fmaterialgroupname_parentname
  from(
  select
    distinct a.FNUMBER,
    a.fid,
    a.fparentid,
    b.fparentid as dd,
    a.erji,
    a.FFULLPARENTID
  from
    (
      select
        distinct a.fnumber,
        a.fid,
        a.FFULLPARENTID,
        b.fparentid,
        a.fparentid as erji
      from
        (
          select
            b.fid,
            b.FFULLPARENTID,
            a.fnumber,
            b.fparentid
          from
            t_bd_material(nolock)  a
            left join T_BD_MATERIALGROUP(nolock) b on a.fmaterialgroup = b.fid
        ) a,
        (
          select
            cast(fparentid as varchar) as fparentid
          from
            t_bd_materialgroup(nolock)
          where
            len(FFULLPARENTID) - len(
              REPLACE(FFULLPARENTID, '.', '')
            )= 1
        ) b
      where
        ';' + a.FFULLPARENTID + ';' LIKE '%' + b.fparentid + '%'
    ) a,
    (
      select
        cast(fparentid as varchar) as fparentid
      from
        t_bd_materialgroup(nolock)
      where
        len(FFULLPARENTID) - len(
          REPLACE(FFULLPARENTID, '.', '')
        )= 2
    ) b
  where
    ';' + a.FFULLPARENTID + ';' LIKE '%' + b.fparentid + '%')a
    left join t_bd_materialgroup_l(nolock) b on a.fparentid = b.fid
    left join t_bd_materialgroup_l(nolock) c on a.dd = c.fid
    left join t_bd_materialgroup_l(nolock) d on a.fid = d.fid
    left join t_bd_materialgroup_l(nolock) e on a.erji = e.fid
)f on b.FNUMBER = f.FNUMBER
group by
  a.FDATE,
  b.FNUMBER,
  c.FNAME,
  f.fmaterialgroupname_1,
  f.fmaterialgroupname_2,
  f.fmaterialgroupname,
  f.fmaterialgroupname_parentname,
  d.jd_stock_name,
  e.fprice
```

## 开放网关

体验狮：

测试环境：
clientId: Tale43ZwPiMhXm2q
privateKey :  MIIBVgIBADANBgkqhkiG9w0BAQEFAASCAUAwggE8AgEAAkEAtjFIJ7Kp0S1xDnpv59iT3akW1YfpHKMBQa5XA1bi2bt8w26PCkxYgaTTyNn92HHxbI1DTxeFQbqabTJxTi6alQIDAQABAkBGzb4p11ARf6RpKQHmSw+j2/uIvknEnEB3wwYDwTdlv8QuZ/8dLtU3uFdY2VFFphQOukqVAIyg2jA6MCcJ3HfdAiEA2ZAgBDGzWj1gXmMgE7EVhJTbAVyHRxKmKXSlJaoYu0MCIQDWYW5ZlQrfOOdXZufWpO4ag2GhxmLVkIUyjslzdvB5RwIhAM2E5YmwvYFwW1muf/26Gd6dk2js1GmiR07//oXe8e/rAiEArPsnAG+ruxx+Rt8I+QBSA+C5GcErJKodYAMo99skBKcCIQDI6SKlqkciCIzvAyl6YWNPvFOPFak3HQ8SjYPY6eaSRg==

生产/预发环境：
clientId: t5XaawHi5ZrkRpMq
privateKey :  MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAyyMkYCEd/lksPJtD7MjysQDOJx/lMi11uoEJm1upehNItJvMXxiS0/p5sPyEunA6UwYaIDT0JDVxuslTYm1SUwIDAQABAkEAmSgR0PinKJILLFbUS77mXFYDGLSPldl4nfmUSLI/gW2YPNxOv61SJ1F6XCW/4CaldxzcQxsu/cPQPql8cO5cYQIhAPGhm8rPV34xM1vSgGpKeZHrDiM8uUBDp6s1MUFkid0lAiEA1zeIeUhRuP4GtYRLbFPerBCrFSqG5z8PZFHxCrSIZBcCICtzXTmOKXSW0l57rv3uIIhd1W/+tm1Y/Siraw0QUD5FAiEA0NRp8IVkBwU2rVs5dFvNbVifKWKilDB0VvvL0H9s+PECIGolCFqBlQbzKtT74GGO97YGCh1edBPEtxeMAZvuU+L2

ck集群一 9001
birw
dTTosuhdh%899


ck集群二 9000
birw


## 观远资料

嵌入一般用iframe就可以，嵌入移动端的链接，嵌入页面的参数信息可以参考下：
http://help.guandata.com/hc/kb/article/1428633/
如果要再做单点登录的话，就还要再看你们用什么方法来做了，常用的方法是做sso集成
http://help.guandata.com/hc/kb/article/1468909/

这个统一账户集成的public-api接口，包括创建、删除、修改用户信息等多个接口，可以用来进行外部系统和BI账户对接集成，具体可以看下：
https://thoughts.teambition.com/sharespace/616fb6829cdb8400410e91ac/docs/616fb6819cdb8400410e91a0


卡片的数据无法通过api下载，数据集有api可以下载数据，但是有行数限制，具体您可以参考
http://help.guandata.com/hc/kb/article/1468901/


我们有web-service数据集，可以接接口数据（目前只支持get/post）。
使用方法可以参考下：
https://thoughts.teambition.com/sharespace/616fb6829cdb8400410e91ac/docs/616fb6799cdb8400410e9151


SSO
http://help.guandata.com/hc/kb/article/1468909/


## token 

闫志学
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiIzYzJhOGFiMy0xY2JmLTQxMmMtYWFmNS0xOGJkY2JjZTg1M2UiLCJzdWIiOiJ5YW56aGl4dWUiLCJpc3MiOiIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiIsImlhdCI6MTYxMTgzMTcwNSwiYXVkIjoicmVzdGFwaXVzZXIiLCJleHAiOjQ3NjU0MzE3MDUsIm5iZiI6MTYxMTgzMTcwNX0.fLaYGcl7rw_bD-RPDvj_PHBEaIPm-H_5dQcOadnvaLM


侯亚楠
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiIzMWRjMmQ0Mi1jNTdiLTRhYzctOTMxYy00Y2ExY2RhYWE5NjYiLCJzdWIiOiJzdW5sYW4iLCJpc3MiOiIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiIsImlhdCI6MTYxMTIxNjYzOCwiYXVkIjoicmVzdGFwaXVzZXIiLCJleHAiOjQ3NjQ4MTY2MzgsIm5iZiI6MTYxMTIxNjYzOH0.OEQuCIiARdNZ7t9QTzyZ5mKZqt-fpUKuQvowPUzLLLI


孙兰
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiJjNjQ5NjAyMC00Y2Y2LTQ5OTYtYWEzMy1lOWQ2MTYwZWRhMGYiLCJzdWIiOiJzdW5sYW4iLCJpc3MiOiIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiIsImlhdCI6MTYxMTIxMzg1MiwiYXVkIjoicmVzdGFwaXVzZXIiLCJleHAiOjQ3NjQ4MTM4NTIsIm5iZiI6MTYxMTIxMzg1Mn0.7vVqobJUhilfge06N5y-jQjcZVdArHzrT9461ZfUfGk


邵建业
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiI2MmI1YmRhYS0xM2I0LTQ0YWItOWEyMS0zMjlkNzEwMDA4Y2YiLCJzdWIiOiJzaGFvamlhbnllIiwiaXNzIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJpYXQiOjE2MTE5MTI4NjYsImF1ZCI6InJlc3RhcGl1c2VyIiwiZXhwIjo0NzY1NTEyODY2LCJuYmYiOjE2MTE5MTI4NjZ9.6FPIqIv3OpbpH5emTVi17m_tf8bdEC_S2QjSJn_WTbA

于文浩




马佳伟
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiIzOGU3YzEzZi00ZTExLTQyNDctYTdhYi00NjhkYWY3YmU0ZjYiLCJzdWIiOiJtYWppYXdlaSIsImlzcyI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiaWF0IjoxNjE4Mzc5NjE0LCJhdWQiOiJyZXN0YXBpdXNlciIsImV4cCI6NDc3MTk3OTYxNCwibmJmIjoxNjE4Mzc5NjE0fQ.YHQ1h7UR_beoKfgFFu8Dz70dxm7J9vmNEbcNf4F2ET8




高丁松
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiI1MDBiZjQ4MS01MGUyLTQzMWUtODA4ZS04YWJmZTAwNTY5YzkiLCJzdWIiOiJnYW9kaW5nc29uZyIsImlzcyI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiaWF0IjoxNjE4OTY4MDYyLCJhdWQiOiJyZXN0YXBpdXNlciIsImV4cCI6NDc3MjU2ODA2MiwibmJmIjoxNjE4OTY4MDYyfQ.A4OHxnbgpZ4VBezoJo-O3j3LecGpdcgETIRsvwLPrRE


杨胜富


张文凯
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiJmZDJjOWQ2YS1lMDE5LTQyMGQtOTY4NC03MDE1MjMyOGE1YmYiLCJzdWIiOiJ6aGFuZ2thaXdlbiIsImlzcyI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiaWF0IjoxNjIyMTkyMDkwLCJhdWQiOiJyZXN0YXBpdXNlciIsImV4cCI6NDc3NTc5MjA5MCwibmJmIjoxNjIyMTkyMDkwfQ.gBz_2NulAseT4k7EtLtg9Qp-7XgeIMGDRnRBFoZNLPA



吴峰
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiIxZWQzZmNkMi00MmQwLTRmMWYtYjg1NC02NGZiYjcwNzZjOGMiLCJzdWIiOiJ3dWZlbmciLCJpc3MiOiIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiIsImlhdCI6MTYzOTYzODAzOSwiYXVkIjoicmVzdGFwaXVzZXIiLCJleHAiOjQ3OTMyMzgwMzksIm5iZiI6MTYzOTYzODAzOX0.ayFagXHmBYt3r8vPys4WuRkJluW79rlzZ2DU3N4GKfI


边喜洋
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiI2ZTUwMGVkYi0wN2FiLTQ3MTQtODcwMi03YWIzNTA3MDZmZmQiLCJzdWIiOiJiaXhpeWFuZyIsImlzcyI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiaWF0IjoxNjExNTQwMDgxLCJhdWQiOiJyZXN0YXBpdXNlciIsImV4cCI6NDc2NTE0MDA4MSwibmJmIjoxNjExNTQwMDgxfQ.qXxMC9s0TpV8xCQFSjvKKhDq76AtqTLmzZQS8cojHtk


## clickhouse 3台服务器重启操作
3台：

hadoop账号下
export JAVA_HOME=/home/hadoop/jdk1.8.0_271
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

1、启动zookeeper，启动ck，
2、检查tidb是否可以访问，不能访问则启动
3、启动kafka
./bin/kafka-server-start.sh -daemon config/server.properties


节点2：

export JAVA_HOME=/home/hadoop/jdk1.8.0_271
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

/home/hadoop/canal-admin
./bin/startup.sh

/home/hadoop/canal-deployer



节点3:

启动天启
/home/hadoop/miniconda3/envs/apocalypse-api/bin/python3 main.py（自动的）
/home/hadoop/miniconda3/envs/apocalypse-api/bin/python3 get_email_imap.py

启动superset
conda activate superset
nohup superset run -h 0.0.0.0 -p 8080 --with-threads --reload --debugger &

启动guoquan-node-app
pm2 stop all
yarn prod
pm2 list




1、clickhouse节点3的/data盘文件系统损坏，联系华为云后，提供了修复命令，修复成功。
2、发现无法启动clickhouse，报错ck数据与zookeeper元数据不一致，后执行touch /data/clickhouse/flags/force_restore_data，启动成功。
3、发现必须要3台zookeeper都正常才能写入数据，clickhouse节点1的zookeeper启动提示java.lang.OutOfMemoryError: Java heap space，执行export _JAVA_OPTIONS="-Xmx2048m -Xms2048m"，启动成功。
4、开始能写入数据，但不能建表，查看有阻塞执行语句，以前kill mutation能杀掉的任务也杀不掉了，重启了CK语句还在，清理zookeeper相关任务，阻塞消失，CK全部正常。


一台挂了影响到整个集群读写了，估计和zookeepe有关，按道理3台zookeeper有两台正常就应该不影响，这个下周要在新CK集群上演练一下。


## superset安装
```
vi ~/anaconda3/envs/super/lib/python3.6/site-packages/superset/config.py
vi /usr/local/lib/python3.8/site-packages/superset/config.py


#写入
from flask_appbuilder.security.manager import AUTH_DB,AUTH_LDAP
AUTH_TYPE = AUTH_LDAP
AUTH_USER_REGISTRATION = True
AUTH_USER_REGISTRATION_ROLE = "Admin"
AUTH_LDAP_SERVER = "ldap://10.240.81.57:389"
AUTH_LDAP_SEARCH = "DC=guoquan,DC=cn"
AUTH_LDAP_BIND_USER = "gyldap"
AUTH_LDAP_BIND_PASSWORD = "hWiYUC!2tuRuCaE!"
AUTH_LDAP_UID_FIELD = "sAMAccountName"




导出中文乱码

修改 superset/config.py，将UTF-8修改成GBK，如下所示：


CSV_EXPORT = {


'encoding': 'gbk',


}

superset db upgrade
superset fab create-admin
superset fab reset_password
superset init    

Python-ldap    
Mysqlclient    
psycopg2
clickhouse-driver==0.2.0
clickhouse-sqlalchemy==0.1.6
```

## docker superset安装
Dockerfile
```
FROM amancevice/superset:1.3.0
USER root
RUN sed -i s/deb.debian.org/mirrors.aliyun.com/g /etc/apt/sources.list && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo 'Asia/Shanghai' >/etc/timezone && apt update && \
    apt install --no-install-recommends  vim -y && rm -rf /var/lib/apt/lists/*

RUN sed -i s/"AUTH_TYPE = AUTH_DB"/"# AUTH_TYPE = AUTH_DB"/g /usr/local/lib/python3.8/site-packages/superset/config.py
RUN sed -i s/'"encoding": "utf-8"'/'"encoding": "gbk"'/g /usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo from flask_appbuilder.security.manager import AUTH_DB,AUTH_LDAP >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_TYPE = AUTH_LDAP' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_USER_REGISTRATION = True' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_USER_REGISTRATION_ROLE = "Admin"' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_LDAP_SERVER = "ldap://10.240.81.57:389"' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_LDAP_SEARCH = "DC=guoquan,DC=cn"' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_LDAP_BIND_USER = "gyldap"' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_LDAP_BIND_PASSWORD = "hWiYUC!2tuRuCaE!"' >>/usr/local/lib/python3.8/site-packages/superset/config.py
RUN echo 'AUTH_LDAP_UID_FIELD = "sAMAccountName"' >>/usr/local/lib/python3.8/site-packages/superset/config.py
USER superset
```
docker build -t guoquan-superset .

docker-compose.yml
```
version: '3'
services:
  superset:
    image: guoquan-superset
    ports:
      - "8088:8088"
    environment:
      - SUPERSET_LOAD_EXAMPLES=yes
    volumes:
      - ~/.superset:/var/lib/superset
    command: "superset run -h 0.0.0.0 -p 8088 --with-threads --reload --debugger"
```
docker-compose up -d
docker-compose restart superset


superset  admin     9izQgPeWY5
          lijicong  7X7HmGvT3V

## dws授权
```
GRANT ALL PRIVILEGES ON all tables in schema public TO flink;
GRANT ALL PRIVILEGES ON all tables in schema public TO shudu_read;
GRANT ALL PRIVILEGES ON all tables in schema public TO yunpu_read;
GRANT ALL PRIVILEGES ON all tables in schema public TO dianchi_read;
GRANT ALL PRIVILEGES ON all tables in schema public TO guanbi;
```