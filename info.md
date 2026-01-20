# 库说明

## 文档说明

void-elem-ui/
├── src/ # 核心源码
│ ├── components/ # 二次封装组件
│ │ ├── MyButton/ # 示例组件（封装 el-button）
│ │ │ ├── index.vue # 组件实现
│ │ │ └── index.js # 组件导出
│ │ └── index.js # 组件总入口
│ ├── utils/ # 工具函数
│ └── index.js # 库总出口（全量导出）
├── docs/ # VitePress 文档
│ ├── .vitepress/
│ │ └── config.js # 文档配置
│ ├── components/ # 文档中展示的组件示例
│ ├── guide/ # 使用指南
│ └── index.md # 文档首页
├── dist/ # 构建产物（基础库）
├── package.json # 项目配置
├── webpack.config.js # 基础库构建配置
└── .npmignore # 控制 npm 发布内容

## 发布说明

1. 每次发布必须修改`package.json` 版本号；

- MAJOR（主版本号）：当进行不兼容的 API 变更时递增（如删除旧接口、修改参数格式导致旧代码无法运行）。

```
例：1.0.0 → 2.0.0 表示有破坏性更新，旧版本用户需适配。
```

- MINOR（次版本号）：当新增向后兼容的功能时递增（如新增接口、扩展功能，不影响旧代码使用）。

```
例：2.3.0 → 2.4.0 表示新增功能，旧版本可直接升级。
```

- PATCH（修订号）：当进行向后兼容的问题修复时递增（如修复 bug，不新增功能，不改变 API）。

```
例：2.3.1 → 2.3.2 表示修复了某个 bug。
```
