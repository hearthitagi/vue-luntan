<template>
  <div class="chat-box">
    <header>
      <router-link to="/chatwith" class="backIcon">
        <vantIcon
          name="arrow-left"
          style="float: left; margin: 13px 15px; font-size: 20px"
        />
      </router-link>
      <span>聊天室人数：{{ count }}</span>
    </header>
    <div class="msg-box" ref="msg-box">
      <div
        v-for="(i, index) in list"
        :key="index"
        class="msg"
        :style="i.userId == userId ? 'flex-direction:row-reverse' : ''"
      >
        <div
          class="user-head"
          :style="{
            background: `url(${i.avatar || 'http://59.110.124.95:3000/images/chushiAvatar.jpg'}) center/cover  no-repeat`,
          }"
        ></div>
        <div class="user-msg">
          <span
            :style="i.userId == userId ? ' float: right;' : ''"
            :class="i.userId == userId ? 'right' : 'left'"
            >{{ i.msg }}</span
          >
        </div>
      </div>
    </div>
    <div class="input-box">
      <input type="text" ref="sendMsg" v-model="msg" @keyup.enter="sendmsg()" />
      <div class="btn" :class="{ ['btn-active']: msg }" @click="sendmsg()">
        发送
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
import { loginerInfo } from "@/api/api";

export default {
  components: {
    vantIcon: Icon,
  },
  name: "chatGroup",
  data() {
    return {
      ws: null,
      count: 0,
      userId: null, //当前用户ID
      avatar: "", //头像
      msg: "", //input输入的值
      list: [], //聊天记录的数组
    };
  },
  methods: {
    // 发送消息
    sendmsg() {
      if (this.msg) {
        let params = {
          userId: this.userId,
          avatar:this.avatar,
          msg: this.msg,
        };
        this.ws.send(JSON.stringify(params));
        this.msg = "";
      }
    },
    //滚动条到底部
    scrollBottm() {
      let el = this.$refs["msg-box"];
      el.scrollTop = el.scrollHeight;
    },
    // 初始化聊天室
    initWebSocket() {
      if (window.WebSocket) {
        const ws = new WebSocket("ws://59.110.124.95:8000");
        this.ws = ws;
        ws.onmessage = (msg) => {
          const resData = JSON.parse(msg.data);
          if (resData.funName == "userCount") {
            this.count = resData.users;
            this.list = resData.chat;
          } else {
            this.list = [
              ...this.list,
              { userId: resData.userId,avatar:resData.avatar, msg: resData.msg },
            ];
          }
        };
      }
    },
  },
  created() {
    loginerInfo().then((res) => {
      this.userId = res.data.data._id;
      this.avatar = res.data.data.avatar;
    });
  },
  mounted() {
    this.initWebSocket();
    this.scrollBottm();
  },
  beforeDestroy() {
    this.ws.close();
  },
};
</script>

<style scoped lang="less">
.chat-box {
  margin: 0 auto;
  background: #fafafa;
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 700px;
  header {
    position: fixed;
    width: 100%;
    height: 3rem;
    background: #409eff;
    max-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    font-size: 1rem;
    .backIcon{
      font-size: 1.3rem;
      color: #fff;
    }
    span{
      flex: 1;
      text-align: center;
      padding-right: 3rem;
    }
  }
  .msg-box {
    position: absolute;
    height: calc(100% - 6.5rem);
    width: 100%;
    margin-top: 3rem;
    overflow-y: scroll;
    .msg {
      width: 95%;
      min-height: 2.5rem;
      margin: 1rem 0.5rem;
      position: relative;
      display: flex;
      justify-content: flex-start !important;
      .user-head {
        min-width: 2.5rem;
        width: 20%;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .user-msg {
        width: 80%;
        word-break: break-all;
        position: relative;
        z-index: 5;
        span {
          display: inline-block;
          padding: 0.5rem 0.7rem;
          border-radius: 0.5rem;
          margin-top: 0.2rem;
          font-size: 0.88rem;
        }
        .left {
          background: white;
          animation: toLeft 0.5s ease both 1;
        }
        .right {
          background: #53a8ff;
          color: white;
          animation: toright 0.5s ease both 1;
        }
        @keyframes toLeft {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        @keyframes toright {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
      }
    }
  }
  .input-box {
    padding: 0 0.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    background: #fafafa;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      height: 2.3rem;
      display: inline-block;
      width: 100%;
      padding: 0.5rem;
      border: none;
      border-radius: 0.2rem;
      font-size: 0.88rem;
    }
    .btn {
      height: 2.3rem;
      min-width: 4rem;
      background: #e0e0e0;
      padding: 0.5rem;
      font-size: 0.88rem;
      color: white;
      text-align: center;
      border-radius: 0.2rem;
      margin-left: 0.5rem;
      transition: 0.5s;
    }
    .btn-active {
      background: #409eff;
    }
  }
}
</style>