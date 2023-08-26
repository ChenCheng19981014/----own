<style lang="scss" scoped>
.statis-data {
  .statis-data-item {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    .icon {
      margin-right: 16px;
      width: 32px;
      height: 32px;
      img {
        width: 100%;
      }
    }
    
    .title {
      font-size: 14px;
      color: #a5d8fc;
    }
   
    .value {
      font-family: "pm";
      font-size: 18px;
      margin-left: 8px;
      background: linear-gradient(180deg, #fff 0%, #0078ff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .unit {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      margin-left: 2px;
    }
  }



  .statis-data-item:last-child {
    margin-bottom: 0;
  }
}
</style>

<template>
<common-box title="设备状态">
       <div class="common-pie" style="margin-bottom: 12px;justify-content:center">
      <div class="main">
        <div class="main-pie">
          <chart-base :options="pieOption"></chart-base>
        </div>
        <div class="main-data">
          <div class="value">
            <span class="v">{{ 49 }}</span
            ><span class="unit">%</span>
          </div>
          <div class="title">设备运行率</div>
        </div>
      </div>
    </div>

       <div class="statis-data">
      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon4.png" alt="" />
        </div>
            <div class="title">今日设备运行小时数</div>
            <div class="value">{{statisData.v1}}</div>
      </div>


        <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon6.png" alt="" />
        </div>
            <div class="title">本月设备运行小时数</div>
                      <div class="value">{{statisData.v1}}</div>

      </div>

        <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon5.png" alt="" />
        </div>
            <div class="title">本年设备运行小时数</div>
                   <div class="value">{{statisData.v3}}</div>

      </div>


    </div>

</common-box>
</template>

<script setup>
import { onMounted, ref } from "vue";
const pieData = ref({
  all: 100,
  v1: 50,
  v2: 50,
});
const pieOption = ref({});
const statisData=ref({v1:0,v2:0,v3:0})
const loadStatisData=async()=>{
    statisData.value.v1=Math.ceil(Math.random()*1000)
    statisData.value.v2=Math.ceil(Math.random()*1000)
    statisData.value.v3=Math.ceil(Math.random()*1000)
}
const loadPieData = async () => {
  let all = pieData.value.all;
  let setup = 0.005 * all;
  let color = [
    "rgba(0, 120, 255, 1)",
    "rgba(0,0,0,0)",
    "rgba(3, 175, 202, 1)",
    "rgba(0,0,0,0)",
  ];

  pieOption.value = {
    series: {
      name: "",
      radius: ["100%", "88%"],
      type: "pie",
      data: [
        { name: "开机数", value: pieData.value.v1 },
        { name: "", value: setup },
        { name: "关机数", value: pieData.value.v2 },
        { name: "", value: setup },
      ],

      label: {
        show: false,
      },
    },
    color,
  };
};

const loadData=()=>{
    loadPieData()
    loadStatisData()
}

onMounted(()=>{
    loadData()
})
</script>