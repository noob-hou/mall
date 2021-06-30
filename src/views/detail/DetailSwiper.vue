<template>
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(i,index) in topImg" :key="index">
      <img :src="i" alt="" class="image" :key="index">
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default {
  props:{
      topImg:{
          type:Object,
          defalut(){
              return {}
          }
      }
  },
}
</script>

<style scoped>
.my-swipe{
    margin-top: 44px;
}
 .my-swipe .van-swipe-item {
    font-size: 0;
    color: #fff;
    text-align: center;
    vertical-align:middle;
    overflow: hidden;
    height: 300px;
  }
  .image{
    width: 100%; 
   
  }
</style>