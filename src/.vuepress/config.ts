import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "此在笔记",
      description: "开源工具、效率方法、心理学探索的自我提升笔记 ，记录并输出一切能让自己提升的知识。",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,
  
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  // Enable it with pwa
  // shouldPrefetch: false,
  shouldPrefetch: false,

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: [
    "**/*.md",
    "!_temp",
    "!reading",
    "!.vuepress",
    "!node_modules",
    "!个人",
    "!工作",
    "!zh",
    "!en",
  ],

    bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          '/api': {
            target: 'https://zeabur.cizai.io',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '/api'),
          },
        },
      },
    },
    vuePluginOptions: {},
  }),


});


