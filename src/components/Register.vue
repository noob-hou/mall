<template>
  <div id="login">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form ref="userInfo">
      <van-field
        v-model="userInfo.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="formRules.name"
      />
      <van-field
        v-model="userInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="formRules.password"
      />
      <van-field
        v-model="userInfo.tel"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="formRules.tel"
      />
      <van-field
        v-model="userInfo.email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="formRules.email"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="success"
          native-type="submit"
          @click="submitInfo"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import getUserRegister from "../network/register.js";
export default {
  name:'register',
  data() {
    return {
      formRules: {
        name: [{ required: true, message: "请填写用户名" }],
        password: [
          { required: true, message: "请填写密码" },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
            message: "长度为6-16，不能为纯数字",
            trigger: "onBlur",
          },
        ],
        tel: [
          { required: true, message: "请填写手机号码" },
          {
            pattern: /^1[3|4|5|7|8][0-9]{9}$/,
            message: "输入正确的手机号",
            trigger: "onBlur",
          },
        ],
        email: [
          { required: true, message: "请填写邮箱" },
          {
            pattern:
              /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            message: "输入正确的邮箱",
            trigger: "onBlur",
          },
        ],
      },
      userInfo: {
        username: "",
        password: "",
        tel: "",
        email: "",
      },
    };
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.push("/home");
    },
    // 提交注册
    async submitInfo() {
      // this.$refs.userInfo.validate().then(()=>{
      //   let users = window.localStorage.getItem('users')
      //   users = users == null?[]:JSON.parse(users)
      //   const userInfo = this.userInfo
      //   users.push(userInfo)
      //   users = JSON.stringify(users)
      //   window.localStorage.setItem('users',users)
      //   this.$router.back()
      //   Toast('注册成功')
      // }).catch(()=>{
      //   Toast('请检查信息是否输入正确')
      // })
      const { data } = await getUserRegister(this.userInfo);
      Toast(data.msg);
      if (data.data.ret == true) {
        this.$router.back();
      }
    },
  },
};
</script>

<style>
.van-nav-bar__left {
  font-size: 16px !important;
}
.van-form {
  margin-top: 20px;
}
.van-field {
  margin: 10px 2px;
}
</style>