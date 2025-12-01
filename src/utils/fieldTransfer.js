/**
 * 通用转换函数：根据配置表转换数据
 * @param {*} rawData 原始数据（后端返回的格式）
 * @param {*} fieldMap 字段映射表（key=前端字段，value=后端字段或转换逻辑）
 * @returns 转换后的前端数据
 */
export function transformData(rawData, fieldMap) {
  const transformed = {};
  Object.keys(fieldMap).forEach((frontKey) => {
    transformed[frontKey] = rawData[fieldMap[frontKey]];
  });
  return transformed;
}

/**
 * 通用转换函数：根据配置表转换数据
 * @param {*} frontData 前端数据（符合前端格式）
 * @param {*} reverseMap 字段映射表（key=前端字段，value=后端字段）
 * @returns 转换后的后端数据（符合后端提交格式）
 */
export function reverseTransformData(frontData, reverseMap) {
  const rawData = {};
  Object.keys(reverseMap).forEach((frontKey) => {
    rawData[reverseMap[frontKey]] = frontData[frontKey];
  });
  return rawData;
}

export default {
  transformData,
  reverseTransformData,
};
