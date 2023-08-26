<style lang="scss" scoped>
.custom-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table-main{
    flex-grow: 1;
    overflow: hidden;
  }
  .table-item {
    flex-shrink: 0;
    display: flex;
    .row{
      padding-left: 8px;
  padding-right: 8px;
flex-shrink: 0;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        font-size: 14px;
        span{
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
      color: rgba(255, 255, 255, 0.8);

        }
    }
  }
  .head{
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.50);
background: rgba(30, 75, 114, 0.60);

  .row{
    color: #ADCEFF;
  }
  }
   .table-item:nth-child(even){
 background: rgba(0, 0, 0, 0.20);
   }
}
</style>
<template>
  <div class="custom-table">
    <div class="table-item head" :style="`height:${height}px`">
        <div class="row" v-for="row of columns" :key="row.name" :style="`width:${row.width}`">{{row.name}}</div>
    </div>
    <div class="table-main" v-if="data.length==0">
        <empty-data ></empty-data>
     
    </div>
    <div class="table-main" v-else>
           <scroll-wrap  :distance='height'>
            <div class="table-item" :style="`height:${height}px`" v-for="(item,index) of data" :key="index">
               <div class="row" v-for="row of columns" :key="row.name" :style="`width:${row.width}`">
                <span :title="item[row.key]">{{item[row.key]}}</span>
               </div>
            </div>
        </scroll-wrap>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-table",
  props: {
    height: {
      type: Number,
      default: 32,
    },
    columns: Array,
    data: Array,
  },
};
</script>