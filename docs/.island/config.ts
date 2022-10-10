import { defineConfig } from "islandjs";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const theme = require("shiki/themes/nord.json"); // any theme from shiki

function getI18nHelper(lang: "zh" | "en") {
  const cn = lang === "zh";
  const prefix = cn ? "/zh" : "/en";
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (cnText: string, enText: string) => (cn ? cnText : enText);
  return { getText, getLink };
}

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [remarkCodeHike, { theme, autoImport: true, showCopyButton: true }],
    ],
  },
  title: "Island.js 教程",
  themeConfig: {
    outline: false,
    locales: {
      "/": {
        nav: getNavbar("zh"),
        sidebar: getSidebar(),
      },
    },
  },
  enableSpa: true,
  route: {
    exclude: ["compoents/**/*"],
  },
});

function getNavbar(lang: "zh" | "en") {
  const { getLink, getText } = getI18nHelper(lang);

  return [
    {
      text: getText("指南", "Guide"),
      link: "https://island.sanyuan0704.top/zh/guide/getting-started",
    },
    {
      text: getText("交互式教程", "Tutorial"),
      link: "/",
    },
    {
      text: getText("API", "API"),
      link: "https://island.sanyuan0704.top/zh/api/",
    },
  ];
}

function getSidebar() {
  return {
    "/guide/": [
      {
        text: "文档站搭建",
        items: [
          {
            text: "初始化项目",
            link: "/",
          },
          {
            text: "导航栏/侧边栏配置",
            link: "/config-bar",
          },
          {
            text: "编写 Markdown 内容",
            link: "/markdown",
          },
          {
            text: "项目构建打包",
            link: "/build",
          },
          {
            text: "接入国际化",
            link: "/i18n",
          },
          {
            text: "项目部署",
            link: "/deploy",
          },
        ],
      },
      {
        text: "高级应用",
        items: [
          {
            text: "自定义主题",
            link: "/custom-theme",
          },
          {
            text: "交互式文档开发",
            link: "/code-hike",
          },
        ],
      },
    ],
  };
}
