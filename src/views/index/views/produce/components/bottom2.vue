<style lang="scss" scoped>
.custom-tables {
  width: 100%;
  height: 181px;
  padding-left: 40px;
  padding-right: 40px;
  overflow: hidden;
}
</style>

<template>
  <common-box class="long-common-box">
    <div class="custom-tables">
      <custom-table :data="tableData" :columns="tableColumns"></custom-table>
    </div>
  </common-box>
</template>


<script setup>
import { onMounted, ref } from "vue";

const loadData = async () => {};

const tableColumns = [
  {
    name: "产品编号",
    width: "160px",
    key: "name",
  },
  {
    name: "产品规格",
    width: "160px",
    key: "number",
  },
  {
    name: "工序",
    width: "100px",
    key: "number",
  },
  {
    name: "设备",
    width: "100px",
    key: "number",
  },
  {
    name: "需求时间",
    width: "100px",
    key: "number",
  },
  {
    name: "状态",
    width: "100px",
    key: "number",
  },
  {
    name: "完成率",
    key: "perstanage",
  },
];

const tableData = ref([
  {
    name: "测试row",
    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
  {
    name: "煩煩煩煩煩煩煩煩煩煩煩煩",    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },  {
    name: "测试row",
    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
  {
    name: "煩煩煩煩煩煩煩煩煩煩煩煩",    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
  {
    name: "测试row",    perstanage:11
  },
]);

onMounted(() => {
  loadData();
});
</script>