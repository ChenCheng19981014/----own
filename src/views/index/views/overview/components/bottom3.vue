<style lang="scss" scoped>
.chart{
    .main{
        height: 174px;
        width: 610px;
    }
}
</style>

<template>
    <div class="chart">
        <div class="main">
            <custom-line
      style="width: 100%; height: 100%"
      yAxisName="(kw)"
      :colors="[{ color: '#0078FF' }, { color: '#03AFCA' }]"
      :source="lineData"
    />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const lineData = ref([]);

const loadData = async () => {
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

onMounted(() => {
  loadData();
});
</script>