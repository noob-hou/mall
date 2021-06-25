<template>
  <div class="commenter" v-if="Object.keys(data).length!==0">
      <div class="title">
          <div class="title-left">用户评价</div>
          <div class="title-right">更多</div>
      </div>
      <div class="user">
          <img :src="data[0].user.avatar" alt="" width="50">
          <span>{{data[0].user.uname}}</span>
      </div>
      <div>
       <div class="usercommenter">
          {{data[0].content}}
       </div>
       <div><span>{{times(data[0].created)}}</span><span>{{data[0].style}}</span></div>
       <div class="images">
           <img :src="i" alt="" v-for="i in data[0].images" width="50">
       </div>
      </div>
  </div>
</template>

<script>
export default {
 props:{
     data:Array,
     default(){
         return []
     }
 },
methods: {
    times(time){
    const moment = require('moment');
    return moment(time*1000).format('YYYY-MM-DD')
    }
},
}

</script>

<style scoped>
.commenter div{
 margin-bottom: 10px;
 padding: 0 5px;
}
.title{
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #ccc;
}
.title-left{
    float: left;
    font-size: 16px;
}
.title-right{
    float: right;
    color: #000;
}
.user{
    padding: 5px;
    color:#000
}
.user img{
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
}
.images img{
    margin-right: 5px;
}
</style>