<template>
  <div>
    <comp-wrap title="" :desc="desc" :code-str="codeStr">
      <h3>用法</h3>
      <ul class="mt-10">
        <li>
          <code>this.value = this.$vutil.number.formatInputNumber(number);</code>
        </li>
        <li>小数点后最多保留位数：{{ fractionDigits }}</li>
        <li>是否允许负数：{{ allowNegative }}</li>
      </ul>
      <el-input v-model="value" @input="handleInput" />
      <div style="display: flex; align-items: center">
        <vo-button
          text="保留3位小数"
          primary
          @click="handleSetOption(0)"
          class="mt-10-i mr-10-i"
        />
        <vo-button
          text="允许负数"
          primary
          @click="handleSetOption(1)"
          class="mt-10-i mr-10-i"
        />
        <vo-button
          text="重置"
          primary
          @click="handleSetOption(2)"
          class="mt-10-i mr-10-i"
        />
      </div>
    </comp-wrap>
    <number-utils-attr :num="1" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<!---->
<el-input v-model="value" @input="handleInput" />
<div style="display: flex; align-items: center">
  <vo-button text="保留3位小数" @click="handleSetOption(0)" />
  <vo-button text="允许负数" @click="handleSetOption(1)" />
  <vo-button text="重置" @click="handleSetOption(2)" />
</div>

handleInput() {
  this.value = this.$vutil.number.formatInputNumber(this.value, {
    fractionDigits: this.fractionDigits,
    allowNegative: this.allowNegative,
  });
},
handleSetOption(type) {
  this.value = "";
  if (type === 0) this.fractionDigits = this.fractionDigits === 2 ? 3 : 2;
  if (type === 1) this.allowNegative = !this.allowNegative;
  if (type === 2) { this.fractionDigits = 2; this.allowNegative = false; }
}
        `,
        value: "",
        fractionDigits: 2,
        allowNegative: false,
      };
    },
    methods: {
      handleInput() {
        this.value = this.$vutil.number.formatInputNumber(this.value, {
          fractionDigits: this.fractionDigits,
          allowNegative: this.allowNegative,
        });
      },
      handleSetOption(type) {
        this.value = "";
        if (type === 0) this.fractionDigits = this.fractionDigits === 2 ? 3 : 2;
        if (type === 1) this.allowNegative = !this.allowNegative;
        if (type === 2) {
          this.fractionDigits = 2;
          this.allowNegative = false;
        }
      },
    },
  };
</script>
