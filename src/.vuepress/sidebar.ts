import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "一些有趣的页面",
  //     icon: "face-grin-squint",
  //     prefix: "docs/",
  //     link: "docs/",
  //     children: "structure",
  //   },
  //   {
  //     text: "学习笔记",
  //     icon: "book",
  //     // 可选，分组路径前缀
  //     prefix: "posts/",
  //     // 可选，默认为 false
  //     collapsible: true,
  //     // 可选，表达分可折叠侧边栏组的原始状态，默认为 false
  //     expanded: true,
  //     // 必填，分组链接列表
  //     children: "structure",
  //   },
  //   "intro",
  //   {
  //     text: "幻灯片",
  //     icon: "person-chalkboard",
  //     link: "powerpoint",
  //   },
  // ],

  "/docs/": "structure",
  "/posts/": [
    {
      text: "前端相关",
      icon: "laptop-code",
      prefix: "front-end/",
      collapsible: false,
      expanded: true,
      children: "structure",
    },
        {
      text: "后端相关",
      icon: "server",
      prefix: "server-end/",
      children: "structure",
    },
        {
      text: "其他",
      icon: "bookmark",
      prefix: "other/",
      children: "structure",
    },
  ],
  "/posts/front-end/": "structure",
  "/posts/server-end/": "structure",
  "/posts/other/": "structure",
});
