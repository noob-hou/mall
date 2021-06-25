<template>
<div class="bottom-bar">
      <van-submit-bar :price="sumPrice*100" button-text="提交订单" @submit="onSubmit">
   <van-checkbox :checked="allSelect()" @click="isAllSelect">全选</van-checkbox>
  </van-submit-bar>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        }
    },
 computed:{
    ...mapGetters(['sumPrice','cartList'])
 },
 methods: {
     allSelect(){
       if(this.cartList.length==0) return false;
       let aa = this.cartList.filter(item=>item.checked).length ===this.cartList.length
       return aa
     },
     isAllSelect(){
       if(this.allSelect()){
           this.cartList.forEach(item => {
               item.checked = false
           });
       }else{
            this.cartList.forEach(item => {
               item.checked = true
           });
       }
     }
 }
}
</script>

<style>
.van-submit-bar{
   bottom: 49px;
}
</style>