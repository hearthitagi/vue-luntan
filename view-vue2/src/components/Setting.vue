<template>
  <div class="setting-shell">
    <header>
      <router-link to="/mineCenter">
        <vantIcon name="arrow-left" />
      </router-link>
      <span>设置中心</span>
    </header>
    <div class="main">
      <router-link to="/modification">
        <vantCell is-link @click="showPopup">修改信息</vantCell>
      </router-link>
      <router-link to="/serve">
        <vantCell is-link @click="showPopup">服务协议</vantCell>
      </router-link>
      <router-link to="/privacy">
        <vantCell is-link @click="showPopup">隐私政策</vantCell>
      </router-link>
      <vantCell title="关于" value="当前版本1.0.0" />
      <vantButton @click="logout">退出登录</vantButton>
    </div>
  </div>
</template>

<script>
import { Cell, Button, Icon } from "vant";
import { message } from "ant-design-vue";
import { logout } from "@/api/api";

export default {
  components: {
    vantCell: Cell,
    vantButton: Button,
    vantIcon: Icon,
  },
  name: "Setting",
  methods: {
    showPopup() {
      this.show = true;
    },
    logout() {
      localStorage.removeItem('userInfo')
      this.$store.commit("changeUserInfo", {
          isLogin: false,
          userInfo: {},
      });
      this.$router.push("/mineCenter");
      message.success("退出成功！");
    },
  },
};
</script>

<style scoped lang="less">
.setting-shell {
  padding: 1.5rem 1rem 0;
  header {
    height: 40px;
    font-size: 25px;

    span {
      display: inline-block;
      width: 90%;
      text-align: center;
      line-height: 40px;
    }
  }

  .main {
    margin-top: 20px;

    .van-cell {
      font-size: 18px;
      height: 65px;
      line-height: 45px;

      .van-cell__right-icon {
        line-height: 45px;
      }
    }

    .van-button {
      width: 80%;
      margin: 20px 10%;
      border-radius: 50px;
    }
  }
}
</style>