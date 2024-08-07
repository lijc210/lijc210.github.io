---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 组件
tag:
  - spark
---

# spark
## spark面试问题
### 1、spark中的RDD是什么，有哪些特性
*     RDD（Resilient Distributed Dataset）叫做分布式数据集，是Spark中最基本的数据抽象，它代表一个不可变、可分区、里面的元素可并行计算的集合。
       *Dataset：就是一个集合，用于存放数据的
       *Distributed：分布式，可以并行在集群计算
       *Resilient：表示弹性的
              *弹性表示
                     *1、RDD中的数据可以存储在内存或者是磁盘
                     *2、RDD中的分区是可以改变的
*     五大特性：
       *A list of partitions
              一个分区列表，RDD中的数据都存在一个分区列表里面
       *A function for computing each split
              作用在每一个分区中的函数
       *A list of dependencies on other RDDs
              一个RDD依赖于其他多个RDD，这个点很重要，RDD的容错机制就是依据这个特性而来的
       *Optionally, a Partitioner for key-value RDDs (e.g. to say that the RDD ishash-partitioned)
              可选的，针对于kv类型的RDD才具有这个特性，作用是决定了数据的来源以及数据处理后的去向
       *Optionally, a list of preferred locations to compute each split on (e.g. blocklocations for an HDFS file)
              可选项，数据本地性，数据位置最优
 
### 2、概述一下spark中的常用算子区别（map、mapPartitions、foreach、foreachPartition）
* map：用于遍历RDD,将函数f应用于每一个元素，返回新的RDD(transformation算子)。
* foreach:用于遍历RDD,将函数f应用于每一个元素，无返回值(action算子)。
* mapPartitions:用于遍历操作RDD中的每一个分区，返回生成一个新的RDD（transformation算子）。
* foreachPartition: 用于遍历操作RDD中的每一个分区。无返回值(action算子)。
      
* 总结：一般使用mapPartitions或者foreachPartition算子比map和foreach更加高效，推荐使用。
 
### 3、谈谈spark中的宽窄依赖
* RDD和它依赖的父RDD（s）的关系有两种不同的类型，即窄依赖（narrow dependency）和宽依赖（wide dependency）。
* 宽依赖：指的是多个子RDD的Partition会依赖同一个父RDD的Partition
* 窄依赖：指的是每一个父RDD的Partition最多被子RDD的一个Partition使用。
 
### 4、spark中如何划分stage
* 1.Spark Application中可以因为不同的Action触发众多的job，一个Application中可以有很多的job，每个job是由一个或者多个Stage构成的，后面的Stage依赖于前面的Stage，也就是说只有前面依赖的Stage计算完毕后，后面的Stage才会运行。
* 2.Stage划分的依据就是宽依赖，何时产生宽依赖，例如reduceByKey,groupByKey的算子，会导致宽依赖的产生。
* 3.由Action（例如collect）导致了SparkContext.runJob的执行，最终导致了DAGScheduler中的submitJob的执行，其核心是通过发送一个case class JobSubmitted对象给eventProcessLoop。
eventProcessLoop是DAGSchedulerEventProcessLoop的具体实例，而DAGSchedulerEventProcessLoop是eventLoop的子类，具体实现EventLoop的onReceive方法，onReceive方法转过来回调doOnReceive
* 4.在doOnReceive中通过模式匹配的方法把执行路由到
* 5.在handleJobSubmitted中首先创建finalStage，创建finalStage时候会建立父Stage的依赖链条
 
* 总结：以来是从代码的逻辑层面上来展开说的，可以简单点说：写介绍什么是RDD中的宽窄依赖，然后在根据DAG有向无环图进行划分，从当前job的最后一个算子往前推，遇到宽依赖，那么当前在这个批次中的所有算子操作都划分成一个stage,然后继续按照这种方式在继续往前推，如在遇到宽依赖，又划分成一个stage,一直到最前面的一个算子。最后整个job会被划分成多个stage,而stage之间又存在依赖关系，后面的stage依赖于前面的stage。
 
### 5、spark-submit的时候如何引入外部jar包
* 在通过spark-submit提交任务时，可以通过添加配置参数来指定
       *--driver-class-path 外部jar包
       *--jars 外部jar包
 
 
### 6、spark 如何防止内存溢出
* driver端的内存溢出
       *可以增大driver的内存参数：spark.driver.memory(default 1g)
       *这个参数用来设置Driver的内存。在Spark程序中，SparkContext，DAGScheduler都是运行在Driver端的。对应rdd的Stage切分也是在Driver端运行，如果用户自己写的程序有过多的步骤，切分出过多的Stage，这部分信息消耗的是Driver的内存，这个时候就需要调大Driver的内存。
* map过程产生大量对象导致内存溢出
       *  这种溢出的原因是在单个map中产生了大量的对象导致的，例如：rdd.map(x=>for(i <- 1 to 10000) yield i.toString)，这个操作在rdd中，每个对象都产生了10000个对象，这肯定很容易产生内存溢出的问题。针对这种问题，在不增加内存的情况下，可以通过减少每个Task的大小，以便达到每个Task即使产生大量的对象Executor的内存也能够装得下。具体做法可以在会产生大量对象的map操作之前调用repartition方法，分区成更小的块传入map。例如：rdd.repartition(10000).map(x=>for(i <- 1 to 10000) yieldi.toString)。
    面对这种问题注意，不能使用rdd.coalesce方法，这个方法只能减少分区，不能增加分区，不会有shuffle的过程。
* 数据不平衡导致内存溢出
       *  数据不平衡除了有可能导致内存溢出外，也有可能导致性能的问题，解决方法和上面说的类似，就是调用repartition重新分区。这里就不再累赘了。
* shuffle后内存溢出
       *  shuffle内存溢出的情况可以说都是shuffle后，单个文件过大导致的。在Spark中，join，reduceByKey这一类型的过程，都会有shuffle的过程，在shuffle的使用，需要传入一个partitioner，大部分Spark中的shuffle操作，默认的partitioner都是HashPatitioner，默认值是父RDD中最大的分区数,这个参数通过spark.default.parallelism控制(在spark-sql中用spark.sql.shuffle.partitions)， spark.default.parallelism参数只对HashPartitioner有效，所以如果是别的Partitioner或者自己实现的Partitioner就不能使用spark.default.parallelism这个参数来控制shuffle的并发量了。如果是别的partitioner导致的shuffle内存溢出，就需要从partitioner的代码增加partitions的数量。
* standalone模式下资源分配不均匀导致内存溢出
       *在standalone的模式下如果配置了--total-executor-cores和 --executor-memory 这两个参数，但是没有配置--executor-cores这个参数的话，就有可能导致，每个Executor的memory是一样的，但是cores的数量不同，那么在cores数量多的Executor中，由于能够同时执行多个Task，就容易导致内存溢出的情况。这种情况的解决方法就是同时配置--executor-cores或者spark.executor.cores参数，确保Executor资源分配均匀。
      
* 使用rdd.persist(StorageLevel.MEMORY_AND_DISK_SER)代替rdd.cache()
       *rdd.cache()和rdd.persist(Storage.MEMORY_ONLY)是等价的，在内存不足的时候rdd.cache()的数据会丢失，再次使用的时候会重算，而rdd.persist(StorageLevel.MEMORY_AND_DISK_SER)在内存不足的时候会存储在磁盘，避免重算，只是消耗点IO时间。
 
### 7、spark中cache和persist的区别
* cache：缓存数据，默认是缓存在内存中，其本质还是调用persist
* persist:缓存数据，有丰富的数据缓存策略。数据可以保存在内存也可以保存在磁盘中，使用的时候指定对应的缓存级别就可以了。
 
### 8、简要描述Spark分布式集群搭建的步骤
* 地球人都知道
* 这里可以概述下如何搭建高可用的spark集群（HA）
       *主要是引入了zookeeper
        
### 9、spark中的数据倾斜的现象、原因、后果
* (1)、数据倾斜的现象
       *多数task执行速度较快,少数task执行时间非常长，或者等待很长时间后提示你内存不足，执行失败。
* (2)、数据倾斜的原因
       *数据问题
              *1、key本身分布不均衡（包括大量的key为空）
              *2、key的设置不合理
       *spark使用问题
              *1、shuffle时的并发度不够
              *2、计算方式有误
* (3)、数据倾斜的后果
       *1、spark中的stage的执行时间受限于最后那个执行完成的task,因此运行缓慢的任务会拖垮整个程序的运行速度（分布式程序运行的速度是由最慢的那个task决定的）。
       *2、过多的数据在同一个task中运行，将会把executor撑爆。
 
### 10、如何解决spark中的数据倾斜问题
* 发现数据倾斜的时候，不要急于提高executor的资源，修改参数或是修改程序，首先要检查数据本身，是否存在异常数据。
       *1、数据问题造成的数据倾斜
              *找出异常的key
                     *如果任务长时间卡在最后最后1个(几个)任务，首先要对key进行抽样分析，判断是哪些key造成的。
                     选取key，对数据进行抽样，统计出现的次数，根据出现次数大小排序取出前几个。
                     *比如:df.select("key").sample(false,0.1).(k=>(k,1)).reduceBykey(_+_).map(k=>(k._2,k._1)).sortByKey(false).take(10)
                     *如果发现多数数据分布都较为平均，而个别数据比其他数据大上若干个数量级，则说明发生了数据倾斜。
              *经过分析，倾斜的数据主要有以下三种情况:
                     *1、null（空值）或是一些无意义的信息()之类的,大多是这个原因引起。
                     *2、无效数据，大量重复的测试数据或是对结果影响不大的有效数据。
                     *3、有效数据，业务导致的正常数据分布。
              *解决办法
                     *第1，2种情况，直接对数据进行过滤即可（因为该数据对当前业务不会产生影响）。
                     *第3种情况则需要进行一些特殊操作，常见的有以下几种做法
                            *(1) 隔离执行，将异常的key过滤出来单独处理，最后与正常数据的处理结果进行union操作。
                            *(2) 对key先添加随机值，进行操作后，去掉随机值，再进行一次操作。
                            *(3) 使用reduceByKey 代替 groupByKey(reduceByKey用于对每个key对应的多个value进行merge操作，最重要的是它能够在本地先进行merge操作，并且merge操作可以通过函数自定义.)
                            *(4) 使用map join。
              *案例
                     *如果使用reduceByKey因为数据倾斜造成运行失败的问题。具体操作流程如下:
                            *(1) 将原始的 key 转化为 key + 随机值(例如Random.nextInt)
                            *(2) 对数据进行 reduceByKey(func)
                            *(3) 将 key + 随机值 转成 key
                            *(4) 再对数据进行 reduceByKey(func)
              *案例操作流程分析：
                     *假设说有倾斜的Key，我们给所有的Key加上一个随机数，然后进行reduceByKey操作；此时同一个Key会有不同的随机数前缀，在进行reduceByKey操作的时候原来的一个非常大的倾斜的Key就分而治之变成若干个更小的Key，不过此时结果和原来不一样，怎么破？进行map操作，目的是把随机数前缀去掉，然后再次进行reduceByKey操作。（当然，如果你很无聊，可以再次做随机数前缀），这样我们就可以把原本倾斜的Key通过分而治之方案分散开来，最后又进行了全局聚合
                     *注意1: 如果此时依旧存在问题，建议筛选出倾斜的数据单独处理。最后将这份数据与正常的数据进行union即可。
                     *注意2: 单独处理异常数据时，可以配合使用Map Join解决。
                    
       *2、spark使用不当造成的数据倾斜
              *提高shuffle并行度
                     *dataFrame和sparkSql可以设置spark.sql.shuffle.partitions参数控制shuffle的并发度，默认为200。
                     *rdd操作可以设置spark.default.parallelism控制并发度，默认参数由不同的Cluster Manager控制。
                     *局限性: 只是让每个task执行更少的不同的key。无法解决个别key特别大的情况造成的倾斜，如果某些key的大小非常大，即使一个task单独执行它，也会受到数据倾斜的困扰。
                    
              *使用map join 代替reduce join    
                     *在小表不是特别大(取决于你的executor大小)的情况下使用，可以使程序避免shuffle的过程，自然也就没有数据倾斜的困扰了.（详细见http://blog.csdn.net/lsshlsw/article/details/50834858、http://blog.csdn.net/lsshlsw/article/details/48694893）
                     *局限性: 因为是先将小数据发送到每个executor上，所以数据量不能太大。
 
### 11、flume整合sparkStreaming问题
* (1)、如何实现sparkStreaming读取flume中的数据
       *可以这样说：
              *前期经过技术调研，查看官网相关资料，发现sparkStreaming整合flume有2种模式，一种是拉模式，一种是推模式，然后在简单的聊聊这2种模式的特点，以及如何部署实现，需要做哪些事情，最后对比两种模式的特点，选择那种模式更好。
                     *推模式：Flume将数据Push推给Spark Streaming
                     *拉模式：Spark Streaming从flume 中Poll拉取数据
* (2)、在实际开发的时候是如何保证数据不丢失的
       *可以这样说：
              *flume那边采用的channel是将数据落地到磁盘中，保证数据源端安全性（可以在补充一下，flume在这里的channel可以设置为memory内存中，提高数据接收处理的效率，但是由于数据在内存中，安全机制保证不了，故选择channel为磁盘存储。整个流程运行有一点的延迟性）
              *sparkStreaming通过拉模式整合的时候，使用了FlumeUtils这样一个类，该类是需要依赖一个额外的jar包（spark-streaming-flume_2.10）
              *要想保证数据不丢失，数据的准确性，可以在构建StreamingConext的时候，利用StreamingContext.getOrCreate（checkpoint,creatingFunc: () => StreamingContext）来创建一个StreamingContext,使用StreamingContext.getOrCreate来创建StreamingContext对象，传入的第一个参数是checkpoint的存放目录，第二参数是生成StreamingContext对象的用户自定义函数。如果checkpoint的存放目录存在，则从这个目录中生成StreamingContext对象；如果不存在，才会调用第二个函数来生成新的StreamingContext对象。在creatingFunc函数中，除了生成一个新的StreamingContext操作，还需要完成各种操作，然后调用ssc.checkpoint(checkpointDirectory)来初始化checkpoint功能，最后再返回StreamingContext对象。
        这样，在StreamingContext.getOrCreate之后，就可以直接调用start()函数来启动（或者是从中断点继续运行）流式应用了。如果有其他在启动或继续运行都要做的工作，可以在start()调用前执行。
              *流失计算中使用checkpoint的作用：
                     *   保存元数据，包括流式应用的配置、流式没崩溃之前定义的各种操作、未完成所有操作的batch。元数据被存储到容忍失败的存储系统上，如HDFS。这种ckeckpoint主要针对driver失败后的修复。
                     *   保存流式数据，也是存储到容忍失败的存储系统上，如HDFS。这种ckeckpoint主要针对window operation、有状态的操作。无论是driver失败了，还是worker失败了，这种checkpoint都够快速恢复，而不需要将很长的历史数据都重新计算一遍（以便得到当前的状态）。
              *设置流式数据checkpoint的周期
                     *对于一个需要做checkpoint的DStream结构，可以通过调用DStream.checkpoint(checkpointInterval)来设置ckeckpoint的周期，经验上一般将这个checkpoint周期设置成batch周期的5至10倍。
              *使用write ahead logs功能
                     *这是一个可选功能，建议加上。这个功能将使得输入数据写入之前配置的checkpoint目录。这样有状态的数据可以从上一个checkpoint开始计算。开启的方法是把spark.streaming.receiver.writeAheadLogs.enable这个property设置为true。另外，由于输入RDD的默认StorageLevel是MEMORY_AND_DISK_2，即数据会在两台worker上做replication。实际上，Spark Streaming模式下，任何从网络输入数据的Receiver（如kafka、flume、socket）都会在两台机器上做数据备份。如果开启了write ahead logs的功能，建议把StorageLevel改成MEMORY_AND_DISK_SER。修改的方法是，在创建RDD时由参数传入。
              *使用以上的checkpoint机制，确实可以保证数据0丢失。但是一个前提条件是，数据发送端必须要有缓存功能，这样才能保证在spark应用重启期间，数据发送端不会因为spark streaming服务不可用而把数据丢弃。而flume具备这种特性，同样kafka也具备。
 
* (3)Spark Streaming的数据可靠性
       *有了checkpoint机制、write ahead log机制、Receiver缓存机器、可靠的Receiver（即数据接收并备份成功后会发送ack），可以保证无论是worker失效还是driver失效，都是数据0丢失。原因是：如果没有Receiver服务的worker失效了，RDD数据可以依赖血统来重新计算；如果Receiver所在worker失败了，由于Reciever是可靠的，并有write ahead log机制，则收到的数据可以保证不丢；如果driver失败了，可以从checkpoint中恢复数据重新构建。
 
### 12、kafka整合sparkStreaming问题
* (1)、如何实现sparkStreaming读取kafka中的数据
       *可以这样说：在kafka0.10版本之前有二种方式与sparkStreaming整合，一种是基于receiver，一种是direct,然后分别阐述这2种方式分别是什么
              *receiver：是采用了kafka高级api,利用receiver接收器来接受kafka topic中的数据，从kafka接收来的数据会存储在spark的executor中，之后spark streaming提交的job会处理这些数据，kafka中topic的偏移量是保存在zk中的。
                     *基本使用： val kafkaStream =KafkaUtils.createStream(streamingContext,
    [ZK quorum], [consumer group id], [per-topic number of Kafka partitionsto consume])
                     *还有几个需要注意的点：
                            *在Receiver的方式中，Spark中的partition和kafka中的partition并不是相关的，所以如果我们加大每个topic的partition数量，仅仅是增加线程来处理由单一Receiver消费的主题。但是这并没有增加Spark在处理数据上的并行度.
                            *对于不同的Group和topic我们可以使用多个Receiver创建不同的Dstream来并行接收数据，之后可以利用union来统一成一个Dstream。
                            *在默认配置下，这种方式可能会因为底层的失败而丢失数据. 因为receiver一直在接收数据,在其已经通知zookeeper数据接收完成但是还没有处理的时候,executor突然挂掉(或是driver挂掉通知executor关闭),缓存在其中的数据就会丢失. 如果希望做到高可靠, 让数据零丢失,如果我们启用了Write Ahead Logs(spark.streaming.receiver.writeAheadLog.enable=true）该机制会同步地将接收到的Kafka数据写入分布式文件系统(比如HDFS)上的预写日志中. 所以, 即使底层节点出现了失败, 也可以使用预写日志中的数据进行恢复. 复制到文件系统如HDFS，那么storagelevel需要设置成 StorageLevel.MEMORY_AND_DISK_SER，也就是KafkaUtils.createStream(..., StorageLevel.MEMORY_AND_DISK_SER)
              *direct:在spark1.3之后，引入了Direct方式。不同于Receiver的方式，Direct方式没有receiver这一层，其会周期性的获取Kafka中每个topic的每个partition中的最新offsets，之后根据设定的maxRatePerPartition来处理每个batch。（设置spark.streaming.kafka.maxRatePerPartition=10000。限制每秒钟从topic的每个partition最多消费的消息条数）。
      
* (2) 对比这2中方式的优缺点：
       *采用receiver方式：这种方式可以保证数据不丢失，但是无法保证数据只被处理一次，WAL实现的是At-least-once语义（至少被处理一次），如果在写入到外部存储的数据还没有将offset更新到zookeeper就挂掉,这些数据将会被反复消费. 同时,降低了程序的吞吐量。
       *采用direct方式:相比Receiver模式而言能够确保机制更加健壮. 区别于使用Receiver来被动接收数据, Direct模式会周期性地主动查询Kafka, 来获得每个topic+partition的最新的offset, 从而定义每个batch的offset的范围. 当处理数据的job启动时, 就会使用Kafka的简单consumer api来获取Kafka指定offset范围的数据。
              *优点：
                     *1、简化并行读取
                            *如果要读取多个partition, 不需要创建多个输入DStream然后对它们进行union操作. Spark会创建跟Kafkapartition一样多的RDD partition, 并且会并行从Kafka中读取数据. 所以在Kafkapartition和RDD partition之间, 有一个一对一的映射关系.
                     *2、高性能
                            *如果要保证零数据丢失, 在基于receiver的方式中, 需要开启WAL机制. 这种方式其实效率低下, 因为数据实际上被复制了两份, Kafka自己本身就有高可靠的机制, 会对数据复制一份, 而这里又会复制一份到WAL中. 而基于direct的方式, 不依赖Receiver, 不需要开启WAL机制, 只要Kafka中作了数据的复制, 那么就可以通过Kafka的副本进行恢复.
                     *3、一次且仅一次的事务机制
                            *基于receiver的方式, 是使用Kafka的高阶API来在ZooKeeper中保存消费过的offset的. 这是消费Kafka数据的传统方式. 这种方式配合着WAL机制可以保证数据零丢失的高可靠性, 但是却无法保证数据被处理一次且仅一次, 可能会处理两次. 因为Spark和ZooKeeper之间可能是不同步的. 基于direct的方式, 使用kafka的简单api, Spark Streaming自己就负责追踪消费的offset, 并保存在checkpoint中. Spark自己一定是同步的, 因此可以保证数据是消费一次且仅消费一次。不过需要自己完成将offset写入zk的过程,在官方文档中都有相应介绍.
                                   *简单代码实例：
                                          *messages.foreachRDD(rdd=>{  
                                             valmessage = rdd.map(_._2)//对数据进行一些操作
                                             message.map(method)//更新zk上的offset (自己实现)
                                             updateZKOffsets(rdd)
                                          })
                                          *sparkStreaming程序自己消费完成后，自己主动去更新zk上面的偏移量。也可以将zk中的偏移量保存在mysql或者redis数据库中，下次重启的时候，直接读取mysql或者redis中的偏移量，获取到上次消费的偏移量，接着读取数据。
### 13、利用scala语言实现排序
* (1)冒泡排序：
       *package cn.itcast.sort
       *//冒泡排序
       *class BubbleSort {
       *  def main(args: Array[String]): Unit = {
       *   val list = List(3, 12, 43, 23, 7, 1, 2, 0)
       *    println(sort(list))
       *}
       *//定义一个方法，传入的参数是要进行排序的List集合，输出的是排序后的List集合
       *  def sort(list: List[Int]): List[Int] = listmatch {
       *    case List() => List()
       *    case head :: tail => compute(head,sort(tail))
       *  }
       *  def compute(data: Int, dataSet: List[Int]):List[Int] = dataSet match {
       *    case List() => List(data)
       *    case head :: tail => if (data <=head) data :: dataSet else *  head ::compute(data, tail)
       *  }
       *}
 
 
* (2) 快读排序
       *   packagecn.itcast.sort
       *      //快速排序
       *  object QuickSort {
    *    def main(args: Array[String]): Unit = {
   *     val list = List(3, 12, 43,23, 7, 1, 2, 0)
   *     println(quickSort(list))
       *
     * }
     * //定义一个方法，传入的参数是要进行排序的List集合，输出的是排序后的List集合
     * def quickSort(list: List[Int]): List[Int] ={
    *//对输入参数list进行模式匹配
    *list match {
   *   //如果是空，返回nil
   *  case Nil => Nil
   *  case List() => List()
   *   //不为空从list中提取出首元素和剩余元素组成的列表分别到head和tail中
   *  case head :: tail =>
   *    //对剩余元素列表调用partition方法，这个方法会将列表分为两部分。
   *    // 划分依据接受的参数，这个参数是一个函数(这里是(_ < x))。
   *    // partition方法会对每个元素调用这个函数，根据返回的true,false分成两部分。
   *    // 这里'_< x'是一个匿名函数(又称lambda),'_'关键字是函数输入参数的占位符，
   *   // 输入参数这里是列表中的每个元素。
   *    val (left, right) =tail.partition(_ < head)
   *   //最后对划分好的两部分递归调用quickSort
   *    //其中head::quickSort(right)  这里::是List定义的一个方法，用于将两部分合成一个列表
   *    quickSort(left) ++ (head ::quickSort(right))
       *     }
       *  }
       *}
       
  



