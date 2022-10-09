import { defineConfig } from "islandjs";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const theme = require("shiki/themes/min-light.json"); // any theme from shiki

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [remarkCodeHike, { theme, autoImport: true, showCopyButton: true }],
    ],
  },
  title: "Island.js 教程",
  enableSpa: true,
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "目录",
          items: [
            {
              text: "初始化项目",
              link: "/init",
            },
          ],
        },
      ],
    },
  },
  route: {
    exclude: ["compoents/**/*"],
  },
});
