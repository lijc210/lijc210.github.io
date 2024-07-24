---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 结构
tag:
  - 数据结构
---

# 数据结构

参考：

https://www.21ic.com/article/807017.html

https://www.cnblogs.com/wanghuaijun/p/7302303.html

https://blog.csdn.net/yeyazhishang/article/details/82353846

https://www.cnblogs.com/xdecode/p/9321848.html

## 图解！24张图彻底弄懂九大常见数据结构！

**[导读]**数据结构想必大家都不会陌生，对于一个成熟的程序员而言，熟悉和掌握数据结构和算法也是基本功之一。数据结构本身其实不过是数据按照特点关系进行存储或者组织的集合，特殊的结构在不同的应用场景中往往会带来不一样的处理效率。 常用的数据结构可根据数据访

数据结构想必大家都不会陌生，对于一个成熟的程序员而言，熟悉和掌握数据结构和算法也是基本功之一。数据结构本身其实不过是数据按照特点关系进行存储或者组织的集合，特殊的结构在不同的应用场景中往往会带来不一样的处理效率。

常用的数据结构可根据数据访问的特点分为线性结构和非线性结构。线性结构包括常见的链表、栈、队列等，非线性结构包括树、图等。数据结构种类繁多，本文将通过图解的方式对常用的数据结构进行理论上的介绍和讲解，以方便大家掌握常用数据结构的基本知识。

![](https://img.21ic.com/weixin/2020/7/AvQbmu.png)本文提纲

##  1  数组

数组可以说是最基本最常见的数据结构。数组一般用来存储相同类型的数据，可通过数组名和下标进行数据的访问和更新。数组中元素的存储是按照先后顺序进行的，同时在内存中也是按照这个顺序进行连续存放。数组相邻元素之间的内存地址的间隔一般就是数组数据类型的大小。

![](https://img.21ic.com/weixin/2020/7/fURNFv.jpeg)

##  2  链表

链表相较于数组，除了数据域，还增加了指针域用于构建链式的存储数据。链表中每一个节点都包含此节点的数据和指向下一节点地址的指针。由于是通过指针进行下一个数据元素的查找和访问，使得链表的自由度更高。

这表现在对节点进行增加和删除时，只需要对上一节点的指针地址进行修改，而无需变动其它的节点。不过事物皆有两极，指针带来高自由度的同时，自然会牺牲数据查找的效率和多余空间的使用。

一般常见的是有头有尾的单链表，对指针域进行反向链接，还可以形成双向链表或者循环链表。

![](https://img.21ic.com/weixin/2020/7/Nfeame.jpeg)

#### 链表和数组对比

链表和数组在实际的使用过程中需要根据自身的优劣势进行选择。链表和数组的异同点也是面试中高频的考察点之一。这里对单链表和数组的区别进行了对比和总结。

![](https://img.21ic.com/weixin/2020/7/N7NbUb.png)

##  3  跳表

从上面的对比中可以看出，链表虽然通过增加指针域提升了自由度，但是却导致数据的查询效率恶化。特别是当链表长度很长的时候，对数据的查询还得从头依次查询，这样的效率会更低。跳表的产生就是为了解决链表过长的问题，通过增加链表的多级索引来加快原始链表的查询效率。这样的方式可以让查询的时间复杂度从O(n)提升至O(logn)。

![](https://img.21ic.com/weixin/2020/7/ABNBbe.jpeg)

跳表通过增加的多级索引能够实现高效的动态插入和删除，其效率和红黑树和平衡二叉树不相上下。目前redis和levelDB都有用到跳表。

从上图可以看出，索引级的指针域除了指向下一个索引位置的指针，还有一个down指针指向低一级的链表位置，这样才能实现跳跃查询的目的。

##  4  栈

栈是一种比较简单的数据结构，常用一句话描述其特性，后进先出。栈本身是一种线性结构，但是在这个结构中只有一个口子允许数据的进出。这种模式可以参考腔肠动物...即进食和排泄都用一个口...

栈的常用操作包括入栈push和出栈pop，对应于数据的压入和压出。还有访问栈顶数据、判断栈是否为空和判断栈的大小等。由于栈后进先出的特性，常可以作为数据操作的临时容器，对数据的顺序进行调控，与其它数据结构相结合可获得许多灵活的处理。

![](https://img.21ic.com/weixin/2020/7/IBbEbi.gif)

##  5  队列

队列是栈的兄弟结构，与栈的后进先出相对应，队列是一种先进先出的数据结构。顾名思义，队列的数据存储是如同排队一般，先存入的数据先被压出。常与栈一同配合，可发挥最大的实力。

![](https://img.21ic.com/weixin/2020/7/Unay22.gif)

##  6  树

树作为一种树状的数据结构，其数据节点之间的关系也如大树一样，将有限个节点根据不同层次关系进行排列，从而形成数据与数据之间的父子关系。常见的数的表示形式更接近“倒挂的树”，因为它将根朝上，叶朝下。

树的数据存储在结点中，每个结点有零个或者多个子结点。没有父结点的结点在最顶端，成为根节点；没有非根结点有且只有一个父节点；每个非根节点又可以分为多个不相交的子树。

这意味着树是具备层次关系的，父子关系清晰，家庭血缘关系明朗；这也是树与图之间最主要的区别。

![](https://img.21ic.com/weixin/2020/7/yyIryy.jpeg)

别看树好像很高级，其实可看作是链表的高配版。树的实现就是对链表的指针域进行了扩充，增加了多个地址指向子结点。同时将“链表”竖起来，从而凸显了结点之间的层次关系，更便于分析和理解。

树可以衍生出许多的结构，若将指针域设置为双指针，那么即可形成最常见的二叉树，即每个结点最多有两个子树的树结构。二叉树根据结点的排列和数量还可进一度划分为完全二叉树、满二叉树、平衡二叉树、红黑树等。

![](https://img.21ic.com/weixin/2020/7/QRzaim.jpeg)

> **完全二叉树**：除了最后一层结点，其它层的结点数都达到了最大值；同时最后一层的结点都是按照从左到右依次排布。

> **满二叉树**：除了最后一层，其它层的结点都有两个子结点。

#### 平衡二叉树

平衡二叉树又被称为AVL树，它是一棵二叉排序树，且具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

> **二叉排序树**：是一棵空树，或者：若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；它的左、右子树也分别为二叉排序树。

> **树的高度**：结点层次的最大值

> **平衡因子**：左子树高度 - 右子树高度

二叉排序树意味着二叉树中的数据是排好序的，顺序为左结点<根节点<右结点，这表明二叉排序树的中序遍历结果是有序的。（还不懂二叉树四种遍历方式\[前序遍历、中序遍历、后序遍历、层序遍历\]的同学赶紧补习！）

![](https://img.21ic.com/weixin/2020/7/Irqaqy.jpeg)

平衡二叉树的产生是为了解决二叉排序树在插入时发生线性排列的现象。由于二叉排序树本身为有序，当插入一个有序程度十分高的序列时，生成的二叉排序树会持续在某个方向的字数上插入数据，导致最终的二叉排序树会退化为链表，从而使得二叉树的查询和插入效率恶化。

![](https://img.21ic.com/weixin/2020/7/M3Iziq.jpeg)

平衡二叉树的出现能够解决上述问题，但是在构造平衡二叉树时，却需要采用不同的调整方式，使得二叉树在插入数据后保持平衡。主要的四种调整方式有LL（左旋）、RR（右旋）、LR（先左旋再右旋）、RL（先右旋再左旋）。这里先给大家介绍下简单的单旋转操作，左旋和右旋。LR和RL本质上只是LL和RR的组合。

> 在插入一个结点后应该沿搜索路径将路径上的结点平衡因子进行修改，当平衡因子大于1时，就需要进行平衡化处理。从发生不平衡的结点起，沿刚才回溯的路径取直接下两层的结点，如果这三个结点在一条直线上，则采用**单旋转**进行平衡化，如果这三个结点位于一条折线上，则采用**双旋转**进行平衡化。

左旋：S为当前需要左旋的结点，E为当前结点的父节点。

![](https://img.21ic.com/weixin/2020/7/JjYVNn.jpeg)

左旋的操作可以用一句话简单表示：将当前结点S的左孩子旋转为当前结点父结点E的右孩子，同时将父结点E旋转为当前结点S的左孩子。可用动画表示：

![](https://img.21ic.com/weixin/2020/7/22QbMn.gif)

右旋：S为当前需要左旋的结点，E为当前结点的父节点。右单旋是左单旋的镜像旋转。

![](https://img.21ic.com/weixin/2020/7/fIfuQj.jpeg)

左旋的操作同样可以用一句话简单表示：将当前结点S的左孩子E的右孩子旋转为当前结点S的左孩子，同时将当前结点S旋转为左孩子E的右孩子。可用动画表示：

![](https://img.21ic.com/weixin/2020/7/2uMZf2.gif)

#### 红黑树

平衡二叉树（AVL）为了追求高度平衡，需要通过平衡处理使得左右子树的高度差必须小于等于1。高度平衡带来的好处是能够提供更高的搜索效率，其最坏的查找时间复杂度都是O(logN)。但是由于需要维持这份高度平衡，所付出的代价就是当对树种结点进行插入和删除时，需要经过多次旋转实现复衡。这导致AVL的插入和删除效率并不高。

为了解决这样的问题，能不能找一种结构能够兼顾搜索和插入删除的效率呢？这时候红黑树便申请出战了。

红黑树具有五个特性：

> 1.  每个结点要么是红的要么是黑的。
> 2.  根结点是黑的。
> 3.  每个叶结点（叶结点即指树尾端NIL指针或NULL结点）都是黑的。
> 4.  如果一个结点是红的，那么它的两个儿子都是黑的。
> 5.  对于任意结点而言，其到叶结点树尾端NIL指针的每条路径都包含相同数目的黑结点。

![](https://img.21ic.com/weixin/2020/7/JB3Iz2.jpeg)红黑树通过将结点进行红黑着色，使得原本高度平衡的树结构被稍微打乱，平衡程度降低。红黑树不追求完全平衡，只要求达到部分平衡。这是一种折中的方案，大大提高了结点删除和插入的效率。C++中的STL就常用到红黑树作为底层的数据结构。

#### 红黑树VS平衡二叉树

![](https://img.21ic.com/weixin/2020/7/6rEnue.png)

除了上面所提及的树结构，还有许多广泛应用在数据库、磁盘存储等场景下的树结构。比如B树、B+树等。这里就先不介绍了诶，下次在讲述相关存储原理的时候将会着重介绍。（其实是因为懒）

##  7  堆

了解完二叉树，再来理解堆就不是什么难事了。堆通常是一个可以被看做一棵树的数组对象。堆的具体实现一般不通过指针域，而是通过构建一个一维数组与二叉树的父子结点进行对应，因此堆总是一颗完全二叉树。

对于任意一个父节点的序号n来说（这里n从0算），它的子节点的序号一定是2n+1，2n+2，因此可以直接用数组来表示一个堆。

不仅如此，堆还有一个性质：堆中某个节点的值总是不大于或不小于其父节点的值。将根节点最大的堆叫做最大堆或大根堆，根节点最小的堆叫做最小堆或小根堆。

![](https://img.21ic.com/weixin/2020/7/m6ziIn.jpeg)

堆常用来实现优先队列，在面试中经常考的问题都是与排序有关，比如堆排序、topK问题等。由于堆的根节点是序列中最大或者最小值，因而可以在建堆以及重建堆的过程中，筛选出数据序列中的极值，从而达到排序或者挑选topK值的目的。

##  8  散列表

散列表也叫哈希表，是一种通过键值对直接访问数据的机构。在初中，我们就学过一种能够将一个x值通过一个函数获得对应的一个y值的操作，叫做映射。散列表的实现原理正是映射的原理，通过设定的一个关键字和一个映射函数，就可以直接获得访问数据的地址，实现O(1)的数据访问效率。在映射的过程中，事先设定的函数就是一个映射表，也可以称作散列函数或者哈希函数。

![](https://img.21ic.com/weixin/2020/7/VfuUBn.jpeg)

散列表的实现最关键的就是散列函数的定义和选择。一般常用的有以下几种散列函数：

> **直接寻址法**：取关键字或关键字的某个线性函数值为散列地址。
> 
> **数字分析法**：通过对数据的分析，发现数据中冲突较少的部分，并构造散列地址。例如同学们的学号，通常同一届学生的学号，其中前面的部分差别不太大，所以用后面的部分来构造散列地址。
> 
> **平方取中****法**：当无法确定关键字里哪几位的分布相对比较均匀时，可以先求出关键字的平方值，然后按需要取平方值的中间几位作为散列地址。这是因为：计算平方之后的中间几位和关键字中的每一位都相关，所以不同的关键字会以较高的概率产生不同的散列地址。
> 
> **取随机数法**：使用一个随机函数，取关键字的随机值作为散列地址，这种方式通常用于关键字长度不同的场合。
> 
> **除留取余法**：取关键字被某个不大于散列表的表长 n 的数 m 除后所得的余数 p 为散列地址。这种方式也可以在用过其他方法后再使用。该函数对 m 的选择很重要，一般取素数或者直接用 n。

确定好散列函数之后，通过某个`key`值的确会得到一个唯一的`value`地址。但是却会出现一些特殊情况。即通过不同的`key`值可能会访问到同一个地址，这个现象称之为冲突。

冲突在发生之后，当在对不同的`key`值进行操作时会使得造成相同地址的数据发生覆盖或者丢失，是非常危险的。所以在设计散列表往往还需要采用冲突解决的办法。

常用的冲突处理方式有很多，常用的包括以下几种：

> **开放地址法**（也叫开放寻址法）：实际上就是当需要存储值时，对Key哈希之后，发现这个地址已经有值了，这时该怎么办？不能放在这个地址，不然之前的映射会被覆盖。这时对计算出来的地址进行一个探测再哈希，比如往后移动一个地址，如果没人占用，就用这个地址。如果超过最大长度，则可以对总长度取余。这里移动的地址是产生冲突时的增列序量。
> 
> **再哈希法**：在产生冲突之后，使用关键字的其他部分继续计算地址，如果还是有冲突，则继续使用其他部分再计算地址。这种方式的缺点是时间增加了。
> 
> **链地址法**：链地址法其实就是对Key通过哈希之后落在同一个地址上的值，做一个链表。其实在很多高级语言的实现当中，也是使用这种方式处理冲突的。
> 
> **公共溢出区**：这种方式是建立一个公共溢出区，当地址存在冲突时，把新的地址放在公共溢出区里。

目前比较常用的冲突解决方法是链地址法，一般可以通过数组和链表的结合达到冲突数据缓存的目的。

![](https://img.21ic.com/weixin/2020/7/nENRFv.jpeg)

左侧数组的每个成员包括一个指针，指向一个链表的头。每发生一个冲突的数据，就将该数据作为链表的节点链接到链表尾部。这样一来，就可以保证冲突的数据能够区分并顺利访问。

考虑到链表过长造成的问题，还可以使用红黑树替换链表进行冲突数据的处理操作，来提高散列表的查询稳定性。

##  9  图

图相较于上文的几个结构可能接触的不多，但是在实际的应用场景中却经常出现。比方说交通中的线路图，常见的思维导图都可以看作是图的具体表现形式。

图结构一般包括顶点和边，顶点通常用圆圈来表示，边就是这些圆圈之间的连线。边还可以根据顶点之间的关系设置不同的权重，默认权重相同皆为1。此外根据边的方向性，还可将图分为有向图和无向图。

![](https://img.21ic.com/weixin/2020/7/aIJZbu.jpeg)

图结构用抽象的图线来表示十分简单，顶点和边之间的关系非常清晰明了。但是在具体的代码实现中，为了将各个顶点和边的关系存储下来，却不是一件易事。

#### 邻接矩阵

目前常用的图存储方式为邻接矩阵，通过所有顶点的二维矩阵来存储两个顶点之间是否相连，或者存储两顶点间的边权重。

![](https://img.21ic.com/weixin/2020/7/BnuM73.jpeg)

无向图的邻接矩阵是一个对称矩阵，是因为边不具有方向性，若能从此顶点能够到达彼顶点，那么彼顶点自然也能够达到此顶点。此外，由于顶点本身与本身相连没有意义，所以在邻接矩阵中对角线上皆为0。

![](https://img.21ic.com/weixin/2020/7/Iz6nQ3.jpeg)

有向图由于边具有方向性，因此彼此顶点之间并不能相互达到，所以其邻接矩阵的对称性不再。

用邻接矩阵可以直接从二维关系中获得任意两个顶点的关系，可直接判断是否相连。但是在对矩阵进行存储时，却需要完整的一个二维数组。若图中顶点数过多，会导致二维数组的大小剧增，从而占用大量的内存空间。

而根据实际情况可以分析得，图中的顶点并不是任意两个顶点间都会相连，不是都需要对其边上权重进行存储。那么存储的邻接矩阵实际上会存在大量的0。虽然可以通过稀疏表示等方式对稀疏性高的矩阵进行关键信息的存储，但是却增加了图存储的复杂性。

因此，为了解决上述问题，一种可以只存储相连顶点关系的邻接表应运而生。

#### 邻接表

在邻接表中，图的每一个顶点都是一个链表的头节点，其后连接着该顶点能够直接达到的相邻顶点。相较于无向图，有向图的情况更为复杂，因此这里采用有向图进行实例分析。

![](https://img.21ic.com/weixin/2020/7/JzUrqi.jpeg)在邻接表中，每一个顶点都对应着一条链表，链表中存储的是顶点能够达到的相邻顶点。存储的顺序可以按照顶点的编号顺序进行。比如上图中对于顶点B来说，其通过有向边可以到达顶点A和顶点E，那么其对应的邻接表中的顺序即B->A->E，其它顶点亦如此。

通过邻接表可以获得从某个顶点出发能够到达的顶点，从而省去了对不相连顶点的存储空间。然而，这还不够。对于有向图而言，图中有效信息除了从顶点“指出去”的信息，还包括从别的顶点“指进来”的信息。这里的“指出去”和“指进来”可以用出度和入度来表示。

> 入度：有向图的某个顶点作为终点的次数和。
> 
> 出度：有向图的某个顶点作为起点的次数和。

由此看出，在对有向图进行表示时，邻接表只能求出图的出度，而无法求出入度。这个问题很好解决，那就是增加一个表用来存储能够到达某个顶点的相邻顶点。这个表称作逆邻接表。

#### 逆邻接表

逆邻接表与邻接表结构类似，只不过图的顶点链接着能够到达该顶点的相邻顶点。也就是说，邻接表时顺着图中的箭头寻找相邻顶点，而逆邻接表时逆着图中的箭头寻找相邻顶点。

![](https://img.21ic.com/weixin/2020/7/baeaMf.jpeg)

邻接表和逆邻接表的共同使用下，就能够把一个完整的有向图结构进行表示。可以发现，邻接表和逆邻接表实际上有一部分数据时重合的，因此可以将两个表合二为一，从而得到了所谓的十字链表。

#### 十字链表

十字链表似乎很简单，只需要通过相同的顶点分别链向以该顶点为终点和起点的相邻顶点即可。

![](https://img.21ic.com/weixin/2020/7/EBzYRf.jpeg)

但这并不是最优的表示方式。虽然这样的方式共用了中间的顶点存储空间，但是邻接表和逆邻接表的链表节点中重复出现的顶点并没有得到重复利用，反而是进行了再次存储。因此，上图的表示方式还可以进行进一步优化。

十字链表优化后，可通过扩展的顶点结构和边结构来进行正逆邻接表的存储：（下面的弧头可看作是边的箭头那端，弧尾可看作是边的圆点那端）

> **data**：用于存储该顶点中的数据；
> 
> **firstin指针**：用于连接以当前顶点为弧头的其他顶点构成的链表，即从别的顶点指进来的顶点；
> 
> **firstout指针**：用于连接以当前顶点为弧尾的其他顶点构成的链表，即从该顶点指出去的顶点；

边结构通过存储两个顶点来确定一条边，同时通过分别代表这两个顶点的指针来与相邻顶点进行链接：

> **tailvex**：用于存储作为弧尾的顶点的编号；
> 
> **headvex**：用于存储作为弧头的顶点的编号；
> 
> **headlink** **指针**：用于链接下一个存储作为弧头的顶点的节点；
> 
> **taillink** **指针**：用于链接下一个存储作为弧尾的顶点的节点；

![](https://img.21ic.com/weixin/2020/7/3mEbQz.jpeg)

以上图为例子，对于顶点A而言，其作为起点能够到达顶点E。因此在邻接表中顶点A要通过边`AE`（即边04）指向顶点E，顶点A的`firstout`指针需要指向边04的`tailvex`。同时，从B出发能够到达A，所以在逆邻接表中顶点A要通过边`AB`（即边10）指向B，顶点A的`firstin`指针需要指向边10的弧头，即`headlink`指针。依次类推。

十字链表采用了一种看起来比较繁乱的方式对边的方向性进行了表示，能够在尽可能降低存储空间的情况下增加指针保留顶点之间的方向性。具体的操作可能一时间不好弄懂，建议多看几次上图，弄清指针指向的意义，明白正向和逆向邻接表的表示。

##  10  总结

数据结构博大精深，没有高等数学的讳莫如深，也没有量子力学的玄乎其神，但是其在计算机科学的各个领域都具有强大的力量。本文试图采用图解的方式对九种数据结构进行理论上的介绍，但是其实这都是不够的。

即便是简单的数组、栈、队列等结构，在实际使用以及底层实现上都会有许多优化设计以及使用技巧，这意味着还需要真正把它们灵活的用起来，才能够算是真正意义上的熟悉和精通。但是本文可以作为常见数据结构的一个总结，当你对某些结构有些淡忘的时候，不妨重新回来看看。

 

## [常见数据结构](https://www.cnblogs.com/wanghuaijun/p/7302303.html)

> 数据结构是以某种形式将数据组织在一起的集合，它不仅存储数据，还支持访问和处理数据的操作。算法是为求解一个问题需要遵循的、被清楚指定的简单指令的集合。下面是自己整理的常用数据结构与算法相关内容，如有错误，欢迎指出。

为了便于描述，文中涉及到的代码部分都是用Java语言编写的，其实Java本身对常见的几种数据结构，线性表、栈、队列等都提供了较好的实现，就是我们经常用到的Java集合框架，有需要的可以阅读这篇文章。[Java - 集合框架完全解析](http://www.jianshu.com/p/63e76826e852)

```
一、线性表
  1.数组实现
  2.链表
二、栈与队列
三、树与二叉树
  1.树
  2.二叉树基本概念
  3.二叉查找树
  4.平衡二叉树
  5.红黑树
四、图
五、总结
```

### 一、线性表

线性表是最常用且最简单的一种数据结构，它是n个数据元素的有限序列。

实现线性表的方式一般有两种，一种是使用数组存储线性表的元素，即用一组连续的存储单元依次存储线性表的数据元素。另一种是使用链表存储线性表的元素，即用一组任意的存储单元存储线性表的数据元素（存储单元可以是连续的，也可以是不连续的）。

> ##### 数组实现

数组是一种大小固定的数据结构，对线性表的所有操作都可以通过数组来实现。虽然数组一旦创建之后，它的大小就无法改变了，但是当数组不能再存储线性表中的新元素时，我们可以创建一个新的大的数组来替换当前数组。这样就可以使用数组实现动态的数据结构。

-   代码1 创建一个更大的数组来替换当前数组

```
int[] oldArray = new int[10];

int[] newArray = new int[20];

for (int i = 0; i < oldArray.length; i++) {
    newArray[i] = oldArray[i];
}

// 也可以使用System.arraycopy方法来实现数组间的复制        
// System.arraycopy(oldArray, 0, newArray, 0, oldArray.length);

oldArray = newArray;
```

-   代码2 在数组位置index上添加元素e

```
//oldArray 表示当前存储元素的数组
//size 表示当前元素个数
public void add(int index, int e) {

    if (index > size || index < 0) {
        System.out.println("位置不合法...");
    }

    //如果数组已经满了 就扩容
    if (size >= oldArray.length) {
        // 扩容函数可参考代码1
    }

    for (int i = size - 1; i >= index; i--) {
        oldArray[i + 1] = oldArray[i];
    }

    //将数组elementData从位置index的所有元素往后移一位
    // System.arraycopy(oldArray, index, oldArray, index + 1,size - index);

    oldArray[index] = e;

    size++;
}
```

上面简单写出了数组实现线性表的两个典型函数，具体我们可以参考Java里面的ArrayList集合类的源码。数组实现的线性表优点在于可以通过下标来访问或者修改元素，比较高效，主要缺点在于插入和删除的花费开销较大，比如当在第一个位置前插入一个元素，那么首先要把所有的元素往后移动一个位置。为了提高在任意位置添加或者删除元素的效率，可以采用链式结构来实现线性表。

> ##### 链表

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列节点组成，这些节点不必在内存中相连。每个节点由数据部分Data和链部分Next，Next指向下一个节点，这样当添加或者删除时，只需要改变相关节点的Next的指向，效率很高。

![](https://upload-images.jianshu.io/upload_images/2243690-f3fdc61e316abb2b.png?imageMogr2/auto-orient/strip%7CimageView2/2)

单链表的结构

下面主要用代码来展示链表的一些基本操作，需要注意的是，这里主要是以单链表为例，暂时不考虑双链表和循环链表。

-   代码3 链表的节点

```
class Node<E> {

    E item;
    Node<E> next;

    //构造函数
    Node(E element) {
       this.item = element;
       this.next = null;
   }
}
```

-   代码4 定义好节点后，使用前一般是对头节点和尾节点进行初始化

```
//头节点和尾节点都为空 链表为空
Node<E> head = null;
Node<E> tail = null;
```

-   代码5 空链表创建一个新节点

```
//创建一个新的节点 并让head指向此节点
head = new Node("nodedata1");

//让尾节点也指向此节点
tail = head;
```

-   代码6 链表追加一个节点

```
//创建新节点 同时和最后一个节点连接起来
tail.next = new Node("node1data2");

//尾节点指向新的节点
tail = tail.next;
```

-   代码7 顺序遍历链表

```
Node<String> current = head;
while (current != null) {
    System.out.println(current.item);
    current = current.next;
}
```

-   代码8 倒序遍历链表

```
static void printListRev(Node<String> head) {
//倒序遍历链表主要用了递归的思想
    if (head != null) {
        printListRev(head.next);
        System.out.println(head.item);
    }
}
```

-   代码 单链表反转

```
//单链表反转 主要是逐一改变两个节点间的链接关系来完成
static Node<String> revList(Node<String> head) {

    if (head == null) {
        return null;
    }

    Node<String> nodeResult = null;

    Node<String> nodePre = null;
    Node<String> current = head;

    while (current != null) {

        Node<String> nodeNext = current.next;

        if (nodeNext == null) {
            nodeResult = current;
        }

        current.next = nodePre;
        nodePre = current;
        current = nodeNext;
    }

    return nodeResult;
}
```

上面的几段代码主要展示了链表的几个基本操作，还有很多像获取指定元素，移除元素等操作大家可以自己完成，写这些代码的时候一定要理清节点之间关系，这样才不容易出错。

链表的实现还有其它的方式，常见的有循环单链表，双向链表，循环双向链表。 **循环单链表** 主要是链表的最后一个节点指向第一个节点，整体构成一个链环。 **双向链表** 主要是节点中包含两个指针部分，一个指向前驱元，一个指向后继元，JDK中LinkedList集合类的实现就是双向链表。 **循环双向链表** 是最后一个节点指向第一个节点。

### 二、栈与队列

栈和队列也是比较常见的数据结构，它们是比较特殊的线性表，因为对于栈来说，访问、插入和删除元素只能在栈顶进行，对于队列来说，元素只能从队列尾插入，从队列头访问和删除。

> 栈

栈是限制插入和删除只能在一个位置上进行的表，该位置是表的末端，叫作栈顶，对栈的基本操作有push(进栈)和pop(出栈)，前者相当于插入，后者相当于删除最后一个元素。栈有时又叫作LIFO(Last In First Out)表，即后进先出。

![](https://upload-images.jianshu.io/upload_images/2243690-2e9540a7b4b61cbd.png?imageMogr2/auto-orient/strip%7CimageView2/2)

栈的模型

下面我们看一道经典题目，加深对栈的理解。

![](https://upload-images.jianshu.io/upload_images/2243690-54461e74300fb358.png?imageMogr2/auto-orient/strip%7CimageView2/2)

关于栈的一道经典题目

上图中的答案是C，其中的原理可以好好想一想。

因为栈也是一个表，所以任何实现表的方法都能实现栈。我们打开JDK中的类Stack的源码，可以看到它就是继承类Vector的。当然，Stack是Java2前的容器类，现在我们可以使用LinkedList来进行栈的所有操作。

> 队列

队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。

![](https://upload-images.jianshu.io/upload_images/2243690-3116f05bb106b789.png?imageMogr2/auto-orient/strip%7CimageView2/2)

队列示意图

我们可以使用链表来实现队列，下面代码简单展示了利用LinkedList来实现队列类。

-   代码9 简单实现队列类

```
public class MyQueue<E> {

    private LinkedList<E> list = new LinkedList<>();

    // 入队
    public void enqueue(E e) {
        list.addLast(e);
    }

    // 出队
    public E dequeue() {
        return list.removeFirst();
    }
}
```

普通的队列是一种先进先出的数据结构，而优先队列中，元素都被赋予优先级。当访问元素的时候，具有最高优先级的元素最先被删除。优先队列在生活中的应用还是比较多的，比如医院的急症室为病人赋予优先级，具有最高优先级的病人最先得到治疗。在Java集合框架中，类PriorityQueue就是优先队列的实现类，具体大家可以去阅读源码。

### 三、树与二叉树

树型结构是一类非常重要的非线性数据结构，其中以树和二叉树最为常用。在介绍二叉树之前，我们先简单了解一下树的相关内容。

> 树

**树** 是由n（n>=1）个有限节点组成一个具有层次关系的集合。它具有以下特点：每个节点有零个或多个子节点；没有父节点的节点称为 **根** 节点；每一个非根节点有且只有一个 **父节点** ；除了根节点外，每个子节点可以分为多个不相交的子树。

![](https://upload-images.jianshu.io/upload_images/2243690-e20ffe8f48bfcfbc.png?imageMogr2/auto-orient/strip%7CimageView2/2)

树的结构

> 二叉树基本概念

-   **定义**

二叉树是每个节点最多有两棵子树的树结构。通常子树被称作“左子树”和“右子树”。二叉树常被用于实现二叉查找树和二叉堆。

-   **相关性质**

二叉树的每个结点至多只有2棵子树(不存在度大于2的结点)，二叉树的子树有左右之分，次序不能颠倒。

二叉树的第i层至多有2^(i-1)个结点；深度为k的二叉树至多有2^k-1个结点。

一棵深度为k，且有2^k-1个节点的二叉树称之为 **满二叉树** ；

深度为k，有n个节点的二叉树，当且仅当其每一个节点都与深度为k的满二叉树中，序号为1至n的节点对应时，称之为 **完全二叉树** 。

![](https://upload-images.jianshu.io/upload_images/2243690-531c8fbb6b2b55c4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2)

-   **三种遍历方法**

在二叉树的一些应用中，常常要求在树中查找具有某种特征的节点，或者对树中全部节点进行某种处理，这就涉及到二叉树的遍历。二叉树主要是由3个基本单元组成，根节点、左子树和右子树。如果限定先左后右，那么根据这三个部分遍历的顺序不同，可以分为先序遍历、中序遍历和后续遍历三种。

(1) **先序遍历** 若二叉树为空，则空操作，否则先访问根节点，再先序遍历左子树，最后先序遍历右子树。 (2) **中序遍历** 若二叉树为空，则空操作，否则先中序遍历左子树，再访问根节点，最后中序遍历右子树。(3) **后序遍历** 若二叉树为空，则空操作，否则先后序遍历左子树访问根节点，再后序遍历右子树，最后访问根节点。

![](https://upload-images.jianshu.io/upload_images/2243690-31f7af0f603e84ae.png?imageMogr2/auto-orient/strip%7CimageView2/2)

给定二叉树写出三种遍历结果

-   **树和二叉树的区别**

(1) 二叉树每个节点最多有2个子节点，树则无限制。 (2) 二叉树中节点的子树分为左子树和右子树，即使某节点只有一棵子树，也要指明该子树是左子树还是右子树，即二叉树是有序的。 (3) 树决不能为空，它至少有一个节点，而一棵二叉树可以是空的。

上面我们主要对二叉树的相关概念进行了介绍，下面我们将从二叉查找树开始，介绍二叉树的几种常见类型，同时将之前的理论部分用代码实现出来。

> 二叉查找树

-   **定义**

二叉查找树就是二叉排序树，也叫二叉搜索树。二叉查找树或者是一棵空树，或者是具有下列性质的二叉树： (1) 若左子树不空，则左子树上所有结点的值均小于它的根结点的值；(2) 若右子树不空，则右子树上所有结点的值均大于它的根结点的值；(3) 左、右子树也分别为二叉排序树；(4) 没有键值相等的结点。

![](https://upload-images.jianshu.io/upload_images/2243690-3560f391373e5e61.png?imageMogr2/auto-orient/strip%7CimageView2/2)

典型的二叉查找树的构建过程

-   **性能分析**

对于二叉查找树来说，当给定值相同但顺序不同时，所构建的二叉查找树形态是不同的，下面看一个例子。

![](https://upload-images.jianshu.io/upload_images/2243690-85c04f4b9b730b39.png?imageMogr2/auto-orient/strip%7CimageView2/2)

不同形态平衡二叉树的ASL不同

可以看到，含有n个节点的二叉查找树的平均查找长度和树的形态有关。最坏情况下，当先后插入的关键字有序时，构成的二叉查找树蜕变为单支树，树的深度为n，其平均查找长度(n+1)/2(和顺序查找相同），最好的情况是二叉查找树的形态和折半查找的判定树相同，其平均查找长度和log2(n)成正比。平均情况下，二叉查找树的平均查找长度和logn是等数量级的，所以为了获得更好的性能，通常在二叉查找树的构建过程需要进行“平衡化处理”，之后我们将介绍平衡二叉树和红黑树，这些均可以使查找树的高度为O(log(n))。

-   代码10 二叉树的节点

```
class TreeNode<E> {

    E element;
    TreeNode<E> left;
    TreeNode<E> right;

    public TreeNode(E e) {
        element = e;
    }
}
```

二叉查找树的三种遍历都可以直接用递归的方法来实现：

-   代码12 先序遍历

```
protected void preorder(TreeNode<E> root) {

    if (root == null)
        return;

    System.out.println(root.element + " ");

    preorder(root.left);

    preorder(root.right);
}
```

-   代码13 中序遍历

```
protected void inorder(TreeNode<E> root) {

    if (root == null)
        return;

    inorder(root.left);

    System.out.println(root.element + " ");

    inorder(root.right);
}
```

-   代码14 后序遍历

```
protected void postorder(TreeNode<E> root) {

    if (root == null)
        return;

    postorder(root.left);

    postorder(root.right);

    System.out.println(root.element + " ");
}
```

-   代码15 二叉查找树的简单实现

```
/**
 * @author JackalTsc
 */
public class MyBinSearchTree<E extends Comparable<E>> {

    // 根
    private TreeNode<E> root;

    // 默认构造函数
    public MyBinSearchTree() {
    }

    // 二叉查找树的搜索
    public boolean search(E e) {

        TreeNode<E> current = root;

        while (current != null) {

            if (e.compareTo(current.element) < 0) {
                current = current.left;
            } else if (e.compareTo(current.element) > 0) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }

    // 二叉查找树的插入
    public boolean insert(E e) {

        // 如果之前是空二叉树 插入的元素就作为根节点
        if (root == null) {
            root = createNewNode(e);
        } else {
            // 否则就从根节点开始遍历 直到找到合适的父节点
            TreeNode<E> parent = null;
            TreeNode<E> current = root;
            while (current != null) {
                if (e.compareTo(current.element) < 0) {
                    parent = current;
                    current = current.left;
                } else if (e.compareTo(current.element) > 0) {
                    parent = current;
                    current = current.right;
                } else {
                    return false;
                }
            }
            // 插入
            if (e.compareTo(parent.element) < 0) {
                parent.left = createNewNode(e);
            } else {
                parent.right = createNewNode(e);
            }
        }
        return true;
    }

    // 创建新的节点
    protected TreeNode<E> createNewNode(E e) {
        return new TreeNode(e);
    }

}

// 二叉树的节点
class TreeNode<E extends Comparable<E>> {

    E element;
    TreeNode<E> left;
    TreeNode<E> right;

    public TreeNode(E e) {
        element = e;
    }
}
```

上面的代码15主要展示了一个自己实现的简单的二叉查找树，其中包括了几个常见的操作，当然更多的操作还是需要大家自己去完成。因为在二叉查找树中删除节点的操作比较复杂，所以下面我详细介绍一下这里。

-   **二叉查找树中删除节点分析**

要在二叉查找树中删除一个元素，首先需要定位包含该元素的节点，以及它的父节点。假设current指向二叉查找树中包含该元素的节点，而parent指向current节点的父节点，current节点可能是parent节点的左孩子，也可能是右孩子。这里需要考虑两种情况：

1.  current节点没有左孩子，那么只需要将patent节点和current节点的右孩子相连。
2.  current节点有一个左孩子，假设rightMost指向包含current节点的左子树中最大元素的节点，而parentOfRightMost指向rightMost节点的父节点。那么先使用rightMost节点中的元素值替换current节点中的元素值，将parentOfRightMost节点和rightMost节点的左孩子相连，然后删除rightMost节点。

```
    // 二叉搜索树删除节点
    public boolean delete(E e) {

        TreeNode<E> parent = null;
        TreeNode<E> current = root;

        // 找到要删除的节点的位置
        while (current != null) {
            if (e.compareTo(current.element) < 0) {
                parent = current;
                current = current.left;
            } else if (e.compareTo(current.element) > 0) {
                parent = current;
                current = current.right;
            } else {
                break;
            }
        }

        // 没找到要删除的节点
        if (current == null) {
            return false;
        }

        // 考虑第一种情况
        if (current.left == null) {
            if (parent == null) {
                root = current.right;
            } else {
                if (e.compareTo(parent.element) < 0) {
                    parent.left = current.right;
                } else {
                    parent.right = current.right;
                }
            }
        } else { // 考虑第二种情况
            TreeNode<E> parentOfRightMost = current;
            TreeNode<E> rightMost = current.left;
            // 找到左子树中最大的元素节点
            while (rightMost.right != null) {
                parentOfRightMost = rightMost;
                rightMost = rightMost.right;
            }

            // 替换
            current.element = rightMost.element;

            // parentOfRightMost和rightMost左孩子相连
            if (parentOfRightMost.right == rightMost) {
                parentOfRightMost.right = rightMost.left;
            } else {
                parentOfRightMost.left = rightMost.left;
            }
        }

        return true;
    }
```

> 平衡二叉树

平衡二叉树又称AVL树，它或者是一棵空树，或者是具有下列性质的二叉树：它的左子树和右子树都是平衡二叉树，且左子树和右子树的深度之差的绝对值不超过1。

![](https://upload-images.jianshu.io/upload_images/2243690-6548a5ca5204a219.png?imageMogr2/auto-orient/strip%7CimageView2/2)

平衡二叉树

AVL树是最先发明的自平衡二叉查找树算法。在AVL中任何节点的两个儿子子树的高度最大差别为1，所以它也被称为高度平衡树，n个结点的AVL树最大深度约1.44log2n。查找、插入和删除在平均和最坏情况下都是O（log n）。增加和删除可能需要通过一次或多次树旋转来重新平衡这个树。

> 红黑树

红黑树是平衡二叉树的一种，它保证在最坏情况下基本动态集合操作的事件复杂度为O(log n)。红黑树和平衡二叉树区别如下：(1) 红黑树放弃了追求完全平衡，追求大致平衡，在与平衡二叉树的时间复杂度相差不大的情况下，保证每次插入最多只需要三次旋转就能达到平衡，实现起来也更为简单。(2) 平衡二叉树追求绝对平衡，条件比较苛刻，实现起来比较麻烦，每次插入新节点之后需要旋转的次数不能预知。[点击查看更多](http://baike.baidu.com/link?url=q8PraWsU82NjvCwW1kCnV5SUwNjzNi34cDr6zGa4ZUXBvtbO9pxl-npAH9M_XQEtDYRmjrVj0csP8cAiIvCzYq)

### 四、图

-   **简介**

图是一种较线性表和树更为复杂的数据结构，在线性表中，数据元素之间仅有线性关系，在树形结构中，数据元素之间有着明显的层次关系，而在图形结构中，节点之间的关系可以是任意的，图中任意两个数据元素之间都可能相关。图的应用相当广泛，特别是近年来的迅速发展，已经渗入到诸如语言学、逻辑学、物理、化学、电讯工程、计算机科学以及数学的其他分支中。

-   **相关阅读**

因为图这部分的内容还是比较多的，这里就不详细介绍了，有需要的可以自己搜索相关资料。

(1) [《百度百科对图的介绍》](http://baike.baidu.com/subview/143347/12514144.htm#viewPageContent)  
(2) [《数据结构之图（存储结构、遍历）》](http://blog.chinaunix.net/uid-26548237-id-3483650.html)

### 五、总结

到这里，关于常见的数据结构的整理就结束了，断断续续大概花了两天时间写完，在总结的过程中，通过查阅相关资料，结合书本内容，收获还是很大的，在下一篇博客中将会介绍常用数据结构与算法整理总结（下）之算法篇，欢迎大家关注。

作者：尘语凡心  
链接：http://www.jianshu.com/p/230e6fde9c75  
來源：简书  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 数据结构：八大数据结构分类

 

## 数据结构分类

数据结构是指相互之间存在着一种或多种关系的数据元素的集合和该集合中数据元素之间的关系组成 。  
常用的数据结构有：数组，栈，链表，队列，树，图，堆，散列表等，如图所示：  
![这里写图片描述](https://img-blog.csdn.net/20180903194901687?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
每一种数据结构都有着独特的数据存储方式，下面为大家介绍它们的结构和优缺点。

## 1、数组

数组是可以再内存中连续存储多个元素的结构，在内存中的分配也是连续的，数组中的元素通过数组下标进行访问，数组下标从0开始。例如下面这段代码就是将数组的第一个元素赋值为 1。

```
int[] data = new int[100]；data[0]  = 1;
```

-   1
-   2

优点：  
1、按照索引查询元素速度快  
2、按照索引遍历数组方便

缺点：  
1、数组的大小固定后就无法扩容了  
2、数组只能存储一种类型的数据  
3、添加，删除的操作慢，因为要移动其他的元素。

适用场景：  
频繁查询，对存储空间要求不大，很少增加和删除的情况。

## 2、栈

栈是一种特殊的线性表，仅能在线性表的一端操作，栈顶允许操作，栈底不允许操作。 栈的特点是：先进后出，或者说是后进先出，从栈顶放入元素的操作叫入栈，取出元素叫出栈。  
![这里写图片描述](https://img-blog.csdn.net/20180903195046375?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
栈的结构就像一个集装箱，越先放进去的东西越晚才能拿出来，所以，栈常应用于实现递归功能方面的场景，例如斐波那契数列。

## 3、队列

队列与栈一样，也是一种线性表，不同的是，队列可以在一端添加元素，在另一端取出元素，也就是：先进先出。从一端放入元素的操作称为入队，取出元素为出队，示例图如下：  
![这里写图片描述](https://img-blog.csdn.net/20180903195109249?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
使用场景：因为队列先进先出的特点，在多线程阻塞队列管理中非常适用。

## 4、链表

链表是物理存储单元上非连续的、非顺序的存储结构，数据元素的逻辑顺序是通过链表的指针地址实现，每个元素包含两个结点，一个是存储元素的数据域 (内存空间)，另一个是指向下一个结点地址的指针域。根据指针的指向，链表能形成不同的结构，例如单链表，双向链表，循环链表等。  
![这里写图片描述](https://img-blog.csdn.net/20180903195132172?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
链表的优点：  
链表是很常用的一种数据结构，不需要初始化容量，可以任意加减元素；  
添加或者删除元素时只需要改变前后两个元素结点的指针域指向地址即可，所以添加，删除很快；

缺点：  
因为含有大量的指针域，占用空间较大；  
查找元素需要遍历链表来查找，非常耗时。

适用场景：  
数据量较小，需要频繁增加，删除操作的场景

## 5、树

树是一种数据结构，它是由n（n>=1）个有限节点组成一个具有层次关系的集合。把它叫做 “树” 是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。它具有以下的特点：

-   每个节点有零个或多个子节点；
-   没有父节点的节点称为根节点；
-   每一个非根节点有且只有一个父节点；
-   除了根节点外，每个子节点可以分为多个不相交的子树；

在日常的应用中，我们讨论和用的更多的是树的其中一种结构，就是二叉树。  
![这里写图片描述](https://img-blog.csdn.net/20180903195345210?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
二叉树是树的特殊一种，具有如下特点：

1、每个结点最多有两颗子树，结点的度最大为2。  
2、左子树和右子树是有顺序的，次序不能颠倒。  
3、即使某结点只有一个子树，也要区分左右子树。

二叉树是一种比较有用的折中方案，它添加，删除元素都很快，并且在查找方面也有很多的算法优化，所以，二叉树既有链表的好处，也有数组的好处，是两者的优化方案，在处理大批量的动态数据方面非常有用。

扩展：  
二叉树有很多扩展的数据结构，包括平衡二叉树、红黑树、B+树等，这些数据结构二叉树的基础上衍生了很多的功能，在实际应用中广泛用到，例如mysql的数据库索引结构用的就是B+树，还有HashMap的底层源码中用到了红黑树。这些二叉树的功能强大，但算法上比较复杂，想学习的话还是需要花时间去深入的。

## 6、散列表

散列表，也叫哈希表，是根据关键码和值 (key和value) 直接进行访问的数据结构，通过key和value来映射到集合中的一个位置，这样就可以很快找到集合中的对应元素。

记录的存储位置=f(key)

这里的对应关系 f 成为散列函数，又称为哈希 (hash函数)，而散列表就是把Key通过一个固定的算法函数既所谓的哈希函数转换成一个整型数字，然后就将该数字对数组长度进行取余，取余结果就当作数组的下标，将value存储在以该数字为下标的数组空间里，这种存储空间可以充分利用数组的查找优势来查找元素，所以查找的速度很快。

哈希表在应用中也是比较常见的，就如Java中有些集合类就是借鉴了哈希原理构造的，例如HashMap，HashTable等，利用hash表的优势，对于集合的查找元素时非常方便的，然而，因为哈希表是基于数组衍生的数据结构，在添加删除元素方面是比较慢的，所以很多时候需要用到一种数组链表来做，也就是拉链法。拉链法是数组结合链表的一种结构，较早前的hashMap底层的存储就是采用这种结构，直到jdk1.8之后才换成了数组加红黑树的结构，其示例图如下：  
![这里写图片描述](https://img-blog.csdn.net/20180903195448444?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
从图中可以看出，左边很明显是个数组，数组的每个成员包括一个指针，指向一个链表的头，当然这个链表可能为空，也可能元素很多。我们根据元素的一些特征把元素分配到不同的链表中去，也是根据这些特征，找到正确的链表，再从链表中找出这个元素。

哈希表的应用场景很多，当然也有很多问题要考虑，比如哈希冲突的问题，如果处理的不好会浪费大量的时间，导致应用崩溃。

## 7、堆

堆是一种比较特殊的数据结构，可以被看做一棵树的数组对象，具有以下的性质：

-   堆中某个节点的值总是不大于或不小于其父节点的值；
    
-   堆总是一棵完全二叉树。
    

将根节点最大的堆叫做最大堆或大根堆，根节点最小的堆叫做最小堆或小根堆。常见的堆有二叉堆、斐波那契堆等。

堆的定义如下：n个元素的序列{k1,k2,ki,…,kn}当且仅当满足下关系时，称之为堆。  
(ki <= k2i,ki <= k2i+1)或者(ki >= k2i,ki >= k2i+1), (i = 1,2,3,4…n/2)，满足前者的表达式的成为小顶堆，满足后者表达式的为大顶堆，这两者的结构图可以用完全二叉树排列出来，示例图如下：  
![这里写图片描述](https://img-blog.csdn.net/20180903195606329?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
因为堆有序的特点，一般用来做数组中的排序，称为堆排序。

## 8、图

图是由结点的有穷集合V和边的集合E组成。其中，为了与树形结构加以区别，在图结构中常常将结点称为顶点，边是顶点的有序偶对，若两个顶点之间存在一条边，就表示这两个顶点具有相邻关系。

按照顶点指向的方向可分为无向图和有向图：  
![这里写图片描述](https://img-blog.csdn.net/20180903195634209?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
![这里写图片描述](https://img-blog.csdn.net/2018090319564837?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
图是一种比较复杂的数据结构，在存储数据上有着比较复杂和高效的算法，分别有邻接矩阵 、邻接表、十字链表、邻接多重表、边集数组等存储结构，这里不做展开，读者有兴趣可以自己学习深入。

## [图解Java常用数据结构](https://www.cnblogs.com/xdecode/p/9321848.html)

最近在整理数据结构方面的知识, 系统化看了下Java中常用数据结构, 突发奇想用动画来绘制数据流转过程.

主要基于jdk8, 可能会有些特性与jdk7之前不相同, 例如LinkedList LinkedHashMap中的双向列表不再是回环的.

HashMap中的单链表是尾插, 而不是头插入等等, 后文不再赘叙这些差异, 本文目录结构如下:

 ![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717140301329-1795204354.png)

### LinkedList

经典的双链表结构, 适用于乱序插入, 删除. 指定序列操作则性能不如ArrayList, 这也是其数据结构决定的.

**add(E) / addLast(E)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717133746276-313211308.gif)

**add(index, E)**

这边有个小的优化, 他会先判断index是靠近队头还是队尾, 来确定从哪个方向遍历链入.

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
 1         if (index < (size >> 1)) {
 2             Node<E> x = first;
 3             for (int i = 0; i < index; i++)
 4                 x = x.next;
 5             return x;
 6         } else {
 7             Node<E> x = last;
 8             for (int i = size - 1; i > index; i--)
 9                 x = x.prev;
10             return x;
11         }
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134043714-1008528320.gif)

**靠队尾**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134100309-1487165805.gif)

**get(index)**

也是会先判断index, 不过性能依然不好, 这也是为什么不推荐用for(int i = 0; i < lengh; i++)的方式遍历linkedlist, 而是使用iterator的方式遍历.

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134201828-1536755274.gif)

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134212062-1192617618.gif)

**remove(E)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134240000-783801823.gif)

### ArrayList

底层就是一个数组, 因此按序查找快, 乱序插入, 删除因为涉及到后面元素移位所以性能慢.

**add(index, E)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134402495-1450834113.gif)

**扩容**

一般默认容量是10, 扩容后, 会length\*1.5.

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180718113204058-1401567917.gif)

**remove(E)**

循环遍历数组, 判断E是否equals当前元素, 删除性能不如LinkedList.

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134440963-1609104909.gif)

### Stack

经典的数据结构, 底层也是数组, 继承自Vector, 先进后出FILO, 默认new Stack()容量为10, 超出自动扩容.

**push(E)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134532106-566548837.gif)

**pop()**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134546142-1425174736.gif)

### 后缀表达式

Stack的一个典型应用就是计算表达式如 9 + (3 - 1) \* 3 + 10 / 2, 计算机将中缀表达式转为后缀表达式, 再对后缀表达式进行计算.

**中缀转后缀**

-   数字直接输出
-   栈为空时，遇到运算符，直接入栈
-   遇到左括号, 将其入栈
-   遇到右括号, 执行出栈操作，并将出栈的元素输出，直到弹出栈的是左括号，左括号不输出。
-   遇到运算符(加减乘除)：弹出所有优先级大于或者等于该运算符的栈顶元素，然后将该运算符入栈
-   最终将栈中的元素依次出栈，输出。

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134649235-361366195.gif)

**计算后缀表达**

-   遇到数字时，将数字压入堆栈
-   遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算, 并将结果入栈
-   重复上述过程直到表达式最右端
-   运算得出的值即为表达式的结果

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134706912-413651296.gif)

### 队列

与Stack的区别在于, Stack的删除与添加都在队尾进行, 而Queue删除在队头, 添加在队尾.

**ArrayBlockingQueue**

生产消费者中常用的阻塞有界队列, FIFO.

**put(E)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134917471-223068187.gif)

**put(E) 队列满了**

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
1         final ReentrantLock lock = this.lock;
2         lock.lockInterruptibly();
3         try {
4             while (count == items.length)
5                 notFull.await();
6             enqueue(e);
7         } finally {
8             lock.unlock();
9         }
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134930548-1581371083.gif)

**take()**

当元素被取出后, 并没有对数组后面的元素位移, 而是更新takeIndex来指向下一个元素.

takeIndex是一个环形的增长, 当移动到队列尾部时, 会指向0, 再次循环.

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
 1     private E dequeue() {
 2         // assert lock.getHoldCount() == 1;
 3         // assert items[takeIndex] != null;
 4         final Object[] items = this.items;
 5         @SuppressWarnings("unchecked")
 6         E x = (E) items[takeIndex];
 7         items[takeIndex] = null;
 8         if (++takeIndex == items.length)
 9             takeIndex = 0;
10         count--;
11         if (itrs != null)
12             itrs.elementDequeued();
13         notFull.signal();
14         return x;
15     }
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717134947090-1857674903.gif)

### HashMap

最常用的哈希表, 面试的童鞋必备知识了, 内部通过数组 + 单链表的方式实现. jdk8中引入了红黑树对长度 > 8的链表进行优化, 我们另外篇幅再讲.

**put(K, V****)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717135210703-312944088.gif)

**put(K, V) 相同hash值**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717135235292-826682325.gif)

**resize 动态扩容**

当map中元素超出设定的阈值后, 会进行resize (length \* 2)操作, 扩容过程中对元素一通操作, 并放置到新的位置.

具体操作如下:

-   在jdk7中对所有元素直接rehash, 并放到新的位置.
-   在jdk8中判断元素原hash值新增的bit位是0还是1, 0则索引不变, 1则索引变成"原索引 + oldTable.length".

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

```
 1     //定义两条链
 2     //原来的hash值新增的bit为0的链，头部和尾部
 3     Node<K,V> loHead = null, loTail = null;
 4     //原来的hash值新增的bit为1的链，头部和尾部
 5     Node<K,V> hiHead = null, hiTail = null;
 6     Node<K,V> next;
 7     //循环遍历出链条链
 8     do {
 9         next = e.next;
10         if ((e.hash & oldCap) == 0) {
11             if (loTail == null)
12                 loHead = e;
13             else
14                 loTail.next = e;
15             loTail = e;
16         }
17         else {
18             if (hiTail == null)
19                 hiHead = e;
20             else
21                 hiTail.next = e;
22             hiTail = e;
23         }
24     } while ((e = next) != null);
25     //扩容前后位置不变的链
26     if (loTail != null) {
27         loTail.next = null;
28         newTab[j] = loHead;
29     }
30     //扩容后位置加上原数组长度的链
31     if (hiTail != null) {
32         hiTail.next = null;
33         newTab[j + oldCap] = hiHead;
34     }
```

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![复制代码](https://common.cnblogs.com/images/copycode.gif)

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717135330300-1394283875.gif)

### LinkedHashMap

继承自HashMap, 底层额外维护了一个双向链表来维持数据有序. 可以通过设置accessOrder来实现FIFO(插入有序)或者LRU(访问有序)缓存.

**put(K, V)**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717135428093-1692938646.gif)

**get(K)**

accessOrder为false的时候, 直接返回元素就行了, 不需要调整位置. 

accessOrder为true的时候, 需要将最近访问的元素, 放置到队尾.

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717135449262-926868516.gif)

**removeEldestEntry 删除最老的元素**

![](https://images2018.cnblogs.com/blog/1285727/201807/1285727-20180717135601748-1338089287.gif)
