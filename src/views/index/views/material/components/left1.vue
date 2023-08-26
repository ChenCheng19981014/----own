<style lang="scss" scoped>

  .button{
    width: 61px;
    height: 26px;
    position: absolute;
    left:299px;
    top:4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-size: 100% 100%;
    background-image: url('../../../../../assets/common/button.png');
    color: rgba(255, 255, 255, 0.60);

    &:hover{
      color: white;
    background-image: url('../../../../../assets/common/button-hover.png');
    }
  }
</style>

<template>
<div>
    <common-box title="采购入库">
        <div class="button" @click="showDialog">详情</div>
        <custom-table style="height:288px"  :data="tableData" :columns="tableColumns">

        </custom-table>
        <custom-dialog title="采购待入库材料看板" ref="dialog">
            <cdialog></cdialog>
        </custom-dialog>
    </common-box>

</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import cdialog from "./dialog1.vue"
const dialog=ref(null)

const tableColumns = [
  {
    name: "送货日期",
    width: "88px",
    key: "name",
  },
  {
    name: "采购单号",
    width: "112px",
    key: "number",
  },
  {
    name: "物料名称",
    width: "83px",
    key: "number",
  },
  {
    name: "送货数量",
    key: "number",
  },
];

const tableData=ref([])

const showDialog=()=>{
    dialog.value.open()
}

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
