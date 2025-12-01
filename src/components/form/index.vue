<template>
  <div class="vo-form">
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
            v-for="(itm, idx) in formList"
            ref="voFormItemRef"
            :style="calcStyle(itm)"
            :key="idx"
            :options="itm.options"
            :type="itm.type"
            :rows="itm.rows"
            :rules="rules"
            :len="itm.len"
            :label="itm.label"
            :field="itm.key"
            :multiple="itm.multiple"
            :picker="itm.picker"
            :disabled="itm.disabled"
            :date-picker="itm.datePicker"
            :upload-action="itm.uploadAction || defaultUploadUploadAction"
            :interceptors="itm.interceptors || defaultUploadInterceptors"
            :limit="itm.limit || defalutUploadLimit"
            :size="itm.size || defalutUploadSize"
            :accept="itm.accept || defalutUploadAccept"
            @change="(value) => handleChangeField(value, itm.key)"
            @clear="(value) => handleClearField(value, itm.key)"
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
        <div class="middle-btns">
          <template v-if="!$slots['middle-btns']">
            <vo-button text="重置" @click="handleReset" />
            <vo-button text="提交" primary @click="handleSubmit" />
          </template>
          <slot v-else name="middle-btns"></slot>
        </div>
        <div class="right-btns">
          <slot name="right-btns"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VoButton from "../button/index.vue";
  import VoFormItem from "./formItem.vue";
  export default {
    name: "VoForm",
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
      // 每行占多少个formItem
      col: {
        type: Number,
        default: 2,
      },
      // 文件上传
      defaultUploadUploadAction: {
        type: String,
        default: "",
      },
      defaultUploadInterceptors: {
        type: Object,
        default: null,
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false,
      },
      // 最多上传图片数量
      defalutUploadLimit: {
        type: Number,
        default: 1,
      },
      // 图片大小限制（MB）
      defalutUploadSize: {
        type: Number,
        default: 2,
      },
      defalutUploadAccept: {
        type: String,
        // default: "image/png",
        default: "image/png,image/jpg",
      },
    },
    data() {
      return {
        form: {},
        rules: {},
        formList: [],
      };
    },
    computed: {
      title() {
        let title = "";
        if (this.config && this.config.title) {
          title = this.config.title;
        }
        return title;
      },
      calcStyle() {
        return ({ col }) => {
          let _style = {};
          _style.width = `calc(100% / ${col || this.col})`;
          return _style;
        };
      },
    },
    created() {
      this.initFields();
    },
    methods: {
      /**
       * [操作] 处理表单字段
       */
      initFields() {
        this.formList = this.fields.map((field) => {
          // 校验规则
          let _rules = [];
          if (typeof field.required == "boolean" && field.required) {
            let message = `请输入${field.label}`;
            if (["checkbox", "select", "radio", "switch"].includes(field.type))
              message = `请选择${field.label}`;
            _rules.push({
              required: true,
              message,
              trigger: ["blur", "change"],
            });
          }
          //
          if (field.rules && field.rules instanceof Array) {
            _rules.push(...field.rules);
          }

          this.$set(this.rules, field.key, _rules);

          return field;
        });
      },
      /**
       * 查询条件变动
       */
      handleChangeField({ value, key }) {
        // let field = arguments[1];
        // console.log("change:index", this.form);
        // this.form[key] = value;
        this.$set(this.form, key, value);
        // 说明：表单值变动，重置查询按钮标识
        this.$emit("change", this.form, { value, key });
      },
      /**
       * 重置
       */
      handleReset() {
        // let refs = this.$refs.voFormItemRef;
        // console.log(refs);
        this.$refs.voFormItemRef.forEach((ref) => ref.resetFields());
      },
      /**
       * 提交
       */
      async handleSubmit() {
        try {
          let validates = this.$refs.voFormItemRef.map((ref) => ref.validate());
          await Promise.all(validates);
          // console.log(this.form);
          //
          this.$emit("submit", this.form);
        } catch (error) {
          this.$message.error("请填写正确后再提交");
        }
      },
    },
  };
</script>

<style lang="scss">
  .vo-form {
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
          // width: calc(100% / 3);
        }
        .el-form {
          display: flex;
          .el-form-item {
            // margin: 0 10px;
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
          // border-radius: 16px;
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
