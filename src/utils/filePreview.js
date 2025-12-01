/**
 * 预览本地File对象
 * @description 预览本地File对象，返回Promise，resolve为base64格式的图片URL
 * @param {*} file
 * @returns
 */
export const previewLocalFile = (file) => {
  return URL.createObjectURL(file);
};
