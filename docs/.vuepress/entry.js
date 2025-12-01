// .vuepress/entry.js
// 最优先加载：手动注入 global、process、Buffer
import process from "process";
import { Buffer } from "buffer";

// 强制挂载到 window，让后续加载的 buffer、crypto 能直接访问
window.global = window;
window.process = process;
window.Buffer = Buffer;

// 引入 VuePress 原生入口（必须，否则会丢失 VuePress 原有功能）
import "@vuepress/core/lib/client/entry";
