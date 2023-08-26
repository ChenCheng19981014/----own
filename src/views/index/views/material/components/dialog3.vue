<style lang="scss" scoped>
.pagation {
  width: 100%;
  height: 32px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .total {
    padding-left: 18px;
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>

<style lang="scss">
.spc {
  .head {
    margin-bottom: 16px;
  }
}
</style>
<template>
  <div style="width: 100%; padding-left: 0; padding-right: 0">
    <custom-table
      class="spc"
      :height="32"
      :data="tableData"
      :columns="tableColumns"
    ></custom-table>
    <div class="pagation">
      <div class="total">共 {{ total }} 条数据</div>
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const pageNumber = ref(1);
const total = ref(101);
const tableColumns = [
  {
    name: "序号",
    width: "44px",
    key: "name",
  },
  {
    name: "需求时间",
    width: "104px",
    key: "name",
  },
  {
    name: "需求工序",
    width: "160px",
    key: "number",
  },
  {
    name: "物料名称",
    width: "160px",
    key: "number",
  },
  {
    name: "盘具型号",
    width: "120px",
    key: "number",
  },
  {
    name: "盘具规格",
    width: "160px",
    key: "number",
  },
  {
    name: "需求数量",
    width: "160px",
    key: "number",
  },
  {
    name: "已领用",
    width: "160px",
    key: "number",
  },
  {
    name: "待领用数",
    width: "160px",
    key: "number",
  },
  {
    name: "即时库存数",
    key: "number",
  },
];
const tableData = ref([]);

const loadData = () => {
  tableData.value = [
    {
      name: "SHE",
    },
    {
      name: "SHEBEI22222222",
    },
    {
      name: "SHEBEI3",
    },
    {
      name: "SHEBEI4",
    },
    {
      name: "SHEBEI1",
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
    {
      name: "SHEBEI1",
    },
    {
      name: "SHEBEI2",
    },
  ];
};

onMounted(() => {
  loadData();
});
</script>