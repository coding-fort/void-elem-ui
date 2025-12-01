"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 导入 dayjs

/**
 * 日期处理工具集
 */
var dateUtils = {
  /**
   * 查询条件日历字段转换
   * @param {*} date 日期数组
   * @param {*} dateField 日期字段，若设置，则会自动赋值到rangeFields 的两个字段上
   * @param {*} rangeFields 开始-结束字段
   * @param {string} format 日期格式（默认：YYYY-MM-DD HH:mm:ss）
   * @param {boolean} isYMD 是否仅年月日（是则自动补时分秒）
   * @returns {Object} { start, end } 格式化后的日期范围
   *
   * usage1: let {start, end} = transform.queryDate(date)
   * usage2: transform.queryDate.call(params, date, 'date', ['start', 'end'])
   */
  transformQueryDate: function transformQueryDate(date, dateField, rangeFields) {
    var format = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "YYYY-MM-DD HH:mm:ss";
    var isYMD = arguments.length > 4 ? arguments[4] : undefined;
    var result = {
      start: "",
      end: ""
    }; // 空值/无效日期数组处理：清空目标字段

    if (!date || !Array.isArray(date) || date.length < 2) {
      if (rangeFields && Array.isArray(rangeFields) && rangeFields.length === 2) {
        delete this[rangeFields[0]];
        delete this[rangeFields[1]];
      }

      return result;
    } // 格式化日期


    var _date2 = _slicedToArray(date, 2),
        startDate = _date2[0],
        endDate = _date2[1];

    if (startDate && endDate) {
      result.start = (0, _dayjs["default"])(new Date(startDate)).format(format);
      result.end = (0, _dayjs["default"])(new Date(endDate)).format(format); // 年月日模式自动补时分秒

      if (isYMD) {
        result.start += " 00:00:00";
        result.end += " 23:59:59";
      }
    } // 自动赋值到目标字段（call 调用时生效）


    if (dateField && rangeFields && Array.isArray(rangeFields) && rangeFields.length === 2) {
      this[rangeFields[0]] = result.start;
      this[rangeFields[1]] = result.end;
      delete this[dateField];
    }

    return result;
  },

  /**
   * 日期字段格式化
   * @param {*} date 日期字符串/时间戳
   * @param {number} type 1-年月日，0-年月日时分秒（默认：0）
   * @param {string} format 自定义日期格式（优先级高于 type）
   * @returns {string|undefined} 格式化后的日期，无效日期返回 undefined
   */
  formatDate: function formatDate(date) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var format = arguments.length > 2 ? arguments[2] : undefined;

    var _date = new Date(date);

    if (_date.toString() === "Invalid Date") return undefined; // 优先使用自定义格式，否则按 type 匹配

    var finalFormat = format || (type === 1 ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss");
    return (0, _dayjs["default"])(_date).format(finalFormat);
  }
};
var _default = dateUtils;
exports["default"] = _default;