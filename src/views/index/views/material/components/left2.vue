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
    <common-box title="成品库">
        <div class="button" @click="showDialog">详情</div>
        <custom-table style="height:288px"  :data="tableData" :columns="tableColumns">

        </custom-table>
        <custom-dialog title="成品仓库待发货看板" width='1444px' ref="dialog">
            <cdialog></cdialog>
        </custom-dialog>
    </common-box>

</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import cdialog from "./dialog2.vue"
const dialog=ref(null)

const tableColumns = [
  {
    name: "产品编号",
    width: "158px",
    key: "name",
  },
  {
    name: "发货状态",
    width: "64px",
    key: "number",
  },
  {
    name: "发货件数",
    width: "64px",
    key: "number",
  },
  {
    name: "库存件数",
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
