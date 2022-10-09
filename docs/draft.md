首先，你可以通过以下命令创建一个新目录：

```bash
mkdir island-app && cd island-app
```

执行 `npm init -y` 来初始化一个项目。你可以使用 npm、yarn 或 pnpm 安装 Island.js:

```bash
# npm
npm install islandjs
# yarn
yarn add islandjs
# pnpm
pnpm add islandjs
```

然后通过如下命令创建文件:

```bash
mkdir docs && echo '# Hello World' > docs/index.md
```

在`package.json`中加上如下的脚本:

```json
{
  "scripts": {
    "dev": "island dev docs",
    "build": "island build docs",
    "preview": "island start docs"
  }
}
```

## 2. 启动 Dev Server

通过如下命令启动本地开发服务:

```bash
yarn dev
```

这样 Island.js 将在 http://localhost:5173 启动开发服务。

## 3. 生产环境构建

通过如下命令构建生产环境的产物:

```bash
yarn build
```

默认情况下，Island.js 将会把产物打包到 `.island/dist` 目录。

## 4. 本地预览产物

通过如下命令启动本地预览服务:

```bash
yarn preview
```

这样 Island.js 将在 http://localhost:5173 启动预览服务。
