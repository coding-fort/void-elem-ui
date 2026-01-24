<template>
  <comp-wrap title="type=slot" :desc="desc" :code-str="codeStr">
    <vo-form :fields="formColumns" @submit="handleSubmit" @reset="handleReset">
      <template #date="{ props }">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期"
          @change="
            (value) => {
              handleFieldChange(value, props);
            }
          "
        >
        </el-date-picker>
      </template>
    </vo-form>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `<li>可以自定义的方式表单元素，而且整体样式保持和表单一致；</li>
        <li>如果插入的组件类似日期范围类，初始值为数组的，则需要配置<code>_initValue = []</code>用于校验初始化；</li>
        <li>为了能使得表单校验正常，需要从插槽作用域获取变值同步方法<code>onSlotChange</code>，同步当前值到组件内部；</li>
        <li>如需要绑定重置按钮，则通过自定义事件<code>@reset</code>进行处理；</li>`,
        codeStr: `<template>
<vo-form :fields="formColumns" @submit="handleSubmit">
  <template #date="{ props }">
    <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="选择日期"
      @change="
        (value) => {
          handleFieldChange(value, props);
        }
      "
    >
    </el-date-picker>
  </template>
</vo-form>

export default {
  data(){
    return {
      formColumns: [
        {
          label: "活动名称",
          key: "name",
          _key: "name",
          required: true,
          col: 1,
        },
        {
          label: "活动时间",
          key: "date",
          _key: "date",
          type: "slot",
          col: 1,
        },
      ],
      form: {
        date: "",
      },
    }
  },
  methods: {
    /**
     * 
     * @param value 
     * @param slotProps { onSlotChange: fn(value), ...ColumnObject }
     */
    handleFieldChange(value, slotProps) {
      console.log(value, slotProps); 
      const { onSlotChange } = slotProps;
      onSlotChange(value);
    },
    /**
     * 重置
     */
    handleReset() {
      this.form.date = "";
    },
    /**
     * 提交
     */ 
    handleSubmit(form) {
      let _form = { ...this.form, ...form };
      this.$vdialog({
        title: "表单内容",
        width: 600,
        content: JSON.stringify(_form),
      });
    },
  },
}
  `,
        formColumns: [
          {
            label: "活动名称",
            key: "name",
            _key: "name",
            required: true,
            col: 1,
          },
          {
            label: "活动时间",
            key: "date",
            required: true,
            _key: "date",
            col: 1,
            type: "slot",
            _initValue: "", // 初始值，默认为""，对于例如时间范围这种初始值需要设置为[]；
          },
        ],
        form: {
          date: "",
        },
      };
    },
    methods: {
      /**
       *
       * @param value
       * @param slotProps { onSlotChange: fn(value), ...ColumnObject }
       */
      handleFieldChange(value, slotProps) {
        console.log(value, slotProps);
        const { onSlotChange } = slotProps;
        onSlotChange(value);
      },
      /**
       * 重置
       */
      handleReset() {
        this.form.date = "";
      },
      handleSubmit(form) {
        let _form = { ...this.form, ...form };
        this.$vdialog({
          title: "表单内容",
          width: 600,
          content: JSON.stringify(_form),
        });
      },
    },
  };
</script>


