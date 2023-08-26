<template>
  <div>
    <common-banner>
      <left1></left1>
      <left2></left2>
      <left3></left3>
    </common-banner>
    <common-banner right>
      <right1></right1>
      <right2></right2>
    </common-banner>

    <div class="banner-bottom">
      <div class="banner-bottom-main">
        <bottom-1 style="width: 500px"></bottom-1>
        <bottom-2 style="width: 896px"></bottom-2>
      </div>
    </div>
  </div>
</template>

<script setup>
import right1 from "./components/right1.vue";
import right2 from "./components/right2.vue";
import left1 from "./components/left1.vue";
import left2 from "./components/left2.vue";
import left3 from "./components/left3.vue";
import bottom1 from "./components/bottom1.vue";
import bottom2 from "./components/bottom2-s.vue";
</script>