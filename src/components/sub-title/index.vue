<template>
  <div class="sub-title">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sub-title",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>

.sub-title {
  margin-left: 17px;
  margin-right: 17px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/common/sub-title.png");
  background-size: 100% 100%;
  position: relative;
  .title {
    font-size: 14px;
    font-weight: bold;
    background: linear-gradient(180deg, #fff 0%, #b0d5ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>