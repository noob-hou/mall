<template>
  <div class="cart">
    <nav-bar class="nav">
      <template #nav-center>
        <div class="cart-num">
          购物车({{cartLength}})
        </div>
      </template>
    </nav-bar>
    <product-list/>
    <bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
import ProductList from './ProductList.vue'
import BottomBar from './BottomBar.vue'

import {mapGetters} from 'vuex'
export default {
 components:{
   NavBar,
   ProductList,
   BottomBar
 },
 computed:{
    ...mapGetters(['cartLength'])
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