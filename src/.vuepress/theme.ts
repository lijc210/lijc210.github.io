import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://blog.cizai.io",

  author: {
    name: "cizai",
    url: "https://blog.cizai.io",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "lijc210/lijc210",

  docsDir: "src",

  blog: {
    articleInfo: ["Date", "PageView", "Category", "Tag", "Word", "ReadingTime"],
    name: "cizai",
    avatar: "/logo.png",
    description: "热爱编程和开源，记录有趣的事物，分析探索成果",
    intro: "/关于本站.html",
    roundAvatar: true,
    medias: {
      Zhihu: "https://zhihu.com",
      GitHub: "https://github.com",
      Gitee: "https://gitee.com",
      Gitlab: "https://gitlab.com",
      Douban: "https://douban.com",
      // MrHope: ["https://mrhope.site", MR_HOPE_AVATAR],
      Email: "mailto:lijc210@163.com",
      Rss: "/rss.xml",
    },
  },

  locales: {


    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个全栈开发者，从事大数据开发。",
        intro: "/关于本站.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    docsearch: {
      placeholder: "搜索文档",
      indexName: "lijc210io",
      appId: "VRC2EFYQHL",
      apiKey: "612df0cace8ba187b6dca0f2e23d7b83",
    },

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    comment: {
      provider: "Waline",
      // serverURL: "https://waline-536c1pw9e-lijc210-gmailcom.vercel.app/",
      serverURL: "https://zeabur.cizai.io/",
      // reaction: [
      //   "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44d.png",
      //   "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44f.png",
      //   "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f60e.png",
      //   "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f602.png",
      //   "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f635-200d-1f4ab.png",
      // ],
      // 部署 Waline：https://waline.js.org/guide/get-started.html
      pageview: true, // 浏览量统计
      locales: {
        "/": {
          // 表情互动提示文字
          reactionTitle: "已到达文章底部，欢迎留言、表情互动~",
          reaction0: "赞一个",
          reaction1: "支持下",
          reaction2: "有点酷",
          reaction3: "啥玩意",
          reaction4: "看不懂",
          // Waline 等级标签
          admin: "盛年不重来，一日难再晨",
          level0: "锻体",
          level1: "炼气",
          level2: "筑基",
          level3: "金丹",
          level4: "元婴",
          level5: "化神",
        },
      },

      // Giscus 备用配置
      /*
      provider: "Giscus",
      repo: "rockbenben/LearnData",
      repoId: "R_kgDOHdfk6Q",
      category: "Comments",
      categoryId: "DIC_kwDOHdfk6c4CQYNn",
      */
    },
    components: {
      components: ["Badge", "VPCard"],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

        // rss 属性
    feed: {
      atom: true,
      json: true,
      rss: true,
      count: 10,
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      // update: "disable",
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
