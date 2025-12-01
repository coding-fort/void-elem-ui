<template>
  <el-link v-bind="$attrs">
    <slot></slot>
  </el-link>
</template>

<script>
  export default {
    name: "VoLink",
    props: {},
  };
</script>
