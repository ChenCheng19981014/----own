<style lang="scss" scoped>
.statis-data {
  padding-left: 29px;
  padding-right: 29px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .statis-data-item {
    width: 140px;
    margin-top: 8px;
    .statis-data-title {
      font-size: 14px;
      color: #a5d8fc;
      text-align: right;
    }
    .statis-data-value {
      width: 137px;
      background-image: url("../../../../../assets/overview/icon3.png");
      height: 35px;
      background-size: 100% 100%;
      text-align: center;
      line-height: 35px;
      .value {
        background: linear-gradient(180deg, #fff 0%, #8dc3ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "pm";
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
  .statis-data-item:nth-child(1) {
    margin-top: 0;
  }
  .statis-data-item:nth-child(2) {
    margin-top: 0;
  }
}
</style>

<template>
  <common-box title="订单交付">
    <div class="statis-data">
      <div class="statis-data-item">
        <div class="statis-data-title">当前待交付总数(T)</div>
        <div class="statis-data-value">
          <div class="value">{{ statisData.v1 }}</div>
        </div>
      </div>
      <div class="statis-data-item">
        <div class="statis-data-title">在生产订单数量(T)</div>
        <div class="statis-data-value">
          <div class="value">
            {{ statisData.v2 }}
          </div>
        </div>
      </div>
      <div class="statis-data-item">
        <div class="statis-data-title">本月计划交付数(T)</div>
        <div class="statis-data-value">
          <div class="value">
            {{ statisData.v3 }}
          </div>
        </div>
      </div>
      <div class="statis-data-item">
        <div class="statis-data-title">本月已交付总数(T)</div>
        <div class="statis-data-value">
          <div class="value">
            {{ statisData.v4 }}
          </div>
        </div>
      </div>
      <div class="statis-data-item">
        <div class="statis-data-title">本月待交付数量(T)</div>
        <div class="statis-data-value">
          <div class="value">
            {{ statisData.v5 }}
          </div>
        </div>
      </div>
      <div class="statis-data-item">
        <div class="statis-data-title">本月延迟交付数(T)</div>
        <div class="statis-data-value">
          <div class="value">
            {{ statisData.v6 }}
          </div>
        </div>
      </div>
    </div>
  </common-box>
</template>

<script setup>
import { onMounted, ref } from "vue";

const statisData = ref({
  v1: 0,
  v2: 0,
  v3: 0,
  v4: 0,
  v5: 0,
  v6: 0,
});

const loadData = async () => {
  statisData.value.v1 = Math.ceil(Math.random() * 1000);
  statisData.value.v2 = Math.ceil(Math.random() * 1000);
  statisData.value.v3 = Math.ceil(Math.random() * 1000);
  statisData.value.v4 = Math.ceil(Math.random() * 1000);
  statisData.value.v6 = Math.ceil(Math.random() * 1000);
  statisData.value.v6 = Math.ceil(Math.random() * 1000);
};

onMounted(() => {
  loadData();
});
</script>