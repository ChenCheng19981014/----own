<style lang="scss" scope>
.center-wrap {
  // pointer-events: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fit-layout {
  z-index: 2;
  transform-origin: center center;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  .cover{

  }
}

.layout {
  .lefts {
    position: fixed;
    left: 0;
    top: 0;
    background: black;
    height: 100%;
  }
  .rights {
    position: fixed;
    right: 0;
    top: 0;
    background: black;
    height: 100%;
  }
  .bottoms {
    position: fixed;
    bottom: 0;
    left: 0;
    background: black;
    width: 100%;
  }
  .tops {
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    width: 100%;
  }
  .cover{
    width: 100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    z-index: 1;
    background-size: 100% 100%;
    background-image: url('./fit-layout.png');
    pointer-events: none;
  }
}
</style>

<template>
  <div class="center-wrap">
    <div class="layout">
      <div class="lefts" :style="`width:${widths}px`"></div>
      <div class="rights" :style="`width:${widths}px`"></div>
      <div class="tops" :style="`height:${heights}px`"></div>
      <div class="bottoms" :style="`height:${heights}px`"></div>
      <div class="fit-layout" :style="getStyle">
        <div class="cover"></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import store from "./../../store/index";
export default {
  name: "fit-layout",
  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
  },
  data() {
    return {
      widths: 0,
      heights: 0,
      x: 1,
      y: 1,
    };
  },
  methods: {
    setScale() {
      let { offsetWidth, offsetHeight } = document.body;
      let width = this.width;
      let height = this.height;
      let screenRadio = width / height;
      let bodyRadio = offsetWidth / offsetHeight;

      //如果屏幕宽高比例大于需要固定高度
      if (bodyRadio > screenRadio) {
        this.y = offsetHeight / height;
        this.x = this.y;
        this.heights = 0;
        this.widths = (offsetWidth - this.width * this.x) / 2;
      } else {
        this.x = offsetWidth / width;
        this.y = this.x;

        this.widths = 0;
        this.heights = (offsetHeight - this.height * this.x) / 2;
      }

      // 窗口宽高比例
      store.commit("setFitLayoutRatio", this.x);
    },
  },
  created() {
    this.setScale();
    window.addEventListener("resize", this.setScale);
  },
  destroyed() {
    window.removeEventListener("resize", this.setScale);
  },
  computed: {
    getStyle() {
      return {
        height: this.height + "px",
        width: this.width + "px",
        transform: `scale(${this.x})`,
      };
    },
  },
};
</script>
