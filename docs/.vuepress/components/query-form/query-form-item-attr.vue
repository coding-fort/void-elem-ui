<template>
  <attr-table title="QueryFormItem Attributes" :data="attrs"></attr-table>
</template>
<script>
  import { queryFormItemAttrs } from "./attrs";

  export default {
    data() {
      return {
        attrs: queryFormItemAttrs,
      };
    },
  };
</script>
