import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e}from"./app-8bbd0aa2.js";const l={},d=e(`<h1 id="rocksdb" tabindex="-1"><a class="header-anchor" href="#rocksdb" aria-hidden="true">#</a> rocksdb</h1><h2 id="rocksdb编译安装" tabindex="-1"><a class="header-anchor" href="#rocksdb编译安装" aria-hidden="true">#</a> rocksdb编译安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install gflags
yum install snappy snappy-devel
yum install zlib zlib-devel
yum install bzip2 bzip2-devel
yum install lz4-devel
yum install libasan


wget https://github.com/facebook/zstd/archive/v1.1.3.tar.gz
mv v1.1.3.tar.gz zstd-1.1.3.tar.gz
tar zxvf zstd-1.1.3.tar.gz
cd zstd-1.1.3
make &amp;&amp; make install


// 1，解压rocksDB
tar -zxvf rocksdb-6.4.6.tar.gz
// 2 进入解压后的目录
cd rocksdb-6.4.6
/// 3，编译静态库，获得 librocksdb.a
make static_lib
// 4，编译动态库，获得 lbrocksdb.so
make shared_lib


// 1
cp librocksdb.so.6.4.6 /usr/local/lib
// 2
ln -s librocksdb.so.6.4.6 /usr/local/lib/librocksdb.so.6
// 3
ln -s librocksdb.so.6.4.6 /usr/local/lib/librocksdb.so

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib

我们最好在环境变量中添加:export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function r(c,v){return s(),n("div",null,a)}const t=i(l,[["render",r],["__file","rocksdb.html.vue"]]);export{t as default};
