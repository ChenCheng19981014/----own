<style lang="scss" scoped>
</style>

<template>
  <div id="app" @dragstart.prevent @selectstart.prevent>
      <fit-layout :width="2304" :height="896">
      <router-view></router-view>
      </fit-layout>
  </div>
</template>