<template>
<div class="bottom-bar">
      <van-submit-bar :price="sumPrice*100" button-text="提交订单">
   <van-checkbox :checked="allSelect" @click="isAllSelect">全选</van-checkbox>
  </van-submit-bar>
</div>
</template>

<script>
export default {
    props:{
        cartData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
        }
    },
 computed:{
     allSelect(){
       if(this.cartData.length==0) return false;
       let aa = this.cartData.filter(item=>item.checked).length ===this.cartData.length
       return aa
     },
      sumPrice() {
        let newArr = []
        newArr = this.cartData.filter(item => item.checked)
        let sums = 0
        sums = newArr.reduce((sum, item) => {
            return sum + item.price * item.count
        }, 0)
        return sums
    }
 },
 methods: {
     isAllSelect(){
       if(this.allSelect()){
           this.cartData.forEach(item => {
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