<template>
  <common-box title="能源消耗">
    <custom-line
      style="width: 100%; height: 147px"
      yAxisName="(kw)"
      :colors="[{ color: '#0078FF' }, { color: '#03AFCA' }]"
      :source="lineData"
    />
  </common-box>
</template>


<script setup>
import { onMounted, ref } from "vue";

const lineData = ref([]);

const loadData = async () => {
  lineData.value = [
    {
      name: "00:00",
      今天: 10,
      明天: 10,
    },
    {
      name: "01:35",
      今天: 5,
      明天: 6,
    },
    {
      name: "03:10",
      今天: 7,
      明天: 8,
    },
    {
      name: "03:00",
      今天: 6,
      明天: 3,
    },
    {
      name: "04:00",
      今天: 6,
      明天: 4,
    },
    {
      name: "05:00",
      今天: 5,
      明天: 4,
    },
    {
      name: "06:00",
      今天: 4,
      明天: 4,
    },
    {
      name: "07:00",
      今天: 7,
      明天: 7,
    },
    {
      name: "03:00",
      今天: 6,
      明天: 3,
    },
    {
      name: "04:00",
      今天: 6,
      明天: 4,
    },
    {
      name: "05:00",
      今天: 5,
      明天: 4,
    },
    {
      name: "06:00",
      今天: 4,
      明天: 4,
    },
    {
      name: "07:00",
      今天: 7,
      明天: 7,
    },
  ];
};

onMounted(() => {
  loadData();
});
</script>