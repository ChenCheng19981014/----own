<style lang="scss" scoped>
.chart {
  .main {
    margin-top: 40px;
    margin-left: 40px;
  }
  .data-statis-item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    .data-statis-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: 10px;
      margin-left: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .data-stats-main {
      margin-right: 24px;
      .value {
        background: linear-gradient(180deg, #fff 0%, #8dc3ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        font-family: "pm";
        font-weight: bold;
      }
      .title {
        font-size: 14px;
        color: #a5d8fc;
      }
    }
  }
}
</style>

<template>
  <div class="chart">

    <div class="main">
      <div class="data-statis-item">
        <div class="data-statis-icon">
          <img src="../../../../../assets/overview/icon4.png" alt="" />
        </div>
        <div class="data-stats-main">
          <div class="value">{{ statisData.v1 }}</div>
          <div class="title">本日产量<span class="unit">(T)</span></div>
        </div>
      </div>
      <div class="data-statis-item">
        <div class="data-statis-icon">
          <img src="../../../../../assets/overview/icon5.png" alt="" />
        </div>
        <div class="data-stats-main">
          <div class="value">{{ statisData.v1 }}</div>
          <div class="title">本年产量 <span class="unit">(T)</span></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";

const statisData = ref({
  v1: 0,
  v2: 0,
});

const loadData = async () => {
  statisData.v1=Math.ceil(Math.random()*1000)
  statisData.v2=Math.ceil(Math.random()*1000)
};

onMounted(() => {
  loadData();
});
</script>