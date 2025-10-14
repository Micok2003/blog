import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "代码笔记",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "front-end/",
        children: [
          { text: "HTML", icon: "pen-to-square", link: "1" },
          { text: "CSS", icon: "pen-to-square", link: "2" },
          { text: "JavaScript", icon: "pen-to-square", link: "3" },
          { text: "前端框架", icon: "pen-to-square", link: "4" },
        ],
      },
      {
        text: "后端",
        icon: "pen-to-square",
        prefix: "server-end/",
        children: [
          {
            text: "基础知识",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Node.js",
            icon: "pen-to-square",
            link: "2",
          },
          {
            text: "后端框架",
            icon: "pen-to-square",
            link: "3",
          },
          {
            text: "数据库",
            icon: "pen-to-square",
            link: "4",
          },
          {
            text: "Linux系统",
            icon: "pen-to-square",
            link: "5",
          },
        ],
      },
      {
        text: "其他",
        icon: "pen-to-square",
        prefix: "other/",
        children: [
          { text: "Python", icon: "pen-to-square", link: "python" },
          { text: "数据结构", icon: "pen-to-square", link: "dragonfruit" },
          { text: "操作系统", icon: "pen-to-square", link: "egg" },
          { text: "计算机组成原理", icon: "pen-to-square", link: "maybe" },
          "tomato",
          "strawberry",
        ],
      },
    ],
  },
  {
    text: "娱乐一下",
    icon: "gamepad",
    link: "https://www.bilibili.com/",
  },
]);
