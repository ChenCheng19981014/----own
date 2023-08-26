<style lang="scss" scoped>
.custom-tables {
  height: 128px;
  overflow: hidden;
}
</style>

<template>
  <common-box title="销售业绩">
    <div class="custom-tables">
      <custom-table :data="tableData" :columns="tableColumns"> </custom-table>
    </div>
  </common-box>
</template>

<script setup>
import { onMounted, ref } from "vue";

const tableColumns = [
  {
    name: "设备",
    width: "120PX",
    key: "name",
  },
  {
    name: "状态",
    width: "64PX",
    key: "number",
  },
  {
    name: "开始时间",
    width: "88px",
    key: "startTime",
  },
    {
    name: "結束时间",
    key: "endTime",
  },
];

const tableData = ref([]);

const loadData = async () => {
  tableData.value = [
    {
      name: "SHEBEI1",
      startTime:'2023-07-07',
      endTime:'2023-07-07'
    },
    {
      name: "SHEBEI2",
    },
    {
      name: "SHEBEI3",
    },
    {
      name: "SHEBEI4",
    },
  ];
};
onMounted(() => {
  loadData();
});
</script>