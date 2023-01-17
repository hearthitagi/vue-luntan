<template>
  <div>
    <slot></slot>
    <div class="main-register">
      <vantForm>
        <vantField
          v-model="username"
          name="账号"
          label="*账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <vantField
          v-model="nickname"
          type="text"
          name="昵称"
          label="*昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <vantField
          v-model="password"
          type="password"
          name="密码"
          label="*密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <vantField
          v-model="sex"
          name="性别"
          label="性别"
          placeholder="性别"
          :rules="[{ required: false }]"
        />
        <vantField
          v-model="usermsg"
          name="个人简介"
          label="个人简介"
          placeholder="个人简介"
          :rules="[{ required: false }]"
        />
        <div style="margin: 16px">
          <vantButton
            round
            block
            type="info"
            style="background-color: black; color: white"
            @click="submit"
            >注册</vantButton
          >
        </div>
      </vantForm>
    </div>
  </div>
</template>

<script>
import { Form,Field,Button } from 'vant';
import { message } from 'ant-design-vue';
import { getcode, register } from "@/api/api";

export default {
  components: {
    "vantForm":Form,
    "vantField":Field,
    "vantButton":Button,
  },
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      // phone: "",
      // code: "",
      sex: "",
      usermsg: "",
      //验证码
      // disabled: false,
      // time: "获取验证码",
      // minute: 60,
      // timer: null,
    };
  },
  methods: {
    // getcode() {
    //   this.timer = setInterval(() => {
    //     this.disabled = true;
    //     this.minute--;
    //     this.time = `${this.minute}s`;
    //     if (this.minute == 0) {
    //       this.disabled = false;
    //       this.time = "获取验证码";
    //       this.minute = 60;
    //       clearInterval(this.timer);
    //     }
    //   }, 1000);
    //   getcode(this.phone).then((res) => {
    //     if (res.code == 0) {
    //       this.$message.success("发送成功，请稍等。。。。");
    //     }
    //   });
    // },
    submit() {
      register(
        this.username,
        this.password,
        this.nickname,
        this.sex,
        this.usermsg
      )
        .then((res) => {
          if (res.data.state == 200) {
            message.success("注册成功");
            this.$router.back();
          } else {
            message.error(`${res.data.msg}`);
          }
        })
        .catch(() => {
          message.error("网络繁忙，请稍后再试！");
        });
    },
  },
};
</script>

<style scoped lang="less">
.back {
  font-size: 30px;
  margin: 15px;
}
.main-register {
  //position: relative;
  .getcode {
    float: left;
    position: relative;
    top: -30px;
    left: 70%;
    width: 27%;
  }
}
</style>