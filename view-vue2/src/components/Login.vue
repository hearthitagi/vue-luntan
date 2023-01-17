<template>
  <div class="LoginBackground">
    <router-link to="/index"
      ><vantIcon name="arrow-left" class="back"
    /></router-link>
    <div class="main">
      <h2 class="title">欢迎来到星迹</h2>
      <vantForm class="login">
        <vantIcon name="user-circle-o" class="user" />
        <vantField
          class="username"
          v-model="loginName"
          name="用户名"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <vantIcon name="lock" class="lock" />
        <vantField
          v-model="password"
          type="password"
          class="username"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <vantButton round block type="info" @click="submit" class="submit"
            >登录</vantButton
          >
        </div>
      </vantForm>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Icon, Form, Field, Button } from "vant";
import { message } from "ant-design-vue";
import { Login, loginerInfo } from "@/api/api";

export default {
  components: {
    vantIcon: Icon,
    vantForm: Form,
    vantField: Field,
    vantButton: Button,
  },
  name: "Login",
  data() {
    return {
      loginName: "",
      password: "",
    };
  },
  methods: {
    submit() {
      Login(this.loginName, this.password).then((res) => {
        if (res.data.state == 200) {
          // 将token存储到localStorage中
          localStorage.setItem("userInfo", res.data.data);
          loginerInfo().then((res) => {
            if (res.data.state == 200) {
              this.$store.commit("changeUserInfo", {
                isLogin: true,
                userInfo: res.data.data,
              });
            } else {
              this.$store.commit("changeUserInfo", {
                isLogin: false,
                userInfo: {},
              });
            }
          });

          this.$router.replace("/mineCenter");
          message.success("登录成功！");
        } else {
          message.error(`${res.data.message}`);
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.LoginBackground {
  background: url("http://59.110.124.95:3000/images/1647504184669-loginPic.jpg")
    center center no-repeat;
  background-size: cover;
  height: 100vh;
}
.back {
  font-size: 30px;
  margin: 15px;
  color: white;
}
.main {
  margin-top: 40%;
  overflow: hidden;
  padding-bottom: 35%;
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    color: white;
  }

  .login {
    position: relative;

    .username {
      width: 80%;
      height: 60px;
      background-color: #eeeeee;
      border-radius: 30px;
      margin: 10px auto;
      line-height: 40px;
      padding-left: 50px;
    }

    .user {
      z-index: 10;
      position: absolute;
      top: 18px;
      left: 58px;
      font-size: 25px;
    }

    .lock {
      z-index: 10;
      position: absolute;
      top: 85px;
      left: 58px;
      font-size: 25px;
    }

    .submit {
      width: 80%;
      height: 60px;
      margin: 40px auto;
      background-color: black;
      outline: 0;
      border: 0;
    }
  }

  .register {
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    color: white;
  }

  .forget {
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    color: white;
  }
}
</style>