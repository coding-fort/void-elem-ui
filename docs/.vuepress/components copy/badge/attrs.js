export default [
  {
    config: "value",
    desc: "显示值",
    type: "string, number",
    optional: "—",
    default: "—",
  },
  {
    config: "max",
    desc: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
    type: "number",
    optional: "—",
    default: "—",
  },
  {
    config: "is-dot",
    desc: "小圆点",
    type: "boolean",
    optional: "—",
    default: "false",
  },
  {
    config: "hidden",
    desc: "隐藏 badge",
    type: "boolean",
    optional: "—",
    default: "—",
  },
  {
    config: "type",
    desc: "类型",
    type: "string",
    optional: "primary/success/warning/danger/info",
    default: "—",
  },
];
