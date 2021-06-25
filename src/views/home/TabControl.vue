<template>
  <div class="tab-control">
      <div  class="tab-control-item" v-for="(item,index) in titles">
          <span :class="{active:index ==currentInedx}" @click="tabClick(index)">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        currentInedx:0,
        distanceTOP:0,
    }
},
 props:{
     titles:{
         type:Array,
         default(){
             return []
         }
     }
 },
 methods: {
    tabClick(index){
             this.currentInedx = index
             this.$emit('tabClick',index)
    },
   },
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #f6f6f6;
    z-index: 9999;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.active{
    color:red;
    border-bottom:3px solid pink;
    padding: 5px;
}
</style>