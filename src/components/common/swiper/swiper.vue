<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(image, index) in banners" :key="index">
      <a :href="image.link" class="image-a">
          <img :src="image.image" alt="" class="image">
      </a>
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default {
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
}
</script>

<style>
.my-swipe{
    margin-top: 44px;
}
 .my-swipe .van-swipe-item {
     font-size: 0;
    color: #fff;
    text-align: center;
    vertical-align:middle;
    background-color:red;
  }
  .image{
      width: 100%;
  }
</style>