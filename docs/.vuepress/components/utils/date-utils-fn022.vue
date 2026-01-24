<template>
  <comp-wrap
    title=""
    :desc="desc"
    code-type="js"
    :code-str="codeStr"
    class="util-basic"
  >
    <h3>功能2</h3>
    <ul class="mt-10">
      <li>
        <code>
          $vutil.date.transformQueryDate.call(<br />
          &nbsp; this.transferFormExtra,<br />
          &nbsp; this.daterange,<br />
          &nbsp; {<br />
          &nbsp; &nbsp; autoAddTime: true,<br />
          &nbsp; &nbsp; field: "daterange",<br />
          &nbsp; &nbsp; resetFields: ["start", "end"],<br />
          &nbsp; },<br />
          )</code
        >
      </li>
      <li>
        通过 <code>call</code> 将方法绑定到目标对象（如
        <code>params</code>），直接修改该对象的字段；
      </li>
      <li>
        默认格式化方式（formatType）：{{
          options.formatType === 1 ? "年月日" : "年月日时分秒"
        }}
      </li>
      <li>自定义日期格式字符串（formatStr）：{{ options.formatStr }}</li>
      <li class="err-info">
        注：当 <b>formatStr</b> 有值时， <b>formatType</b> 失效。
      </li>
      <li>开启自动添加时间（autoAddTime）：{{ options.autoAddTime }}</li>
      <li class="err-info">
        注：当 <b>formatType = 0</b> （年月日时分秒）时，
        <b>autoAddTime</b> 失效。
      </li>
      <li class="err-info">
        注：当 <b>formatStr</b> 有值，且不包含时分秒时，
        <b>autoAddTime</b> 有效，否则无效。
      </li>
    </ul>
    <div style="display: flex; align-items: center">
      <vo-query-form-item
        :label="daterangeField.label"
        :field="daterangeField.key"
        :type="daterangeField.type"
        label-width="80px"
        :custom-style="{ marginBottom: 0 }"
        class="mr-10"
        @change="handleChangeField"
      />
      <vo-button text="转换" primary @click="handleTransfer" class="mr-10-i" />
    </div>
    <div style="display: flex; align-items: center">
      <vo-button
        text="切换年月日"
        primary
        @click="handleSetOption(0)"
        class="mt-10-i mr-10-i"
      />
      <vo-button
        text="自定义日期格式"
        primary
        @click="handleSetOption(1)"
        class="mt-10-i mr-10-i"
      />
      <vo-button
        text="自动添加时间"
        primary
        @click="handleSetOption(2)"
        class="mt-10-i mr-10-i"
      />
      <vo-button
        text="重置"
        primary
        @click="handleSetOption(3)"
        class="mt-10-i mr-10-i"
      />
    </div>
    <p class="mr-10">当前值：{{ daterange }}</p>
    <p>转换值：{{ transferFormExtra }}</p>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<!---->
<div style="display: flex; align-items: center">
  <vo-query-form-item
    :label="daterangeField.label"
    :field="daterangeField.key"
    :type="daterangeField.type"
    @change="handleChangeField"
  />
  <vo-button text="转换" @click="handleTransfer"/>
</div>
<div style="display: flex; align-items: center">
  <vo-button text="切换年月日" @click="handleSetOption(0)"/>
  <vo-button text="自定义日期格式" @click="handleSetOption(1)"/>
  <vo-button text="自动添加时间" @click="handleSetOption(2)"/>
  <vo-button text="重置" @click="handleSetOption(3)"/>
</div>
<p>当前值：{{ daterange }}</p>
<p>转换值：{{ transferFormExtra }}</p>

data(){
  return {
    daterangeField: {
      label: "日期范围",
      key: "daterange",
      _key: "daterange",
      type: "daterange",
      format: "YYYY-MM-DD",
      valueFormat: "YYYY-MM-DD",
    },
    daterange: [],
    transferFormExtra: {
      daterange: [],
      start: "",
      end: "",
    },
    options: {
      field: "daterange",
      formatType: 0,
      formatStr: "",
      autoAddTime: false,
      resetFields: ["start", "end"],
    }
  }
},
  methods: {
  handleChangeField({ value }) {
    this.daterange = value;
  },
  handleTransfer() {
    if (this.daterange.length == 0) {
      this.$message.error("请先选择日期");
      return;
    }
    this.$vutil.date.transformQueryDate.call(
      this.transferFormExtra,
      this.daterange,
      this.options,
    );
    this.$message.success('转换成功');
  },
  handleSetOption(type) {
    this.value = "";
    const {formatType,formatStr,autoAddTime,timeSuffixPosition,timeSuffixStr} = this.options;
    if (type === 0) this.options.formatType = formatType === 0 ? 1 : 20;
    if (type === 1) this.options.formatStr = formatStr === "" ? "YYYY/MM/DD" : "";
    if (type === 2) this.options.autoAddTime = !autoAddTime;
    if (type === 3) {
      this.transferFormExtra = {
        daterange: [],
        start: "",
        end: "",
      };
      this.options = {
        field: "daterange",
        formatType: 0,
        formatStr: "",
        autoAddTime: false,
        resetFields: ["start", "end"],
      };
    }
  },
},
          `,
        daterangeField: {
          label: "日期范围",
          key: "daterange",
          _key: "daterange",
          type: "daterange",
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
        },
        daterange: [],
        transferFormExtra: {
          daterange: [],
          start: "",
          end: "",
        },
        options: {
          field: "daterange",
          formatType: 0,
          formatStr: "",
          autoAddTime: false,
          resetFields: ["start", "end"],
        },
      };
    },
    methods: {
      handleChangeField({ value }) {
        this.daterange = value;
      },

      handleTransfer() {
        if (this.daterange.length == 0) {
          this.$message.error("请先选择日期");
          return;
        }
        this.$vutil.date.transformQueryDate.call(
          this.transferFormExtra,
          this.daterange,
          this.options,
        );
        this.$message.success(`转换成功`);
      },
      handleSetOption(type) {
        this.value = "";
        const {
          formatType,
          formatStr,
          autoAddTime,
          timeSuffixPosition,
          timeSuffixStr,
        } = this.options;
        if (type === 0) this.options.formatType = formatType === 0 ? 1 : 20;
        if (type === 1)
          this.options.formatStr = formatStr === "" ? "YYYY/MM/DD" : "";
        if (type === 2) this.options.autoAddTime = !autoAddTime;
        if (type === 3) {
          this.transferFormExtra = {
            daterange: [],
            start: "",
            end: "",
          };
          this.options = {
            field: "daterange",
            formatType: 0,
            formatStr: "",
            autoAddTime: false,
            resetFields: ["start", "end"],
          };
        }
      },
    },
  };
</script>
<style lang="css">
  .util-basic li {
    padding: 5px 0;
  }
</style>
