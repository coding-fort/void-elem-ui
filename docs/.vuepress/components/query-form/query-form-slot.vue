<template>
  <attr-table type="slot" :data="attrs"></attr-table>
</template>
<script>
  import { slots } from "./attrs";

  export default {
    data() {
      return {
        attrs: slots,
      };
    },
  };
</script>
