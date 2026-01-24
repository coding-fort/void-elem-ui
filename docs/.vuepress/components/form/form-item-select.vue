<template>
  <comp-wrap
    title="FormItem 选择框"
    :desc="desc"
    :code-str="codeStr"
    class="form-item-only"
  >
    <div class="item">
      <b>Radio 单选框</b>
      <vo-form-item
        :label="radioField.label"
        :field="radioField.key"
        :type="radioField.type"
        :options="radioField.options"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[radioField.key] }}</p>
    </div>
    <div class="item">
      <b>Checkbox 复选框</b>
      <vo-form-item
        :label="checkboxField.label"
        :field="checkboxField.key"
        :type="checkboxField.type"
        :options="checkboxField.options"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[checkboxField.key] }}</p>
    </div>
    <div class="item">
      <b>Select 下拉选择框</b>
      <vo-form-item
        :label="selectField.label"
        :field="selectField.key"
        :type="selectField.type"
        :options="selectField.options"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[selectField.key] }}</p>
    </div>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      const accountStatus = {
        label: "账户状态",
        value: "",
        options: [
          {
            label: "无效",
            value: 0,
          },
          {
            label: "生效",
            value: 1,
          },
          {
            label: "冻结",
            value: 2,
          },
        ],
      };
      const tradeType = {
        label: "交易类型",
        value: "",
        options: [
          {
            label: "入账",
            value: 1,
          },
          {
            label: "出账",
            value: 2,
          },
          {
            label: "冲正",
            value: 3,
          },
        ],
      };
      return {
        desc: "<code>Form</code> 表单组件，内部使用<code>form-item</code> 组件来渲染不同表单组件；",
        codeStr: `<template>
<div class="item">
  <b>Radio 单选框</b>
  <vo-form-item
    :label="radioField.label"
    :field="radioField.key"
    :type="radioField.type"
    :options="radioField.options"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[radioField.key] }}</p>
</div>
<div class="item">
  <b>Checkbox 复选框</b>
  <vo-form-item
    :label="checkboxField.label"
    :field="checkboxField.key"
    :type="checkboxField.type"
    :options="checkboxField.options"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[checkboxField.key] }}</p>
</div>
<div class="item">
  <b>Select 下拉选择框</b>
  <vo-form-item
    :label="selectField.label"
    :field="selectField.key"
    :type="selectField.type"
    :options="selectField.options"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[selectField.key] }}</p>
</div>

export default {
  data(){
    const accountStatus = {
      label: "账户状态",
      value: "",
      options: [
        { label: "无效", value: 0 },
        { label: "生效", value: 1 },
        { label: "冻结", value: 2 },
      ],
    };
    const tradeType = {
      label: "交易类型",
      value: "",
      options: [
        { label: "入账", value: 1 },
        { label: "出账", value: 2 },
        { label: "冲正", value: 3 },
      ],
    };
    return {
      radioField: {
        label: "账户状态",
        key: "status",
        _key: "accountStatus",
        type: "radio",
        options: accountStatus.options,
      },
      checkboxField: {
        label: "支持币种",
        key: "currency",
        _key: "currency",
        type: "checkbox",
        options: [
          { label: "CNY", value: "CNY" },
          { label: "USD", value: "USD" },
          { label: "JPY", value: "JPY" },
        ],
      },
      selectField: {
        label: "交易类型",
        key: "tradeType",
        _key: "tradeType",
        type: "select",
        options: tradeType.options,
      },
      form: {
        status: "",
        currency: "",
        tradeType: "",
      },
    }
  },
  methods: {
    handleChangeField({ value, key }) {
      this.form[key] = value;
    },
  },
}
  `,
        radioField: {
          label: "账户状态",
          key: "status",
          _key: "accountStatus",
          type: "radio",
          options: accountStatus.options,
        },
        checkboxField: {
          label: "支持币种",
          key: "currency",
          _key: "currency",
          type: "checkbox",
          options: [
            { label: "CNY", value: "CNY" },
            { label: "USD", value: "USD" },
            { label: "JPY", value: "JPY" },
          ],
        },
        selectField: {
          label: "交易类型",
          key: "tradeType",
          _key: "tradeType",
          type: "select",
          options: tradeType.options,
        },
        form: {
          status: "",
          currency: "",
          tradeType: "",
        },
      };
    },
    methods: {
      handleChangeField({ value, key }) {
        this.form[key] = value;
      },
    },
  };
</script>

<style lang="scss"></style>
