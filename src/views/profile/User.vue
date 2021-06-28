<template>
  <div class="user">
   <div class="user-mess">
     <div class="user-logo">
         <img src="~@/assets/img/logo.png" alt="" width="70">
     </div>
     <div class="user-tel">
         <div>noob-hou</div>
         <div><span>&#xe62f;</span>13696223046</div>
     </div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .user{
      background-color: #ff919c;
      height: 100px;
      color: #fff;
      box-sizing: border-box;
      padding: 20px;
  }
  .user-mess>div{
      float: left;
      height: 60px;
      line-height: 30px;
      margin-left: 10px;
      font-family: "iconfont";
  }
  .user-logo img{
      border-radius: 50%;
      overflow: hidden;
  }
</style>
