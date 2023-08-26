<style lang="scss" scoped>
.common-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 24px;
  position: relative;
  .header {
    flex-shrink: 0;
    height: 48px;
    width: 360px;
    background-size: 100% 100%;
    margin-bottom: 8px;
    background-image: url("../../assets/common/common-box-title.png");
    .title {
      font-family: "pm";
      font-size: 22px;
    line-height: 22px;

      background: linear-gradient(180deg, #D9F1FD 0%, #FFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
      padding-left: 28px;
      .unit{
       color: rgba(255, 255, 255, 0.60);

      }
    }
  }
}
</style>
<template>
  <div class="common-box">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "common-box",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
  },
};
</script>