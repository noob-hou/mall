<template>
  <div class="goods-list-item">
      <img :src="goodsItem.show.img" alt="">
      <div class="item-text">
          <p>{{goodsItem.title}}</p>
          <span class="active">￥{{goodsItem.price}}</span>|
          <span :class="{active:isActive}" @click="likeClick">❤{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
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
    methods: {
        likeClick(){
          this.isActive = !this.isActive
        }
    },

}
</script>

<style>
.goods-list-item{
    width: 48%;
    margin-right: 2%;
    margin-bottom: 5px;
}
.goods-list-item img{
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
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
    margin: auto 10px;
}
.active{
    color: #ee0a0aa3;
}
</style>