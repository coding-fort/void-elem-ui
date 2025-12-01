"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 数值处理工具集
 */
var numberUtils = {
  /**
   * 控制数值小数点前后位数（输入格式化）
   * @param {*} value 输入值
   * @param {number} digital 小数点后位数（默认：2）
   * @param {number} decimal 小数点前位数限制（默认：0 不限制）
   * @returns {string} 格式化后的数值字符串
   */
  inputDecimal: function inputDecimal(value) {
    var digital = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!value && value !== 0) return ""; // 转字符串并去除首尾空格

    var valStr = String(value).trim(); // 过滤非数字和小数点字符

    valStr = valStr.replace(/[^\d.]/g, ""); // 处理开头小数点、多个小数点

    valStr = valStr.replace(/^\./g, ""); // 移除开头小数点

    valStr = valStr.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."); // 保留一个小数点
    // 限制小数点后位数

    var decimalReg = new RegExp("^(-)*(\\d+)\\.(".concat("\\d".repeat(digital), ").*$"), "g");
    valStr = valStr.replace(decimalReg, "$1$2.$3"); // 限制小数点前位数

    if (decimal > 0) {
      var _valStr$split = valStr.split("."),
          _valStr$split2 = _slicedToArray(_valStr$split, 2),
          integerPart = _valStr$split2[0],
          fractionalPart = _valStr$split2[1];

      var limitedInteger = integerPart.substring(0, decimal);
      valStr = fractionalPart ? "".concat(limitedInteger, ".").concat(fractionalPart) : limitedInteger;
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
  transformMoney: function transformMoney(value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$decimal = _ref.decimal,
        decimal = _ref$decimal === void 0 ? 2 : _ref$decimal,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? false : _ref$type,
        _ref$identi = _ref.identi,
        identi = _ref$identi === void 0 ? "" : _ref$identi;

    // 空值处理（0 是有效数值）
    if (!value && value !== 0) return undefined; // 逆向解析：去除千分位转数字

    if (type) {
      var _num = typeof value === "string" ? +value.replaceAll(",", "") : +value;

      return isNaN(_num) ? undefined : _num;
    } // 正向格式化：千分位 + 小数位限制


    var num = typeof value === "string" ? +value.replaceAll(",", "") : +value;
    if (isNaN(num)) return undefined; // 小数位处理（避免科学计数法）

    var toFixedFix = function toFixedFix(n, prec) {
      var pow = Math.pow(10, prec);
      return parseFloat((n * pow).toFixed(prec * 2)).toFixed(prec);
    };

    var fixedNum = toFixedFix(num, decimal);

    var _fixedNum$split = fixedNum.split("."),
        _fixedNum$split2 = _slicedToArray(_fixedNum$split, 2),
        integerPart = _fixedNum$split2[0],
        fractionalPart = _fixedNum$split2[1]; // 千分位处理


    var thousandSeparator = function thousandSeparator(str) {
      var reg = /(-?\d+)(\d{3})/;
      var result = str;

      while (reg.test(result)) {
        result = result.replace(reg, "$1,$2");
      }

      return result;
    };

    var formattedInteger = thousandSeparator(integerPart);
    var formattedFractional = fractionalPart || new Array(decimal + 1).join("0");
    return "".concat(identi).concat(formattedInteger, ".").concat(formattedFractional);
  }
};
var _default = numberUtils;
exports["default"] = _default;