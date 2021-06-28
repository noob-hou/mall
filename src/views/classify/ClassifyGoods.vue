<template>
  <div class="classify-goods">
    <slot>
    <goods-list>
     <goods-list-item v-for="(item,index) in data" :goodsItem="item"/>
    </goods-list>
    </slot>
  </div>
</template>

<script>
import GoodsList from '../home/GoodsList.vue'
import GoodsListItem from '../home/GoodsListItem.vue'
export default {
props:{
    data:{
        type:Array,
        default(){
            return []
        }
    }
},
  components: { 
      GoodsList,
     GoodsListItem
 },
}
</script>

<style>

</style>