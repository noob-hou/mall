<template>
  <div class="base-info" v-if="Object.keys(data).length!==0">
       <div class="title">{{data.title}}</div>
       <div class="price">
           <span>{{data.newPrice}}</span>
           <span>{{data.oldPrice}}</span>
           <span>{{data.discount}}</span>
       </div>
       <div class="columns">
           <span>&#xe88e;&nbsp;{{data.columns[0]}}</span>
           <span>&#xe629;&nbsp;{{data.columns[1]}}</span>
           <span>&#xe625;&nbsp;{{data.columns[2]}}</span>
       </div>
       <div class="services">
           <span v-for="i in data.services"><img :src="i.icon" alt="" width="14">{{i.name}}</span>
       </div>
  </div>
</template>

<script>
export default {
 props:{
     data:{
         type:Object,
         default(){
             return {}
         }
     }
 },
}
</script>

<style scoped>
.base-info{
    padding: 5px 10px;
    border-bottom: 3px solid #ccc;
}
.base-info>div{
    margin: 15px auto;
}
.title{
    font-size: 18px;
    font-weight: 400;
    color: #000;
}
.price span{
    padding:2px 5px;
}
.price span:nth-child(1){
    font-size: 20px;
    font-weight: 700;
    color: red;
}
.price span:nth-child(2){
    text-decoration:line-through
}
.price span:nth-child(3){
    color: #fff;
    background-color: rgb(307, 11, 97);
    border-radius: 10px;
}
.columns{
    display: flex;
   
}
.columns span{
    flex: 1;
    font-family: "iconfont";
}
.columns span:nth-child(3){
    text-align: right;
}
.columns span:nth-child(1){
    text-align: left;
}
.columns span:nth-child(2){
    text-align: center;
}
.services{
    margin-top: 5px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px!important;
     flex-wrap: wrap;
     overflow: hidden;
}
</style>

