<template>
  <div class="tab-menu">
   <div class="menu-list">
    <div class="menu-list-item" 
    v-for="(item,index) in data"
    :class="{clickclass:current==index}" @click="itemClick(index)"
    >
     {{item.title}}
    </div>
   </div>
  </div>
</template>

<script>
export default {
props:{
  data:{
    type:Array,
    defalut(){
      return []
    }
  }
},
data() {
  return {
    current:0
  }
},
methods: {
  itemClick(index){
    this.current =index
    this.$emit('itemClick',index)
  }
},
}
</script>

<style>
.tab-menu{
    background-color: #f6f6f6;
    height: 100%;
    width: 25%;
    box-sizing: border-box;
    padding-top: 44px;
    position: fixed;
    top: 0;
}
 .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
.clickclass{
  background-color: #fff;
  color: #ff5777;
  border-left: 2px solid #ff5777;
  border-right: 0;
}
</style>