<template>
  <div class="comp-wrap-container" ref="wrap">
    <h2>{{ title }}</h2>
    <!-- <p v-html="desc"></p> -->
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  // docs/.vuepress/components/utils/comp-wrap.vue

  export default {
    props: {
      title: {
        type: String,
        default: "基础方法",
      },
    },
  };
</script>

<style lang="scss"></style>
