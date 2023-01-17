<template>
  <div>
    <header>
      <router-link to="/setting">
        <vantIcon name="arrow-left" />
      </router-link>
      <span>修改信息</span>
      <button @click="save">保存</button>
    </header>
    <div class="main">
      <vantField class="field" v-model="nickname" label="昵称" />
      <vantField class="field" v-model="email" type="email" label="邮箱" />
      <vantField class="field" v-model="phone" type="tel" label="手机号" />
      <vantField class="field" v-model="sex" type="text" label="性别" />
      <vantField class="field" v-model="message"
        rows="3"
        autosize
        label="个性签名"
        type="textarea"
        maxlength="50"
        placeholder="请输入个性签名"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
import { Icon,Field } from 'vant';
import { message } from 'ant-design-vue';
import { changeUserInfo } from "@/api/api";

export default {
  components: {
    "vantIcon": Icon,
    "vantField":Field,
  },
  name: "Modification",
  data() {
    return {
      nickname: "",
      email: "",
      phone: "",
      sex: "",
      message: "",
    };
  },
  methods: {
    save() {
      changeUserInfo(
        this.nickname,
        this.email,
        this.phone,
        this.sex,
        this.message
      )
        .then((res) => {
          if (res.data.state == 200) {
            message.success(`修改成功`);
            this.$router.push("/mineCenter");
          } else {
            message.error(`出错啦`);
          }
          this.$store.dispatch("getUserIsLogin");
        })
        .catch(() => {
          message.error("网络繁忙，请稍后再试");
        });
    },
  },
};
</script>

<style scoped lang="less">
header {
  height: 40px;
  font-size: 25px;
  position: relative;
  span {
    display: inline-block;
    width: 85%;
    text-align: center;
    line-height: 40px;
  }
  button {
    position: absolute;
    top: 0;
    right: 10px;
    background-color: white;
    border: 0;
    outline: 0;
    font-size: 16px;
    color: aqua;
    text-align: center;
    line-height: 40px;
  }
}
.main {
  margin-top: 20px;
  .field {
    height: 55px;
    line-height: 35px;
    font-size: 18px;
  }
}
</style>