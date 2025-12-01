import dayjs from 'dayjs'; // 导入 dayjs

/**
 * 日期处理工具集
 */
const dateUtils = {
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
  transformQueryDate(
    date,
    dateField,
    rangeFields,
    format = "YYYY-MM-DD HH:mm:ss",
    isYMD
  ) {
    const result = { start: "", end: "" };

    // 空值/无效日期数组处理：清空目标字段
    if (!date || !Array.isArray(date) || date.length < 2) {
      if (
        rangeFields &&
        Array.isArray(rangeFields) &&
        rangeFields.length === 2
      ) {
        delete this[rangeFields[0]];
        delete this[rangeFields[1]];
      }
      return result;
    }

    // 格式化日期
    const [startDate, endDate] = date;
    if (startDate && endDate) {
      result.start = dayjs(new Date(startDate)).format(format);
      result.end = dayjs(new Date(endDate)).format(format);

      // 年月日模式自动补时分秒
      if (isYMD) {
        result.start += " 00:00:00";
        result.end += " 23:59:59";
      }
    }

    // 自动赋值到目标字段（call 调用时生效）
    if (
      dateField &&
      rangeFields &&
      Array.isArray(rangeFields) &&
      rangeFields.length === 2
    ) {
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
  formatDate(date, type = 0, format) {
    const _date = new Date(date);
    if (_date.toString() === "Invalid Date") return undefined;

    // 优先使用自定义格式，否则按 type 匹配
    const finalFormat =
      format || (type === 1 ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss");
    return dayjs(_date).format(finalFormat);
  },
};

export default dateUtils;
