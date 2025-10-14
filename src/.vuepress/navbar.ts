import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
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
          { text: "OpenList", icon: "pen-to-square", link: "openlist" },
          { text: "OpenList Desktop", icon: "pen-to-square", link: "openlist-desktop" },
          { text: "计算机组成原理", icon: "pen-to-square", link: "maybe" },
          "tomato",
          "strawberry",
        ],
      },
    ],
  },
  "/demo/",
  {
    text: "娱乐一下",
    icon: "gamepad",
    link: "https://www.bilibili.com/",
  },
]);
