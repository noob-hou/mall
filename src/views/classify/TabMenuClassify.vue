<template>
  <div class="menu-classify">
     <div class="menu-classify-item" v-for="(item,index) in data">
         <a :href="item.link">
          <img :src="item.image" alt="" height="65">
          <div>{{item.title}}</div>
         </a>
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
}
</script>

<style scoped>
.menu-classify{
 width: 100%;
 box-sizing: border-box;
 display: flex;
 flex-wrap: wrap;
}
.menu-classify-item{
    width: 33.33%;
    height: 100px;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
    margin: 0;
}
</style>