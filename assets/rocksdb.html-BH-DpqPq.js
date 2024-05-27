import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,d as l}from"./app-DzFNIPv7.js";const s={},t=l(`<h1 id="rocksdb" tabindex="-1"><a class="header-anchor" href="#rocksdb"><span>rocksdb</span></a></h1><h2 id="rocksdb编译安装" tabindex="-1"><a class="header-anchor" href="#rocksdb编译安装"><span>rocksdb编译安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install gflags
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[t];function r(d,c){return n(),i("div",null,a)}const m=e(s,[["render",r],["__file","rocksdb.html.vue"]]),v=JSON.parse('{"path":"/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E5%BA%93/rocksdb.html","title":"rocksdb","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["数据库"],"tag":["rocksdb"],"description":"rocksdb rocksdb编译安装","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E5%BA%93/rocksdb.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"rocksdb"}],["meta",{"property":"og:description","content":"rocksdb rocksdb编译安装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T17:45:45.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"rocksdb"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T17:45:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rocksdb\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T17:45:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"rocksdb编译安装","slug":"rocksdb编译安装","link":"#rocksdb编译安装","children":[]}],"git":{"createdTime":1710697545000,"updatedTime":1710697545000,"contributors":[{"name":"sampan","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"大数据/数据库/rocksdb.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>rocksdb编译安装</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>yum install gflags\\nyum install snappy snappy-devel\\nyum install zlib zlib-devel\\nyum install bzip2 bzip2-devel\\nyum install lz4-devel\\nyum install libasan\\n\\n\\nwget https://github.com/facebook/zstd/archive/v1.1.3.tar.gz\\nmv v1.1.3.tar.gz zstd-1.1.3.tar.gz\\ntar zxvf zstd-1.1.3.tar.gz\\ncd zstd-1.1.3\\nmake &amp;&amp; make install\\n\\n\\n// 1，解压rocksDB\\ntar -zxvf rocksdb-6.4.6.tar.gz\\n// 2 进入解压后的目录\\ncd rocksdb-6.4.6\\n/// 3，编译静态库，获得 librocksdb.a\\nmake static_lib\\n// 4，编译动态库，获得 lbrocksdb.so\\nmake shared_lib\\n\\n\\n// 1\\ncp librocksdb.so.6.4.6 /usr/local/lib\\n// 2\\nln -s librocksdb.so.6.4.6 /usr/local/lib/librocksdb.so.6\\n// 3\\nln -s librocksdb.so.6.4.6 /usr/local/lib/librocksdb.so\\n\\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\\n\\n我们最好在环境变量中添加:export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};
