<template>
  <div class="cart">
    <nav-bar class="nav">
      <template #nav-center>
        <div class="cart-num">
          购物车({{cartList.length}})
        </div>
      </template>
    </nav-bar>
    <product-list :cartItemList="cartList"/>
    <bottom-bar :cartData="cartList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
import ProductList from './ProductList.vue'
import BottomBar from './BottomBar.vue'
export default {
name:'cart',
 components:{
   NavBar,
   ProductList,
   BottomBar
 },
 data() {
   return {
     cartList:[]
   }
 },
 created() {
   let cart = JSON.parse( window.sessionStorage.getItem('cart'))||[]
   this.cartList = cart
 },
activated() {
  this.cartList = JSON.parse(window.sessionStorage.getItem('cart'))||[]
 }
}
</script>

<style scoped>
.cart{
  padding-top: 44px;
  padding-bottom: 49px;
}
.nav{
  background-color: #ff5767a6;
}
.cart-num{
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 18px;
}
</style>