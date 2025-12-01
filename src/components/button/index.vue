<template>
  <el-button
    class="vo-button"
    :type="calcType"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot v-if="$scopedSlots.default"></slot>
    <span v-else>{{ text }}</span>
  </el-button>
</template>

<script>
  export default {
    name: "VoButton",
    props: {
      text: String,
      type: {
        type: "" | "primary" | "success" | "info" | "warning" | "danger",
        default: "",
      },
      primary: Boolean,
      success: Boolean,
      info: Boolean,
      warning: Boolean,
      danger: Boolean,
    },
    computed: {
      calcType() {
        let _type = "";
        if (this.primary) _type = "primary";
        if (this.success) _type = "success";
        if (this.info) _type = "info";
        if (this.warning) _type = "warning";
        if (this.danger) _type = "danger";
        return this.type || _type;
      },
    },
  };
</script>
