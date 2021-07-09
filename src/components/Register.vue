<template>
  <div id="login">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="userInfo.name"
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
        <van-button round block type="success" native-type="submit"
          @click="submitInfo">提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      formRules: {
        name: [{ required: true, message: "请填写用户名" }],
        password: [
          { required: true, message: "请填写密码" },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
            message: "加个字母把安全一些",
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
        name: "noob_hou",
        password: "a123456",
        tel:'13696223046',
        email:'123456@qq.com'
      },
    };
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.push("/home");
    },
    // 提交注册
    submitInfo(){
        this.$refs.form.validate().then(()=>{
            const userInfo = JSON.stringify(this.userInfo)
            window.localStorage.setItem('userInfo',userInfo)
            this.$router.push('/home')
            Toast('注册成功')
        }).catch(()=>{
            Toast('请检查信息是否输入正确')
        })
    }
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