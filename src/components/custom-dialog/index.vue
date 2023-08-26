<style lang="scss" scoped>
.custom-dialog {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 9991;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  .dialog-cent {
    border: 1px solid rgba(3, 175, 202, 0.3);
    background: rgba(9, 29, 49, 0.9);
    // width: 1404px;
    padding: 24px;
  }
  .headerss {
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-image: url("./bg.png");
    background-size: 100% 100%;
    .title {
      font-family: "pm";
      font-size: 22px;
      background: linear-gradient(180deg, #fff 0%, #fff 42.64%, #03afca 98.28%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-left: 24px;
    }
    .close {
      background-size: 100% 100%;
      background-image: url("./close.png");
      cursor: pointer;
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
  }
  .main {
    width: 100%;
    margin-top: 24px;
  }
}
</style>

<template>
  <div class="custom-dialog" ref="dialog" v-if="show">
    <div class="dialog-cent" :style="`width:${width}`">
      <div class="headerss">
        <div class="title">{{ title }}</div>
        <div class="close" @click="close"></div>
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "custom-dialog",
  props: {
    title: String,
    width:{
      type:String,
      default:"1404px"
    }
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    open() {
      this.show = true;
      this.$nextTick(()=>{
      document.getElementsByClassName("fit-layout")[0].appendChild(this.$refs["dialog"]);

      })
    },
    close() {
      this.show = false;
    },
  },
  mounted() {
  },
};
</script>