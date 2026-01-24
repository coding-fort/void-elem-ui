<template>
  <comp-wrap title="" :desc="desc" :code-str="codeStr">
    <el-input
      v-model="value"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
    ></el-input>
    <vo-button
      class="mt-10"
      @click="handleCopy"
      type="primary"
      size="mini"
      text="复制"
    />
  </comp-wrap>
</template>

<script>
  //
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<!-- -->
<el-input
    v-model="value"
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
/>
<vo-button @click="handleCopy" text="复制" />

import { vutil as $vutil } from "void-elem-ui";
export default {
    methods: {
      handleCopy() {
        $vutil.copyToClipboard(this.value);
      },
    }
}
        `,
        value: "Hello World!",
      };
    },
    methods: {
      handleCopy() {
        this.$vutil.copyToClipboard(this.value);
        this.$message.success(`复制成功，复制文本为：${this.value}`);
      },
    },
  };
</script>
