export default [
  {
    config: "type",
    desc: "类型",
    type: "string",
    optional: "primary/success/warning/danger/info",
    default: "default",
  },
  {
    config: "underline",
    desc: "是否下划线",
    type: "boolean",
    optional: "—",
    default: "true",
  },
  {
    config: "disabled",
    desc: "是否禁用状态",
    type: "boolean",
    optional: "—",
    default: "false",
  },
  {
    config: "href",
    desc: "原生 href 属性",
    type: "string",
    optional: "—",
    default: "—",
  },
  {
    config: "icon",
    desc: "图标类名",
    type: "string",
    optional: "—",
    default: "—",
  },
];
