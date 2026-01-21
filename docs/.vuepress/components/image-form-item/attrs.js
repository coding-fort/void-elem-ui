export const attrs = [
  {
    config: "uploadAction",
    desc: "	必选参数，上传的地址",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "headers",
    desc: "设置上传的请求头部",
    type: "object",
    optional: "-",
    default: "-",
  },
  {
    config: "value",
    desc: "TODO: 初始图片URL，用于回显",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    config: "disabled",
    desc: "	是否禁用",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    config: "limit",
    desc: "最大允许上传个数",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    config: "size",
    desc: "图片大小限制（MB）",
    type: "number",
    optional: "-",
    default: "2",
  },
  {
    config: "accept",
    desc: "接受上传的文件类型",
    type: "string",
    optional: "-",
    default: "image/png,image/jpg",
  },
  {
    config: "interceptors",
    desc: "上传成功/失败拦截",
    type: "object<{success?:Function, error?:Function}>",
    optional: "-",
    default: "null",
  },
];

export const events = [
  {
    name: "clear",
    desc: "清空钩子",
    params: "Function()",
  },
  {
    name: "success",
    desc: "上传成功钩子",
    params: "Function(url: string)",
  },
];
