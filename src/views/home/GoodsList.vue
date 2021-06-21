<template>
  <div class="goods-list">
     <goods-list-item v-for="item in goods" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
props:{
    goods:{
        type:Array,
        defalut(){
            return []
        }
    }
},
components:{
    GoodsListItem
}
}
</script>

<style>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>