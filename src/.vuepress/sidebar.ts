import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "一些有趣的页面",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "代码笔记",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "powerpoint",
    // },
  ],
});
