
<style lang="scss" scoped>


</style>

<template>
<div>
    <common-box title="质量状态">
        <custom-table style="height:672px"  :data="tableData" :columns="tableColumns">

        </custom-table>
    </common-box>

</div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const tableColumns = [
  {
    name: "产品编号",
    width: "120px",
    key: "name",
  },
  {
    name: "工序",
    width: "64px",
    key: "number",
  },
  {
    name: "故障代码",
    width: "88px",
    key: "number",
  },
  {
    name: "时间",
    key: "number",
  },
];

const tableData=ref([])


const loadData=async()=>{
    tableData.value=[
        {},
        {},
        {},
        {},
    ]
}

onMounted(()=>{
    loadData()
})
</script>
