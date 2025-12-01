<template>
  <el-col v-bind="$attrs">
    <slot></slot>
  </el-col>
</template>

<script>
  export default {
    name: "VoCol",
    props: {},
  };
</script>
