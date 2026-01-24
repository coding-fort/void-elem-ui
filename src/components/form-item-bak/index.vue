<template>
  <el-form-item class="vo-form-item" v-bind="$attrs">
    <slot></slot>
  </el-form-item>
</template>

<script>
  export default {
    name: "VoFormItem",
    props: {},
  };
</script>
