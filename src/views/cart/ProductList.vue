<template>
  <div class="product-list" v-if="cartItemList.length">
    <div
      class="product"
      :class="{ bg: item.checked }"
      v-for="(item, index) in cartItemList"
    >
      <div class="select">
        <img
          src="~@/assets/img/tick.svg"
          alt=""
          :class="{ check: item.checked }"
          @click="checkClick(item)"
        />
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
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="removeClick(
                index)"
            />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
  <div v-else>
    <img src="~@/assets/img/webp.png" alt="" style="width:100%">
  </div>
</template>

<script>

export default {
  props:{
    cartItemList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      
    };
  },
  mounted() {
    this.cartItemList.length
  },
  methods: {
    //单选框变色
    checkClick(item) {
      item.checked = !item.checked;
    },
    //删除当前商品
    removeClick(index) {
      this.$store.state.cartList.splice(index,1)
      this.cartItemList.splice(index, 1)
      this.submitLocal(this.cartItemList)
    },
     // 提交到本地存储
    submitLocal(cart){
      window.sessionStorage.setItem('cart',JSON.stringify(cart))
    },
  },
};
</script>

<style>
.product-list {
  padding: 5px;
}
.goods-card {
  margin: 0;
  background-color: transparent;
}

.delete-button {
  height: 100%;
}
.product {
  height: 104px;
  margin-bottom: 5px;
  border: 1px solid #aaa;
  border-radius: 10px;
}
.product > div {
  float: left;
}
.select {
  width: 8%;
  line-height: 104px;
  text-align: center;
}
.select img {
  border: 2px solid #aaa;
  border-radius: 50%;
}
.check {
  background-color: red;
  border-color: red;
}
.bg {
  background-color: #f0ebeb;
}
.product-message {
  width: 90%;
  position: relative;
}

</style>