<style lang="scss" scoped>
.common-banner {
  width: 360px;
  position: absolute;
  z-index: 2;
  top: 138px;
}

#left {
  left: 24px;
}
#right {
  right: 24px;
}

</style>
<template>
  <div class="common-banner" :id="right ? 'right' : 'left'">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "common-banner",
  props: {
    right: {
      default: false,
      type: Boolean,
    },
  },
};
</script>