<style lang="scss" scoped>

.empty-data{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    backdrop-filter: blur(4px);
    img{
        margin-right: 12px;}
       .img1{
        margin-top: 3px;
        width: 24px;
    }
    .img2{
        width: 18px;
    }
    .text{
        font-size: 14px;
        color: rgba(255, 255, 255, 0.50);

    }


    &#border{
        border: none!important;
        background: none!important;
           backdrop-filter: none;
    }
}

</style>

<template>
    <div class="empty-data"  :id="border?'border':''">
        <img src="./error.png" class="img1" v-if="error" alt="">
        <img src="./empty.png" class="img2" v-if="!error" alt="">
        <div class="text">暂无数据</div>
    </div>
</template>

<script>
export default {
    props:{
         border:{
            type:Boolean,
            default:false
        },
         error:{
            type:Boolean,
            default:false
        },
    },
    name:"empty-data"
}
</script>