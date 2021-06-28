<template>
  <van-dialog v-model:show="show" title="请登录" show-cancel-button>
  <div class="form">
      <van-cell-group>
  <van-field v-model="value" label="用户名" placeholder="请输入用户名" />
</van-cell-group>
      <van-cell-group>
  <van-field v-model="value" label="密码" placeholder="请输入密码"  type="password"/>
</van-cell-group>
  </div>
 </van-dialog>
</template>

<script>
export default {
    data() {
        return {
            show:false
        }
    },

}
</script>

<style scoped>
.van-popup{
    height: 280px;
}
.van-hairline--top-bottom{
    margin: 30px auto;
}
</style>