<template>
  <div>
    <comp-wrap :desc="desc" :code-str="codeStr">
      <h3>用法</h3>
      <ul class="mt-10">
        <li>
          <code
            >const transferValue =
            this.$vutil.number.transformMoney(number)</code
          >
        </li>
        <li>保留小数位数：{{ decimal }}</li>
        <li>是否逆向解析：{{ type }}</li>
        <li>币种符号：{{ symbol }}</li>
      </ul>

      <div style="display: flex; align-items: center">
        <el-input v-model="value" @input="handleInput" />
        <vo-button
          text="转换"
          primary
          @click="handleTransfer"
          class="ml-10-i"
        />
        <vo-button
          text="复制转换值"
          warning
          @click="handleCopy"
          class="mr-10-i"
        />
      </div>
      <div style="display: flex; align-items: center">
        <vo-button
          text="保留3位小数"
          primary
          @click="handleSetOption(0)"
          class="mt-10-i mr-10-i"
        />
        <vo-button
          text="开启逆向解析"
          primary
          @click="handleSetOption(1)"
          class="mt-10-i mr-10-i"
        />
        <vo-button
          text="设置币种符号"
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
      <p class="mr-10">当前值：{{ value }}</p>
      <p>转换值：{{ transferNum }}</p>
    </comp-wrap>
    <number-utils-attr :num="2" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<!---->
<div style="display: flex; align-items: center">
  <el-input v-model="value" @input="handleInput" />
  <vo-button text="转换" @click="handleTransfer" />
  <vo-button text="复制转换值" @click="handleCopy" />
</div>
<div style="display: flex; align-items: center">
  <vo-button text="保留3位小数" @click="handleSetOption(0)"/>
  <vo-button text="开启逆向解析" @click="handleSetOption(1)"/>
  <vo-button text="设置币种符号" @click="handleSetOption(2)"/>
  <vo-button text="重置" @click="handleSetOption(3)"/>
</div>
<p class="mr-10">当前值：{{ value }}</p>
<p>转换值：{{ transferNum }}</p>  

handleInput() {
  if (this.type) return;
  this.value = this.$vutil.number.formatInputNumber(this.value, {
    fractionDigits: this.decimal,
  });
},
handleTransfer() {
  this.transferNum = this.$vutil.number.transformMoney(this.value, {
    decimal: this.decimal,
    type: this.type,
    symbol: this.symbol,
  });
},
handleSetOption(type) {
  if (type !== 1) {
    this.value = "";
    this.transferNum = "";
  }

  if (type === 0) this.decimal = this.decimal === 2 ? 3 : 2;
  if (type === 1) this.type = !this.type;
  if (type === 2) this.symbol = this.symbol === "" ? "¥" : "";
  if (type === 3) {
    this.decimal = 2;
    this.type = false;
    this.symbol = "";
  }
},
handleCopy() {
  if (!this.type) {
    this.$message.error("只有开启逆向解析功能才有意义");
    return;
  }
  if (!this.transferNum) {
    this.$message.error("请先生成格式化字符串");
    return;
  }
  this.value = this.transferNum;
  this.$vutil.copyToClipboard(this.transferNum);
},
`,
        value: "",
        transferNum: "",
        decimal: 2,
        type: false,
        symbol: "",
      };
    },
    methods: {
      handleInput() {
        if (this.type) return;
        this.value = this.$vutil.number.formatInputNumber(this.value, {
          fractionDigits: this.decimal,
        });
      },
      handleTransfer() {
        this.transferNum = this.$vutil.number.transformMoney(this.value, {
          decimal: this.decimal,
          type: this.type,
          symbol: this.symbol,
        });
      },
      handleSetOption(type) {
        if (type !== 1) {
          this.value = "";
          this.transferNum = "";
        }

        if (type === 0) this.decimal = this.decimal === 2 ? 3 : 2;
        if (type === 1) this.type = !this.type;
        if (type === 2) this.symbol = this.symbol === "" ? "¥" : "";
        if (type === 3) {
          this.decimal = 2;
          this.type = false;
          this.symbol = "";
        }
      },
      handleCopy() {
        if (!this.type) {
          this.$message.error("只有开启逆向解析功能才有意义");
          return;
        }
        if (!this.transferNum) {
          this.$message.error("请先生成格式化字符串");
          return;
        }
        this.value = this.transferNum;
        this.$vutil.copyToClipboard(this.transferNum);
      },
    },
  };
</script>
