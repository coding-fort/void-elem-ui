<template>
  <attr-table :data="attrs"></attr-table>
</template>
<script>
  import attrs from "./attrs";

  export default {
    data() {
      return {
        attrs,
      };
    },
  };
</script>
