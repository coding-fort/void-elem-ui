<template>
  <comp-wrap :title="title" :desc="desc" :code-str="codeStr">
    <div>
      <vo-link disabled>默认链接</vo-link>
      <vo-link type="primary" disabled>主要链接</vo-link>
      <vo-link type="success" disabled>成功链接</vo-link>
      <vo-link type="warning" disabled>警告链接</vo-link>
      <vo-link type="danger" disabled>危险链接</vo-link>
      <vo-link type="info" disabled>信息链接</vo-link>
    </div>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        title: `禁用状态`,
        desc: `文字链接不可用状态。`,
        codeStr: `<template>
  <div>
    <vo-link disabled>默认链接</vo-link>
    <vo-link type="primary" disabled>主要链接</vo-link>
    <vo-link type="success" disabled>成功链接</vo-link>
    <vo-link type="warning" disabled>警告链接</vo-link>
    <vo-link type="danger" disabled>危险链接</vo-link>
    <vo-link type="info" disabled>信息链接</vo-link>
  </div>
  `,
      };
    },
  };
</script>
