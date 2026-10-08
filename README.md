# Skills Manager

本地 Agent Skills 管理与下载应用的技术设计。

推荐方案：**Vue 3 + TypeScript + Electron + SQLite**。Vue 构建界面，Electron 主进程实现目录扫描、下载和安装，SQLite 保存来源、版本、安装副本与操作记录。

当前交付物是技术文档，应用代码可按里程碑逐步实现。

## 技术文档

完整文档见 `docs/technical-design.md`，包括：

- 产品范围和技术路线比较。
- SKILL.md 格式、解析与兼容策略。
- Electron 进程架构、模块和目录布局。
- 来源、版本、安装副本的数据模型与 SQL 草案。
- IPC 接口、任务进度与错误设计。
- GitHub 下载、安装更新、备份和中断恢复。
- 页面设计、初始化命令、打包流程。
- 开发里程碑、测试场景与官方参考资料。

## 建议起点

先完成“选择本地目录 → 扫描 SKILL.md → 列表 → 详情”的切片，再增加“GitHub 来源 → 固定版本下载 → 安装”。

现有文档位于仓库根目录；使用官方脚手架时，可以在 `desktop` 子目录初始化 Vue TypeScript 应用。命令与原生 SQLite 打包说明详见技术文档第 12 节。