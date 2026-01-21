export const attrs = [
  {
    config: "fields",
    desc: "表单字段配置数组",
    type: "array<{ColumnObject}>",
    optional: "-",
    default: "-",
  },
  {
    config: "config",
    desc: "表单控件配置",
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
  {
    config: "defalutUploadLimit",
    desc: "上传控件限定数量（表单中所有上传控件有效，优先级低于field 中配置）",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    config: "defalutUploadSize",
    desc: "上传控件限定大小（MB，表单中所有上传控件有效，优先级低于field 中配置）",
    type: "number",
    optional: "-",
    default: "2",
  },
  {
    config: "defalutUploadAccept",
    desc: "上传控件限定格式（表单中所有上传控件有效，优先级低于field 中配置）",
    type: "number",
    optional: "-",
    default: "image/png,image/jpg",
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
    type: "input | inputrange | autocomplete | radio | checkbox | select | switch | year | month | date | datetime | week | years | months | dates | time | monthrange | daterange | datetimerange ｜ upload",
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
    config: "required",
    desc: "必填校验，与rules 中添加必填校验规则一样",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "rules",
    desc: "校验规则数组",
    type: "array<ruleObject>",
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
  {
    config: "col",
    desc: "每行包含多少个表单元素",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    config: "uploadAction",
    desc: "文件上传地址，上传控件有效",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "interceptors",
    desc: "文件上传响应对象，上传控件有效",
    type: "object<success: Function(url), error: Function>",
    optional: "-",
    default: "-",
  },
  {
    config: "limit",
    desc: "文件上传限定数量，上传控件有效",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    config: "size",
    desc: "文件上传限定大小（MB），上传控件有效",
    type: "number",
    optional: "-",
    default: "2",
  },
  {
    config: "accept",
    desc: "文件上传限定格式，上传控件有效",
    type: "string",
    optional: "-",
    default: "image/png,image/jpg",
  },
];

export const ruleObjectAttrs = [
  {
    config: "required",
    desc: "必填项",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "min",
    desc: "字符数量最少值",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    config: "max",
    desc: "字符数量最大值",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    config: "message",
    desc: "触发校验时错误提示",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "trigger",
    desc: "触发校验时机",
    type: "string | array",
    optional: "change | blur | ['change'] | ['blur'] | ['change', 'blur']",
    default: "-",
  },
  {
    config: "type",
    desc: "触发校验值类型",
    type: "string",
    optional: " date | array",
    default: "-",
  },
  {
    config: "validator",
    desc: "自定义校验函数，callback() 直接调用为通过，若需要拦截则callback(new Error('error message'))",
    type: "Function<{rule, value, callback: Function}>",
    optional: " date | array",
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
    desc: "表单顶部标题",
    type: "string",
    optional: "-",
    default: "-",
  },
];

export const events = [
  {
    name: "submit",
    desc: "获取当前查询表单对象（注意：必须整个表单满足校验规则后才能获取到）",
    params: "Function(form<object>)",
  },
  {
    name: "change",
    desc: "单字段值变更时触发",
    params: "Function(form<object>, field<{value, key}>)",
  },
];
export const methods = [
  {
    name: "handleReset",
    desc: "重置表单，移除错误提示",
    params: "-",
  },
  {
    name: "handleSubmit",
    desc: "校验表单，通过@submit 可获取表单对象",
    params: "-",
  },
];
