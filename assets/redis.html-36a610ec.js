import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as E,o as S,c as o,a as e,b as n,d as s,e as p}from"./app-18f1fe20.js";const i={},a=p(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h1><h2 id="禁止危险命令" tabindex="-1"><a class="header-anchor" href="#禁止危险命令" aria-hidden="true">#</a> 禁止危险命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rename-command KEYS     &quot;&quot;
rename-command FLUSHALL &quot;&quot;
rename-command FLUSHDB  &quot;&quot;
rename-command CONFIG   &quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深入浅出redis" tabindex="-1"><a class="header-anchor" href="#深入浅出redis" aria-hidden="true">#</a> 深入浅出Redis</h2><p>深入浅出Redis<br> 1.Redis的发展史<br> Redis[Remote Directory Server]:远程服务器字典</p><p>2.下载安装Redis</p><pre><code>1》Linux下安装Reids
http://redis.io/download

wget http://download.redis.io/releases/redis-3.0.1.tar.gz 下载
tar -xzvf redis-3.0.1.tar.gz 解压
cd redis-3.0.1 进入解压目录
make 编译 安装
make install

2》在bin下可执行的程序
redis-server:Redis服务器
redis-cli:命令行客户端
redis-benchmark:Redis的性能测试工具
redis-check-aof:AOF文件修复工具
redis-check-dump:RDB文件检测工具

redis.conf是Redis的配置文件
将配置文件中daemonize yes 以守护进程的方式来使用

3》启动和停止Redis

直接启动
    redis-server
    redis-server /ect/redis.conf
停止Redis
    shutdown
    结束Redis的进程也可以
</code></pre><p>3.命令返回值</p><pre><code>1》状态回复
    ping

    SET test &#39;this is a test&#39;
2》错误回复

    错误回复以error开始
    (error) ERR unknown command &#39;TESTERROR&#39;

3》整数回复:

以interger 数值
(integer) 2

4》字符串回复

GET test

(nil)代表空的结果

5》多行字符串回复

KEYS *,得到当前数据库中的存在的键名
</code></pre><p>4.Redis配置选项相关内容</p><pre><code>1》动态设置/获取配置选项的值

获取：
CONFIG GET name
1)&quot;port&quot;
2)&quot;6379&quot;

设置：
CONFIG SET name value

2》Redis配置文件redis.conf选项相关

--连接选项--

port 6379 默认端口

bind 127.0.0.1，默认绑定的主机地址

timeout 0，当客户端闲置多久之后关闭连接，0代表没有启动这个选项

loglevel notice，日志的记录级别

# debug：很详细的信息，适合开发和测试
# verbose ：包含很多不太有用的信息
# notice ：比较适合生产环境
# warning ：警告信息

logfile stdout，日志的记录方式，默认为标准输出

databases 16，默认数据库的数量16个,默认的数据库编号从0开始


--快照--

save &lt;seconds&gt; &lt;changes&gt;:多少秒有多少次改变将其同步到磁盘中数据文件里
save 900 1--900秒内有一个更改
save 300 10--300秒内有10个更改
save 60 10000--60秒内有10000个更改


rdbcompression yes，存储本地数据库时是否启用压缩，默认yes

dbfilename dump.rdb，指定本地数据库文件名，默认为dump.rdb

dir ./,指定本地数据库的存放目录，默认是当前目录
</code></pre><p>5.Redis的数据类型</p><p>String字符串类型<br> 一个键最多存储512MB<br> 1》SET:设置key对应的值为value</p><pre><code>语法：SET key value [EX seconds] [PX milliseconds] [NX|XX]
EX seconds:设置键的key的过期时间SET key value EX seconds -- SETEX
PX milliseconds:以毫秒的形式设置过期时间SET key value PX milliseconds--PSETEX
NX:只有键不存在的时候才可以设置成功SET key value NX--SETNX
XX:只有key已经存在的时候才可以设置

SET test16 &#39;this is a test16&#39; EX 100
SET test17 &#39;this is a test17&#39; PX 20000
SET test18 &#39;this is a test18&#39; NX
SET test18 &#39;this is a test18888&#39; XX

SET test19 &#39;this is a test19&#39; EX 100 NX

SET test20 &#39;this is a test20&#39; EX 100 PX 300000 NX

SET testStr1 &#39;this is a test&#39;


注意：如果key存在，同名会产生覆盖

2》GET：根据key找到对应的值

语法：GET key

GET testStr1

注意：如果key不存在，返回nil

    如果key不是字符串，会报错

3》GETRANGE:返回字符串中一部分

语法：GETRANGE key start end

GETRANGE testStr2 0 4

GETRANGE testStr2 0 -3

GETRANGE testStr2 -4 -2

GETRANGE testStr2 0 1000

4》GETSET:设置指定key的值，并且返回旧的值

语法：GETSET key value

SET testStr3 &#39;king&#39;

GET testStr3

GETSET testStr3 &#39;queen&#39;

注意：当key不存在返回nil
    如果key不是字符串，会报错

5》MSET:一次设置多个键值对

语法：MSET key value [key value...] 

MSET testStr5 &#39;king&#39; testStr6 &#39;maizi&#39; testStr7 &#39;queen&#39;


6》MGET:一次得到多个键值

语法：MGET key key

MGET testStr5 testStr6 testStr7

MGET testStr5 testStr6 testStr7 testStr8

7》STRLEN:获取key的字符串长度

语法：STRLEN key

STRLEN testStr5

注意：对于不存在key获取其长度返回的0

8》SETRANGE:相当于字符串替换的效果

语法：SETRANGE key offset value

注意：如果设置的key原来的字符串长度要比偏移量小，就会以零字节(\\x00)来填充

SET testStr9 &#39;hello king&#39;

SETRANGE testStr9 6 &#39;queen&#39;

对不存在的key使用SETRANGE

EXISTS testStr10

SETRANGE testStr10 5 &#39;king&#39;

9》SETNX:只有key不存在才能设置成功

语法：SETNX key value

EXISTS testStr11 

SETNX testStr11 &#39;maizi&#39;

GET testStr11

SETNX testStr11 &#39;maiziedu&#39;

GET testStr11

10》SETEX:设置key并且设置其过期时间

语法：SETEX key seconds value

SETEX expireStr 60 &#39;testExpire&#39;

注意：SETEX是原子性操作，相当于执行了SET key value,又对这个key设置了过期时间EXPIRE key seconds

SET expireStr1 &#39;test1&#39;

EXPIRE expireStr1 10

SETEX test12 1000 &#39;a&#39;

GET test12

11》MSETNX:一次设置多个key-value对，只有所有的key都不存在的时候才会成功

语法：MSETNX key value [key value]

MSETNX test13 &#39;a&#39; test14 &#39;b&#39; test15 &#39;c&#39;

MSETNX test15 &#39;aa&#39; test16 &#39;bb&#39; test17 &#39;cc&#39;

12》PSETEX:以毫秒为单位设置key的生存周期

语法：PSETEX key milliseconds value

PSETEX test16 2000 &#39;hello world&#39;

PTTL

13》INCR:对key中存储的数字+1

语法：INCR key

SET counter 1

INCR counter

注意：key如果不存在，则会先初始化为0，在进行INCR操作

    如果key存储的不是数字，会报错

INCR counter1

INCR test20

14》INCRBY:将key中存储的数字加上指定增量

语法：INCRBY key INCREMENT

SET counter2 10

INCRBY counter2 5

INCRBY counter2 1.2

15》INCRBYFLOAT:给key中存储的数字加上指定的浮点数

语法：INCRBYFLOAT key increment

SET counter3 1

INCRBYFLOAT counter3 1.2


16》DECR:将key中存储的数字减1

语法：DECR key

DECR counter3


17》DECRBY:将key中存储的数值减去指定的值

语法：DECRBY key decrement

DECRBY counter2 3

18》APPEND:通过APPEND将值追加到字符串的末尾

语法：APPEND key value

注意：如果key不存在，则相当于执行的SET操作


APPEND testStr11 &#39;edu&#39;

APPEND noExistsStr &#39;this is a test&#39;
</code></pre><p>Hash类型<br> 在配置文件中可以通过配置<br> hash-max-ziplist-entries 512 512字节<br> hash-max-ziplist-value 64 字段数目</p><pre><code>Hash相关命令

1》HSET:将哈希表key中域field设置成指定的value

语法：HSET key field value

HSET userInfo1 username &#39;king&#39;

HSET userInfo1 password &#39;123456&#39;

HSET userInfo1 email &#39;382771946@qq.com&#39; 

HGET userInfo1 username

HSET userInfo1 username &#39;queen&#39;

如果哈希表key中field不存在，相当于新建field，设置成功返回1

如果哈希表key中field存在，相当于重新赋值，成功返回0

2》HGET:返回哈希表key中给定field的值

语法：HGET key field

HGET userInfo1 username

注意：如果key中field不存在，返回的是nil

3》HSETNX:将hash表中的field设置成指定的值，只要field不存在的时候才可以成功；如果field存在，操作无效

语法：HSETNX key field value

HSETNX testHash1 test &#39;a&#39;

4》HMSET:通过将多个field-value设置到hash表key中

语法：HMSET key field value field value ...

HMSET userInfo2 username &#39;king&#39; password &#39;123&#39; kickname &#39;smart king&#39; email &#39;382771946@qq.com&#39;

HGET userInfo2 username

HMSET userInfo2 username &#39;queen&#39; role &#39;admin&#39;

5》HMGET:一次获得hash表key中多个field的值

语法：HMGET key field field

注意：如果hash表key中field不存在，会返回nil

6》HGETALL：返回hash表key中所有的field和value

语法：HGETALL key

HGETALL userInfo2

7》HKEYS:返回hash中key的所有的field

语法：HKEYS key

HKEYS userInfo2

8》HVALS:返回hash中key中field所有的对应的值

语法：HVALS key

HVALS userInfo2

9》HEXISTS:检测hash中key的field是否存在

语法：HEXISTS key field

HEXISTS userInfo2 username

HEXISTS userInfo2 notExists

10》HLEN:返回hash表key中field的数量

语法：HLEN key

HLEN userInfo2

11》HINCRBY：给hash中key的field做增量操作

语法：HINCRBY key field increment

HSET userInfo3 age 12

HINCRBY userInfo3 age 10

HSET userInfo3 username &#39;king&#39;

HINCRBY userInfo3 username 10

12》HINCRBYFLOAT:给hash中key的field做增量浮点操作

语法：HINCRBYFLOAT key field increment

HSET userInfo3 salary &#39;123.111&#39;

HINCRBYFLOAT userInfo3 salary 12.888

13》HDEL:删除hash中key的指定域，可以删除一个也可以删除多个

语法：HDEL key field field

HGETALL userInfo2

HDEL userInfo2 username password email 
</code></pre><p>List类型</p><p>Set集合类型</p><p>Zset有序集合类型</p><p>keys相关的命令：</p><p>1》KEYS:返回所有符合给定模式的key</p><p>语法：KEYS pattern</p><p>*：匹配任意个字符</p><p>?:匹配一个任意字符</p><p>[]:匹配[]之间的一个字符，[b-e],a[b-e] ab ac ad ae</p><p>\\x:匹配特殊字符? *</p><p>MSET one 1 two 2 three 3 four 4 five 5 six 6 seven 7</p><p>KEYS *</p><p>KEYS <em>o</em></p><p>KEYS t??</p><p>KEYS ?o*</p><p>KEYS c[n-z]*</p><p>2》EXISTS：检测指定key是否存在</p><p>语法：EXISTS key</p><p>EXISTS one</p><p>3》TYPE:返回key所存储的类型</p><p>语法：TYPE key</p><p>不存在的key 返回none<br> string<br> hash<br> set<br> zset<br> list</p><p>TYPE testStr11</p><p>TYPE userInfo2</p><p>4》EXPIRE：设置key的过期时间</p><p>语法：EXPIRE key seconds</p>`,42),d={href:"http://phpfamily.org",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"EXPIRE cache_page 100",-1),l=e("p",null,"注意：如果key已经存在过期时间，在通过EXPIRE设置的时候会覆盖之前过期时间",-1),R=e("p",null,"5》EXPIREAT:需要指定在指定时间戳过期",-1),c=e("p",null,"语法：EXPIREAT key timestamp",-1),u={href:"http://maiziedu.com",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"EXPIREAT cache_page1 1431868810",-1),b=e("p",null,"6》PEXPIRE:以毫秒的形式指定过期时间",-1),y=e("p",null,"语法：PEXIRE key milliseconds",-1),h={href:"http://maiziedu.com",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"PEXPIRE cache_page2 50000",-1),k=e("p",null,"7》PEXPIREAT:指定时间戳，单位为毫秒",-1),I=e("p",null,"语法：PEXPIREAT key timestamp",-1),P={href:"http://phpfamily.org",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"PEXPIREAT cache_page3 1431968810000000",-1),L=e("p",null,"8》TTL:以秒为单位返回key剩余时间",-1),f=e("p",null,"语法：TTL key",-1),A=e("p",null,"注意：如果没有key没有设置过期时间，返回-1",-1),O=e("p",null,"如果key不存在返回 -2",-1),H=e("p",null,"返回过期时间",-1),G={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},D=p(`<p>TTL cache_page4</p><p>TTL cache_page5</p><p>EXPIRE cache_page4 100</p><p>TTL cache_page4</p><p>9》PTTL:以毫秒为单位返回key的剩余时间</p><p>语法：PTTL key</p><p>10》PERSIST:将一个带有过期时间的key转变成永久的key</p><p>语法：PERSIST key</p><p>SET cache &#39;testCache&#39;</p><p>EXPIRE cache 100</p><p>TTL cache</p><p>PERSIST cache</p><p>TTL cache</p><p>11》DEL:删除指定的KEY</p><p>语法：DEL key ...</p><p>DEL cache</p><p>12》RANDOMKEY:随机的从当前数据库中返回一个key</p><p>语法：RANDOMKEY</p><p>RANDOMKEY</p><p>13》RENAME:重名名一个键</p><p>语法：RENAME key newkey</p><p>SET testRename1 &#39;rename1&#39;</p><p>RENAME testRename1 testRename2</p><p>RENAME testRename2 testRename2</p><p>RENAME testRename2 test14</p><p>RENAME test14 six<br> 注意：如果名称没有发生改变会报错</p><p>14》RENAMENX：必须重命名这个新名称不存在才会生效</p><p>语法：RENAMENX key newkey</p><p>SET testRename &#39;test&#39;</p><p>RENAMENX testRename six</p><p>15》DUMP：序列化给定的Key，返回序列化之后的值</p><p>语法：DUMP key</p><p>SET testDump &#39;this is a test&#39;</p><p>DUMP testDump</p><p>16》RESTORE:反序列化</p><p>语法：RESTORE key tt1 value</p><p>RESTORE testDump1 0 &quot;\\x00\\x0ethis is a test\\x06\\x00f\\x97\\x10\\x8bo\\xb5\\x91\\xf8&quot;</p><p>RESTORE testDump3 50000 &quot;\\x00\\x04test\\x06\\x00\\x17}\\xc7 \\x99\\xa4\\x8c\\xd6&quot;</p><p>17》MOVE:将当前数据库中的key移动到另外的数据库中</p><p>语法：MOVE key dbId</p><p>SELECT 0<br> SET testMove &#39;aaaa&#39;</p><p>MOVE testMove 1</p><p>注意：当移动一个不存在的key会失败<br> 当目标数据库中存在同名key的时候移动失败</p><p>OBJECT、MIGRATE、SCAN、SORT</p><p>List列表类型</p><pre><code>1》LPUSH：向列表左端添加元素

语法：LPUSH key value value...

LPUSH myList1 a b c

2》RPUSH:向列表右端添加元素

语法：RPUSH key value ...

RPUSH myList1 test1 test2 test3

RPUSH myList1 test3 test4

3》LPUSHX:向列表头部添加元素，只有key存在在来添加

语法：LPUSHX key value 

LPUSHX myList2 a 

LPUSH myList2 a

LPUSHX myList2 b

4》RPUSHX:向列表尾部添加元素，只有key存在在来添加

语法：RPUSHX key value 

5》LPOP：将列表头部的元素弹出

语法：LPOP key

LPOP myList1

6》RPOP；弹出列表尾部的元素

语法：RPOP key

RPOP myList1

7》LLEN:得到列表的长度

语法：LLEN key

LLEN myList2    

8》LRANGE：获取列表片段

语法：LRANGE key start stop

LRANGE myList1 0 -1

注意：
如果start下标比列表的最大下标end大，返回的空列表
如果stop比列表长度大，返回到列表的末尾

9》LREM:删除列表中指定的值

语法：LREM key count value

count值有以下几种：

count&gt;0:从列表的头开始，向尾部搜索，移除与value相等的元素，移除count个

count&lt;=:从列表尾部向头搜索，移除与value相等的元素，移除count个

count=0,移除列表中所有与count相等的值

LPUSH myList2 a b c d a e b c d b e f b g e b

LREM myList2 2 b

LREM myList2 -2 a

LREM myList2 0 e

10》LINDEX:获得指定索引元素的值

语法：LINDEX key index

LINDEX myList2 3

LINDEX myList2 -3


11》LSET:设置指定索引元素的值

语法：LSET key index value

LSET myList2 0 king

12》LTRIM:只保留列表的片段

语法：LTRIM key start stop

LPUSH myList3 log11 log22 log33 log44 log55

LTRIM myList3 0 1

LPUSH myList4 a b c d e f g

LTRIM myList4 1 -1

LTRIM myList4 1 1000

LTRIM myList4 1000 2000 列表被清空

LTRIM myList4 3000 2000 列表被清空

13》LINSERT：向列表插入元素

语法：LINSERT key BEFORE|AFTER pivot value

LPUSH myList5  a b c d

LINSERT myList5 BEFORE &#39;b&#39; &#39;king&#39;

LINSERT myList5 BEFORE bb queen

LINSERT myList5 AFTER d queen

LINSERT myList6 AFTER d queen

14》RPOPLPUSH:将元素从一个列表转到另一个列表

语法：RPOPLPUSH source destination

LPUSH myList6 a b c

LPUSH myList7 x y z

RPOPLPUSH myList6 myList7

LPUSH webLog log1 log2 log3 log4

RPOPLPUSH webLog webLog

RPOPLPUSH webLog1 webLog

15》BLPOP:BLPOP 是LPOP的阻塞版本

语法：BLPOP key [key...] timeout

LPUSH myList9 a b c

LPUSH myList10 d e f

BLPOP myList8 myList9 myList10 0

BLPOP myList 8 0
</code></pre><p>set集合类型:无序集合</p><p>1》SADD：向集合中添加元素</p><p>语法：SADD key member [,...]</p>`,49),M={href:"http://maiziedu.com",target:"_blank",rel:"noopener noreferrer"},g={href:"http://phpfamily.orgjd.com",target:"_blank",rel:"noopener noreferrer"},C={href:"http://phpfamily.orgtaobao.com",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,"2》SMEMBERS:返回指定集合中的元素",-1),X=e("p",null,"语法：SMEMBERS key",-1),v=e("p",null,"SMEMBERS web",-1),B=e("p",null,"3》SISMEMBER:检测member是否是集合中的成员",-1),Z=e("p",null,"语法：SISMEMBER key member",-1),x={href:"http://maiziedu.com",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,"4》SREM:删除集合中的一个或者多个成员",-1),w=e("p",null,"语法：SREM key member [member...]",-1),F={href:"http://jd.com",target:"_blank",rel:"noopener noreferrer"},q={href:"http://taobao.comphpfamily.org",target:"_blank",rel:"noopener noreferrer"},z=p("<p>5》SPOP：删除并返回集合中的随机元素</p><p>语法：SPOP key</p><p>SADD course php java ios android c c++ oc</p><p>SPOP course</p><p>6》SRANDMEMBER:随机返回集合中的元素</p><p>语法：SRANDMEMBER key count</p><p>注意：<br> count为正数，而且小于集合中的元素，返回的一个包含随机元素的集合数组；count数大于集合中元素的个数，这时候会返回整个集合<br> count为负数，返回一个数组，数组中的成员可能出现重复，数组的长度是count取绝对值</p><p>SRANDMEMBER course</p><p>SRANDMEMBER course 2</p><p>SRANDMEMBER course 50</p><p>SRANDMEMBER course -2</p><p>7》SDIFF：返回集合间的差集</p><p>语法：SDIFF key key ...</p><p>SADD testSet1 a b c d e</p><p>SADD testSet2 b c d e f</p><p>SDIFF testSet1 testSet2</p><p>SDIFF testSet2 testSet1</p><p>SADD testSet3 x y z a</p><p>SDIFF testSet1 testSet2 testSet3</p><p>8》SINTER:返回集合间的交集</p><p>语法：SINTER key key...</p><p>SINTER testSet1 testSet2</p><p>SINTER testSet1 testSet2 testSet3</p><p>SADD testSet3 b</p><p>9》SUNION:返回集合中并集操作</p><p>语法：SUNION key key...</p><p>SUNION testSet1 testSet2</p><p>SUNION testSet1 testSet2 testSet3</p><p>10》SCARD:返回集合中元素个数</p><p>语法：SCARD key</p><p>SCARD testSet1</p><p>11》SDIFFSTORE:将差集结果保存到指定集合中</p><p>语法：SDIFFSTORE destination key key ...</p><p>SDIFFSTORE diffSet testSet1 testSet2</p><p>SADD diffSet f</p><p>SDIFFSTORE diffSet testSet2 testSet1</p><p>SDIFFSTORE diffSet testSet1 testSet2</p><p>SDIFFSTORE testSet1 testSet1 testSet2</p><p>12》SINTERSTORE:将交集的结果保存在指定集合中</p><p>语法：SINTERSTORE destination key key ...</p><p>13》SUNIONSTORE:将并集的结果保存到指定集合中</p><p>语法：SUNIONSTORE destination key key ...</p><p>14》SMOVE:将集合中元素移动另外一个集合中</p><p>语法：SMOVE source destination member</p><p>注意：原子操作</p><p>SMOVE testSet2 testSet1 f</p><p>SADD testSet2 f</p><p>SMOVE testSet2 testSet1 f</p><p>zset(sorted set)有序集合</p><p>1》ZADD：将元素及其分数添加到集合中</p><p>语法：ZADD key score member [score member]</p><p>ZADD PHPScore 100 king</p><p>ZADD PHPScore 98 queen 98 maizi 80 test 78 test1 85 test2</p><p>ZADD PHPScore 60 test2 67 test3 56 test4</p><p>ZADD PHPScore +inf maxInt -inf minInx</p><p>2》ZSCORE:获得指定元素的分数</p><p>语法：ZSCORE key member</p><p>ZSCORE PHPScore maizi</p><p>ZADD PHPScore 12.3 test5</p><p>3》ZRANGE:按照元素分数从小到大的顺序返回指定索引start到stop之间所有元素(包含两端)</p><p>语法：ZRANGE key start stop [WITHSCORES]</p><p>ZRANGE PHPScore 0 -1</p><p>ZRANGE PHPScore 0 -1 WITHSCORES</p><p>ZRANGE PHPScore 0 2 WITHSCORES</p><p>ZRANGE PHPScore 0 2000 WITHSCORES</p><p>ZRANGE PHPScore 1000 2000 WITHSCORES</p><p>ZADD PHPScore 60 test6 60 test7 60 test8 60 test9</p><p>注意：当两个元素的分数相同的时候，Redis在排序按照字典的顺序(0&lt;9&lt;A&lt;Z&lt;a&lt;z),如果使用的是UTF-8<br> 的编码方式的中文同样按照字典顺序排列</p><p>4》ZREVRANGE：和ZRANGE相反，按照分数从大到小的顺序</p><p>语法：ZREVRANGE key start stop [WITHSCORES]</p><p>ZREVRANGE PHPScore 0 -1 WITHSCORES</p><p>5》ZRANGEBYSCORE:获得指定分数范围内的元素，按照分数从小到大的顺序，返回的是分数在指定的min到max的元素</p><p>语法：ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]</p><p>#获得分数80~90之间的所有元素</p><p>ZRANGEBYSCORE PHPScore 80 90</p><p>ZADD PHPScore 81 test9 82 test10 83 test11 84 test12 84 test13 88 test14 89 test15</p><p>ZRANGEBYSCORE PHPScore 80 90 WITHSCORES</p><p>ZADD PHPScore 90 test16</p><p>ZRANGEBYSCORE PHPScore 80 (90 WITHSCORES</p><p>ZRANGEBYSCORE PHPScore (80 (90 WITHSCORES</p><p>注意：通过(代表不包端点</p><p>ZRANGEBYSCORE PHPScore 90 +inf WITHSCORES</p><p>ZRANGEBYSCORE PHPScore 80 +inf WITHSCORES LIMIT 0 3</p><p>6》ZREVRANGEBYSCORE：获得指定分数范围内的元素，按照元素的分数从大到小的顺序返回min和max之间的元素</p><p>语法：ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]</p><p>ZREVRANGEBYSCORE PHPScore 90 80 WITHSCORES</p><p>7》ZINCRBY:操作某个元素的分数，返回操作之后的分数</p><p>语法：ZINCRBY key increment member</p><p>ZINCRBY PHPScore 5 test16</p><p>ZINCRBY PHPScore -15 test16</p><p>8》ZCARD：获得集合中元素的数量</p><p>语法：ZCARD key</p><p>ZCARD PHPScore</p><p>9》ZCONUT:获得指定分数内的元素的数量</p><p>语法：ZCOUNT key min max</p><p>ZCOUNT PHPScore 80 90</p><p>10》ZREM:删除一个或者多个元素，返回删除元素的个数</p><p>语法：ZREM key member ...</p><p>ZREM PHPScore test16</p><p>11》ZREMRANGEBYRANK：按照排名范围删除元素，按照分数从小到大的顺序删除所指定的排名范围内的所有元素</p><p>语法：ZREMRANGEBYRANK key start stop</p><p>ZADD testRem 1 a 2 b 3 c 4 d 5 e 6 f 7 g 8 h</p><p>ZREMRANGEBYRANK testRem 0 2</p><p>12》ZREMRANGEBYSCORE:按照分数范围删除元素</p><p>语法：ZREMRANGEBYSCORE key min max</p><p>ZADD testRem1 1 a 2 b 3 c 4 d 5 e 6 f 7 g 8 h</p><p>ZREMRANGEBYSCORE testRem1 3 7</p><p>13》ZRANK：获得指定元素的排名，根据分数从小到大的顺序</p><p>语法：ZRANK key member</p><p>ZRANK PHPScore king</p><p>14》ZREVRANK：获得指定元素的排名，根据分数从大到小的顺序</p><p>语法：ZREVRANK key member</p><p>ZREVRANK PHPScore king</p><p>15》ZINTERSTORE：计算有序集合的交集，并将结果保存起来</p><p>语法：ZINTERSTORE destination numkeys [WEIGHTS weight weight...] [AGGREGATE SUM | MIN | MAX]</p><p>ZADD testSortedSet1 1 a 2 b 3 c</p><p>ZADD testSortedSet2 10 a 20 b 30 c</p><p>ZINTERSTORE resTestSorted1 2 testSortedSet1 testSortedSet2</p><p>ZINTERSTORE resTestSorted2 2 testSortedSet2 testSortedSet2 AGGREGATE SUM</p><p>ZINTERSTORE resTestSorted3 2 testSortedSet1 testSortedSet2 AGGREGATE MIN</p><p>ZINTERSTORE resTestSorted4 2 testSortedSet1 testSortedSet2 AGGREGATE MAX</p><p>ZINTERSTORE resTestSorted5 2 testSortedSet1 testSortedSet2 WEIGHTS 2 0.2</p><p>16》ZUNIONSTORE：计算有序集合并集，将结果保存起来</p><p>语法：ZUNIONSTORE destination numkeys key key ... [WEIGHTS weight weight...] [AGGREGATE SUM | MIN | MAX]</p><p>ZADD TESTUNIONSET1 1 a 2 b 3 c</p><p>ZADD TESTUNIONSET2 4 d 5 e 6 f 7 a</p><p>ZUNIONSTORE uniRes1 2 TESTUNIONSET1 TESTUNIONSET2</p><p>ZUNIONSTORE uniRes2 2 TESTUNIONSET1 TESTUNIONSET2 AGGREGATE SUM</p><p>ZUNIONSTORE uniRes3 2 TESTUNIONSET1 TESTUNIONSET2 AGGREGATE MIN</p><p>ZUNIONSTORE uniRes4 2 TESTUNIONSET1 TESTUNIONSET2 AGGREGATE MAX</p><p>ZUNIONSTORE uniRes5 2 TESTUNIONSET1 TESTUNIONSET2 WEIGHTS 2 2</p><p>二、Redis中的事务</p><p>1.开启事务</p><p>MULTI:开启事务，事务块中的多条语句会按照顺序放入对列当中，最后由EXEC命令来执行</p><p>MULTI<br> INCR counter1<br> INCR counter2<br> INCR counter3<br> PING<br> GET counter1<br> EXEC</p><p>2.执行事务块中的命令<br> EXEC:执行事务块中的命令</p><p>3.监视一个或者多个key<br> WATCH:监视一个或者多个key，如果在执行事务之前这个key如果被其它命令改动，事务就被打断了。</p><p>UNWATCH:取消WATCH命令对所有key的监视</p><p>4.取消事务<br> DISCARD</p><p>MULTI<br> SET testMulti &#39;this is a test&#39;<br> INCR counter4<br> INCR counter5<br> DISCARD</p><p>5.事务中的错误处理<br> 1》语法错误：像命令不存在，或者参数错误，如果有语法错误，Redis接到exec后直接返回错误，里面正确的命令也不会被执行<br> MULTI<br> SET test hello<br> SET test1<br> ERRORCOMMAND</p><p>2》运行错误,错误指在运行命令的时候出现的问题<br> MULTI<br> SET test2 1<br> SADD test2 2<br> SET test2 3<br> EXEC</p><p>三、连接相关</p><p>PING:测试和服务器之间是否连接有效，如果服务器运行正常的话会得到PONG</p><p>ECHO:打印一个特定信息</p><p>QUIT:请求服务器关闭与当前客户端的连接,EXIT</p><p>SHUTDOWN:关闭服务器和客户端</p><p>设置密码<br> 1.AUTH:指定Redis的身份验证,Redis配置文件中requirepass选项的值</p><p>2.CONFIG SET requirepass password<br> 登陆进来之后通过AUTH命令进行验证<br> 连接的时候-a pwd</p><p>SELECT:选择数据库</p><p>四、生存时间<br> EXPIRE/EXPIREAT<br> PEXPIRE/PEXPIREAT<br> PERSIST<br> TTL<br> PTTL</p><p>SET session:test1 uid1<br> EXPIRE session:test1 900<br> TTL session:test1<br> SET session:test2 uid2<br> EXPIRE session:test2 30</p><p>注意：使用SET GETSET也会清楚过期时间<br> SET key hello<br> EXPIRE key 100<br> TTL key<br> SET key world<br> TTL key</p><p>四、排序相关</p><p>SORT</p><p>1》按照键值从小到大或者从大到小的顺序排序</p><p>SORT key</p><p>SORT key DESC</p><p>对数值进行排序<br> LPUSH testSort1 12 33 -13 45 90<br> SORT testSort1 #升序<br> SORT testSort1 DESC #降序</p><p>对字母进行排序</p><p>LPUSH testSort2 a b c test1 test2 king queen zendStudio</p><p>SORT testSort2 ALPHA</p><p>2》使用LIMIT限制返回结果</p><p>LPUSH testSort3 a b c d e f g h i j k l m n 1 2 3 4 6 8 900 23</p><p>SORT testSort3 ALPHA LIMIT 0 5</p><p>SORT testSort3 ALPHA LIMIT 0 5 DESC</p><p>3》根据外部key的权重进行排序</p><p>LPUSH uid 1<br> SET user_name_1 admin<br> SET user_level_1 9999</p><p>LPUSH uid 2<br> SET user_name_2 king<br> SET user_level_2 800</p><p>LPUSH uid 3<br> SET user_name_3 queen<br> SET user_level_3 600</p><p>LPUSH uid 4<br> SET user_name_4 jack<br> SET user_level_4 300</p><p>LPUSH uid 5<br> SET user_name_5 rose<br> SET user_level_5 860</p><p>SORT uid<br> SORT uid BY user_level_*</p><p>4》根据排序结果取出相应键值</p><p>SORT uid GET user_name_*</p><p>SORT uid BY user_level_* GET user_name_*</p><p>SORT uid GET user_name_* GET user_level_*</p><p>SORT uid GET # GET user_level_* GET user_name_*</p><p>SORT uid BY user_level_* GET # GET user_level_* GET user_name_*</p><p>SORT uid BY noExists</p><p>SORT uid BY noExists GET # GET user_level_* GET user_name_*</p><p>HMSET user_info_1 username admin level 1000<br> HMSET user_info_2 username king level 999<br> HMSET user_info_3 username king1 level 77<br> HMSET user_info_4 username king2 level 90</p><p>SORT uid BY user_info_*-&gt;level</p><p>SORT uid GET user_info_*-&gt;username</p><p>SORT uid BY user_info_<em>-&gt;level GET # GET user_info_</em>-&gt;username</p><p>5》将排序结果保存起来</p><p>RPUSH testSort4 1 2 5 8 9 20<br> RPUSH testSort4 43 56 90 120<br> SORT testSort4 DESC STORE sortRes4</p><p>SORT key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern]] [ASC|DESC|ALPHA] [STORE destination]</p><p>注意：<br> SORT命令的时间复杂度O(n+mlogm),n表示要排序的列表或者集合中的元素的个数，m表示要返回元素的个数<br> 1》尽可能减少带排序中键的数量(使n尽可能的小)<br> 2》使用LIMIT参数限制获取元素的个数(使m尽可能小)<br> 3》如果要排序的数据量比较大，尽可能通过STORE缓存结果</p><p>五、发布订阅模式<br> PUBLISH/SUBSCRIBE<br> 1》发布订阅模式的原理<br> 包含两个角色，一个是发布者,一个是订阅者<br> 订阅者可以订阅一个或者多个频道channel<br> 发布者可以向指定频道发布信息<br> 通过PUBLISH发布消息<br> PUBLISH channel message<br> PUBLISH channel1.1 &#39;maiziedu&#39;<br> 通过SUBSCRIBE命令订阅频道<br> SUBSCRIBE channel ...<br> 注意：发布出去消息是不会被持久化，只有客户端订阅这个频道之后才能收到之后发送消息<br> UNSUBSCRIBE 取消某个频道订阅，但是在REDIS客户端中做了限制 没有办法进行验证<br> UNSUBSCRIBE [channel]<br> PSUBSCRIBE 订阅指定的规则<br> UNPSUBSCRIBE</p><p>六、管道技术</p>",191),K=e("br",null,null,-1),V=e("br",null,null,-1),W={href:"https://github.com/phpredis/phpredis/downloads",target:"_blank",rel:"noopener noreferrer"},j=p('<p>1.下载安装Redis<br> 2.解压，将解压文件放到PHP的ext目录中<br> 3.配置PHP配置文件，php.ini，按照<br> extension=php_igbinary.dll<br> extension=php_redis.dll<br> 4.保存，重启服务器即可</p><h2 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群" aria-hidden="true">#</a> redis集群</h2><p>/usr/local/redis/src/redis-trib.rb fix 127.0.0.1:7002</p><p>/usr/local/redis/src/redis-trib.rb reshard 127.0.0.1:7000</p><p>/usr/local/redis/src/redis-trib.rb check 10.10.20.97:7000</p><p>按照默认的推荐方式配置集群主从<br> /usr/local/redis/src/redis-trib.rb create --replicas 1 10.10.20.97:7000 10.10.20.97:7001 10.10.20.97:7002 10.10.20.97:7003 10.10.20.97:7004 10.10.20.97:7005</p><p>迁移数据</p><p>/usr/local/redis/src/redis-trib.rb reshard --timeout 6000 --from 0afd4a3ca5be5836516600cb33906e12e757dc44 --to 257483ff0552577e98f5dc947e045f00c86524a8 --slots 5461 --yes 10.10.20.97:7001<br> /usr/local/redis/src/redis-trib.rb reshard --timeout 6000 --from c72635b51521f9df0c7fd3947070892bfc56ba89 --to 257483ff0552577e98f5dc947e045f00c86524a8 --slots 5461--yes 10.10.20.97:7001</p><p>/usr/local/redis/src/redis-trib.rb reshard --timeout 6000 --from 4a4df4a778e2ab1479cd604005220978723a72a3 --to 7add46aa36ef54ee0e9a5710b4d8d53a336f1b5b --slots 5462 --yes 10.10.20.97:7001</p><p>/usr/local/redis/src/redis-trib.rb reshard --timeout 6000 --from 4a4df4a778e2ab1479cd604005220978723a72a3 --to 244e65438dd6aaad6223e3ae79b15452588181ef --slots 5462 --yes 10.10.20.97:7001</p><p>增加节点<br> /usr/local/redis/src/redis-trib.rb add-node 10.10.20.165:6379 10.10.20.97:7000</p><p>#删除节点前先迁移数据<br> /usr/local/redis/src/redis-trib.rb del-node 10.10.20.97:6379 d6facd3aea38cd09361c1924ea06e43459b64fdc</p><h2 id="reids安装" tabindex="-1"><a class="header-anchor" href="#reids安装" aria-hidden="true">#</a> reids安装</h2>',13),J=e("br",null,null,-1),Q={href:"http://download.redis.io/releases/redis-3.2.8.tar.gz",target:"_blank",rel:"noopener noreferrer"},$=e("br",null,null,-1),ee=e("br",null,null,-1),ne=e("br",null,null,-1),te=e("br",null,null,-1),se=e("br",null,null,-1),pe=e("br",null,null,-1),re=p("<p>sentinel配置</p><p>protected-mode no<br> port 26379<br> dir &quot;/opt&quot;<br> #至少一个哨兵任务mymaster down，才真正down<br> sentinel monitor mymaster 127.0.0.1 6379 1<br> #表示如果5s内mymaster没响应，就认为down<br> sentinel down-after-milliseconds mymaster 5000<br> #slave节点能同时并行从新master同步缓存的台数有多少个<br> sentinel parallel-syncs mymaster 1<br> #表示如果15秒后,mysater仍没活过来，则启动failover，从剩下的slave中选一个升级为master<br> sentinel failover-timeout mymaster 15000</p>",2);function Ee(Se,oe){const t=E("ExternalLinkIcon");return S(),o("div",null,[a,e("p",null,[n("SET cache_page '"),e("a",d,[n("http://phpfamily.org"),s(t)]),n("'")]),T,l,R,c,e("p",null,[n("SET cache_page1 '"),e("a",u,[n("http://maiziedu.com"),s(t)]),n("'")]),m,b,y,e("p",null,[n("SET cache_page2 '"),e("a",h,[n("http://maiziedu.com"),s(t)]),n("'")]),N,k,I,e("p",null,[n("SET cache_page3 '"),e("a",P,[n("http://phpfamily.org"),s(t)]),n("'")]),_,L,f,A,O,H,e("p",null,[n("SET cache_page4 '"),e("a",G,[n("http://www.baidu.com"),s(t)]),n("'")]),D,e("p",null,[n("SADD web "),e("a",M,[n("maiziedu.com"),s(t)])]),e("p",null,[n("SADD web "),e("a",g,[n("phpfamily.orgjd.com"),s(t)])]),e("p",null,[n("SADD web "),e("a",C,[n("phpfamily.orgtaobao.com"),s(t)])]),U,X,v,B,Z,e("p",null,[n("SISMEMBER web "),e("a",x,[n("maiziedu.com"),s(t)])]),Y,w,e("p",null,[n("SREM web "),e("a",F,[n("jd.com"),s(t)])]),e("p",null,[n("SREM web "),e("a",q,[n("taobao.comphpfamily.org"),s(t)])]),z,e("p",null,[n("七、通过PHP操纵Redis"),K,n(" PRedis和phpredis,使用Predis做演示，要求PHP版本要大于5.3"),V,e("a",W,[n("https://github.com/phpredis/phpredis/downloads"),s(t)])]),j,e("p",null,[n("reids安装"),J,n(" wget "),e("a",Q,[n("http://download.redis.io/releases/redis-3.2.8.tar.gz"),s(t)]),$,n(" tar zxvf redis-3.2.8.tar.gz"),ee,n(" mv redis-3.2.8 redis"),ne,n(" cd redis"),te,n(" make && make install"),se,n(" cd utils/"),pe,n(" ./install_server.sh")]),re])}const de=r(i,[["render",Ee],["__file","redis.html.vue"]]);export{de as default};
