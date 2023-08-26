<style lang="scss" scoped>
.statis-data {
  .statis-data-item {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    .icon {
      margin-right: 10px;
      width: 32px;
      height: 32px;
      img {
        width: 100%;
      }
    }
    .main-item {
      display: flex;
      align-items: center;
      // margin-top: 4px;
    }
    .title {
      font-size: 14px;
      color: #a5d8fc;
    }
    .progress {
      margin-left: 16px;
      margin-right: 8px;
      height: 8px;
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

  .main-item:nth-child(1) {
    .progress {
      background: linear-gradient(270deg, #00c57e 0%, #005828 100%);
    }
  }

  .main-item:nth-child(2) {
    .progress {
      background: linear-gradient(270deg, #0078ff 0%, #002d60 100%);
    }
  }

  .statis-data-item:last-child {
    border-bottom: none;
    margin-bottom: none;
    padding-bottom: none;
  }
}
</style>

<template>
  <common-box title="设备运行">
    <div class="common-pie" style="margin-bottom: 20px">
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
            <div class="left-title">设备总量</div>
          </div>
          <div class="value" style="font-size: 24px">
            {{ pieData.all }}<span class="unit">台</span>
          </div>
        </div>

        <div class="data-item">
          <div class="left">
            <div class="point" style="background: rgba(0, 120, 255, 1)"></div>
            <div class="left-title">开机数</div>
          </div>
          <div class="svalue" style="color: rgba(0, 120, 255, 1)">
            {{ pieData.all }}<span class="unit">台</span>
          </div>
        </div>

        <div class="data-item">
          <div class="left">
            <div class="point" style="background: #03afca"></div>
            <div class="left-title">关机数</div>
          </div>
          <div class="svalue" style="color: 03AFCA">
            {{ pieData.all }}<span class="unit">台</span>
          </div>
        </div>
      </div>
    </div>

    <sub-title title="运行时长统计" style="margin-bottom: 20px"></sub-title>
    <div class="statis-data">
      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon4.png" alt="" />
        </div>
        <div class="main">
          <div class="main-item">
            <div class="title">昨日设备运行小时数</div>
            <div
              class="progress"
              :style="`width:${(100 * statisData.v1) / s1}px`"
            ></div>
            <div class="value">{{ statisData.v1 }}</div>
            <div class="unit">K</div>
          </div>
          <div class="main-item">
            <div class="title">今日设备运行小时数</div>
            <div
              class="progress"
              :style="`width:${(100 * statisData.v2) / s1}px`"
            ></div>
            <div class="value">{{ statisData.v2 }}</div>
            <div class="unit">K</div>
          </div>
        </div>
      </div>

      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon6.png" alt="" />
        </div>
        <div class="main">
          <div class="main-item">
            <div class="title">上月设备运行小时数</div>
            <div
              class="progress"
              :style="`width:${(100 * statisData.v3) / s2}px`"
            ></div>
            <div class="value">{{ statisData.v3 }}</div>
            <div class="unit">K</div>
          </div>
          <div class="main-item">
            <div class="title">本月设备运行小时数</div>
            <div
              class="progress"
              :style="`width:${(100 * statisData.v4) / s2}px`"
            ></div>
            <div class="value">{{ statisData.v4 }}</div>
            <div class="unit">K</div>
          </div>
        </div>
      </div>

      <div class="statis-data-item">
        <div class="icon">
          <img src="../../../../../assets/overview/icon4.png" alt="" />
        </div>
        <div class="main">
          <div class="main-item">
            <div class="title">去年设备运行小时数</div>
            <div
              class="progress"
              :style="`width:${(100 * statisData.v5) / s3}px`"
            ></div>
            <div class="value">{{ statisData.v5 }}</div>
            <div class="unit">K</div>
          </div>
          <div class="main-item">
            <div class="title">本年设备运行小时数</div>
            <div
              class="progress"
              :style="`width:${(100 * statisData.v6) / s3}px`"
            ></div>
            <div class="value">{{ statisData.v6 }}</div>
            <div class="unit">K</div>
          </div>
        </div>
      </div>
    </div>
    <custom-line
      style="width: 100%; height: 140px"
      yAxisName="(min)"
      :colors="[{ color: '#0078FF' }, { color: '#03AFCA' }]"
      :source="lineData"
    />
  </common-box>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const statisData = ref({
  v1: 0,
  v2: 0,
  v3: 0,
  v4: 0,
  v5: 0,
  v6: 0,
});

const s1 = computed(() => {
  return statisData.value.v1 > statisData.value.v2
    ? statisData.value.v1
    : statisData.value.v2;
});

const s2 = computed(() => {
  return statisData.value.v3 > statisData.value.v4
    ? statisData.value.v3
    : statisData.value.v4;
});

const s3 = computed(() => {
  return statisData.value.v5 > statisData.value.v6
    ? statisData.value.v5
    : statisData.value.v6;
});

const pieData = ref({
  all: 100,
  v1: 50,
  v2: 50,
});
const pieOption = ref({});

const lineData = ref([]);

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
  statisData.value.v4 = Math.ceil(Math.random() * 1000);
  statisData.value.v5 = Math.ceil(Math.random() * 1000);
  statisData.value.v6 = Math.ceil(Math.random() * 1000);
};

const loadData = async () => {
  loadPieData();
  loadLineData();
  loadStatisData();
};
onMounted(() => {
  loadData();
});
</script>