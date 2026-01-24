<template>
  <comp-wrap
    title="QueryFormItem 输入框"
    :desc="desc"
    :code-str="codeStr"
    class="query-form-item-only"
  >
    <div class="item">
      <b>Input 输入框</b>
      <vo-query-form-item
        :label="inputField.label"
        :field="inputField.key"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[inputField.key] }}</p>
    </div>
    <div class="item">
      <b>Inputrange 范围输入框</b>
      <vo-query-form-item
        :label="inputrangerField.label"
        :field="inputrangerField.key"
        :type="inputrangerField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[inputrangerField.key] }}</p>
    </div>
    <div class="item">
      <b>Autocomplete 过滤输入框</b>
      <vo-query-form-item
        :label="autocompleteField.label"
        :field="autocompleteField.key"
        :type="autocompleteField.type"
        :options="autocompleteField.options"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[autocompleteField.key] }}</p>
    </div>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: "<code>QueryForm</code> 查询表单组件，内部使用<code>query-form-item</code> 组件来渲染不同表单组件；",
        codeStr: `<!-- -->
<div class="item">
  <b>Input 输入框</b>
  <vo-query-form-item
    :label="inputField.label"
    :field="inputField.key"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[inputField.key] }}</p>
</div>
<div class="item">
  <b>Inputrange 范围输入框</b>
  <vo-query-form-item
    :label="inputrangerField.label"
    :field="inputrangerField.key"
    :type="inputrangerField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[inputrangerField.key] }}</p>
</div>
<div class="item">
  <b>Autocomplete 过滤输入框</b>
  <vo-query-form-item
    :label="autocompleteField.label"
    :field="autocompleteField.key"
    :type="autocompleteField.type"
    :options="autocompleteField.options"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[autocompleteField.key] }}</p>
</div>

export default {
  data(){
    return {
      inputField: {
        label: "账户编号",
        key: "accountNo",
        _key: "accountNo",
      },
      inputrangerField: {
        label: "数量",
        key: "count",
        _key: "count",
        type: "inputrange",
      },
      autocompleteField: {
        label: "币种",
        key: "currency",
        _key: "currency",
        type: "autocomplete",
        options: [
          { label: "CNY", value: "CNY" },
          { label: "USD", value: "USD" },
          { label: "JPY", value: "JPY" },
        ],
      },
      form: {
        accountNo: "",
        count: "",
        currency: "",
      },
    }
  },
  methods: {
    handleChangeField({ value, key }) {
      this.form[key] = value;
      if (!value) this.$message.success("值已经清空");
    },
  },
}
  `,
        inputField: {
          label: "账户编号",
          key: "accountNo",
          _key: "accountNo",
        },
        inputrangerField: {
          label: "数量",
          key: "count",
          _key: "count",
          type: "inputrange",
        },
        autocompleteField: {
          label: "币种",
          key: "currency",
          _key: "currency",
          type: "autocomplete",
          options: [
            { label: "CNY", value: "CNY" },
            { label: "USD", value: "USD" },
            { label: "JPY", value: "JPY" },
          ],
        },
        form: {
          accountNo: "",
          count: "",
          currency: "",
        },
      };
    },
    methods: {
      handleChangeField({ value, key }) {
        // console.log("value:", value, key);
        this.form[key] = value;
        if (!value) this.$message.success("值已经清空");
      },
    },
  };
</script>

<style lang="scss">
  .query-form-item-only .component-wrapper-demo {
    display: flex;
    flex-wrap: wrap;
    .item {
      border-left: 1px solid #3eaf7c;
      margin: 0;
      padding: 10px;
      width: calc(100% / 3 - 23px);
      &:nth-of-type(3n + 1) {
        border-color: transparent;
      }
      &:nth-of-type(n + 4) {
        border-top: 1px solid #3eaf7c;
      }
    }
  }
</style>
