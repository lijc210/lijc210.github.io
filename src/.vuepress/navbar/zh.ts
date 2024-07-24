import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
  {
    text: "编程",
    icon: "fa-solid fa-code",
    prefix: "/编程/",
    children: [
      { text: "语言", icon: "edit", link: "语言/" },
      { text: "工具", icon: "edit", link: "工具/" },
      { text: "框架", icon: "edit", link: "框架/" },
      { text: "算法", icon: "edit", link: "算法/" },
      { text: "结构", icon: "edit", link: "结构/" },
      { text: "资源", icon: "edit", link: "资源/" },
    ],
  },
  {
    text: "大数据",
    icon: "fa-solid fa-database",
    prefix: "/大数据/",
    children: [
      { text: "数据库", icon: "edit", link: "数据库/" },
      { text: "组件", icon: "edit", link: "组件/" },
    ],
  },
  {
    text: "系统",
    icon: "fa-brands fa-apple",
    prefix: "/系统/",
    children: [
      { text: "android", icon: "edit", link: "android/" },
      { text: "darwin", icon: "edit", link: "darwin/" },
      { text: "ios", icon: "edit", link: "ios/" },
      { text: "linux", icon: "edit", link: "linux/" },
      { text: "windows", icon: "edit", link: "windows/", },
    ],
  },
  {
    text: "生活",
    icon: "fa-solid fa-mug-hot",
    prefix: "/生活/",
    children: [
      { text: "句子", icon: "edit", link: "句子/" },
      { text: "文章", icon: "edit", link: "文章/" },
      { text: "哲学", icon: "edit", link: "哲学/" },
    ],
  },
  {
    text: "此在新闻",
    icon: "fa-solid fa-newspaper",
    link: "https://news.cizai.io/"
  },
  {
    text: "每日悦读",
    icon: "fa-solid fa-book",
    link: "https://nas.cizai.net/miniflux/"
  },
  {
    text: "Contact",
    icon: "fa-solid fa-edit",
    prefix: "/Contact/",
    children: [
      // { text: "微信", icon: "wechat", link: "https://theme-hope.vuejs.press/" },
      { text: "Email", icon: "fa-solid fa-envelope", link: "mailto:lijc210@163.com" },
      { text: "RSS", icon: "fa-solid fa-rss", link: "https://blog.cizai.io/rss.xml" }
    ],
  }
]);
