/**
 * formatInputNumber Options
 */
export const attrsFn01 = [
  {
    config: "fractionDigits",
    desc: "小数点后最多保留位数",
    type: "number",
    optional: "-",
    default: "2",
  },
  {
    config: "allowNegative",
    desc: "是否允许负数",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "trimLeadingZeros",
    desc: "是否移除前导零（如 '00123' → '123'）",
    type: "boolean",
    optional: "-",
    default: "true",
  },
];

/**
 * transformMoney Options
 */
export const attrsFn02 = [
  {
    config: "decimal",
    desc: "保留小数位数",
    type: "number",
    optional: "-",
    default: "2",
  },
  {
    config: "type",
    desc: "是否逆向解析，解析字符串为有效数字（去除千分位）",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "symbol",
    desc: "币种符号",
    type: "string",
    optional: "-",
    default: "-",
  },
];
