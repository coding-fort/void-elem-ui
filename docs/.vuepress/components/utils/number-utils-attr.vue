<template>
  <div>
    <attr-table
      v-if="num === 1"
      title="formatInputNumber Options"
      :data="attrsFn01"
    />
    <attr-table
      v-if="num === 2"
      title="transformMoney Options"
      :data="attrsFn02"
    />
  </div>
</template>
<script>
  import { attrsFn01, attrsFn02 } from "./number-utils-attr";

  export default {
    props: {
      num: {
        type: Number,
      },
    },
    data() {
      return {
        attrsFn01,
        attrsFn02,
      };
    },
  };
</script>
