<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <div>
      <vo-link href="https://element.eleme.io" target="_blank"
        >默认链接</vo-link
      >
      <vo-link type="primary">主要链接</vo-link>
      <vo-link type="success">成功链接</vo-link>
      <vo-link type="warning">警告链接</vo-link>
      <vo-link type="danger">危险链接</vo-link>
      <vo-link type="info">信息链接</vo-link>
    </div>
  </comp-wrap>
</template>

<script>
  import VoLink from "../../../../src/components/link/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoLink,
      CompWrap,
    },
    data() {
      return {
        desc: `基础的文字链接用法。`,
        codeStr: `
<div>
  <vo-link href="https://element.eleme.io" target="_blank">默认链接</vo-link>
  <vo-link type="primary">主要链接</vo-link>
  <vo-link type="success">成功链接</vo-link>
  <vo-link type="warning">警告链接</vo-link>
  <vo-link type="danger">危险链接</vo-link>
  <vo-link type="info">信息链接</vo-link>
</div>
`,
      };
    },
  };
</script>
