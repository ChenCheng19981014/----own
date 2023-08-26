<style lang="scss" scoped>
.main {
  width: 100%;
  height: 181px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  .chart-left {
    flex-grow: 1;
    height: 100%;
    position: relative;
    .text {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .chart-legend {
    width: 181px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: 0;
    .legend-item {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      .point {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .name {
        width: 24px;
        margin-right: 8px;
        font-size: 14px;
      }
      .value {
        width: 30px;
        background: linear-gradient(180deg, #fff 0%, #8dc3ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
</style>

<template>
  <common-box title="生产类别概况">
    <div class="chart">
      <div class="main">
        <div class="chart-left">
          <div class="text">本月产量(T)</div>
          <chart-base :options="pieOption"></chart-base>
        </div>
        <div class="chart-legend">
          <div
            class="legend-item"
            v-for="(item, index) of pieData"
            :key="item.name"
          >
            <div class="point" :style="`background:${colors[index]}`"></div>
            <div class="name">{{ item.name }}</div>
            <div class="value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div></common-box
  >
</template>


<script setup>
import { onMounted, ref } from "vue";
const pieData = ref([]);

const pieOption = ref({});

const colors = [
  "rgba(71, 123, 255, 1)",
  "#47D1CB",
  "#6F47FF",
  "#FFCB47",
  "#FF477B",
  "#59DBFF",
  "#CB47FF",
  "#FF884D",
  "#00897B",
];

const loadData = async () => {
  pieData.value = [
    {
      name: "FJ",
      value: 82,
    },
    {
      name: "HW",
      value: 68,
    },
    {
      name: "LX",
      value: 91,
    },
    {
      name: "QB",
      value: 82,
    },
    {
      name: "QY",
      value: 88,
    },
    {
      name: "XQ",
      value: 92,
    },
    {
      name: "ZB",
      value: 88,
    },
    {
      name: "ZH",
      value: 92,
    },
    {
      name: "ZW",
      value: 88,
    },
  ];

  pieOption.value = {
    series: {
      name: "",
      radius: ["50", "35"],
      type: "pie",
      data: pieData.value,

      label: {
        formatter: "{d}%",
        show: true,
        textStyle: {
          fontSize: 12,
          color: "white",
        },
      },
    },
    color: colors,
  };
};

onMounted(() => {
  loadData();
});
</script>