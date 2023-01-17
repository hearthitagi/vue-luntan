<template>
  <div class="header">
    <!-- 头像 -->
    <antUpload
      name="file"
      class="avatar-uploader"
      :show-upload-list="false"
      action="/recreyed/saveImage"
      :headers= "picHeader"
      @change="handleChange"
    >
      <div
        v-if="isLogin"
        class="avatar"
        :style="{
          background: `url(${userInfo.avatar}) center/cover  no-repeat`,
        }"
      ></div>
      <div
        v-else
        class="avatar"
        :style="{
          background: `url(http://59.110.124.95:3000/images/chushiAvatar.jpg) center/cover  no-repeat`,
        }"
      ></div>
    </antUpload>
    <!-- 信息 -->
    <div class="info">
      <template v-if="isLogin">
        <span class="user-name">{{ userInfo.userName }}</span>
        <span class="remark">{{ userInfo.remark }}</span>
      </template>
      <template v-else>
        <router-link to="/sign">
          <span class="to-login">点击登录 ></span>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { Col, Row, Icon } from "vant";
import { Upload, Button, message } from "ant-design-vue";
import { mapState } from "vuex";
import { changeUserAvatar,delImage } from "@/api/api";
export default {
  components: {
    vantCol: Col,
    vantRow: Row,
    vantIcon: Icon,
    antUpload: Upload,
    antButton: Button,
  },
  name: "UserCenterHeader",
  data() {
    return {
      picHeader: {authorization: 'Bearer ' + localStorage.getItem('userInfo')},
    };
  },
  methods: {
    // 修改头像
    handleChange(info) {
      if (info.file.status === "done") {
        message.success(`头像上传成功`);
        // 更换头像
        changeUserAvatar(info.file.response.data.url);
        // 删除之前的图片
        delImage(this.userInfo.avatar.match(/(?<=(images\/))\S+/)[0]);
        this.$store.dispatch("getUserIsLogin");
        
      } else if (info.file.status === "error") {
        message.error(`头像上传失败`);
      }
    },
  },
  created() {
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      userInfo: "userInfo",
    }),
  },
};
</script>

<style scoped lang="less">
.header {
  height: 20vh;
  display: flex;
  flex-flow: row nowrap;
  padding: 5vh 0 0 3vh;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  box-shadow: 0 1px 3px 2px rgba(7, 17, 27, 0.1);

  /deep/.avatar-uploader {
    position: relative;
    width: 22%;
    height: 0;
    padding-bottom: 22%;
    .avatar {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .info {
    display: flex;
    flex-flow: column nowrap;
    padding: 1.2rem 0 0 1.2rem;
    span + span{
      padding-top: 0.5rem;
    }
    .user-name{
      font-size: 1.3rem;
      font-weight: bold;
    }
    .to-login{
      font-size: 1.5rem;
    }
  }
}
</style>