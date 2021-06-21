<template>
  <a href="https://chongzhi.jd.com/" class="apply-item">
    <div class="item-img"><slot name="item-img"></slot></div>
    <div class="item-txt"><slot name="item-txt"></slot></div>
  </a>
</template>

<script>
export default {

}
</script>

<style>
 .apply-item{
     width: 75px;
     height: 70px; 
 }
 .item-img img{
   display: block;
   width: 41px;
   height: 41px;
   margin: 5px auto;
 }
 .item-txt{
  text-align: center;
 }
</style>