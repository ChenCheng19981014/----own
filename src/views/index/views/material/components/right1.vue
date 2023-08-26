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
    <common-box title="盘具需求">
        <div class="button" @click="showDialog">详情</div>
        <custom-table style="height:288px"  :data="tableData" :columns="tableColumns">

        </custom-table>
        <custom-dialog title="盘具需求看板" ref="dialog">
            <cdialog></cdialog>
        </custom-dialog>
    </common-box>

</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import cdialog from "./dialog3.vue"
const dialog=ref(null)

const tableColumns = [
  {
    name: "需求时间",
    width: "88px",
    key: "name",
  },
  {
    name: "盘具型号",
    width: "126px",
    key: "number",
  },
  {
    name: "需求数量",
    width: "64px",
    key: "number",
  },
  {
    name: "即时库存数",
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
