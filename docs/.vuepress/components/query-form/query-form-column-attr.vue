<template>
  <attr-table title="ColumnObject" :data="attrs"></attr-table>
</template>
<script>
  import { columnObjectAttrs } from "./attrs";

  export default {
    data() {
      return {
        attrs: columnObjectAttrs,
      };
    },
  };
</script>
