<template>
  <el-badge class="vo-badge" v-bind="$attrs" :value="calcValue">
    <slot></slot>
  </el-badge>
</template>

<script>
  export default {
    name: "VoBadge",
    props: {
      text: [String, Number],
      value: [String, Number],
    },
    computed: {
      calcValue() {
        return this.value || this.text;
      },
    },
  };
</script>
