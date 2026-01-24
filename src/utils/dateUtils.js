/**
 * 日期处理工具集
 */
import dayjs from "dayjs"; // 导入 dayjs

/**
 * 判断数组元素是否有两个两元素
 * @param {Array} arr
 * @returns {boolean} 返回true 表示有两个两元素
 */
function isArrayWithTwoElements(arr) {
  return Array.isArray(arr) && arr.length === 2;
}

/**
 * 判断日期是否为有效日期
 * @param {string|number|Date} date
 * @returns {boolean} 返回 true 表示有效日期
 */
function isValidDate(date) {
  const _date = new Date(date);
  // 非日期判断
  return !isNaN(_date.getTime());
}

/**
 * 日期字段格式化
 * @param {string|number|Date} date 日期字符串/时间戳
 * @param {object} [options] 配置对象
 * @param {0|1} [options.formatType=1] 格式化方式，1-年月日，0-年月日时分秒
 * @param {string} [options.formatStr] 自定义日期格式字符串
 * @param {boolean} [options.autoAddTime] 是否自动添加时间
 * @param {0|1} [options.timeSuffixPosition=0] 添加类型，0-00:00:00，1-23:59:59
 * @param {string} [options.timeSuffixStr] 自定义添加时间格式字符串
 * @returns {string|undefined} 格式化后的日期，无效日期返回 undefined
 */
function formatDate(date, options = {}) {
  const {
    formatType = 1,
    formatStr,
    autoAddTime,
    timeSuffixPosition = 0,
    timeSuffixStr,
  } = options;
  // 非日期判断
  if (!isValidDate(date)) {
    return undefined;
  }
  const _date = new Date(date);
  // 确定基础格式：只有未传 formatStr 时，才用 formatType
  let baseFormat = formatStr;
  if (!formatStr) {
    baseFormat = formatType === 1 ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss";
  }
  // 格式化
  let result = dayjs(_date).format(baseFormat);
  // 仅当日格式（不含时间标记）且开启 autoAddTime 时追加时间
  if (autoAddTime && !/[Hhmsa]/.test(baseFormat)) {
    const suffixes = [" 00:00:00", " 23:59:59"];
    const pos = [0, 1].includes(timeSuffixPosition) ? timeSuffixPosition : 0;
    let suffix = timeSuffixStr || suffixes[pos];
    result += suffix;
  }
  return result;
}

/**
 * 查询条件日历字段转换
 * 功能1: 格式化日期数组
 * 功能2：绑定this，删除field 字段，并添加resetFields 数组字段到this
 * @param {[string|number|Date, string|number|Date]} date 日期数组
 * @param {object} [options] 配置对象
 * @param {string} [options.field] 功能2 使用，this 属性
 * @param {0|1} [options.formatType=1] 格式化方式，1-年月日，0-年月日时分秒
 * @param {string} [options.formatStr] 自定义日期格式字符串
 * @param {boolean} [options.autoAddTime] 是否自动添加时间
 * @param {[string, string]} [options.resetFields] 功能2 使用，为this 添加属性
 * @returns {object} { start, end } 格式化后的日期范围
 * 用法1：transformQueryDate(['2000-01-01', '2000-01-02'], { autoAddTime: true });
 * 用法2：transformQueryDate.call(
            {date: '2000-01-01'}, 
            ['2000-01-01', '2000-01-02'],
            {
              autoAddTime: true,
              field: "date",
              resetFields: ["start", "end"]
            }
          )
 */
function transformQueryDate(date, options = {}) {
  const {
    field, // 2
    formatType = 1, // 1+2
    formatStr, // 1+2
    autoAddTime, // 1+2
    resetFields = ["start", "end"], // 2
  } = options;
  // 功能1: 格式化日期数组
  // 构建初始化
  const result = { start: "", end: "" };

  // 空值/无效日期数组处理：清空目标字段
  if (!isArrayWithTwoElements(date)) {
    return result;
  }
  // 提取时间
  const [startDate, endDate] = date;
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return result;
  }

  // 构建共享格式化选项（仅包含 formatDate 需要的）
  const formatOptions = { formatType, formatStr, autoAddTime };

  // 格式化日期
  result.start = formatDate(startDate, {
    ...formatOptions,
    timeSuffixPosition: 0,
  });
  result.end = formatDate(endDate, {
    ...formatOptions,
    timeSuffixPosition: 1,
  });
  // 功能2：绑定this，删除field 字段，并添加resetFields 数组字段到this
  if (!field || !isArrayWithTwoElements(resetFields)) {
    return result;
  }
  // 绑定this 情况使用
  const _that = this;
  if (typeof _that === "object" && _that !== null) {
    // 自动赋值到目标字段（call 调用时生效）
    _that[resetFields[0]] = result.start;
    _that[resetFields[1]] = result.end;
    delete _that[field];
  }
}

export default {
  formatDate,
  isValidDate,
  transformQueryDate,
};
