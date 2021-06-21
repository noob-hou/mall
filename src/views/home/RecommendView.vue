<template>
  <div class="recommend-view">
      <a :href="item.link" v-for="item in recommend">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
      </a>    
  </div>
</template>

<script>
export default {
props:{
   recommend:{
    type:Array,
    default:[]
   }
},
}
</script>

<style>
.recommend-view{
    height: 120px;
    display: flex;
    margin-top: 10px;
    border-bottom: 8px solid #f1f1f1;
}
.recommend-view a{
    flex: 1;
    text-align: center;
    padding: 5px;
}
.recommend-view a img{
    width: 100%;
}
.recommend-view a p{
    font-size: 14px;
    margin: 5px 0;
}
</style>