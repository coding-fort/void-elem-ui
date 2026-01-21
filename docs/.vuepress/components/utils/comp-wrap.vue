<template>
  <div class="comp-wrap-container" ref="wrap">
    <h2>{{ title }}</h2>
    <p v-html="desc"></p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot></slot>
      </div>
      <div class="code-content" v-highlight style="height: 0">
        <vo-button-group>
          <vo-button
            size="mini"
            icon="el-icon-document-copy"
            type="success"
            @click="handleCopy"
          />
          <vo-button
            size="mini"
            icon="el-icon-caret-top"
            type="info"
            @click="showCode(0)"
          />
        </vo-button-group>

        <div class="code-content-height">
          <pre>
            <code class="html">
               {{ codeComp }}
            </code>
          </pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <vo-icon
          :class="
            isShow[0] === false
              ? 'icon-down el-icon-caret-bottom'
              : 'icon-up el-icon-caret-top'
          "
        />
        <span class="lock-code-word">
          {{ isShow[0] === false ? "显示代码" : "隐藏代码" }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import VoIcon from "../../../../src/components/icon/index.vue";
  import VoButton from "../../../../src/components/button/index.vue";
  import VoButtonGroup from "../../../../src/components/button-group/index.vue";
  import copyToClipboard from "../../../../src/utils/copyToClipboard";

  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";

  export default {
    components: {
      VoIcon,
      VoButton,
      VoButtonGroup,
    },
    props: {
      title: {
        type: String,
        default: "基础方法",
      },
      desc: {
        type: String,
        default: "",
      },
      codeStr: {
        type: String,
        default: "",
      },
      collapse: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        //每一个区域的高度
        codeParent: [],
        codeHeightArr: [],
        //每个区域的显示状态
        isShow: [],
      };
    },
    directives: {
      highlight: function (el) {
        let blocks = el.querySelectorAll("pre code");
        blocks.forEach((block) => {
          hljs.highlightBlock(block);
        });
      },
    },
    watch: {
      collapse: {
        handler(val) {
          if (val)
            this.$nextTick(() => {
              this.showCode(0);
            });
        },
        immediate: true,
      },
    },
    computed: {
      codeComp() {
        return "\n" + this.codeStr.trim();
      },
    },
    mounted() {
      //异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
      this.$nextTick(() => {
        this.getCodesHeight();
      });
    },
    methods: {
      handleCopy() {
        copyToClipboard(this.codeStr);
        this.$message.success("代码已复制到剪贴板");
      },
      //根据子元素的高度 设置代码区域父元素的高度
      showCode(index) {
        this.$set(this.isShow, index, !this.isShow[index]);
        this.$nextTick(() => {
          if (this.isShow[index] === true) {
            this.codeParent[index].style.height =
              +this.codeHeightArr[index] + 0 + "px";
          } else {
            this.codeParent[index].style.height = 0;
          }
        });
      },
      //得到所有代码区域的高度
      getCodesHeight() {
        let ref = this.$refs.wrap;
        const arr = ref.getElementsByClassName("code-content-height");
        this.codeParent = ref.getElementsByClassName("code-content");
        const arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
          this.codeHeightArr.push(arr[i].getBoundingClientRect().height - 0);
          this.isShow.push(false);
        }
      },
    },
  };
</script>

<style lang="scss">
  .comp-wrap-container {
    pre {
      margin: 0; /* 清除默认外边距（可选） */
      padding: 0 1.5em; /* 上下内边距保留，左右内边距设为 0 */
      text-indent: 0; /* 清除首行缩进（关键） */
      white-space: pre; /* 确保空白保留（pre 默认值，防止被覆盖） */
    }
    .code-content {
      position: relative;
      .vo-button-group {
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
  }
</style>
