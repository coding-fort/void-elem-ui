const path = require("path");
const fs = require("fs");

/**
 * 自动扫描 views 目录下的所有 md 文件，生成侧边栏 children 数组
 * @param {string} baseDir - 项目根目录（相对于 config.js 的路径）
 * @param {string} targetDir - 要扫描的目标目录（如 'views'）
 * @returns {string[]} 格式化后的侧边栏 children 数组（如 ["/views/icon", "/views/button"]）
 */
function autoGenerateSidebarChildren(targetDir) {
  // 简化路径：__dirname 是 .vuepress 目录，../ 直接回到 docs 目录，再拼接 views
  const fullTargetDir = path.resolve(__dirname, "../../", targetDir);

  const sidebarChildren = [];

  function scanDir(currentDir) {
    // 先判断目录是否存在，避免 ENOENT 错误
    if (!fs.existsSync(currentDir)) {
      console.warn(`[警告] 目录不存在：${currentDir}，跳过扫描`);
      throw new Error(`[警告] 目录不存在：${currentDir}，跳过扫描`);
      return;
    }

    const files = fs.readdirSync(currentDir);
    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        scanDir(filePath); // 递归子目录
      } else if (path.extname(file) === ".md" && file !== "README.md") {
        // 格式化路径：从 docs 目录开始截取，开头加 "/"
        const relativePath = path
          .relative(
            path.resolve(__dirname, "../../"), // 基准目录：docs
            filePath
          )
          .replace(/\.md$/, ""); // 去掉 .md 后缀
        sidebarChildren.push(`/${relativePath}`);
      }
    });
  }

  scanDir(fullTargetDir);
  sidebarChildren.sort((a, b) => a.localeCompare(b));
  // console.log("sidebarChildren::", sidebarChildren);
  return sidebarChildren;
}

module.exports = {
  autoGenerateSidebarChildren,
};
