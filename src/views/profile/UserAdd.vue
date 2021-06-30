<template>
  <div class="add" @click="addClick">
      <div>
          <span class="icon">&#xe625;</span><span>管理收获地址</span>
      </div>
  </div>
</template>

<script>
export default {
 methods: {
     addClick(){
         this.$router.push('/add')
     }
 },
}
</script>

<style scoped>
.add{
    border-bottom: 3px solid #f2f2f2;
    background-color: #fff;
    font-size: 15px;
    color: #333;
    height: 44px;
    line-height: 44px;
}
.icon{
    font-family: "iconfont";
    margin: auto 18px;
}
</style>