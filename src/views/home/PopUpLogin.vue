<template>
 <div id="login">
    <van-dialog
    v-model:show="show"
    title="请登录"
    :showConfirmButton="false"
  >
    <p class="go" @click="goRegister">注册</p>
    <div class="form" @focusout="handleInputBlur" @focusin="handleInputBin">
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
      </van-cell-group>
    </div>
            <van-button type="info" @click="cansel">取消</van-button>
        <van-button type="success" @click="login">点击登录</van-button>
  </van-dialog>
  
 </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: true,
      info: {
        name: "",
        password: "",
      },
      timer: null,
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    login() {
      const info = JSON.parse(window.localStorage.getItem("userInfo"));
      if (this.info.name == info.name && this.info.password == info.password) {
        window.sessionStorage.setItem("token", this.info);
        Toast("登录成功");
        this.$router.back()
      } else {
        Toast("用户名或者密码错误");
      }
    },
    handleInputBlur(e) {
      console.log(e);
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (
        e &&
        e.target &&
        e.target.tagName &&
        e.target.tagName.toLowerCase() === "input"
      ) {
        this.timer = setTimeout(() => {
          window.scrollTo(0, 0);
        }, 20);
      }
    },
    handleInputBin(e) {
       if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    cansel(){
      this.$router.back()
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
.van-dialog__content {
  text-align: center !important;
}
.van-button {
  width: 50%;
}
</style>