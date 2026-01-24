/**
 * 枚举处理工具集
 */

/**
 * 枚举值解析/逆向解析
 * @param {*} value 要解析的值（label 或 value）
 * @param {Array} enumOptions 枚举选项数组，格式：[{ label, value }, ...]
 * @param {Object} [options] 配置项
 * @param {string} [options.labelField='label'] 标签字段名
 * @param {boolean} [options.reverse=false]
 *   - false: value → label（默认）
 *   - true:  label → value
 * @returns {*|undefined} 匹配到的结果，未匹配返回 undefined
 */
function transformOption(value, enumOptions, options = {}) {
  const { labelField = "label", reverse = false } = options;

  // 只排除 null 和 undefined
  if (value == null) {
    return undefined;
  }

  if (!Array.isArray(enumOptions) || enumOptions.length === 0) {
    return undefined;
  }

  if (reverse) {
    // label → value
    const option = enumOptions.find((item) => item[labelField] === value);
    return option ? option.value : undefined;
  } else {
    // value → label
    const option = enumOptions.find((item) => item.value === value);
    return option ? option[labelField] : undefined;
  }
}

/**
 * 创建一个枚举解析器，用于在 value 和 label 之间进行链式查询。
 * 适用于需要对同一枚举选项多次解析的场景，避免重复传入 options。
 *
 * @param {Array} enumOptions 枚举选项数组，格式如 [{ label: '启用', value: 1 }, ...]
 * @returns {Object} 返回一个带有链式方法的对象，包含：
 *   - `.labelField(field: string)`: 指定标签字段名（默认 'label'），返回自身以支持链式调用
 *   - `.value(val: any)`: 根据 value 查找对应的 label，未匹配返回 undefined
 *   - `.label(lbl: any)`: 根据 label 查找对应的 value，未匹配返回 undefined
 *
 * @example
 * const parser = enumMapper(STATUS_OPTIONS);
 * parser.value(1); // → '启用'
 * parser.label('禁用'); // → 0
 *
 * const roleParser = enumMapper(ROLE_OPTIONS).labelField('text');
 * roleParser.label('管理员'); // → 'admin'
 */
function enumMapper(enumOptions) {
  // 输入校验
  if (!Array.isArray(enumOptions)) {
    throw new Error("enumMapper: first argument must be an array");
  }

  let config = {
    labelField: "label",
    // 可扩展：valueField: 'value', strict: false, etc.
  };

  return {
    /**
     * 设置标签字段名
     * @param {string} field
     * @returns {this}
     */
    labelField(field) {
      config.labelField = field;
      return this; // 支持链式
    },

    /**
     * 正向：通过 value 获取 label
     * @param {*} val
     * @returns {*|undefined}
     */
    value(val) {
      if (val == null) return undefined;
      const item = enumOptions.find((opt) => opt.value === val);
      return item ? item[config.labelField] : undefined;
    },

    /**
     * 逆向：通过 label 获取 value
     * @param {*} lbl
     * @returns {*|undefined}
     */
    label(lbl) {
      if (lbl == null) return undefined;
      const item = enumOptions.find((opt) => opt[config.labelField] === lbl);
      return item ? item.value : undefined;
    },

    // 可选：暴露原始配置（用于调试或高级用法）
    __config: config,
  };
}

export default {
  transformOption,
  enumMapper,
};
