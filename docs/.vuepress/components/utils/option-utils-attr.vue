<template>
  <div>
    <attr-table
      v-if="num === 1"
      title="transformOption Options"
      :data="attrsFn01"
    />
    <attr-table
      v-if="num === 2"
      type="event"
      title="enumMapper Events"
      :data="attrsFn02"
    />
  </div>
</template>
<script>
  import { attrsFn01, attrsFn02 } from "./option-utils-attr";

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
