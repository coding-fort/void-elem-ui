<template>
  <comp-wrap title="" :desc="desc" code-type="js" :code-str="codeStr" class="util-basic">
    <h3>功能1</h3>
    <ul class="mt-10">
      <li>
        <code>let {start, end} = $vutil.date.transformQueryDate(dateArr)</code>
      </li>
      <li>
        传入一个日期数组，格式化后，返回包含<code>start</code>、<code>end</code>
        属性的对象
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
    <p class="mr-10">当前值：{{ form[daterangeField.key] }}</p>
    <p>转换值：{{ transferForm }}</p>
    <!--  -->
    <hr />
    <h3>功能2</h3>
    <ul class="mt-10">
      <li>
        <code>
          $vutil.date.transformQueryDate.call(<br />
          &nbsp; this.transferFormExtra,<br />
          &nbsp; this.form.daterange2,<br />
          &nbsp; {<br />
          &nbsp; &nbsp; autoAddTime: true,<br />
          &nbsp; &nbsp; field: "daterange2",<br />
          &nbsp; &nbsp; resetFields: ["start", "end"],<br />
          &nbsp; },<br />
          )</code
        >
      </li>
      <li>
        通过 <code>call</code> 将方法绑定到目标对象（如
        <code>params</code>），直接修改该对象的字段；
      </li>
    </ul>
    <div style="display: flex; align-items: center">
      <vo-query-form-item
        :label="daterange2Field.label"
        :field="daterange2Field.key"
        :type="daterange2Field.type"
        label-width="80px"
        :custom-style="{ marginBottom: 0 }"
        class="mr-10"
        @change="handleChangeField"
      />
      <vo-button
        text="转换"
        primary
        @click="handleTransferExtra"
        class="mr-10-i"
      />
    </div>
    <p class="mr-10">当前值：{{ form[daterange2Field.key] }}</p>
    <p>转换值：{{ transferFormExtra }}</p>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `
/**
 * Usage1: let {start, end} = transform.transformQueryDate(dateArr)
 */
handleTransfer() {
  if (this.form.daterange.length == 0) {
    this.$message.error("请先选择日期");
    return;
  }
  this.transferForm = this.$vutil.date.transformQueryDate(
    this.form.daterange,
    {
      autoAddTime: true,
    },
  );
  this.$message.success('转换成功');
},
/**
 * Usage2: transform.transformQueryDate.call(params, dateArr, 'date', ['start', 'end'])
 */
handleTransferExtra() {
  if (this.form.daterange2.length == 0) {
    this.$message.error("请先选择日期");
    return;
  }
  this.$vutil.date.transformQueryDate.call(
    this.transferFormExtra,
    this.form.daterange2,
    {
      autoAddTime: true,
      field: "daterange2",
      resetFields: ["start", "end"],
    },
  );
  console.log("提交表单数据：", this.transferFormExtra);
  // this.transferForm.daterange2 = [start, end];
  this.$message.success('转换成功');
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
        daterange2Field: {
          label: "日期范围",
          key: "daterange2",
          _key: "daterange2",
          type: "daterange",
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
        },
        form: {
          daterange: [],
          daterange2: [],
        },
        transferForm: {},
        transferFormExtra: {
          daterange2: [],
          start: "",
          end: "",
        },
      };
    },
    methods: {
      handleChangeField({ value, key }) {
        this.form[key] = value;
      },
      /**
       * Usage1: let {start, end} = $vutil.date.transformQueryDate(dateArr)
       */
      handleTransfer() {
        if (this.form.daterange.length == 0) {
          this.$message.error("请先选择日期");
          return;
        }
        this.transferForm = this.$vutil.date.transformQueryDate(
          this.form.daterange,
          {
            autoAddTime: true,
          },
        );
        this.$message.success(`转换成功`);
      },
      /**
       * Usage2: $vutil.date.transformQueryDate.call(params, dateArr, 'date', ['start', 'end'])
       */
      handleTransferExtra() {
        if (this.form.daterange2.length == 0) {
          this.$message.error("请先选择日期");
          return;
        }
        this.$vutil.date.transformQueryDate.call(
          this.transferFormExtra,
          this.form.daterange2,
          {
            autoAddTime: true,
            field: "daterange2",
            resetFields: ["start", "end"],
          },
        );
        console.log("提交表单数据：", this.transferFormExtra);
        // this.transferForm.daterange2 = [start, end];
        this.$message.success(`转换成功`);
      },
    },
  };
</script>
<style lang="css">
  .util-basic li {
    padding: 5px 0;
  }
</style>
