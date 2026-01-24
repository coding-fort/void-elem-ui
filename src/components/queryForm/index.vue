<template>
  <div class="vo-query-form">
    <!-- form - {{ form }} -->
    <!-- queryList - {{ queryList }}<br /> -->
    <!-- fields - {{ fields }} -->
    <div class="form-wrap">
      <div class="form-title" v-if="title">
        {{ title }}
        <hr />
      </div>
      <slot name="after-title"></slot>
      <div class="form-main">
        <template>
          <!-- // [TODO] 多个表单中公用一个字段，且OPTIONS 不一致时，该如何优雅切换 -->
          <vo-form-item
            v-for="(itm, idx) in queryList"
            :ref="itm.type == 'inputrange' ? 'form-input-range' : 'form-item'"
            :key="idx"
            :options="itm.options || itm.OPTIONS"
            :type="itm.type || itm.TYPE"
            :form="form"
            :rules="rules"
            :len="itm.len || itm.LEN"
            :label-width="itm.labelWidth || labelWidth"
            :label-position="itm.labelPosition || labelPosition"
            :label="itm.label || itm.LABEL"
            :field="itm.key || itm.KEY"
            :multiple="itm.multiple || itm.MULTIPLE"
            :picker="itm.picker"
            :date-picker="itm.datePicker"
            @change="(value) => handleChangeField(value, itm.key || itm.KEY)"
            @clear="(value) => handleClearField(value, itm.key || itm.KEY)"
          >
            <!-- 跨组件插槽 -->
            <template
              v-if="itm.TYPE == 'slot'"
              :slot="itm.KEY"
              slot-scope="{ props }"
            >
              <slot :name="itm.KEY" :props="{ ...props, form, key: itm.KEY }">
              </slot>
            </template>
          </vo-form-item>
        </template>
      </div>
      <div class="form-btns">
        <div class="left-btns">
          <slot name="left-btns"></slot>
        </div>
        <div class="right-btns">
          <slot name="right-btns"></slot>
          <vo-button @click="handleReset">重置</vo-button>
          <vo-button
            v-if="fields.length > 3"
            class="btn-query"
            type=""
            @click="isCollapse = !isCollapse"
          >
            {{ isCollapse ? "隐藏" : "展开" }}
          </vo-button>
          <vo-button class="btn-query" type="primary" @click="handleQuery">
            {{ queryBtn }}
          </vo-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VoButton from "../button/index.vue";
  import VoFormItem from "./formItem.vue";
  export default {
    name: "VoQueryForm",
    components: {
      VoButton,
      VoFormItem,
    },
    props: {
      fields: {
        type: Array,
        default: () => [],
      },
      config: {
        type: Object,
        default: () => ({}),
      },
      modify: {
        type: Boolean,
        default: true,
      },
      labelWidth: {
        type: String,
        default: "150px",
      },
      labelPosition: {
        type: "right" | "left" | "top",
        default: "right",
      },
    },

    data() {
      return {
        form: {},
        rules: {},
        queryList: [],
        isCollapse: false,
      };
    },
    watch: {
      isCollapse: {
        handler(flag) {
          let curList = this.fields;
          let len = curList.length;
          if (!flag && len >= 4) {
            this.queryList = curList.slice(0, 3);
          } else {
            this.queryList = curList;
          }
        },
      },
      // 说明： 用于监听表单动态变化
      modify: {
        handler(flag) {
          if (flag) {
            this.isCollapse = false;
            this.queryList = this.fields.slice(0, 3);
            this.initQueryFields();
          }
        },
        immediate: true,
      },
    },
    computed: {
      queryBtn() {
        let btn = "查询";
        if (this.config && this.config.queryBtn) {
          btn = this.config.queryBtn;
        }
        return btn;
      },
      title() {
        let title = "";
        if (this.config && this.config.title) {
          title = this.config.title;
        }
        return title;
      },
    },
    created() {},
    methods: {
      /**
       * [操作] 处理查询条件字段
       */
      initQueryFields() {
        let fields = this.fields.map((item) => {
          if (item.type == "select" || item.TYPE == "select") {
            // 说明： 枚举值添加“全部”选项
            let options = item.options || item.OPTIONS;
            if (!options) return item;
            let defaultOption = options.find(
              (option) => option.value === "" || option.label === "全部",
            );
            if (!defaultOption) {
              options.unshift({ value: "", label: "全部" });
            }
            if (item.options) item.options = options;
            if (item.OPTIONS) item.OPTIONS = options;
          }

          return item;
        });
        this.$emit("update:fields", fields);
        // 说明： 表单更新成功
        this.$emit("update:modify", false);
      },
      /**
       * [操作] 重置
       */
      handleReset() {
        this.form = {};
        // 区域金额未清空
        this.$refs["form-input-range"]?.forEach((itm) => {
          itm.$children[0].$children[0].$children[1].handleClear();
        });
        this.$emit("reset", true);
      },
      /**
       * [操作] 查询
       */
      handleQuery() {
        this.$emit("query", this.form);
      },
      /**
       * 查询条件变动
       */
      handleChangeField() {
        let field = arguments[1];
        // if (this.form[field] === "") this.form[field] = undefined;
        // 说明：表单值变动，重置查询按钮标识
        this.$emit("update:query", false);
        this.$emit("change", this.form, field);
      },
      /**
       * 清空按钮
       * @version V1.2.0_1.2_0320
       */
      handleClearField() {
        let field = arguments[1];
        // console.log("--------------args", arguments);
        // if (this.form[field] === "")
        this.form[field] = undefined;
        // 说明：表单值变动，重置查询按钮标识
        // this.$emit("update:query", false);
        // this.$emit("change", this.form, field);
      },
      /**
       * 重置
       */
      handleResetFields() {
        this.form = {};
        // let refs = this.$refs["form-item"];
        // this.$log("--------------resetFields:", refs);
        // refs.forEach((ref) => {
        // this.$log("---------ref:", ref);
        // ref.refs["form-item"].forEach((rf) => {
        // ref.$refs["form"].resetFields();
        // ref.$refs["form"].form = {};
        // this.$nextTick(() => {
        // this.queryList.forEach((item) => {
        //   this.$set(this.form, item.key, "");
        // });
        // });
        // });
        // });
      },
    },
  };
</script>

<style lang="scss">
  .vo-query-form {
    .form-wrap {
      background-color: #fff;
      border: 1px solid #d9dbdd;
      border-radius: 4px;
      margin: 10px;
      padding: 10px;
      & .form-main {
        display: flex;
        flex-wrap: wrap;
        & > div {
          width: calc(100% / 3);
        }
        .el-form {
          display: flex;
          .el-form-item {
            margin: 0 10px;
            width: 340px;
            .el-select {
              width: 100%;
            }
          }
        }
      }
      // 按钮组
      & .form-btns {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        & button {
          border-radius: 16px;
          height: 32px;
          padding: 0px 40px;
        }
        .left-btns {
        }
        .right-btns {
        }
      }
    }
  }
</style>
