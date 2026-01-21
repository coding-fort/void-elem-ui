<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <vo-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </vo-badge>
    <vo-badge :value="3" class="item">
      <el-button size="small">回复</el-button>
    </vo-badge>
    <vo-badge :value="1" class="item" type="primary">
      <el-button size="small">评论</el-button>
    </vo-badge>
    <vo-badge :value="2" class="item" type="warning">
      <el-button size="small">回复</el-button>
    </vo-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <vo-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <vo-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </comp-wrap>
</template>

<script>
  import VoBadge from "../../../../src/components/badge/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoBadge,
      CompWrap,
    },
    data() {
      return {
        desc: `展示新消息数量。`,
        codeStr: `
<vo-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
</vo-badge>
<vo-badge :value="3" class="item">
  <el-button size="small">回复</el-button>
</vo-badge>
<vo-badge :value="1" class="item" type="primary">
  <el-button size="small">评论</el-button>
</vo-badge>
<vo-badge :value="2" class="item" type="warning">
  <el-button size="small">回复</el-button>
</vo-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      评论
      <vo-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      回复
      <vo-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>`,
      };
    },
  };
</script>

<style>
  .item {
    margin-right: 40px;
    margin-top: 10px;
  }
</style>
