import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as l}from"./app-5f8b0bfc.js";const s={},a=l(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h1><h2 id="jquery两次点击实现不同的效果" tabindex="-1"><a class="header-anchor" href="#jquery两次点击实现不同的效果" aria-hidden="true">#</a> jquery两次点击实现不同的效果</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(document).ready(function(){
    $(function () {
         flag=0;
        $(&#39;#sub1a&#39;).click(function() {
            if (flag==0){
                 console.log(flag)
                $(this).children().attr(&#39;class&#39;,&#39;glyphicon glyphicon-plus&#39;)
                flag=1;
            }else{
                 console.log(flag)
                $(this).children().attr(&#39;class&#39;,&#39;glyphicon glyphicon-minus&#39;)
                flag=0;
            }
        });
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[a];function c(r,t){return n(),i("div",null,d)}const o=e(s,[["render",c],["__file","html.html.vue"]]);export{o as default};
