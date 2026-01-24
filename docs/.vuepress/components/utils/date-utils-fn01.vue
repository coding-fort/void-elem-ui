<template>
  <div>
    <comp-wrap
      :desc="desc"
      :code-str="codeStr"
      class="util-basic"
      code-type="js"
    >
      <h3>用法</h3>
      <ul class="mt-10">
        <li>
          <code>const transferDate = this.$vutil.date.formatDate(date);</code>
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
        <li>
          自动添加时间默认索引（timeSuffixPosition）：{{
            options.timeSuffixPosition
          }}
        </li>
        <li>
          当前添加时间字符串（timeSuffixStr）：{{
            options.timeSuffixStr ||
            (options.timeSuffixPosition === 0 ? "00:00:00" : "23:59:59")
          }}
        </li>
        <li class="err-info">
          注：当 <b>timeSuffixStr</b> 有值时， <b>timeSuffixPosition</b> 失效。
        </li>
      </ul>
      <div style="display: flex; align-items: center">
        <vo-query-form-item
          :label="dateField.label"
          :field="dateField.key"
          :type="dateField.type"
          label-width="80px"
          :custom-style="{ marginBottom: 0 }"
          class="mr-10"
          @change="handleChangeField"
        />
        <vo-button
          text="转换"
          primary
          @click="handleTransfer"
          class="mr-10-i"
        />
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
          text="切换默认时间字符串索引"
          primary
          @click="handleSetOption(3)"
          class="mt-10-i mr-10-i"
        />
        <vo-button
          text="自定义添加时间格式"
          primary
          @click="handleSetOption(4)"
          class="mt-10-i mr-10-i"
        />
        <vo-button
          text="重置"
          primary
          @click="handleSetOption(5)"
          class="mt-10-i mr-10-i"
        />
      </div>
      <p class="mr-10">当前值：{{ date }}</p>
      <p>转换值：{{ transferDate }}</p>
    </comp-wrap>
    <date-utils-attr :num="1" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<!---->
<div style="display: flex; align-items: center">
  <vo-query-form-item
    :label="dateField.label"
    :field="dateField.key"
    :type="dateField.type"
    label-width="80px"
    :custom-style="{ marginBottom: 0 }"
    class="mr-10"
    @change="handleChangeField"
  />
  <vo-button text="转换" @click="handleTransfer" />
</div>
<div style="display: flex; align-items: center">
  <vo-button text="切换年月日" @click="handleSetOption(0)" />
  <vo-button text="自定义日期格式" @click="handleSetOption(1)" />
  <vo-button text="自动添加时间" @click="handleSetOption(2)" />
  <vo-button text="切换默认时间字符串索引" @click="handleSetOption(3)" />
  <vo-button text="自定义添加时间格式" @click="handleSetOption(4)" />
  <vo-button text="重置" @click="handleSetOption(5)" />
</div>
<p class="mr-10">当前值：{{ form[dateField.key] }}</p>
<p>转换值：{{ transferDate }}</p>

data(){
  return {
    dateField: {
      label: "日期",
      key: "date",
      _key: "date",
      type: "date",
      valueFormat: "YYYY-MM-DD",
    },
    options: {
      formatType: 0,
      formatStr: "",
      autoAddTime: false,
      timeSuffixPosition: 0,
      timeSuffixStr: "",
    },
  }
},
methods: {
  handleChangeField({ value, key }) {
    console.log("change::", value);
    this.form[key] = value;
  },
  handleTransfer() {
    if (!this.date) {
      this.$message.error("请先选择日期");
      return;
    }
    this.transferDate = this.$vutil.date.formatDate(
      this.date,
      this.options,
    );
    this.$message.success("转换成功");
  },
  handleSetOption(type) {
    this.value = "";
    const { formatType, formatStr, autoAddTime, timeSuffixPosition, timeSuffixStr } = this.options;
    if (type === 0) this.options.formatType = formatType === 0 ? 1 : 20;
    if (type === 1) this.options.formatStr = formatStr === "" ? "YYYY/MM/DD" : "";
    if (type === 2) this.options.autoAddTime = !autoAddTime;
    if (type === 3) this.options.timeSuffixPosition = timeSuffixPosition === 0 ? 1 : 0;
    if (type === 4) this.options.timeSuffixStr = timeSuffixStr === "" ? " 零点零分零秒" : "";
    if (type === 5) {
      this.options = {
        formatType: 0,
        formatStr: "",
        autoAddTime: false,
        timeSuffixPosition: 0,
        timeSuffixStr: "",
      };
    }
  },
},
        `,
        dateField: {
          label: "日期",
          key: "date",
          _key: "date",
          type: "date",
          valueFormat: "YYYY-MM-DD",
        },
        date: "",
        transferDate: "",
        options: {
          formatType: 0,
          formatStr: "",
          autoAddTime: false,
          timeSuffixPosition: 0,
          timeSuffixStr: "",
        },
      };
    },
    methods: {
      handleChangeField({ value }) {
        console.log("change::", value);
        this.date = value;
      },
      handleTransfer() {
        if (!this.date) {
          this.$message.error("请先选择日期");
          return;
        }
        this.transferDate = this.$vutil.date.formatDate(
          this.date,
          this.options,
        );
        this.$message.success("转换成功");
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
        if (type === 0) this.options.formatType = formatType === 0 ? 1 : 0;
        if (type === 1)
          this.options.formatStr = formatStr === "" ? "YYYY/MM/DD" : "";
        if (type === 2) this.options.autoAddTime = !autoAddTime;
        if (type === 3)
          this.options.timeSuffixPosition = timeSuffixPosition === 0 ? 1 : 0;
        if (type === 4)
          this.options.timeSuffixStr =
            timeSuffixStr === "" ? " 零点零分零秒" : "";
        if (type === 5) {
          this.options = {
            formatType: 0,
            formatStr: "",
            autoAddTime: false,
            timeSuffixPosition: 0,
            timeSuffixStr: "",
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
