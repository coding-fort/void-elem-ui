export const attrs = [
  {
    config: "columns",
    desc: "表格字段",
    type: "array<ColumnObject>",
    optional: "-",
    default: "-",
  },
  {
    config: "response",
    desc: "TODO:接口响应对象（未通用）",
    type: "object<{dataList: array, pageNum: number, pageSize: number, total: number}>",
    optional: "-",
    default: "-",
  },
  {
    config: "stripe",
    desc: "是否为斑马纹 table",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "border",
    desc: "是否带有纵向边框",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "operateWidth",
    desc: "操作列宽度",
    type: "number",
    optional: "-",
    default: 100,
  },
  {
    config: "select",
    desc: "是否开启数据行勾选功能",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "fixedArray",
    desc: "数组中字段列（key）固定到右侧",
    type: "Array<string>",
    optional: "-",
    default: "[]",
  },
  {
    config: "spanMethod",
    desc: "合并行或列的计算方法（element-ui 原生）",
    type: "Function({ row, column, rowIndex, columnIndex })",
    optional: "-",
    default: "-",
  },
  {
    config: "operateFixed",
    desc: "操作列位置",
    type: "string",
    optional: "left|right",
    default: "right",
  },
  {
    config: "ignorePager",
    desc: "隐藏分页模块",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "ignoreOperate",
    desc: "禁用操作列",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "ignoreFormat",
    desc: "禁用内置格式化",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];

export const columnObjectAttrs = [
  {
    config: "label",
    desc: "列名称",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "key",
    desc: "列键名",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "_key",
    desc: "TODO: 接口键名",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "width",
    desc: "列的宽度（px）",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    config: "options",
    desc: "枚举列枚举项",
    type: "array<{label: string, value: number|string}>",
    optional: "-",
    default: "-",
  },
  {
    config: "align",
    desc: "TODO:  列的对齐方式",
    type: "string",
    optional: "left|center|right",
    default: "center",
  },
];

export const events = [
  {
    name: "process",
    desc: "数据处理钩子",
    params: "Function(dataList: Array)",
  },
  {
    name: "select",
    desc: "数据复选钩子",
    params: "Function",
  },
];
export const slots = [
  {
    name: "[key]",
    desc: "对应列字段插槽，可用于针对某个具体的字段进行额外处理",
    params: "slot-scope={ name, row, column, $index }，name 对应key，row 对应行数据，column 对应字段配置",
  },
  {
    name: "operate",
    desc: "操作列插槽，需要 ignoreOperate = false 时有效",
    params: "slot-scope={ row, column, $index }，row 对应行数据，column 对应字段配置",
  },
];
