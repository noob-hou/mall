<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <div class="item-icon"><slot name="item-ico"></slot></div>
    <div class="item-text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
 props:{
   path:String,
   activeColor:{
     type:String,
     default:'red'
   }
 },
 
 computed:{
   activeStyle(){
      if(this.$route.path === this.path){
        return {color:this.activeColor}
      }
   }
 },
 methods: {
   itemClick(){
       this.$router.push(this.path)
   }
 },
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  padding: 0 2px;
}
.item-icon{
    font-family:"iconfont";
    font-size: 20px;
}
.item-text{
    font-size: 12px;
}
</style>