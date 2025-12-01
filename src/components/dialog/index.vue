<template>
  <div class="vue-ui-dialog-wrapper" :style="{ zIndex: zIndex }">
    <!-- 遮罩层 -->
    <transition name="vue-ui-dialog-fade">
      <div
        class="vue-ui-dialog-mask"
        v-if="isShow"
        @click="handleMaskClick"
        :style="{ zIndex: zIndex + 1 }"
      ></div>
    </transition>

    <!-- 弹窗主体 -->
    <transition name="vue-ui-dialog-slide">
      <div
        class="vue-ui-dialog"
        v-if="isShow"
        :style="{
          width: width,
          zIndex: zIndex + 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }"
      >
        <!-- 弹窗头部 -->
        <div class="vue-ui-dialog-header" v-if="title || showClose">
          <h3 class="vue-ui-dialog-title">{{ title }}</h3>
          <button
            class="vue-ui-dialog-close"
            v-if="showClose"
            @click="handleCloseClick"
          >
            ×
          </button>
        </div>

        <!-- 核心：根据 content 类型动态渲染 -->
        <div class="vue-ui-dialog-body">
          <!-- 1. 字符串类型：渲染文本 -->
          <div v-if="typeof content === 'string'" class="vue-ui-dialog-text">
            {{ content }}
          </div>

          <!-- 2. 组件类型：渲染自定义表单 -->
          <component
            v-else
            :is="content"
            :mode="mode"
            :init-data="initData"
            :extra="extra"
            @confirm="handleFormConfirm"
            @cancel="handleFormCancel"
          ></component>
        </div>

        <!-- 底部按钮栏（文本模式强制显示，组件模式可配置） -->
        <div class="vue-ui-dialog-footer" v-if="showFooter">
          <button
            class="vue-ui-dialog-btn vue-ui-dialog-btn--cancel"
            @click="handleCancel"
          >
            {{ cancelText }}
          </button>
          <button
            class="vue-ui-dialog-btn vue-ui-dialog-btn--confirm"
            @click="handleConfirm"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "VueUiDialog",
    data() {
      return {
        isShow: false,
        title: "提示",
        width: "50vw",
        zIndex: 2000,
        showClose: true,
        content: null, // 支持 String/Object
        mode: "", // add/edit/view
        initData: {},
        extra: {},
        confirmText: "确定",
        cancelText: "取消",
        showFooter: true, // 文本模式默认显示按钮
        closeOnClickMask: true,
        resolve: null,
        reject: null,
      };
    },
    methods: {
      // 初始化配置（优化：字符串模式默认调整弹窗宽度和按钮显示）
      init(options, resolve, reject) {
        // 新增：width 类型转换（数字→px字符串，字符串直接使用）
        const handleWidth = (width) => {
          return typeof width === "number" ? `${width}px` : width; // 数字自动加 px
        };
        let _width =
          typeof options.content === "string"
            ? options.width || "350px"
            : options.width || "800px";
        const mergedOptions = {
          // 字符串模式默认配置（可被用户覆盖）
          showFooter: true, // 字符串模式强制显示按钮
          ...options,
          // 应用 width 转换逻辑
          width: handleWidth(_width),
        };
        Object.assign(this, mergedOptions);
        this.resolve = resolve;
        this.reject = reject;
        this.isShow = true;
      },

      // 文本模式确认（无表单数据，返回空对象）
      handleConfirm() {
        this.close("confirm", {
          mode: this.mode,
          data: typeof this.content === "string" ? {} : this.initData,
        });
      },

      // 其他方法（handleMaskClick、handleCloseClick 等不变）
      handleMaskClick() {
        if (this.closeOnClickMask) {
          this.close("cancel", { type: "mask-click" });
        }
      },
      handleCloseClick() {
        this.close("cancel", { type: "close-click" });
      },
      handleCancel() {
        this.close("cancel", { type: "footer-cancel" });
      },
      handleFormConfirm(data) {
        this.close("confirm", { mode: this.mode, data });
      },
      handleFormCancel(reason) {
        this.close("cancel", { type: "form-cancel", reason });
      },
      close(type, result) {
        this.isShow = false;
        setTimeout(() => {
          type === "confirm"
            ? this.resolve({ ...result, closed: true, confirmed: true })
            : this.reject({ ...result, closed: true, confirmed: false });
          this.$destroy();
          if (document.body.contains(this.$el)) {
            document.body.removeChild(this.$el);
          }
        }, 300);
      },
    },
  };
</script>

<style scoped>
  /* 新增文本模式样式 */
  .vue-ui-dialog-text {
    color: #333;
    font-size: 14px;
    line-height: 1.8;
    padding: 20px 0;
    text-align: center;
  }

  /* 其余样式不变 */
  .vue-ui-dialog-fade-enter-active,
  .vue-ui-dialog-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .vue-ui-dialog-fade-enter,
  .vue-ui-dialog-fade-leave-to {
    opacity: 0;
  }

  .vue-ui-dialog-slide-enter-active,
  .vue-ui-dialog-slide-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .vue-ui-dialog-slide-enter,
  .vue-ui-dialog-slide-leave-to {
    opacity: 0;
    transform: translate(-50%, -40%) scale(0.98);
  }

  .vue-ui-dialog-wrapper {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    /* z-index: 100; */
  }

  .vue-ui-dialog-mask {
    background: rgba(80, 80, 80, 0.7);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .vue-ui-dialog {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
  }

  .vue-ui-dialog-header {
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    padding: 16px 20px;
  }

  .vue-ui-dialog-title {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  .vue-ui-dialog-close {
    background: transparent;
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 20px;
    padding: 0;
    transition: color 0.2s;
  }

  .vue-ui-dialog-close:hover {
    color: #666;
  }

  .vue-ui-dialog-body {
    max-height: 70vh;
    overflow-y: auto;
    padding: 20px;
  }

  .vue-ui-dialog-footer {
    border-top: 1px solid #f5f5f5;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    padding: 16px 20px;
  }

  .vue-ui-dialog-btn {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 16px;
    transition: background 0.2s;
  }

  .vue-ui-dialog-btn--cancel {
    background: #f5f5f5;
    color: #333;
  }

  .vue-ui-dialog-btn--cancel:hover {
    background: #eee;
  }

  .vue-ui-dialog-btn--confirm {
    background: #409eff;
    color: #fff;
  }

  .vue-ui-dialog-btn--confirm:hover {
    background: #3089ff;
  }
</style>
