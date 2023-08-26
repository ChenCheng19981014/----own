<style lang="scss" scoped>
.statis-data {
  .statis-data-item {
    height:48px ;
    background: black;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    background-size: 100% 100%;
    background-image: url('../../../../../assets/common/statis-bg.png');
    .icon {
      margin-right: 40px;
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
      margin-left: 24px;
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
  <common-box title="产线产量">
    <sub-title
      title="产量趋势"
      style="margin-top: 8px; margin-bottom: 8px"
    ></sub-title>
    <custom-line
      style="width: 100%; height: 141px"
      yAxisName="(kw)"
      :colors="[{ color: '#0078FF' }, { color: '#03AFCA' }]"
      :source="lineData"
    />
    <sub-title
      title="产量统计"
      style="margin-bottom: 8px; margin-top: 8px"
    ></sub-title>
    <div class="statis-data">
      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon4.png" alt="" />
        </div>
        <div class="title">当日产量</div>
        <div class="value">{{ statisData.v1 }}</div>
        <div class="unit">m</div>
      </div>

      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon6.png" alt="" />
        </div>
        <div class="title">当月产量</div>
        <div class="value">{{ statisData.v2 }}</div>
        <div class="unit">m</div>
      </div>

      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon4.png" alt="" />
        </div>
        <div class="title">当年产量</div>
        <div class="value">{{ statisData.v3 }}</div>
      </div>
    </div>
  </common-box>
</template>

<script setup>
import { onMounted, ref } from "vue";

const lineData = ref([]);
const statisData = ref({ v1: 0, v2: 0, v3: 0 });

const loadLineData = async () => {
  lineData.value = [
    {
      name: "00:00",
      本月: 10,
      上月: 10,
    },
    {
      name: "01:35",
      本月: 5,
      上月: 6,
    },
    {
      name: "03:10",
      本月: 7,
      上月: 8,
    },
    {
      name: "03:00",
      本月: 6,
      上月: 3,
    },
    {
      name: "04:00",
      本月: 6,
      上月: 4,
    },
    {
      name: "05:00",
      本月: 5,
      上月: 4,
    },
    {
      name: "06:00",
      本月: 4,
      上月: 4,
    },
    {
      name: "07:00",
      本月: 7,
      上月: 7,
    },
    {
      name: "03:00",
      本月: 6,
      上月: 3,
    },
    {
      name: "04:00",
      本月: 0,
      上月: 4,
    },
    {
      name: "05:00",
      本月: null,
      上月: 4,
    },
    {
      name: "06:00",
      本月: null,
      上月: 4,
    },
    {
      name: "07:00",
      本月: null,
      上月: 7,
    },
  ];
};

const loadStatisData = async () => {
  statisData.value.v1 = Math.ceil(Math.random() * 1000);
  statisData.value.v2 = Math.ceil(Math.random() * 1000);
  statisData.value.v3 = Math.ceil(Math.random() * 1000);
};
const loadData = () => {
  loadLineData();
  loadStatisData();
};

onMounted(() => {
  loadData();
});
</script>