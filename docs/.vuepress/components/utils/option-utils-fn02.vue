<template>
  <div>
    <comp-wrap title="" :desc="desc" :code-str="codeStr">
      <h3>用法</h3>
      <ul class="mt-10">
        <li>
          <code
            >const mapper = this.$vutil.option.enumMapper(STATUS_OPTIONS); </code
          ><br />
          <code>mapper.labelField("label"); </code><br />
          <code>let label = mapper.label(labelStr);</code><br />
          <code> let value = mapper.label(value);</code>
        </li>
        <li class="err-info">
          注：通过<b>labelField 函数</b
          >指定标签字段名（<b>labelField</b>）进行自定义取值。
        </li>
      </ul>

      <div style="display: flex; align-items: center">
        <div>
          <div style="display: flex; align-items: center">
            <vo-query-form-item
              :label="selectField.label"
              :field="selectField.key"
              :type="selectField.type"
              :options="selectField.options"
              label-width="100px"
              :custom-style="{ marginBottom: 0 }"
              class="mr-10"
              @change="handleChangeField"
            />
            <vo-button
              text="解析"
              primary
              @click="handleTransfer(1)"
              class="ml-10-i"
            />
          </div>
          <p>当前值：{{ value }}</p>
          <p>解析值：{{ transferValue }}</p>
        </div>
        <div class="ml-10">
          <div style="display: flex; align-items: center" class="ml-10">
            <vo-query-form-item
              label="交易类型值"
              field="tradeTypeValue"
              :type="selectField.type"
              :options="selectField.valueOptions"
              label-width="100px"
              :custom-style="{ marginBottom: 0 }"
              class="mr-10"
              @change="handleChangeField"
            />
            <vo-button
              text="解析"
              primary
              @click="handleTransfer(2)"
              class="ml-10-i"
            />
          </div>
          <p class="ml-10">当前值：{{ value2 }}</p>
          <p class="ml-10">解析值：{{ transferValue2 }}</p>
        </div>
      </div>
    </comp-wrap>
    <option-utils-attr :num="2" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<!---->
<div>
  <vo-query-form-item
    :label="selectField.label"
    :field="selectField.key"
    :type="selectField.type"
    :options="selectField.options"
    @change="handleChangeField"
  />
  <vo-button text="解析" @click="handleTransfer(1)" />
</div>
<p>当前值：{{ value }}</p>
<p>解析值：{{ transferValue }}</p>
<!-- -->
<div>
  <vo-query-form-item
    label="交易类型值"
    field="tradeTypeValue"
    :type="selectField.type"
    :options="selectField.valueOptions"
    @change="handleChangeField"
  />
  <vo-button text="解析" @click="handleTransfer(2)" />
</div>
<p>当前值：{{ value2 }}</p>
<p>解析值：{{ transferValue2 }}</p>    


data(){
  return {
     selectField: {
      label: "交易类型",
      key: "tradeType",
      _key: "tradeType",
      type: "select",
      options: [
        { label: "入账",value: 1 },
        { label: "出账",value: 2 },
        { label: "冲正",value: 3 },
      ],
      valueOptions: [
        { value: "入账",label: 1 },
        { value: "出账",label: 2 },
        { value: "冲正",label: 3 },
      ],
    },
  }
},
methods: {
  handleChangeField({ value, key }) {
    if (key === "tradeType") {
      this.value = value;
      this.transferValue = "";
    }
    if (key === "tradeTypeValue") {
      this.value2 = value;
      this.transferValue2 = "";
    }
  },
  handleTransfer(type) {
    if ((type == 1 && !this.value) || (type !== 1 && !this.value2)) {
      this.$message.error("请先选择");
      return;
    }
    const mapper = this.$vutil.option.enumMapper( type == 1 ? this.selectField.options : this.selectField.valueOptions );
    if (type == 1) {
      this.transferValue = mapper.value(this.value);
    } else {
      this.transferValue2 = mapper.value(this.value2);
    }
  },
}
        `,
        selectField: {
          label: "交易类型",
          key: "tradeType",
          _key: "tradeType",
          type: "select",
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
          valueOptions: [
            {
              value: "入账",
              label: 1,
            },
            {
              value: "出账",
              label: 2,
            },
            {
              value: "冲正",
              label: 3,
            },
          ],
        },
        value: "",
        value2: "",
        transferValue: "",
        transferValue2: "",
      };
    },
    methods: {
      handleChangeField({ value, key }) {
        if (key === "tradeType") {
          this.value = value;
          this.transferValue = "";
        }
        if (key === "tradeTypeValue") {
          this.value2 = value;
          this.transferValue2 = "";
        }
      },
      handleTransfer(type) {
        if ((type == 1 && !this.value) || (type !== 1 && !this.value2)) {
          this.$message.error("请先选择");
          return;
        }
        const mapper = this.$vutil.option.enumMapper(
          type == 1 ? this.selectField.options : this.selectField.valueOptions,
        );
        if (type == 1) {
          this.transferValue = mapper.value(this.value);
        } else {
          this.transferValue2 = mapper.value(this.value2);
        }
      },
    },
  };
</script>
