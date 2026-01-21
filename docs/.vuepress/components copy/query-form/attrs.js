export const attrs = [
  {
    config: "fields",
    desc: "条件查询字段配置数组",
    type: "array<{ColumnObject}>",
    optional: "-",
    default: "-",
  },
  {
    config: "config",
    desc: "条件查询控件配置",
    type: "object<ConfigObject>",
    optional: "-",
    default: "-",
  },
  {
    config: "modify",
    desc: "TODO: 用于监听表单动态变化，（暂时无实际用途）",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];

export const columnObjectAttrs = [
  {
    config: "label",
    desc: "字段名称",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "key",
    desc: "字段键名",
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
    config: "type",
    desc: "字段类型",
    type: "input | inputrange | autocomplete | radio | checkbox | select | year | month | date | datetime | week | years | months | dates | time | monthrange | daterange | datetimerange",
    optional: "-",
    default: "input",
  },
  {
    config: "options",
    desc: "枚举列枚举项",
    type: "array<{label: string, value: number|string}>",
    optional: "-",
    default: "-",
  },
  {
    config: "datePicker",
    desc: "日期可选与不可选配置（内置规则），日期控件有效",
    type: "string",
    optional:
      "tillNowOn（直到现在，不含当天）、tillNowOnInclude（直到现在，含当天）、fromNowOn（始于现在，不含当天）、fromNowOnInclude（始于现在，含当天）",
    default: "-",
  },
  {
    config: "picker",
    desc: "日期可选与不可选配置（自定义规则），日期控件有效",
    type: "object<{defaultPicker: Function(time), disabledPicker: Function(time)}>",
    optional: "-",
    default: "-",
  },
  {
    config: "format",
    desc: "日期控件显示格式化，日期控件有效",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "valueFormat",
    desc: "日期控件值格式化，日期控件有效",
    type: "string",
    optional: "-",
    default: "-",
  },
];

export const configObjectAttrs = [
  {
    config: "queryBtn",
    desc: "查询按钮文本",
    type: "string",
    optional: "-",
    default: "查询",
  },
  {
    config: "title",
    desc: "条件查询顶部标题",
    type: "string",
    optional: "-",
    default: "-",
  },
];

export const events = [
  {
    name: "query",
    desc: "点击查询按钮，获取当前查询表单对象",
    params: "Function(form<object>)",
  },
  {
    name: "reset",
    desc: "点击重置按钮事件",
    params: "Function()",
  },
];
export const slots = [
  {
    name: "left-btns",
    desc: "左侧按钮插槽",
    params: "-",
  },
  {
    name: "right-btns",
    desc: "右侧按钮插槽，在重置按钮左侧",
    params: "-",
  },
];

export const queryFormItemAttrs = [
  {
    config: "label",
    desc: "字段描述",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "field",
    desc: "字段键名",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "type",
    desc: "字段类型",
    type: "input | inputrange | autocomplete | radio | checkbox | select | year | month | date | datetime | week | years | months | dates | time | monthrange | daterange | datetimerange",
    optional: "-",
    default: "input",
  },
  {
    config: "options",
    desc: "字段枚举值，type = radio、checkbox、select 有效",
    type: "array<{label: string, value: any}>",
    optional: "-",
    default: "-",
  },
  {
    config: "datePicker",
    desc: "日期可选与不可选配置（内置规则），日期控件有效",
    type: "string",
    optional:
      "tillNowOn（直到现在，不含当天）、tillNowOnInclude（直到现在，含当天）、fromNowOn（始于现在，不含当天）、fromNowOnInclude（始于现在，含当天）",
    default: "-",
  },
  {
    config: "picker",
    desc: "日期可选与不可选配置（自定义规则），日期控件有效",
    type: "object<{defaultPicker: Function(time), disabledPicker: Function(time)}>",
    optional: "-",
    default: "-",
  },
  {
    config: "format",
    desc: "日期控件显示格式化，日期控件有效",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "valueFormat",
    desc: "日期控件值格式化，日期控件有效",
    type: "string",
    optional: "-",
    default: "-",
  },
];
