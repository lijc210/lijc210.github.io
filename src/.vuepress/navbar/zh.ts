import { navbar } from "vuepress-theme-hope";

function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

let sdate = dateFormat("YYYY-mm-dd", new Date())

export const zhNavbar = navbar([
    "/",
  {
    text: "编程",
    icon: "code",
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
    icon: "storage",
    prefix: "/大数据/",
    children: [
      { text: "数据库", icon: "edit", link: "数据库/" },
      { text: "组件", icon: "edit", link: "组件/" },
    ],
  },
  {
    text: "系统",
    icon: "OS",
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
    icon: "people",
    prefix: "/生活/",
    children: [
      { text: "句子", icon: "edit", link: "句子/" },
      { text: "文章", icon: "edit", link: "文章/" },
      { text: "哲学", icon: "edit", link: "哲学/" },
    ],
  },
  {
    text: "每日悦读",
    icon: "read",
    link: "/每日悦读/"
  },
  {
    text: "Contact",
    icon: "edit",
    prefix: "/Contact/",
    children: [
      // { text: "微信", icon: "wechat", link: "https://theme-hope.vuejs.press/" },
      { text: "Email", icon: "alias", link: "mailto:lijc210@163.com" },
      { text: "RSS", icon: "rss", link: "https://blog.cizai.io/rss.xml" }
    ],
  }
]);
