<template>
  <comp-wrap
    title="基于断点的隐藏类"
    :desc="desc"
    :code-str="codeStr"
    :collapse="true"
  >
  </comp-wrap>
</template>
<script>
  import VoRow from "../../../../src/components/row/index.vue";
  import VoCol from "../../../../src/components/col/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoRow,
      VoCol,
      CompWrap,
    },
    data() {
      return {
        desc: `Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。`,
        codeStr: `
如果需要，请自行引入以下文件：

import 'element-ui/lib/theme-chalk/display.css';

包含的类名及其含义为：

hidden-xs-only - 当视口在 xs 尺寸时隐藏
hidden-sm-only - 当视口在 sm 尺寸时隐藏
hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
hidden-md-only - 当视口在 md 尺寸时隐藏
hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
hidden-lg-only - 当视口在 lg 尺寸时隐藏
hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
hidden-xl-only - 当视口在 xl 尺寸时隐藏
            `,
      };
    },
  };
</script>
<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    background-color: #f9fafc;
    padding: 10px 0;
  }
</style>
