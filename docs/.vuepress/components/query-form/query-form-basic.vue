<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <vo-query-form :fields="formColumns" @query="handleQuery">
      <template slot="left-btns">
        <vo-button text="导出" @click="handleExport" />
      </template>
    </vo-query-form>
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import VoQueryForm from "../../../../src/components/queryForm/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoButton,
      VoQueryForm,
      CompWrap,
    },
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
      return {
        desc: "通过<code>fields</code> 配置查询表单字段；通过自定义事件<code>query</code> 获取当前查询表单对象；",
        codeStr: `
<vo-query-form :fields="formColumns" @query="handleQuery" >
  <template slot="left-btns">
    <vo-button text="导出" @click="handleExport" />
  </template>
</vo-query-form>

  export default {
    data(){
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
      return {
        formColumns: [
          {
            label: "账户编号",
            key: "accountNo",
            _key: "accountNo",
          },
          {
            label: "商户编号",
            key: "merchantNo",
            _key: "merchantNo",
          },
          {
            label: "商户名称",
            key: "companyName",
            _key: "merchantName",
          },
          {
            label: "所属渠道",
            key: "platformCode",
            _key: "platform",
            type: "select",
            options: [],
          },
          {
            label: "账户状态",
            key: "status",
            _key: "accountStatus",
            type: "select",
            options: accountStatus.options,
          },
          {
            label: "更新时间",
            key: "updateDate",
            _key: "updateDate",
            type: "datetimerange",
          },
          {
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
          {
            label: "平台商户编号",
            key: "merchantNoPla",
            _key: "platformMerchantNo",
          },
        ],
      }
    },
    methods: {
      handleQuery(form) {
        this.$dialog({
          title: "条件查询",
          content: JSON.stringify(form),
        });
      },
      handleExport(form) {
        this.$message.success("导出成功");
      },
    },
  }
  `,
        formColumns: [
          {
            label: "账户编号",
            key: "accountNo",
            _key: "accountNo",
          },
          {
            label: "商户编号",
            key: "merchantNo",
            _key: "merchantNo",
          },
          {
            label: "商户名称",
            key: "companyName",
            _key: "merchantName",
          },
          {
            label: "所属渠道",
            key: "platformCode",
            _key: "platform",
            type: "select",
            options: [],
          },
          {
            label: "账户状态",
            key: "status",
            _key: "accountStatus",
            type: "select",
            options: accountStatus.options,
          },
          {
            label: "更新时间",
            key: "updateDate",
            _key: "updateDate",
            type: "datetimerange",
          },
          {
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
          {
            label: "平台商户编号",
            key: "merchantNoPla",
            _key: "platformMerchantNo",
          },
        ],
      };
    },
    methods: {
      handleQuery(form) {
        this.$dialog({
          title: "条件查询",
          content: JSON.stringify(form),
        });
      },
      handleExport(form) {
        this.$message.success("导出成功");
      },
    },
  };
</script>

<style lang="scss" scoped></style>
