<template>
  <van-dialog v-model:show="show" title="请登录" show-cancel-button :showConfirmButton="false">
    <p class="go" @click="goRegister">注册</p>
    <div class="form">
      <van-cell-group>
        <van-field
          v-model="info.name"
          label="用户名"
          placeholder="请输入用户名"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="info.password"
          label="密码"
          placeholder="请输入密码"
          type="password"
        />
        <van-button round type="primary" @click="login">点击登录</van-button>
      </van-cell-group>
    </div>
    
  </van-dialog>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      info: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/login");
    },
    login(){
      const info = JSON.parse(window.localStorage.getItem('userInfo'))
      if(this.info.name == info.name && this.info.password == info.password){
        window.sessionStorage.setItem('token',this.info)
        Toast('登录成功')
        this.show = false
      }else{
        Toast('用户名或者密码错误')
      }
    }
  },
};
</script>

<style scoped>
.van-popup {
  height: 280px;
}
.van-hairline--top-bottom {
  margin: 10px auto;
  text-align: center;
}
.go {
  position: absolute;
  right: 21px;
  top: 15px;
}
.van-dialog__content{
  text-align: center !important;
}
.van-button{
  width: 80%;
}
</style>