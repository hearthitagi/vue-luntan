<template>
  <div class="userCenterMain">
    <vantRow type="flex" justify="space-around" class="header">
      <vantCol span="6" style="text-align: center">
        <div @click="toMyPost()">
          <antIcon type="clock-circle" class="icon" />
          <br />
          <span>我的贴子</span>
        </div>
      </vantCol>

      <vantCol span="6" style="text-align: center">
        <div @click="toMyFriend()">
          <antIcon type="customer-service" class="icon" />
          <br />
          <span>友人帐</span>
        </div>
      </vantCol>

      <vantCol span="6" style="text-align: center">
        <router-link to="/setting" tag="div">
          <antIcon type="setting" class="icon" />
          <br />
          <span>设置中心</span>
        </router-link>
      </vantCol>
    </vantRow>
    <div v-show="isPost" class="mine">
      <div class="mine-top">
        <span class="invitation">我的贴子</span>
        <router-link to="/sendPost">
          <antIcon type="plus-circle" theme="filled" class="add" />
        </router-link>
      </div>
      <div class="mine-body">
        <div v-if="isLogin">
          <WaterFall :listType="'mypost'"></WaterFall>
        </div>
      </div>
    </div>
    <div v-show="!isPost" class="friend-shell">
      <ul>
        <router-link
          :to="{
            path: `/singleChat`,
            query: { user: userId, target: friends._id },
          }"
          tag="li"
          class="fri-list"
          v-for="(friends, index) in friList"
          :key="index"
        >
          <div
            class="fri-avatar"
            :style="{
              background: `url(${friends.avatar}) center/cover  no-repeat`,
            }"
          ></div>
          <div class="fri-text">
            <span class="text-header">{{ friends.userName }}</span>
            <span>{{ friends.remark }}</span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { Col, Row } from "vant";
import { Icon } from "ant-design-vue";
import WaterFall from "@/components/WaterFall";
import { friendsList } from "@/api/api";
import { mapState } from "vuex";
export default {
  name: "UserCenterMine",
  components: {
    WaterFall,
    vantCol: Col,
    vantRow: Row,
    antIcon: Icon,
  },
  data() {
    return {
      isPost: true, //是否为初始-我的贴子
      userId: "", //当前用户id
      friList: [],
    };
  },
  methods: {
    toMyPost() {
      this.isPost = true;
    },
    toMyFriend() {
      this.isPost = false;
    },
  },
  created() {
    if (localStorage.getItem('userInfo')) {
      this.userId = this.userInfo._id;
      friendsList(this.userInfo.friends).then((res) => {
        this.friList = res.data.data;
      });
    }
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      userInfo: "userInfo"
    }),
  },
};
</script>

<style scoped lang="less">
.userCenterMain {
  margin-top: 20px;
  .icon {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
  }
  .mine {
    margin-top: 20px;
    .mine-top {
      overflow: hidden;
      margin: 0 20px;
      .invitation {
        display: inline-block;
        width: 90px;
        height: 40px;
        border-radius: 20px;
        background-color: #2c3e50;
        color: white;
        text-align: center;
        line-height: 40px;
      }
      .add {
        float: right;
        color: #2c3e50;
        font-size: 35px;
        margin-top: 5px;
      }
    }
  }
  .friend-shell {
    .fri-list {
      display: flex;
      flex-flow: row nowrap;
      padding: 5% 0 0 7%;
      .fri-avatar {
        width: 15%;
        height: 0;
        padding-bottom: 15%;
        border-radius: 50%;
      }
      .fri-text {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding-left: 3%;
        position: relative;
        .text-header {
          font-size: 1.1rem;
          font-weight: bold;
          padding-bottom: 7%;
        }
      }
      .fri-text::after {
        position: absolute;
        bottom: -5%;
        content: "";
        width: 230%;
        height: 1px;
        border-top: 1px solid rgba(7, 17, 27, 0.1);
      }
    }
  }
}
</style>