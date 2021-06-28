<template>
  <div class="goods-list">
     <slot>
         <goods-list-item v-for="item in goods" :goodsItem="item" />
     </slot>
     <span v-if="isIf">---------正在加载中---------</span>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
data() {
    return {
        isIf:false
    }
},
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