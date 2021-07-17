<template>
  <div class="user">
   <div class="user-mess">
     <div class="user-logo">
         <img src="~@/assets/img/logo.png" alt="" width="70">
     </div>
     <div class="user-tel" v-if="Object.keys(userinfo).length!==0">
         <div>{{userinfo.username}}</div>
         <div><span>&#xe62f;</span>{{userinfo.tel}}</div>
     </div>
     <div v-else @click="loginClick">未登录/点击登录</div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo:{}
    }
  },
 created() {
   this.getInfoData()
 },
 methods: {
   loginClick(){
     this.$router.push('/login')
   },
   getInfoData(){
     this.userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'))||{}
   }
 },
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
