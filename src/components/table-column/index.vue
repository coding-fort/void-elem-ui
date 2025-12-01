<template>
  <el-table-column v-bind="$attrs">
    <slot></slot>
  </el-table-column>
</template>

<script>
  export default {
    name: "VoTableColumn",
    props: {},
  };
</script>
