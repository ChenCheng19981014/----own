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
    background-image: url("../../../../assets/common/按钮未选.png");
    &:hover {
      background-image: url("../../../../assets/common/按钮悬停.png");
      color: #73ddff;
    }
  }
  .active {
    z-index: 3;
    color: #73ddff;
    background-image: url("../../../../assets/common/按钮选中.png") !important;
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
        <div
          class="button"
          v-for="item of getProductLine"
          :class="item.id == selectProductLine ? 'active' : ''"
          :key="item.id"
          @click="setProductLine(item.id)"
        >
          {{ item.name }}
        </div>
      </template>
      <template v-if="status == 2">
        <div
          class="button"
          v-for="item of areas"
          :class="item.id == selectArea ? 'active' : ''"
          :key="item.id"
          @click="setArea(item.id)"
        >
          {{ item.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
// import bus from "../../../../utils/bus";
import bus from "./../../../../lib/bus";
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
const selectArea = ref(null); //选中区域
const selectProductLine = ref(null);

// 区域
const areas = [
  {
    name: "换位工序1",
    id: "换位工序1",
  },
  {
    name: "换位工序2",
    id: "换位工序2",
  },
  {
    name: "换位工序3",
    id: "换位工序3",
  },
];

// 返回按钮
const back = () => {
  if (status.value == 3) {
    status.value = 2;
  } else {
    status.value = 1;
  }
  // 设置3d场景的层级
  bus.$emit("scene-setLevel", status.value);
  // console.log("前端选中的层级:", status.value);
};

// 产线映射表
const areaProduceLineMap = {
  换位工序1: [
    { name: "HW01", id: "产线01" },
    { name: "HW02", id: "产线02" },
    { name: "HW03", id: "产线03" },
    { name: "HW04", id: "产线04" },
    { name: "HW05", id: "产线05" },
    { name: "HW06", id: "产线06" },
    { name: "HW07", id: "产线07" },
  ],
  换位工序2: [
    { name: "HW08", id: "产线08" },
    { name: "HW09", id: "产线09" },
    { name: "HW10", id: "产线10" },
    { name: "HW11", id: "产线11" },
  ],
  换位工序3: [
    { name: "HW12", id: "产线12" },
    { name: "HW13", id: "产线13" },
  ],
};

// 不同区域对应的不同产线
const getProductLine = computed(() => {
  return areaProduceLineMap[selectArea.value];
});

//前端---  发给3d切换区域
const setArea = (id) => {
  selectArea.value = id;
  bus.$emit("scene-setArea", id);
  // console.log("前端选中的区域:", id);
};

//前端---  发给3d切换产线
const setProductLine = (id) => {
  selectProductLine.value = id;
  bus.$emit("scene-setProductLine", id);
  // console.log("前端选中的产线:", id);
};

// 3d---改变层级
const sceneSetStatus = (level) => {
  status.value = level;
  // console.log("选中层级了", id);
};

//3d---切换区域
const sceneSetArea = (id) => {
  selectArea.value = id;
  // console.log("选中区域了", id);
};

//3d---切换产线
const sceneSetProductLine = (id) => {
  selectProductLine.value = id;
  console.log("选中产线了", id);
};

// 修改进入的层级
bus.$on("changeLevel-status", sceneSetStatus.bind(this));

// 修改选中的区域
bus.$on("changeSelectedArea", sceneSetArea.bind(this));

// 修改选中的产线
bus.$on("changeSelectedProduceLine", sceneSetProductLine.bind(this));

// // 修改进入的层级
// bus.$on("changeLevel-status", setStatus.bind(this));

// // 修改选中的区域
// bus.$on("changeSelectedArea", setArea.bind(this));

// // 修改选中的产线
// bus.$on("changeSelectedProduceLine", setProductLine.bind(this));
</script>
