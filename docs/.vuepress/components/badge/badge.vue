<template>
  <vo-badge v-bind="$attrs"></vo-badge>
</template>

<script>
  import VoBadge from "../../../../src/components/badge/index.vue";
  export default {
    name: "Badge",
    components: {
      VoBadge,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
