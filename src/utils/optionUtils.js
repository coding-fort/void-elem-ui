/**
 * 枚举处理工具
 */
const optionUtils = {
  /**
   * 枚举值解析/逆向解析
   * @param {*} value 要解析的值（label/value）
   * @param {Array} options 枚举选项数组（[{ label, value }, ...]）
   * @param {string} labelField 标签字段名（默认：label）
   * @param {boolean} type 是否逆向解析（true：通过 label 查 value）
   * @returns {*|undefined} 解析后的 label/value，未匹配返回 undefined
   */
  transformOption(value, options, labelField = "label", type) {
    // 空值处理（0 是有效数值）
    if (!value && value !== 0) return undefined;
    if (!Array.isArray(options) || options.length === 0) return undefined;

    // 正向解析：value -> label
    if (!type) {
      const option = options.find((item) => item.value === value);
      return option ? option[labelField] : undefined;
    }

    // 逆向解析：label -> value
    const option = options.find((item) => item[labelField] === value);
    return option ? option.value : undefined;
  },
};

export default optionUtils;
