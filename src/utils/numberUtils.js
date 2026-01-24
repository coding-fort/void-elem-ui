/**
 * 数值处理工具集
 */

/**
 * 安全的小数处理（四舍五入）
 * @param {number} num
 * @param {number} decimals
 * @returns {string}
 */
function toFixedSafe(num, decimals) {
  if (decimals < 0) decimals = 0;
  const factor = Math.pow(10, decimals);
  const rounded = Math.round(num * factor) / factor;
  return rounded.toFixed(decimals);
}

/**
 * 解析字符串为有效数字（去除千分位）
 * @param {*} str
 * @returns {number|undefined}
 */
function toValidNumber(str) {
  if (str == null || str === "") return undefined;
  const clean = typeof str === "string" ? str.replace(/,/g, "") : String(str);
  const num = Number(clean);
  return isNaN(num) || !isFinite(num) ? undefined : num;
}

/**
 * 千分位格式化（支持负数）
 * @param {string} integerStr - 整数部分字符串（如 "12345" 或 "-12345"）
 * @returns {string}
 */
function thousandSeparator(integerStr) {
  const isNegative = integerStr.startsWith("-");
  let absStr = isNegative ? integerStr.slice(1) : integerStr;
  absStr = absStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return isNegative ? "-" + absStr : absStr;
}

/**
 * 数值输入格式化（用于 input 实时控制）
 * @param {*} value 输入值（通常来自 input event）
 * @param {Object} [options] 配置项
 * @param {number} [options.fractionDigits=2] 小数点后最多保留位数
 * @param {boolean} [options.allowNegative=false] 是否允许负数
 * @param {boolean} [options.trimLeadingZeros=true] 是否移除前导零（如 "00123" → "123"）
 * @returns {string} 格式化后的字符串（适合赋值给 input 的 value）
 */
function formatInputNumber(value, options = {}) {
  const {
    fractionDigits = 2,
    allowNegative = false,
    trimLeadingZeros = true,
  } = options;

  if (value == null || value === "") {
    return "";
  }

  let str = String(value).trim();

  // 1. 只保留合法字符：数字、小数点、（可选）开头的负号
  const allowedChars = allowNegative ? /[^-\d.]/g : /[^\d.]/g;
  str = str.replace(allowedChars, "");

  // 2. 负号处理：只保留开头的一个
  if (allowNegative) {
    // str = str.replace(/^-+/, "-").replace(/-(?!^)/g, "");
    str = str.replace(/(?<=.)-/g, "");
  }

  // 3. 小数点处理：只保留第一个
  const parts = str.split(".");
  if (parts.length > 2) {
    str = parts[0] + "." + parts.slice(1).join("");
  }

  // 4. 限制小数位数
  if (str.includes(".")) {
    const [intPart, decPart] = str.split(".");
    str = `${intPart}.${decPart.slice(0, fractionDigits)}`;
  }

  // 5. 移除开头的小数点（如 ".123" → "123"）
  if (str.startsWith(".")) {
    str = str.slice(1);
  }

  // 6. 移除前导零（可选）
  if (
    trimLeadingZeros &&
    str.length > 1 &&
    !str.startsWith("0.") &&
    !str.startsWith("-0.")
  ) {
    str = str.replace(/^(-)?0+(\d)/, "$1$2");
  }

  // 7. 防止 "-0"（可选，根据需求）
  if (str === "-0") {
    str = "0";
  }

  // 在 return 前加一个保护
  if (allowNegative && str === "-") {
    return "-";
  }

  return str;
}

/**
 * 金额格式化（千分位）/ 逆向解析
 * @param {*} value 金额值（数字/字符串）
 * @param {object} [options] 配置
 * @param {number} [options.decimal=2] 保留小数位数
 * @param {boolean} [options.type=false] 是否逆向解析
 * @param {string} [options.symbol=''] 币种符号
 * @returns {string|number|undefined}
 */
function transformMoney(value, options = {}) {
  const { decimal = 2, type = false, symbol = "" } = options;

  let processedValue = value;

  // 🔑 逆向解析：仅移除开头的非数值字符（保留中间内容）
  if (type && typeof value === "string") {
    processedValue = value.replace(/^[^-\d.]+/, "");
  }

  const num = toValidNumber(processedValue);

  if (type) {
    // 🔑 逆向解析：如果数字有效，按 decimal 四舍五入
    if (num != null && isFinite(num)) {
      // 使用 toFixedSafe 处理浮点精度问题
      const roundedStr = toFixedSafe(num, decimal);
      return Number(roundedStr); // 转回 number
    }
    return num; // undefined 或 NaN
  }

  if (!isFinite(num)) {
    return undefined;
  }

  const fixedStr = toFixedSafe(num, decimal);
  const [integerPart, fractionalPart = ""] = fixedStr.split(".");

  const formattedInteger = thousandSeparator(integerPart);
  const formattedFractional = fractionalPart.padEnd(decimal, "0");

  let result = symbol + formattedInteger;
  if (decimal > 0) {
    result += "." + formattedFractional;
  }

  return result;
}

// 导出
export default {
  transformMoney,
  formatInputNumber,
};
