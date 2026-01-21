<template>
  <div>
    <h2>图标集合</h2>
    <ul class="icon-list">
      <li
        v-for="(icon, idx) in officialIcons"
        :key="idx"
        @click="handleClick(icon)"
      >
        <span>
          <i :class="icon"></i><span class="icon-name">{{ icon }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import officialIcons from "./officialIcon";
  import copyToClipboard from "../../../../src/utils/copyToClipboard";
  export default {
    data() {
      return {
        officialIcons,
      };
    },
    methods: {
      handleClick(iconName) {
        copyToClipboard(iconName);
        this.$message.success(`Icon Name: ${iconName} 已复制到剪贴板`);
      },
    },
  };
</script>

<style lang="scss">
  $base-color: #5cb6ff;
  .icon-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    li {
      border: 1px solid #eee;
      box-sizing: border-box;
      //   height: 60px;
      list-style: none;
      padding: 10px;
      width: calc(100% / 6);
      &:nth-of-type(n + 1) {
        border-left-width: 0;
        border-top-width: 0;
      }
      &:nth-of-type(6n + 1) {
        border-left-width: 1px;
      }
      &:nth-of-type(-n + 6) {
        border-top-width: 1px;
      }
      &:hover {
        span > * {
          color: $base-color;
          cursor: pointer;
        }
      }
      span {
        display: block;
        width: 100%;
        & > * {
          display: block;
          text-align: center;
        }
        i {
          color: #666;
          font-size: 28px;
          margin-bottom: 10px;
        }
        span {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
</style>
