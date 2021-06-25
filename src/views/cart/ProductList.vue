<template>
  <div class="product-list">
      <div class="product"
       :class="{bg:item.checked}"
      v-for="(item,index) in cartList">
          <div class="select">
            <img src="~@/assets/img/tick.svg" alt="" 
            :class="{check:item.checked}"
            @click="checkClick(item)">
          </div>
          <div class="product-message">
         <van-swipe-cell>
        <van-card
          :num="item.count"
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          class="goods-card"
          :thumb="item.image"
        />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button"
    @click="removeClick(cartList,index)" />
  </template>
      </van-swipe-cell>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   data() {
       return {
       }
   },
   computed:{
       ...mapGetters(['cartList'])
   },
   methods: {
       //单选框变色
       checkClick(item){
         item.checked =!item.checked
       },
       //删除当前商品
       removeClick(cartList,index){
           cartList.splice(index,1)
       }
   },
}
</script>

<style>
.product-list{
    padding: 5px;
}
 .goods-card {
    margin: 0;
    background-color:transparent;
  }

  .delete-button {
    height: 100%;
  }
  .product{
      height: 104px;
      margin-bottom: 5px;
      border:1px solid #aaa;
      border-radius: 10px;
  }
  .product>div{
      float: left;
  }
  .select{
      width: 8%;
      line-height: 104px;
      text-align: center;
  }
  .select img{
      border:2px solid #aaa;
      border-radius: 50%;
  }
  .check{
    background-color: red;
    border-color: red;
  }
  .bg{
      background-color: #f0ebeb;
  }
  .product-message{
      width: 90%;
  }
</style>