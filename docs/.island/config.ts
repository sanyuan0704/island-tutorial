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
    locales: {
      "/zh/": {
        label: "简体中文",
        nav: getNavbar("zh"),
        sidebar: getSidebar('zh'),
        title: "Island.js 教程",
        lang: "zh",
      },
      "/en/": {
        label: "English",
        nav: getNavbar("en"),
        sidebar: getSidebar('en'),
        title: "Island.js Tutorial",
        lang: "en",
      }
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sanyuan0704/island-tutorial",
      },
    ],
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
      link: `https://island.sanyuan0704.top/${lang}/guide/getting-started`,
    },
    {
      text: getText("教程", "Tutorial"),
      link: `/${lang}/`,
    },
    {
      text: getText("API", "API"),
      link: `https://island.sanyuan0704.top/${lang}/api/`,
    },
  ];
}

function getSidebar(lang: "zh" | "en") {
  const { getLink, getText } = getI18nHelper(lang);
  return {
    [getLink('')]: [
      {
        text: getText("基础教程", "Basic Tutorial"),
        items: [
          {
            text: getText("初始化项目", "Initialize Project"),
            link: getLink("/"),
          },
          {
            text: getText("导航栏/侧边栏配置", "Navbar/Sidebar Config"),
            link: getLink("/config-bar"),
          },
          {
            text: getText("编写 Markdown 内容", "Write Markdown"),
            link: getLink("/markdown"),
          },
          {
            text: getText("项目构建打包", "Build In Production"),
            link: getLink("/build"),
          },
          {
            text: getText("接入国际化", "Integrate I18n"),
            link: getLink("/i18n"),
          },
          {
            text: getText("项目部署","Deploy"),
            link: getLink("/deploy"),
          },
        ],
      },
      {
        text: getText("进阶教程", "Advanced Tutorial"),
        items: [
          {
            text: getText("交互式文档开发", "Interactive Docs"),
            link: getLink("/code-hike"),
          },
        ],
      },
    ],
  };
}
