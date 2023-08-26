<style lang="scss" scoped>
.data-statis {
  margin-bottom: 24px;
  .data-statis-item {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    .data-statis-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-left: 24px;
      margin-right: 24px;
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

  .data-statis-item:nth-child(1) {
    margin-bottom: 8px;
  }
}
</style>


<template>
  <common-box title="销售业绩">
    <div class="data-statis">
      <div class="data-statis-item">
        <div class="data-statis-icon">
          <img src="../../../../../assets/overview/icon1.png" alt="" />
        </div>
        <div class="data-stats-main">
          <div class="value">{{ statisData.v1 }}</div>
          <div class="title">本月接单量 <span class="unit">(T)</span></div>
        </div>
        <div class="data-stats-main">
          <div class="value">{{ statisData.v2 }}</div>
          <div class="title">本年累计接单量 <span class="unit">(T)</span></div>
        </div>
      </div>
      <div class="data-statis-item">
        <div class="data-statis-icon">
          <img src="../../../../../assets/overview/icon2.png" alt="" />
        </div>
        <div class="data-stats-main">
          <div class="value">{{ statisData.v3 }}</div>
          <div class="title">本月发货量 <span class="unit">(T)</span></div>
        </div>
        <div class="data-stats-main">
          <div class="value">{{ statisData.v4 }}</div>
          <div class="title">本年累计发货量 <span class="unit">(T)</span></div>
        </div>
      </div>
    </div>

    <custom-bar
     stack
      style="width: 100%; height: 147px"
      yAxisName="(T)"
      :colors="[{ color: 'rgba(225, 98, 98, 1)' }, { color: 'rgba(255, 203, 71, 1)' }, { color: '#823AD6' }, { color: '#03AFCA' }, { color: 'rgba(0, 120, 255, 1)' }]"
      :source="barData"
    />
  </common-box>
</template>

<script setup>
import { onMounted, ref } from "vue";

const statisData = ref({
  v1: 0,
  v2: 0,
  v3: 0,
  v4: 0,
});

const barData = ref([]);

const loadStatisData = async () => {
  statisData.value.v1 = Math.ceil(Math.random() * 1000);
  statisData.value.v2 = Math.ceil(Math.random() * 1000);
  statisData.value.v3 = Math.ceil(Math.random() * 1000);
  statisData.value.v4 = Math.ceil(Math.random() * 1000);
};

const loadBarData = async () => {
  barData.value = [
    {
      name: "2022-08",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
     {
      name: "2022-09",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
     {
      name: "2022-10",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
     {
      name: "2022-11",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
     {
      name: "2022-12",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
      {
      name: "2023-1",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
      {
      name: "2023-2",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
        {
      name: "2023-3",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
        {
      name: "2023-4",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
        {
      name: "2023-5",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
      {
      name: "2023-6",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
      {
      name: "2023-7",
      ZW: Math.ceil(Math.random() * 5),
      ZH: Math.ceil(Math.random() * 5),
      QY: Math.ceil(Math.random() * 5),
      QB: Math.ceil(Math.random() * 5),
      HW: Math.ceil(Math.random() * 5),
    },
    
  ];
};

const loadData = async () => {
  loadStatisData();
  loadBarData();
};

onMounted(() => {
  loadData();
});
</script>