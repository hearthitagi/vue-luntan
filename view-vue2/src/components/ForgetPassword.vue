<template>
  <div>
    <slot></slot>
    <div class="forget">
      <vantForm>
        <vantField
          v-model="username"
          name="账号"
          label="*账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
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
          v-model="passwordAngin"
          name="确认密码"
          label="*确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- <vantField
          v-model="phone"
          name="手机号"
          label="*手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <vantField
          v-model="code"
          name="验证码"
          label="*验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <a-button
          class="getcode"
          @click="getcode"
          v-html="time"
          :disabled="disabled"
          >获取验证码</a-button
        > -->
        <div style="margin: 16px">
          <vantButton
            round
            block
            type="info"
            style="background-color: black; color: white"
            @click="submit"
            >确定</vantButton
          >
        </div>
      </vantForm>
    </div>
  </div>
</template>

<script>
import { Form,Field,Button } from 'vant';
import { forget, getcode } from "@/api/api";
export default {
  components: {
    "vantForm": Form,
    "vantField":Field,
    "vantButton":Button,
  },
  name: "ForgetPassword",
  data() {
    return {
      username: "",
      password: "",
      passwordAngin: "",
      // phone: "",
      // code: "",
      //获取验证码
      // disabled: false,
      // time: "获取验证码",
      // minute: 60,
      // timer: null,
    };
  },
  methods: {
    // getcode() {
    //   (this.timer = setInterval(() => {
    //     this.disabled = true;
    //     this.minute--;
    //     this.time = `${this.minute}s`;
    //     if (this.minute == 0) {
    //       this.disabled = false;
    //       this.time = "获取验证码";
    //       this.minute=60;
    //       clearInterval(this.timer);
    //     }
    //   }, 1000)),
    //     getcode(this.phone).then((res) => {
    //       if (res.data.code == 0) {
    //         this.$message.success("发送成功，请稍等。。。。");
    //       } else {
    //         this.$message.error(`${res.data.msg}`);
    //       }
    //     });
    // },
    submit() {
      // forget(this.username, this.password, this.phone, this.coed)
      //   .then((res) => {
      //     if (res.code == 0) {
      //       //res.msg
      //       this.$message.success("修改成功");
      //     } else {
      //       this.$message.error(`${res.data.msg}`);
      //     }
      //   })
      //   .catch((res) => {
      //     this.$message.error(`${res.data.msg}`);
      //   });
    },
  },
};
</script>

<style scoped lang="less">
.back {
  font-size: 30px;
  margin: 15px;
}

.getcode {
  float: left;
  position: relative;
  top: -30px;
  left: 70%;
  width: 25%;
}
</style>