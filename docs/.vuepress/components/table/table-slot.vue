<template>
  <attr-table type="slot" :data="slots"></attr-table>
</template>
<script>
  import { slots } from "./attrs";

  export default {
    data() {
      return {
        slots,
      };
    },
  };
</script>
