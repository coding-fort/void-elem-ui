<template>
  <div class="vo-input-range">
    <el-popover
      v-model="isPop"
      popper-class="vo-popover"
      placement="bottom-start"
      trigger="hover"
    >
      <!-- 弹窗元素 -->
      <div class="pop-element" @click="isPop = true">
        <div class="pop-input">
          <el-input-number
            v-model.trim="minNum"
            :precision="2"
            :controls="false"
            :max="max"
            placeholder="请输入起始值"
            @change="(val) => handleChange(val, 0)"
          ></el-input-number>
          <span class="vo-range-separator">-</span>
          <el-input-number
            v-model.trim="maxNum"
            :precision="2"
            :controls="false"
            :max="max"
            placeholder="请输入结束值"
            @change="(val) => handleChange(val, 1)"
          ></el-input-number>
        </div>
        <p class="pop-tip">注：起始值必须小于等于结束值</p>
      </div>
      <!-- 页面元素 -->
      <div slot="reference" class="page-element">
        <el-input
          v-model="minField"
          disabled
          class="min"
          placeholder="请输入"
        ></el-input>
        <span class="vo-range-separator">至</span>
        <el-input
          v-model="maxField"
          disabled
          class="max"
          placeholder="请输入"
        ></el-input>
        <i
          class="el-input__icon el-icon-circle-close vo-input-range__clear"
          @click.stop="handleClear"
        ></i>
      </div>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: "VoInputRange",
    props: {
      max: {
        type: [Number, String],
        default: 9999999999999,
      },
    },
    data() {
      return {
        isPop: false,
        minNum: undefined,
        maxNum: undefined,

        minField: undefined,
        maxField: undefined,
      };
    },
    watch: {
      isPop(flag) {
        // 说明： 打开弹窗，赋值
        if (flag) {
          if (this.minField && this.maxField) {
            this.minNum = +this.minField;
            this.maxNum = +this.maxField;
          }
        }
        // 说明： 关闭弹窗时，按条件重置可输入框
        if (!flag) {
          if (
            (this.minNum || this.minNum === 0) &&
            !(this.maxNum || this.maxNum === 0)
          ) {
            this.minNum = undefined;
          }
          if (
            !(this.minNum || this.minNum === 0) &&
            (this.maxNum || this.maxNum === 0)
          ) {
            this.maxNum = undefined;
          }
          // 说明： 起始值大于结束值，清空
          if (
            (this.minNum || this.minNum === 0) &&
            (this.maxNum || this.maxNum === 0) &&
            this.minNum > this.maxNum
          ) {
            this.minNum = undefined;
            this.maxNum = undefined;
          }
        }
      },
    },
    methods: {
      /**
       * [输入监听]
       */
      handleChange(val, type) {
        if (val || val === 0) val = +val;
        // 最小值
        if (!type) {
          this.minNum = val;
        }
        // 最大值
        if (type) {
          this.maxNum = val;
        }

        // 说明： 可操作输入框均有值，将值赋值到表单元素中
        if (
          (this.minNum || this.minNum === 0) &&
          (this.maxNum || this.maxNum === 0)
        ) {
          if (this.minNum <= this.maxNum) {
            this.minField = this.minNum.toFixed(2);
            this.maxField = this.maxNum.toFixed(2);
          }
        }
        // 说明： 更新值到表单字段
        if (
          (this.minField || this.minField === 0) &&
          (this.maxField || this.maxField === 0)
        ) {
          this.$emit("update:value", [this.minField, this.maxField]);
        } else {
          this.$emit("update:value", []);
        }
      },
      /**
       * [清空]
       */
      handleClear() {
        this.minNum = undefined;
        this.maxNum = undefined;
        this.minField = undefined;
        this.maxField = undefined;
        this.$emit("update:value", []);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .vo-input-range {
    .page-element {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      display: flex;
      position: relative;
      &:hover {
        border-color: #c0c4cc;
        .vo-input-range__clear {
          display: block;
        }
      }
    }
    .min,
    .max {
      ::v-deep input {
        background-color: #fff;
        border: unset;
        color: #606266;
        cursor: text;
      }
    }
    .vo-range-separator {
      padding: 0 3px;
    }
    // 清空按钮
    .vo-input-range__clear {
      color: #c0c4cc;
      cursor: pointer;
      display: none;
      position: absolute;
      right: 5px;
      &:hover {
        color: #909399;
      }
    }
  }
</style>

<style lang="scss">
  .vo-popover .pop-element {
    .pop-tip {
      color: #f56c6c;
      margin-top: 3px;
    }
    .pop-input {
      align-items: center;
      display: flex;
      width: 350px;
      .vo-range-separator {
        padding: 0 3px;
      }
      .el-input-number {
        input {
          text-align: left;
        }
      }
    }
  }
</style>
