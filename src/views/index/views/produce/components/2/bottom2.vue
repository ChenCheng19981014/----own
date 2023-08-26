<style lang="scss" scoped>
.custom-tables {
  width: 100%;
  height: 181px;
  padding-left: 40px;
  padding-right: 40px;
  overflow: hidden;

}

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
    background-image: url('../../../../../../assets/common/button.png');
    color: rgba(255, 255, 255, 0.60);

    &:hover{
      color: white;
    background-image: url('../../../../../../assets/common/button-hover.png');
    }
  }
</style>

<template>
  <common-box class="long-common-box">
    <div class="button" @click="showDialog">详情</div>
    <div class="custom-tables">
      <custom-table :data="tableData" :columns="tableColumns"></custom-table>
    </div>
    <custom-dialog ref="dialog" title="采购待入库材料看板">
      <cdialog></cdialog>
    </custom-dialog>
  </common-box>
</template>


<script setup>
import cdialog from "./dialog.vue"
import { onMounted, ref } from "vue";

const loadData = async () => {};

const dialog=ref(null)
const tableColumns = [
  {
    name: "设备名称",
    width: "100px",
    key: "name",
  },
  {
    name: "工艺名称",
    width: "88px",
    key: "number",
  },
  {
    name: "产品编号",
    width: "170px",
    key: "number",
  },
  {
    name: "产品规格",
    width: "170px",
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
    width:"88px"
  },
  {
    name: "交货期",
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

const showDialog=()=>[
  dialog.value.open()
]
onMounted(() => {
  loadData();
});
</script>