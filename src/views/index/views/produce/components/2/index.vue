<style lang="scss" scoped>
.tools {
  right: 408px;
  top: 138px;
  position: absolute;
  .button {
    width: 88px;
    height: 32px;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    color: white;
    margin-bottom: 8px;
    background-image: url("../../../../../assets/common/按钮未选.png");
    &:hover {
      background-image: url("../../../../../assets/common/按钮悬停.png") ;
      color: #73ddff;
    }
  }
  .active {
    background-image: url("../../../../../assets/common/按钮选中.png")!important;
  }
}
</style>

<template>
  <div>
    <!-- 页面1 -->
    <template v-if="status == 1">
      <common-banner>
        <left1></left1>
        <left2></left2>
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
    </template>

      <template v-if="status == 2">
      <common-banner>
        <cleft1></cleft1>
        <cleft2></cleft2>
      </common-banner>
      <common-banner right>
        <cright1></cright1>
        <cright2></cright2>
      </common-banner>

      <div class="banner-bottom">
        <div class="banner-bottom-main">
          <cbottom-1 style="width: 500px"></cbottom-1>
          <cbottom-2 style="width: 896px"></cbottom-2>
        </div>
      </div>
    </template>

    <template v-if="status == 3">
      <common-banner right>
        <right21></right21>
        <right22></right22>
      </common-banner>
    </template>

    <!-- 返回工具栏 -->
    <div class="tools" v-if="status != 1">
      <div class="button" @click="back">返回</div>
      <template v-if="status == 3">
        <div class="button" v-for="item of getProductLine" :class="item.id==selectProductLine?'active':''" :key="item.id" @click="setProductLine(item.id)">{{item.name}}</div>

      </template>
      <template v-if="status == 2">
        <div class="button" v-for="item of areas" :class="item.id==selectArea?'active':''" :key="item.id" @click="setArea(item.id)">{{item.name}}</div>

      </template>
    </div>
  </div>
</template>

<script setup>
import right1 from "./components/right1.vue";
import right2 from "./components/right2.vue";
import left1 from "./components/left1.vue";
import left2 from "./components/left2.vue";
import cright1 from "./components/2/right1.vue";
import cright2 from "./components/2/right2.vue";
import cleft1 from "./components/2/left1.vue";
import cleft2 from "./components/2/left2.vue";
import bottom1 from "./components/bottom1.vue";
import bottom2 from "./components/bottom2.vue";
import cbottom1 from "./components/2/bottom1.vue";
import cbottom2 from "./components/2/bottom2.vue";
import right21 from "./components/right-2-1.vue";
import right22 from "./components/right-2-2.vue";
import { computed, ref } from "vue";

const status = ref(1); //1 外部 2 内部 3 产线
const selectArea = ref(null);
const selectProductLine = ref(null);

const areas = [
  {
    name: "换位工序",
    id: "换位工序",
  },
  {
    name: "丝包工序",
    id: "丝包工序",
  },
  {
    name: "漆包工序",
    id: "漆包工序",
  },
];

const productLines = {};

const getProductLine = computed(() => {
  return [
    {
      name: "HW01",
      id: "HW01",
    },
    {
      name: "HW02",
      id: "HW02",
    },
    {
      name: "HW03",
      id: "HW03",
    },
    {
      name: "HW04",
      id: "HW04",
    },
  ];
});


const setArea=(id)=>{
  selectArea.value=id
}
const setProductLine=(id)=>{
  selectProductLine.value=id
}

const back = () => {
  if (status.value == 3) {
    status.value = 2;
  } else {
    status.value = 1;
  }
};
</script>