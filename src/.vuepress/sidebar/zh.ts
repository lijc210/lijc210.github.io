import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
"/": [
    "",
    {
      text: "编程",
      icon: "fa-solid fa-code",
      prefix: "编程/",
      link: "编程/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "大数据",
      icon: "fa-solid fa-database",
      prefix: "大数据/",
      link: "大数据/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "系统",
      icon: "fa-brands fa-apple",
      prefix: "系统/",
      link: "系统/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "生活",
      icon: "fa-solid fa-mug-hot",
      prefix: "生活/",
      link: "生活/",
      collapsible: true,
      children: "structure",
    },
    "关于本站",
    "站点收藏",
  ],
});
