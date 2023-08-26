
<style lang="scss" scoped>

</style>

<template>
  <common-box title="人工效率">
    <div class="common-pie" style="margin-bottom:24px">
      <div class="main">
        <div class="main-pie">
          <chart-base :options="pieOption"></chart-base>
        </div>
        <div class="main-data">
          <div class="value">
            <span class="v">{{ 49 }}</span
            ><span class="unit">%</span>
          </div>
          <div class="title">出勤率</div>
        </div>
      </div>
      <div class="data-main">
        <div class="data-item">
          <div class="left">
            <div class="left-title">总人数</div>
          </div>
          <div class="value" style="font-size: 24px">
            {{ pieData.all }}<span class="unit">人</span>
          </div>
        </div>

        <div class="data-item">
          <div class="left">
            <div class="point" style="background: rgba(0, 120, 255, 1)"></div>
            <div class="left-title">出勤</div>
          </div>
          <div class="svalue" style="color:rgba(0, 120, 255, 1)">
            {{ pieData.all }}<span class="unit">人</span>
          </div>
        </div>

        <div class="data-item">
          <div class="left">
            <div class="point" style="background: rgba(255, 203, 71, 1)"></div>
            <div class="left-title">缺勤</div>
          </div>
          <div class="svalue" style="color:rgba(255, 203, 71, 1)">
            {{ pieData.all }}<span class="unit">人</span>
          </div>
        </div>
      </div>
    </div>
    <short-bar :left="barLeft" :right="barRight" leftTitle="日均功效(kg)" rightTitle="人均功效(kg)" style="marign-bottom:24px"></short-bar>
    <sub-title
      title="运行时长统计"
      style="margin-bottom: 16px; margin-top: 24px"
    ></sub-title>
    <custom-line
      style="width: 100%; height: 175px"
      yAxisName=" "
      disLegend
      :colors="[{ color: '#0078FF' }]"
      :source="lineData"
    />

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

const barLeft=ref([
  {
    name:"日均目标",
    value:220
  },{
    name:"日均值",
    value:50
  }
])



const barRight=ref([
  {
    name:"人均目标",
    value:220
  },{
    name:"人均值",
    value:20
  }
])


const lineData = ref([]);

const loadBarData=async()=>{

}

const loadPieData = async() => {
  let all = pieData.value.all;
  let setup = 0.005 * all;
  let color = ["rgba(0, 120, 255, 1)", "rgba(0,0,0,0)", "rgba(255, 203, 71, 1)", "rgba(0,0,0,0)"];

  pieOption.value = {
    series: {
      name: "",
      radius: ['100%', '88%'],
      type: "pie",
      data:[
        { name: '出勤', value: pieData.value.v1 },
        { name: '', value: setup },
        { name: '缺勤', value: pieData.value.v2  },
        { name: '', value: setup },
      ],

      label: {
        show: false,
      },
    },
    color
  };

};

const loadLineData = async () => {
  lineData.value = [
    {
      name: "00:00",
      功效: 10,
    },
    {
      name: "01:35",
      功效: 5,
    },
    {
      name: "03:10",
      功效: 7,
    },
    {
      name: "03:00",
      功效: 6,
    },
    {
      name: "04:00",
      功效: 6,
    },
    {
      name: "05:00",
      功效: 5,
    },
    {
      name: "06:00",
      功效: 4,
    },
    {
      name: "07:00",
      功效: 7,
    },
    {
      name: "03:00",
      功效: 6,
    },
    {
      name: "04:00",
      功效: 6,
    },
  ];
};

const loadData = async () => {
  loadLineData();
  loadPieData();
  loadBarData()
};

onMounted(() => {
  loadData();
});
</script>