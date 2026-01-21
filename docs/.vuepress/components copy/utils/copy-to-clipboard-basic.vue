<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <el-input
      v-model="value"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
    ></el-input>
    <vo-button class="mt-10" @click="handleCopy" type="primary" size="mini">
      复制
    </vo-button>
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  import copyToClipboard from "../../../../src/utils/copyToClipboard";
  export default {
    components: {
      CompWrap,
      VoButton,
    },
    data() {
      return {
        desc: ``,
        codeStr: `
<el-input
    v-model="value"
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
></el-input>
<vo-button @click="handleCopy">复制</vo-button>

import copyToClipboard from "@/src/utils/copyToClipboard";

export default {
    methods: {
      handleCopy() {
        copyToClipboard(this.value);
      },
    }
}
        `,
        value: "Hello World!",
      };
    },
    methods: {
      handleCopy() {
        copyToClipboard(this.value);
        this.$message.success(`复制成功，复制文本为：${this.value}`);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
