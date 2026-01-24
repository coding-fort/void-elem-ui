<template>
  <comp-wrap
    :title="title"
    :desc="desc"
    :code-str="codeStr"
    class="query-form-item-only"
  >
    <div class="item">
      <b>年度选择框</b>
      <vo-query-form-item
        :label="yearField.label"
        :field="yearField.key"
        :type="yearField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[yearField.key] }}</p>
    </div>
    <div class="item">
      <b>月度选择框</b>
      <vo-query-form-item
        :label="monthField.label"
        :field="monthField.key"
        :type="monthField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[monthField.key] }}</p>
    </div>
    <div class="item">
      <b>日期选择框</b>
      <vo-query-form-item
        :label="dateField.label"
        :field="dateField.key"
        :type="dateField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[dateField.key] }}</p>
    </div>
    <!--  -->
    <div class="item">
      <b>年度复选选择框</b>
      <vo-query-form-item
        :label="yearsField.label"
        :field="yearsField.key"
        :type="yearsField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[yearsField.key] }}</p>
    </div>
    <div class="item">
      <b>月度复选选择框</b>
      <vo-query-form-item
        :label="monthsField.label"
        :field="monthsField.key"
        :type="monthsField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[monthsField.key] }}</p>
    </div>
    <div class="item">
      <b>日期复选选择框</b>
      <vo-query-form-item
        :label="datesField.label"
        :field="datesField.key"
        :type="datesField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[datesField.key] }}</p>
    </div>
    <!--  -->
    <div class="item">
      <b>月份范围选择框</b>
      <vo-query-form-item
        :label="monthrangeField.label"
        :field="monthrangeField.key"
        :type="monthrangeField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[monthrangeField.key] }}</p>
    </div>
    <div class="item">
      <b>日期范围选择框</b>
      <vo-query-form-item
        :label="daterangeField.label"
        :field="daterangeField.key"
        :type="daterangeField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[daterangeField.key] }}</p>
    </div>
    <div class="item">
      <b>日期时间范围选择框</b>
      <vo-query-form-item
        :label="datetimerangeField.label"
        :field="datetimerangeField.key"
        :type="datetimerangeField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[datetimerangeField.key] }}</p>
    </div>
    <!--  -->
    <div class="item">
      <b>星期选择框</b>
      <vo-query-form-item
        :label="weekField.label"
        :field="weekField.key"
        :type="weekField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[weekField.key] }}</p>
    </div>
    <div class="item">
      <b>日期时间选择框</b>
      <vo-query-form-item
        :label="datetimeField.label"
        :field="datetimeField.key"
        :type="datetimeField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[datetimeField.key] }}</p>
    </div>
    <div class="item">
      <b>时间选择框</b>
      <vo-query-form-item
        :label="timeField.label"
        :field="timeField.key"
        :type="timeField.type"
        label-position="top"
        @change="handleChangeField"
      />
      <p>当前值：{{ form[timeField.key] }}</p>
    </div>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        title: "QueryFormItem 日期时间框",
        desc: "<code>QueryForm</code> 查询表单组件，内部使用<code>query-form-item</code> 组件来渲染不同表单组件；",
        codeStr: `<template>
<div class="item">
  <b>年度选择框</b>
  <vo-query-form-item
    :label="yearField.label"
    :field="yearField.key"
    :type="yearField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[yearField.key] }}</p>
</div>
<div class="item">
  <b>月度选择框</b>
  <vo-query-form-item
    :label="monthField.label"
    :field="monthField.key"
    :type="monthField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[monthField.key] }}</p>
</div>
<div class="item">
  <b>日期选择框</b>
  <vo-query-form-item
    :label="dateField.label"
    :field="dateField.key"
    :type="dateField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[dateField.key] }}</p>
</div>
<!--  -->
<div class="item">
  <b>年度复选选择框</b>
  <vo-query-form-item
    :label="yearsField.label"
    :field="yearsField.key"
    :type="yearsField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[yearsField.key] }}</p>
</div>
<div class="item">
  <b>月度复选选择框</b>
  <vo-query-form-item
    :label="monthsField.label"
    :field="monthsField.key"
    :type="monthsField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[monthsField.key] }}</p>
</div>
<div class="item">
  <b>日期复选选择框</b>
  <vo-query-form-item
    :label="datesField.label"
    :field="datesField.key"
    :type="datesField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[datesField.key] }}</p>
</div>
<!--  -->
<div class="item">
  <b>月份范围选择框</b>
  <vo-query-form-item
    :label="monthrangeField.label"
    :field="monthrangeField.key"
    :type="monthrangeField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[monthrangeField.key] }}</p>
</div>
<div class="item">
  <b>日期范围选择框</b>
  <vo-query-form-item
    :label="daterangeField.label"
    :field="daterangeField.key"
    :type="daterangeField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[daterangeField.key] }}</p>
</div>
<div class="item">
  <b>日期时间范围选择框</b>
  <vo-query-form-item
    :label="datetimerangeField.label"
    :field="datetimerangeField.key"
    :type="datetimerangeField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[datetimerangeField.key] }}</p>
</div>
<!--  -->
<div class="item">
  <b>星期选择框</b>
  <vo-query-form-item
    :label="weekField.label"
    :field="weekField.key"
    :type="weekField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[weekField.key] }}</p>
</div>
<div class="item">
  <b>日期时间选择框</b>
  <vo-query-form-item
    :label="datetimeField.label"
    :field="datetimeField.key"
    :type="datetimeField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[datetimeField.key] }}</p>
</div>
<div class="item">
  <b>时间选择框</b>
  <vo-query-form-item
    :label="timeField.label"
    :field="timeField.key"
    :type="timeField.type"
    label-position="top"
    @change="handleChangeField"
  />
  <p>当前值：{{ form[timeField.key] }}</p>
</div>

export default {
  data(){
    return {
      yearField: {
        label: "年份",
        key: "year",
        _key: "year",
        type: "year",
      },
      monthField: {
        label: "月份",
        key: "month",
        _key: "month",
        type: "month",
      },
      dateField: {
        label: "日期",
        key: "date",
        _key: "date",
        type: "date",
      },
      //
      yearsField: {
        label: "年份",
        key: "years",
        _key: "years",
        type: "years",
      },
      monthsField: {
        label: "月份",
        key: "months",
        _key: "months",
        type: "months",
      },
      datesField: {
        label: "日期",
        key: "dates",
        _key: "dates",
        type: "dates",
      },
      //
      monthrangeField: {
        label: "月份范围",
        key: "monthrange",
        _key: "monthrange",
        type: "monthrange",
      },
      daterangeField: {
        label: "日期范围",
        key: "daterange",
        _key: "daterange",
        type: "daterange",
      },
      datetimerangeField: {
        label: "日期时间范围",
        key: "datetimerange",
        _key: "datetimerange",
        type: "datetimerange",
      },
      //
      weekField: {
        label: "星期",
        key: "week",
        _key: "week",
        type: "week",
      },
      datetimeField: {
        label: "日期时间",
        key: "datetime",
        _key: "datetime",
        type: "datetime",
      },
      timeField: {
        label: "时间",
        key: "time",
        _key: "time",
        type: "time",
      },

      form: {
        year: "",
        month: "",
        date: "",
        years: "",
        months: "",
        dates: "",
        monthrange: "",
        daterange: "",
        datetimerange: "",
        week: "",
        datetime: "",
        time: "",
      },
    }
  },
  methods: {
    handleChangeField({ value, key }) {
      this.form[key] = value;
    },
  },
}
  `,
        yearField: {
          label: "年份",
          key: "year",
          _key: "year",
          type: "year",
        },
        monthField: {
          label: "月份",
          key: "month",
          _key: "month",
          type: "month",
        },
        dateField: {
          label: "日期",
          key: "date",
          _key: "date",
          type: "date",
        },
        //
        yearsField: {
          label: "年份",
          key: "years",
          _key: "years",
          type: "years",
        },
        monthsField: {
          label: "月份",
          key: "months",
          _key: "months",
          type: "months",
        },
        datesField: {
          label: "日期",
          key: "dates",
          _key: "dates",
          type: "dates",
        },
        //
        monthrangeField: {
          label: "月份范围",
          key: "monthrange",
          _key: "monthrange",
          type: "monthrange",
        },
        daterangeField: {
          label: "日期范围",
          key: "daterange",
          _key: "daterange",
          type: "daterange",
        },
        datetimerangeField: {
          label: "日期时间范围",
          key: "datetimerange",
          _key: "datetimerange",
          type: "datetimerange",
        },
        //
        weekField: {
          label: "星期",
          key: "week",
          _key: "week",
          type: "week",
        },
        datetimeField: {
          label: "日期时间",
          key: "datetime",
          _key: "datetime",
          type: "datetime",
        },
        timeField: {
          label: "时间",
          key: "time",
          _key: "time",
          type: "time",
        },

        form: {
          year: "",
          month: "",
          date: "",
          years: "",
          months: "",
          dates: "",
          monthrange: "",
          daterange: "",
          datetimerange: "",
          week: "",
          datetime: "",
          time: "",
        },
      };
    },
    methods: {
      handleChangeField({ value, key }) {
        this.form[key] = value;
      },
    },
  };
</script>

<style lang="scss"></style>
