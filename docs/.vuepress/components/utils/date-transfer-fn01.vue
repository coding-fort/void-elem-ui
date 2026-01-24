<template>
  <comp-wrap :desc="desc" :code-str="codeStr" class="util-basic" code-type="js">
    <h3>功能1</h3>
    <ul class="mt-10">
      <li>
        <code>$vutil.date.formatDate(date);</code>
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
      <vo-button text="转换" primary @click="handleTransfer" class="mr-10-i" />
    </div>
    <p class="mr-10">当前值：{{ form[dateField.key] }}</p>
    <p>转换值：{{ transferDate }}</p>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `
import { vutil as $vutil } from "void-elem-ui";

handleTransfer() {
  if (!this.form.date) {
    this.$message.error("请先选择日期");
    return;
  }
  this.transferDate = $vutil.date.formatDate(this.form.date, {
    formatType: 0,
  });
  this.$message.success('转换成功');
}
        `,
        dateField: {
          label: "日期",
          key: "date",
          _key: "date",
          type: "date",
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
        },
        form: {
          date: "",
        },
        transferDate: "",
      };
    },
    methods: {
      handleChangeField({ value, key }) {
        this.form[key] = value;
      },
      handleTransfer() {
        if (!this.form.date) {
          this.$message.error("请先选择日期");
          return;
        }
        this.transferDate = this.$vutil.date.formatDate(this.form.date, {
          formatType: 0,
        });
        this.$message.success("转换成功");
      },
    },
  };
</script>
<style lang="css">
  .util-basic li {
    padding: 5px 0;
  }
</style>
