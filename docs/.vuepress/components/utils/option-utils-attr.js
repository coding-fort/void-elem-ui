/**
 * transformOption Options
 */
export const attrsFn01 = [
  {
    config: "labelField",
    desc: "自定义标签字段名",
    type: "string",
    optional: "-",
    default: "label",
  },
  {
    config: "reverse",
    desc: "逆向解析，true:  label → value",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];

/**
 * enumMapper Events
 */
export const attrsFn02 = [
  {
    name: "enumMapper",
    desc: "创建一个枚举解析器，用于在 value 和 label 之间进行链式查询",
    params: "Function(enumOptions: Array<{label: string, value: any}>)",
  },
  {
    name: "labelField",
    desc: "设置标签字段名",
    params: "Function(field: string)",
  },
  {
    name: "value",
    desc: "正向：通过 value 获取 label",
    params: "Function(val: any)",
  },
  {
    name: "label",
    desc: "逆向：通过 label 获取 value",
    params: "Function(lbl: any)",
  },
];
