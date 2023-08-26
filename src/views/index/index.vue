<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>

<template>
  <div class="index">
    <custom-header></custom-header>
    <zhongHuan></zhongHuan>
    <router-view></router-view>
  </div>
</template>

<script setup>
import zhongHuan from "./../../components/three-scene/zhonghuan/index.vue";
import customHeader from "./components/custom-header.vue";
</script>
