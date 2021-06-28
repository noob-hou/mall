<template>
 <van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" dot />
  <van-action-bar-icon icon="cart-o" text="购物车" @click="cartClick"/>
  <van-action-bar-icon icon="shop-o" text="店铺" badge="2" />
  <van-action-bar-button type="warning" text="加入购物车" @click="addCart"/>
  <van-action-bar-button type="danger" text="立即购买" @click="shopClick"/>
   <van-popup
  v-model:show="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '60%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',}">
  <pop-up/>
  <van-action-bar>
  <van-action-bar-button type="warning" text="加入购物车" @click="addCart"/>
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>
   </van-popup>


</van-action-bar>
</template>

<script>
import PopUp from './PopUp.vue'
export default {
  components:{
    PopUp
  },
  data() {
    return {
      show:false
    }
  },
  methods: {
    addCart(){
      this.$emit('addCart')
    },
    shopClick(){
      this.show = true
    },
    cartClick(){
      this.$router.push('/cart')
    }
  },
}
</script>

<style scoped>
.van-action-bar{
 height: 49px;
 z-index: 99;
}
.van-popup--bottom{
  height: 70%;
}
</style>