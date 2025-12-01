/**
 * 复制文本到剪贴板（现代浏览器优先）
 * @param {string} text - 要复制的文本
 * @returns {Promise<void>} - 复制成功/失败的 Promise
 */
const copyToClipboard = (text) => {
  // 校验文本（避免空文本复制）
  if (!text || typeof text !== "string") {
    return Promise.reject(new Error("请传入有效的文本"));
  }

  // 优先使用 Clipboard API
  if (navigator.clipboard) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("复制成功！");
      })
      .catch((err) => {
        console.error("复制失败（Clipboard API）：", err);
        return Promise.reject(err);
      });
  }

  // 降级方案：document.execCommand（兼容旧浏览器）
  return new Promise((resolve, reject) => {
    // 创建临时 textarea 元素（不插入 DOM 也可，但插入后兼容性更好）
    const textarea = document.createElement("textarea");
    // 设置文本内容
    textarea.value = text;
    // 隐藏临时元素（避免影响页面）
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    textarea.style.left = "-999px";
    // 插入 DOM（部分浏览器要求元素必须在 DOM 中才能复制）
    document.body.appendChild(textarea);
    // 选中文本
    textarea.select();
    textarea.setSelectionRange(0, text.length); // 兼容移动设备

    try {
      // 执行复制命令（返回布尔值）
      const success = document.execCommand("copy");
      if (success) {
        console.log("复制成功（execCommand 降级）！");
        resolve();
      } else {
        reject(new Error("复制失败，请手动复制"));
      }
    } catch (err) {
      console.error("复制失败（execCommand 报错）：", err);
      reject(err);
    } finally {
      // 移除临时元素（清理 DOM）
      document.body.removeChild(textarea);
    }
  });
};

export default copyToClipboard;
