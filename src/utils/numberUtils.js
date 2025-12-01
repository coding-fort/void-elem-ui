/**
 * 数值处理工具集
 */
const numberUtils = {
  /**
   * 控制数值小数点前后位数（输入格式化）
   * @param {*} value 输入值
   * @param {number} digital 小数点后位数（默认：2）
   * @param {number} decimal 小数点前位数限制（默认：0 不限制）
   * @returns {string} 格式化后的数值字符串
   */
  inputDecimal(value, digital = 2, decimal = 0) {
    if (!value && value !== 0) return "";

    // 转字符串并去除首尾空格
    let valStr = String(value).trim();

    // 过滤非数字和小数点字符
    valStr = valStr.replace(/[^\d.]/g, "");

    // 处理开头小数点、多个小数点
    valStr = valStr.replace(/^\./g, ""); // 移除开头小数点
    valStr = valStr.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."); // 保留一个小数点

    // 限制小数点后位数
    const decimalReg = new RegExp(
      `^(-)*(\\d+)\\.(${"\\d".repeat(digital)}).*$`,
      "g"
    );
    valStr = valStr.replace(decimalReg, "$1$2.$3");

    // 限制小数点前位数
    if (decimal > 0) {
      const [integerPart, fractionalPart] = valStr.split(".");
      const limitedInteger = integerPart.substring(0, decimal);
      valStr = fractionalPart
        ? `${limitedInteger}.${fractionalPart}`
        : limitedInteger;
    }

    return valStr;
  },

  /**
   * 金额格式化（千分位）/ 逆向解析
   * @param {*} value 金额值（数字/字符串）
   * @param {number} decimal 保留小数位数（默认：2）
   * @param {boolean} type 是否逆向解析（true：去除千分位转数字）
   * @param {string} identi 标识符，币种符号
   * @returns {string|number|undefined} 格式化后的金额/数值，无效值返回 undefined
   */
  transformMoney(value, { decimal = 2, type = false, identi = "" } = {}) {
    // 空值处理（0 是有效数值）
    if (!value && value !== 0) return undefined;

    // 逆向解析：去除千分位转数字
    if (type) {
      const num =
        typeof value === "string" ? +value.replaceAll(",", "") : +value;
      return isNaN(num) ? undefined : num;
    }

    // 正向格式化：千分位 + 小数位限制
    let num = typeof value === "string" ? +value.replaceAll(",", "") : +value;
    if (isNaN(num)) return undefined;

    // 小数位处理（避免科学计数法）
    const toFixedFix = (n, prec) => {
      const pow = Math.pow(10, prec);
      return parseFloat((n * pow).toFixed(prec * 2)).toFixed(prec);
    };

    const fixedNum = toFixedFix(num, decimal);
    const [integerPart, fractionalPart] = fixedNum.split(".");

    // 千分位处理
    const thousandSeparator = (str) => {
      const reg = /(-?\d+)(\d{3})/;
      let result = str;
      while (reg.test(result)) {
        result = result.replace(reg, "$1,$2");
      }
      return result;
    };

    const formattedInteger = thousandSeparator(integerPart);
    const formattedFractional =
      fractionalPart || new Array(decimal + 1).join("0");

    return `${identi}${formattedInteger}.${formattedFractional}`;
  },
};

export default numberUtils;
