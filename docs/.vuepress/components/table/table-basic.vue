<template>
  <comp-wrap title="基础方法" :code-str="codeStr">
    <vo-table ref="es-table" :columns="tableColumns" :response="tableResponse">
      <template slot="operate" slot-scope="{ row }">
        <vo-button text="详情" type="text" @click="handleDetail(row)" />
      </template>
    </vo-table>
  </comp-wrap>
</template>

<script>
  import VoTable from "../../../../src/components/table/index.vue";
  import VoButtom from "../../../../src/components/button/index.vue";
  import VoButton from "../../../../src/components/button/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoTable,
      VoButtom,
      VoButton,
      CompWrap,
    },
    data() {
      const accountType = {
        label: "账户类型",
        value: "",
        options: [
          { label: "虚拟户", value: 1 },
          { label: "虚拟户&子账户", value: 2 },
        ],
      };
      const accountStatus = {
        label: "账户状态",
        value: "",
        options: [
          { label: "无效", value: 0 },
          { label: "生效", value: 1 },
          { label: "冻结", value: 2 },
        ],
      };
      return {
        codeStr: `
<vo-table ref="es-table" :columns="tableColumns" :response="tableResponse">
  <template slot="operate" slot-scope="{ row }">
    <vo-button text="详情" type="text" @click="handleDetail(row)" />
  </template>
</vo-table>

export default {
  data() {
    const accountType = {
        label: "账户类型",
        value: "",
        options: [
          { label: "虚拟户", value: 1 },
          { label: "虚拟户&子账户", value: 2 },
        ],
    };
    return {
      tableColumns: [
          {
            label: "账户编号",
            key: "accountNo",
            _key: "accountNo",
            width: 180,
          },
          {
            label: "商户名称",
            key: "companyName",
            _key: "companyName",
            width: 200,
          },
          {
            label: "账户类型",
            key: "accountType",
            _key: "accountType",
            options: accountType.options,
          },
      ],
      tableResponse: {},
    },
    created() {
      this.handleQueryList();
    },
    methods: {
      handleQueryList() {
        this.tableResponse = {
          dataList: [
            {
              accountNo: "A22061100000056",
              companyName: "商丘七度服饰有限公司",
              merchantNo: "91411403MACMPL539G",
              accountType: 1,
              currency: "EUR",
              balActive: 0,
              balFreeze: 0,
              thresholdAmt: 20000,
              status: 0,
              updateDate: 1655193527000,
              platformName: "平安保险",
            },
          ],
          pageNum: 1,
          pageSize: 10,
          total: 1,
          pages: 1,
        };
      },
      handleDetail(row) {
        this.$dialog({
          title: "详情",
          content: JSON.stringify(row),
          width: 800,
        });
      },
    },
  }
}
    `,
        /**
         * 账户管理-列表字段
         * @constant {Array}
         */
        tableColumns: [
          {
            label: "账户编号",
            key: "accountNo",
            _key: "accountNo",
            width: 180,
          },
          {
            label: "商户名称",
            key: "companyName",
            _key: "companyName",
            width: 200,
          },
          {
            label: "商户编号",
            key: "merchantNo",
            _key: "merchantNo",
            width: 180,
          },
          {
            label: "账户类型",
            key: "accountType",
            _key: "accountType",
            options: accountType.options,
          },
          { label: "币种", key: "currency", _key: "currency" },
          {
            label: "可提现余额",
            key: "balActive",
            _key: "balActive",
            type: "money",
            width: 100,
          },
          {
            label: "冻结金额",
            key: "balFreeze",
            _key: "balFreeze",
            type: "money",
          },
          {
            label: "阈值",
            key: "thresholdAmt",
            _key: "thresholdAmt",
            type: "money",
            width: 150,
          },
          {
            label: "账户状态",
            key: "status",
            _key: "status",
            options: accountStatus.options,
          },
          {
            label: "更新时间",
            key: "updateDate",
            _key: "updateDate",
            type: "datetime",
            width: 180,
          },
          {
            label: "所属渠道",
            key: "platformName",
            _key: "platformName",
            width: 120,
          },
        ],
        tableResponse: {},
      };
    },
    created() {
      this.handleQueryList();
    },
    methods: {
      handleQueryList() {
        this.tableResponse = {
          dataList: [
            {
              accountNo: "A22061100000056",
              companyName: "商丘七度服饰有限公司",
              merchantNo: "91411403MACMPL539G",
              accountType: 1,
              currency: "EUR",
              balActive: 0,
              balFreeze: 0,
              thresholdAmt: 20000,
              status: 0,
              updateDate: 1655193527000,
              platformName: "平安保险",
            },
            {
              accountNo: "A22061100000054",
              companyName: "商丘迪星文化传媒有限公司",
              merchantNo: "91411403MACMPL3L34",
              accountType: 1,
              currency: "USD",
              balActive: 0,
              balFreeze: 0,
              thresholdAmt: 0,
              status: 0,
              updateDate: 1655193527000,
              platformName: "中国人寿",
            },
            {
              accountNo: "A22061100000052",
              companyName: "商丘卜卜商贸有限公司",
              merchantNo: "91411403MACML31J3L",
              accountType: 1,
              currency: "JPY",
              balActive: 0,
              balFreeze: 0,
              thresholdAmt: 0,
              status: 0,
              updateDate: 1655193527000,
              platformName: "太平洋保险",
            },
          ],
          pageNum: 1,
          pageSize: 10,
          total: 3,
          pages: 1,
        };
      },
      handleDetail(row) {
        this.$dialog({
          title: "详情",
          content: JSON.stringify(row),
          width: 800,
        });
      },
    },
  };
</script>

<style lang="scss" scoped></style>
