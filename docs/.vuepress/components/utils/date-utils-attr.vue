<template>
  <div>
    <attr-table
      v-if="num === 1"
      title="formatDate Options"
      :data="attrsFn01"
    ></attr-table>
    <attr-table
      v-if="num === 2"
      title="transformQueryDate Options"
      :data="attrsFn02"
    ></attr-table>
  </div>
</template>
<script>
  import { attrsFn01, attrsFn02 } from "./date-utils-attr";

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
