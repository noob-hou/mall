<template>
  <div class="goods-list-item" @click="itemClick">
      <img :src="showImg" alt="" @load="imgLoad" :key="showImg">
      <div class="item-text">
          <p>{{goodsItem.title}}</p>
          <span class="active">￥{{goodsItem.price}}</span>|
          <span :class="{active:isActive}" 
          @click="likeClick"
          class="icon"
          >&#xe629;{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
import {Bus} from '@/common/common.js'
export default {
    data() {
        return {
            isActive:false
        }
    },
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed: {
       showImg(){
        return  this.goodsItem.img||this.goodsItem.image || this.goodsItem.show.img
       }
    },
    methods: {
        likeClick(){
          this.isActive = !this.isActive
        },
        imgLoad(){
            if(this.$route.path.indexOf('/home')){
              Bus.emit('imgLoad',"1111")
            }
            
        },
        itemClick(){
            this.$router.push('/detail/'+this.goodsItem.iid)
        }
    },
}
</script>

<style>
.goods-list-item{
    width: 48%;
    margin-right: 2%;
    margin-bottom: 5px;
    border-radius: 10px;
    border:1px solid #ee0a0aa3;
    box-sizing: border-box;
}
.goods-list-item img{
    display: block;
    width: 100%;
    height: auto;
    
}
.item-text{
    text-align: center;
      font-size: 14px;
}
.item-text p{
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.item-text span{
    margin: auto 0;
}
.active{
    color: #ee0a0aa3;
}
.icon{
    font-family: "iconfont";
}
</style>