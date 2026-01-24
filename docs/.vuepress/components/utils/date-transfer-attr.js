/**
 * formatDate Options
 */
export const attrsFn01 = [
  {
    config: "formatType",
    desc: "格式化方式，1-年月日，0-年月日时分秒",
    type: "number",
    optional: "0 | 1",
    default: "1",
  },
  {
    config: "formatStr",
    desc: "自定义日期格式字符串，用于格式化日期",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "autoAddTime",
    desc: "自动追加时间标识，对日期数组第一个元素添加'00:00:00'，对第二个元素添加'23:59:59'。`formatType=1` ，`formatStr`字符串中包含时间部分，该属性失效，不会追加时间。",
    type: "boolean",
    optional: "-",
    default: "-",
  },
  {
    config: "timeSuffixPosition",
    desc: "添加类型，0-00:00:00，1-23:59:59。",
    type: "number",
    optional: "0 | 1",
    default: "0",
  },
  {
    config: "timeSuffixStr",
    desc: "自定义添加时间格式字符串",
    type: "string",
    optional: "-",
    default: "-",
  },
];

/**
 * transformQueryDate Options
 */
export const attrsFn02 = [
  {
    config: "field",
    desc: "功能2 使用，this 对象中的冗余属性，运行功能2 后会删除该冗余属性",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "formatType",
    desc: "格式化方式，1-年月日，0-年月日时分秒",
    type: "number",
    optional: "0 | 1",
    default: "1",
  },
  {
    config: "formatStr",
    desc: "自定义日期格式字符串，用于格式化日期",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "autoAddTime",
    desc: "自动追加时间标识，对日期数组第一个元素添加'00:00:00'，对第二个元素添加'23:59:59'。`formatType=1` ，`formatStr`字符串中包含时间部分，该属性失效，不会追加时间。",
    type: "boolean",
    optional: "-",
    default: "-",
  },
  {
    config: "resetFields",
    desc: "功能2 使用，为this 追加的两个属性名，对应日期数组的两个元素",
    type: "[string, string]",
    optional: "-",
    default: "-",
  },
];
