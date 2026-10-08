# Skills Manager 桌面应用

基于 Vue 3、TypeScript 和 Electron 的本地 Agent Skills 管理应用。当前保留一个最小起始页面，后续从目录选择和本地扫描开始开发。

## 常用命令

在本目录执行：

```powershell
npm install
npm run dev
npm run lint
npm run build
npm run build:win
```

- `dev`：启动 Vue 开发服务和 Electron 窗口。
- `lint`：检查代码规范。
- `build`：执行 TypeScript 检查并构建到 `out/`。
- `build:win`：构建后生成 Windows 安装包。

## 代码放在哪里

| 位置                               | 用途                                                               |
| ---------------------------------- | ------------------------------------------------------------------ |
| `src/main/index.ts`                | Electron 应用启动、窗口生命周期；后续本地业务放在 `main/services/` |
| `src/preload/index.ts`             | 为 Vue 提供与主进程通信的接口                                      |
| `src/preload/index.d.ts`           | 声明 Vue 中 `window` 上的桥接接口类型                              |
| `src/renderer/src/App.vue`         | Vue 根组件                                                         |
| `src/renderer/src/main.ts`         | Vue 启动入口与全局样式导入                                         |
| `src/renderer/src/assets/main.css` | 最小全局样式                                                       |
| `src/renderer/index.html`          | 页面容器、窗口标题和内容策略                                       |

## 脚手架清理说明

| 删除的文件                                 | 原用途与删除原因                                              |
| ------------------------------------------ | ------------------------------------------------------------- |
| `src/renderer/src/components/Versions.vue` | 欢迎页展示 Electron、Chromium、Node.js 版本，业务页面不依赖它 |
| `src/renderer/src/assets/electron.svg`     | 欢迎页 Electron 标志，已移除该展示                            |
| `src/renderer/src/assets/wavy-lines.svg`   | 欢迎页装饰背景，已移除对应背景样式                            |
| `src/renderer/src/assets/base.css`         | 模板主题变量和重置样式；必要的基础规则已合并到 `main.css`     |
| `dev-app-update.yml`                       | 应用自身自动更新的示例服务器配置，当前没有自动更新实现        |

同时移除欢迎页的 Send IPC 按钮、主进程的 ping/pong 演示监听、未使用的 `electron-updater` 依赖，以及打包配置中的示例发布地址。应用自身自动更新与从仓库更新 skills 是两项独立功能；后者可以通过下载服务实现。

## 保留的工程文件

- `package.json`、`package-lock.json`、`node_modules/`：依赖、脚本和安装后的包。
- `electron.vite.config.ts`、`tsconfig*.json`：构建入口与类型检查配置。
- `electron-builder.yml`、`build/`：安装包配置、图标和平台资源。
- `resources/icon.png`：主进程仍引用它作为 Linux 窗口图标。
- `.vscode/`、ESLint、Prettier、EditorConfig 配置：调试与代码格式辅助。
- `out/`：构建生成目录；由开发/构建命令生成，保持忽略提交。

完整技术设计位于 `../docs/technical-design.md`。
