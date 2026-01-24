<template>
  <div class="vo-query-form-item">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      :label-position="labelPosition"
    >
      <el-form-item
        :label="label"
        :prop="field"
        :label-width="labelWidth"
        :style="customStyle"
        class="edit-field"
        :class="`is-${
          ['top', 'left', 'right'].includes(labelPosition)
            ? labelPosition
            : 'right'
        }`"
      >
        <!-- 插槽 -->
        <template>
          <!-- 输入框 -->
          <template v-if="type == 'input' || !type">
            <el-input
              v-model.trim="form[field]"
              placeholder="请输入"
              clearable
              :disabled="isDisabled"
              :maxlength="len"
              @change="$emit('change', { value: form[field], key: field })"
            ></el-input>
          </template>
          <!-- 范围输入框 -->
          <template v-if="type == 'inputrange'">
            <vo-input-range
              :value.sync="form[field]"
              placeholder="请输入"
              clearable
              :disabled="isDisabled"
              :maxlength="len"
              @update:value="
                $emit('change', { value: form[field], key: field })
              "
            ></vo-input-range>
          </template>
          <!-- 过滤输入框 -->
          <template v-if="type == 'autocomplete'">
            <!-- @select 返回选择选项后的值；@change 返回输入值（可能不在选项中） -->
            <el-autocomplete
              v-model="form[field]"
              placeholder="请输入"
              :maxlength="len"
              clearable
              :disabled="isDisabled"
              :fetch-suggestions="autocompleteQuerySearch"
              @select="autocompleteHandleSelect"
              @change="$emit('change', { value: form[field], key: field })"
            ></el-autocomplete>
          </template>
          <!-- 单选框 -->
          <template v-if="type == 'radio'">
            <el-radio-group
              v-model="form[field]"
              placeholder="请选择"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
            >
              <el-radio
                v-for="(itm, idx) in options"
                :key="idx"
                :label="itm.value"
              >
                {{ itm.label }}
              </el-radio>
            </el-radio-group>
          </template>
          <!-- 复选框 -->
          <template v-if="type == 'checkbox'">
            <el-checkbox-group
              v-model="form[field]"
              placeholder="请选择"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
            >
              <el-checkbox
                v-for="(itm, idx) in options"
                :key="idx"
                :label="itm.value"
              >
                {{ itm.label }}
              </el-checkbox>
            </el-checkbox-group>
          </template>
          <!-- 下拉框 -->
          <template v-if="type == 'select'">
            <el-select
              v-model="form[field]"
              placeholder="请选择"
              clearable
              :multiple="multiple"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
              @clear="$emit('clear', { value: form[field], key: field })"
            >
              <el-option
                v-for="(itm, idx) in options"
                :key="idx"
                :label="itm.label"
                :value="itm.value"
              ></el-option>
            </el-select>
          </template>
          <!-- 年月日单选选择框 -->
          <template
            v-if="['year', 'month', 'date', 'datetime', 'week'].includes(type)"
          >
            <el-date-picker
              :class="`date-${type}`"
              v-model="form[field]"
              :type="type"
              :value-format="calcDateValueFormat"
              :format="calcDateFormat"
              :picker-options="pickerOptions"
              :placeholder="datePlaceholder"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
            >
            </el-date-picker>
          </template>
          <!-- 年月日复选选择框 -->
          <template v-if="['years', 'months', 'dates'].includes(type)">
            <el-date-picker
              :class="`date-${type}`"
              v-model="form[field]"
              :type="type"
              :value-format="calcDateValueFormat"
              :format="calcDateFormat"
              :picker-options="pickerOptions"
              :placeholder="datePlaceholder"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
            >
            </el-date-picker>
          </template>
          <!-- 范围选择框 -->
          <template
            v-if="['monthrange', 'daterange', 'datetimerange'].includes(type)"
          >
            <el-date-picker
              :class="`date-${type}`"
              v-model="form[field]"
              :type="type"
              :value-format="calcDateValueFormat"
              :format="calcDateFormat"
              :picker-options="pickerOptions"
              :placeholder="datePlaceholder"
              :start-placeholder="startPlaceholder"
              :end-placeholder="endPlaceholder"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
            >
            </el-date-picker>
          </template>
          <!-- 时间选择框 -->
          <template v-if="type == 'time'">
            <el-time-picker
              v-model="form[field]"
              :picker-options="{}"
              :value-format="calcDateValueFormat"
              :format="calcDateFormat"
              :placeholder="datePlaceholder"
              :disabled="isDisabled"
              @change="$emit('change', { value: form[field], key: field })"
            >
            </el-time-picker>
          </template>
          <!-- 插槽 -->
          <template v-if="type == 'slot'">
            <slot :name="field" :props="{ ...$props, onSlotChange }"></slot>
          </template>
        </template>
      </el-form-item>
    </el-form>
    <slot></slot>
  </div>
</template>

<script>
  import VoInputRange from "./inputRange.vue";
  export default {
    name: "VoQueryFormItem",
    components: {
      VoInputRange,
    },
    props: {
      // TODO: 是否可编辑，普通表单用，查询表单移除
      // canEdit: {
      //   type: Boolean,
      //   default: false,
      // },
      // 字段描述
      label: {
        type: String,
        default: "",
      },
      // 表单字段
      field: {
        type: String,
        require: true,
      },
      // 表单元素类型
      type: {
        type: String,
        default: "input",
      },
      options: {
        type: Array,
        default: () => [],
      },
      // 判断：表单演示不可编辑
      isDisabled: {
        type: Boolean,
        default: false,
      },
      // 判断：是否只读
      readOnly: {
        type: Boolean,
        default: false,
      },
      // 判断：只读情况下，是否已表单元素方式展示
      showFormItem: {
        type: Boolean,
        default: false,
      },
      // 判断：是否忽略新旧值变动展示
      ignoreChanged: {
        type: Boolean,
        default: false,
      },
      labelWidth: {
        type: String,
        default: "150px",
      },
      labelPosition: {
        type: "right" | "left" | "top",
        default: "right",
      },
      len: {
        type: Number,
      },
      // 表单对象
      form: {
        type: Object,
        default: () => {
          return {};
        },
      },
      // 表单校验规则
      rules: {
        type: Object,
        default: () => {
          return {};
        },
      },
      // 表单数据对象（新值）
      data: {
        type: Object,
        default: () => {
          return {};
        },
      },
      // 表单数据对象（旧值）
      curData: {
        type: Object,
        default: () => {
          return {};
        },
      },

      // 是否添加“全部”选项
      showAllOption: {
        type: Boolean,
        default: false,
      },
      // “全部”选项配置
      allOptionConfig: {
        type: Object,
        default: () => ({ label: "全部", value: "" }),
      },
      // 复选
      multiple: {
        type: Boolean,
        default: false,
      },
      // 日期控件控制
      datePicker: {
        type: String,
        default: "",
      },
      // 日期控件显示格式化
      format: {
        type: String,
        default: "",
      },
      // 日期控件值格式化
      valueFormat: {
        type: String,
        default: "",
      },
      //
      picker: {
        type: Object,
        default: () => ({}),
      },
      // 自定义样式
      customStyle: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      // 是否存在旧值
      existsOldValue: function () {
        let isExists = false;
        let data = this.data[this.field];
        let curData = this.curData[this.field];

        // 直接属性对比
        if (["input", "radio", "select", "time"].includes(this.type)) {
          isExists = data !== curData;
        } else if (data instanceof Array && curData instanceof Array) {
          // 复选框数组对比
          let len = data.length;
          let curLen = curData.length;
          // 判断：数组长度是否一致
          if (len != curLen) {
            isExists = true;
          } else {
            // 说明：若数组长度一致的情况下，则判断旧值数组中是否存在不相等的元素；
            data.forEach((itm) => {
              let isSameElems = curData.filter((it) => it != itm);
              isSameElems.length > 0 && (isExists = true);
            });
          }
        }
        return isExists;
      },
      /**
       * 判断：是否为含枚举值表单元素；
       */
      isSelectElement: function () {
        return ["radio", "checkbox", "select"].includes(this.type);
      },
      /**
       * 查找新值： 解析只读情况下，下拉框、单选框、复选框枚举值；
       */
      readonlySelectValue: function () {
        let label = this.data[this.field];
        if (["radio", "checkbox", "select"].includes(this.type)) {
          let option = this.options.find(
            (itm) => itm.value == this.data[this.field],
          );
          option && (label = option.label);
          !option && (label = "");
        }
        return label;
      },
      /**
       * 查找旧值
       */
      readonlySelectCurValue: function () {
        let label = this.curData[this.field];
        if (["radio", "select"].includes(this.type)) {
          let option = this.options.find(
            (itm) => itm.value == this.curData[this.field],
          );
          // 说明：在选项中匹配到对应的label 则显示，否则显示"未设置"；
          option && (label = option.label);
          !option && (label = "");
        }
        // 说明：由于复选框的值为数组，故需要分开便利查找；
        if (["checkbox"].includes(this.type)) {
          let labels = [];
          this.curData[this.field].forEach((item) => {
            let option = this.options.find((itm) => itm.value == item);
            option && labels.push(option.label);
          });
          label = labels.join("、");
        }

        return label;
      },
      /**
       * 判断：是否必填字段
       */
      isReqireField: function () {
        let flag = false;
        let rules = this.rules[this.field];
        let hadRequire = rules.find((itm) => itm.required);
        this.canEdit && hadRequire && (flag = true);
        return flag;
      },
      /**
       * 获取当前日期时间戳
       */
      getDateNow: function () {
        let now = new Date(
          new Date(Date.now()).toLocaleDateString() + " 23:59:59",
        ).getTime();
        return () => now;
      },
      /**
       * 日期限定
       */
      pickerOptions: function () {
        // 不可选择限制
        let disableDateOptions = {
          // 直到现在，不含当天
          tillNowOn: (time) => {
            return time.getTime() > this.getDateNow() - 86400 * 1000 * 1;
          },
          // 直到现在，含当天
          tillNowOnInclude: (time) => {
            return time.getTime() > this.getDateNow() - 86400 * 1000 * 0;
          },
          // 始于现在，不含当天
          fromNowOn: (time) => {
            return time.getTime() < this.getDateNow() - 86400 * 1000 * 0;
          },
          // 始于现在，含当天
          fromNowOnInclude: (time) => {
            return time.getTime() < this.getDateNow() - 86400 * 1000 * 1;
          },
        };
        // 说明： 内置校验规则
        let _defaultPicker = disableDateOptions[this.datePicker];
        // 说明： 传入校验规则
        let { defaultPicker, disabledPicker } = this.picker;
        // 说明： 传入规则匹配内置规则
        if (defaultPicker && disableDateOptions[defaultPicker]) {
          _defaultPicker = (time) => {
            let __defaultPicker = disableDateOptions[defaultPicker](time);
            // 说明： 存在额外自定义校验
            if (disabledPicker) {
              let __customPicker = disabledPicker(time);
              if (
                [
                  "tillNowOn",
                  "tillNowOnInclude",
                  "fromNowOn",
                  "fromNowOnInclude",
                ].includes(defaultPicker)
              ) {
                if (__defaultPicker) return __defaultPicker;
                if (!__defaultPicker) return __customPicker;
              } else {
                return (
                  disableDateOptions[defaultPicker](time) &&
                  disabledPicker(time)
                );
              }
            }
            if (!disabledPicker) return __defaultPicker;
          };
        }
        // 说明：未传入内置规则，或未匹配内置规则，且设置自定义校验规则
        if (
          (!defaultPicker || !disableDateOptions[defaultPicker]) &&
          disabledPicker
        ) {
          _defaultPicker = (time) => disabledPicker(time);
        }
        let picker = { disabledDate: _defaultPicker || {} };
        return picker;
      },
      /**
       * 日期时间控件格式化预处理
       */
      calcDateFormat() {
        if (this.format) return this.format;
        return this.processDateFormat();
      },
      calcDateValueFormat() {
        if (this.valueFormat) return this.valueFormat;
        return this.processDateFormat(true);
      },
      datePlaceholder() {
        let _placeholder = "请选择";
        if (["year", "years"].includes(this.type)) _placeholder += "年份";
        if (["month", "months"].includes(this.type)) _placeholder += "月份";
        if (["date", "dates"].includes(this.type)) _placeholder += "日期";
        if (["datetime", "time"].includes(this.type)) _placeholder += "时间";
        return _placeholder;
      },
      startPlaceholder() {
        let _placeholder = "开始日期";
        if (this.type == "datetimerange") _placeholder = "开始时间";
        return _placeholder;
      },
      endPlaceholder() {
        let _placeholder = "结束日期";
        if (this.type == "datetimerange") _placeholder = "结束时间";
        return _placeholder;
      },
    },
    created() {
      this.init();
    },
    methods: {
      /**
       * 初始化
       */
      init() {
        // 部分类型默认值必须为[]
        if (["checkbox"].includes(this.type)) {
          this.$set(this.form, this.field, []);
        }
        // 部分类型需要添加{label: "全部", value: ""} 选项
        if (this.showAllOption && this.options instanceof Array) {
          let existsAllOption = this.options.find(
            (option) => option.value == "",
          );
          !existsAllOption && this.options.unshift(this.allOptionConfig);
        }
      },
      /**
       * 日期时间控件格式化预处理
       */
      processDateFormat(isValue = false) {
        let _format = "";
        // 年度
        if (
          [
            "year",
            "month",
            "date",
            "datetime",
            "years",
            "months",
            "dates",
            "week",
            "daterange",
            "datetimerange",
          ].includes(this.type)
        )
          _format += "yyyy";
        // 月度
        if (
          [
            "month",
            "date",
            "months",
            "dates",
            "datetime",
            "daterange",
            "datetimerange",
          ].includes(this.type)
        )
          _format += "-MM";
        // 日期
        if (
          ["dates", "datetime", "daterange", "datetimerange"].includes(
            this.type,
          )
        )
          _format += "-dd";
        // 时分秒
        if (["datetime", "datetimerange"].includes(this.type))
          _format += " HH:mm:ss";
        if (this.type == "week") _format += "-WW";
        // 星期值格式化不需要，否则报错
        if (isValue && this.type == "week") _format = "yyyy-MM-dd";
        // 时间
        if (this.type == "time") _format = "HH:mm";
        return _format;
      },
      /**
       * 添加label 类名
       */
      calcDescriptionsItemLabelClass() {
        let className = "";
        if (!this.label) {
          className += " hide-label";
        }
        if (
          this.existsOldValue &&
          JSON.stringify(this.curData) != "{}" &&
          !this.ignoreChanged
        ) {
          className += " had-changed";
        }
        return className;
      },
      /**
       * 过滤查询
       */
      autocompleteQuerySearch(queryString, cb) {
        var options = this.options;
        var results = queryString
          ? options.filter(createFilter(queryString))
          : options;
        // 调用 callback 返回建议列表的数据
        cb(results);

        // 所属国别过滤函数
        function createFilter() {
          return (option) => {
            return (
              option.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0
            );
          };
        }
      },
      /**
       * 过滤选择
       */
      autocompleteHandleSelect({ label, value }) {
        this.$emit("change", { value, key: this.field });
      },
      /**
       * 插槽变更触发
       * @param value
       */
      onSlotChange(value) {
        this.form[this.field] = value;
      },
    },
  };
</script>

<style lang="scss" scoped>
  $ERROR_COLOR: #f56c6c;
  $INFO_COLOR: #606266;

  .vo-query-form-item {
    align-items: center;
    display: flex;

    // 表单相关样式
    $el-item: el-form-item;

    // 详情描述组件样式
    $el-desc: el-descriptions-item;

    // 深度选择器（适配 Vue 单文件组件 scoped）
    ::v-deep input {
      width: 200px;
    }
    .el-form {
      width: 100%;

      .#{$el-item} {
        // display: flex;
        // flex-direction: column;
        width: 100% !important;
      }

      // 表单标签样式
      ::v-deep .#{$el-item}__label {
        text-align: left;
      }

      // 表单内容区域样式
      ::v-deep .#{$el-item}__content {
        input,
        .el-range-editor.el-input__inner,
        .el-date-editor {
          width: 100%;
        }

        input:read-only {
          background-color: #fff;
          color: #606266;
          cursor: default;
        }
      }
    }
    .el-descriptions {
      // 描述项容器
      ::v-deep .#{$el-desc}__container {
        height: 40px;
        line-height: 40px;
      }

      // 描述项标签
      ::v-deep .#{$el-desc}__label {
        width: 420px;

        &.hide-label {
          display: none;
        }

        &.had-changed {
          &::before {
            color: $ERROR_COLOR;
            content: "※";
            display: inline-block;
            height: 10px;
            padding-right: 5px;
            width: 10px;
          }
        }
      }

      // 描述项内容
      ::v-deep .#{$el-desc}__content {
        display: flex;

        &:not(.ignore-border) {
          border: 1px solid #ddd;
          border-radius: 4px;
          text-indent: 10px;
        }

        // 当前值
        .checking-value {
          margin-right: 10px;
          width: 400px;
        }

        // 旧值
        .current-value {
          color: $ERROR_COLOR;
        }

        // 只读展示表单元素容器
        .show-form-item {
          min-width: 100px;
          position: relative;

          // 单选框样式
          $radio: el-radio;

          // 复选框样式
          $checkbox: el-checkbox;

          // 存在旧值下侧提示框
          .current-value {
            background: #fff;
            border: 1px solid #fbb;
            border-radius: 3px;
            box-sizing: content-box;
            color: $ERROR_COLOR;
            font-size: 12px;
            height: 18px;
            line-height: 18px;
            padding: 0px 5px;
            position: absolute;
            top: 34px;
            z-index: 100;

            &::before {
              background: #fff;
              border-left: 1px solid #fbb;
              border-top: 1px solid #fbb;
              content: "";
              display: block;
              height: 4px;
              left: 5px;
              position: absolute;
              top: -3px;
              transform: rotate(45deg);
              width: 4px;
            }
          }
          .#{$radio}__input.is-checked {
            .#{$radio}__inner {
              border-color: $INFO_COLOR;

              &::after {
                background-color: $INFO_COLOR;
              }
            }

            & + .#{$radio}__label {
              color: $INFO_COLOR;
            }
          }
          .#{$checkbox}-group {
            height: 40px;
          }

          .#{$checkbox}__input.is-checked {
            .#{$checkbox}__inner {
              border-color: $INFO_COLOR;

              &::after {
                border-color: $INFO_COLOR;
              }
            }

            & + .#{$checkbox}__label {
              color: $INFO_COLOR;
            }
          }
        }
      }
    }
    .el-autocomplete,
    .el-select {
      width: 100%;
    }
  }
</style>
