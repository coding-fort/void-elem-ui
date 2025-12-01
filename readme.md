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
