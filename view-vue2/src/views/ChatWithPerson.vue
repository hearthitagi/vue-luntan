<template>
  <div class="chatbox">
    <div class="header">
      <router-link to="/chatwith">
        <vantIcon name="arrow-left" style="float: left;margin: 13px 15px;font-size: 20px"/>
      </router-link>
      <h4>智熄机器人</h4></div>
    <div class="main">
      <div class="talkshow">
        <div v-for="(item,index) in list" :key="index" :class="item.id==1?'atalk':'btalk'">
          <img src="../assets/robot.jpeg" alt=""><span>
            {{ item.context }}</span>
        </div>
      </div>
    </div>
    <div class=" sendbox">
      <input type="text" v-model="msg" class="inputmsg" @keyup.enter="sendmsg">
      <input type="button" value="发送" @click="sendmsg" class="sendbtn">
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
import {robot} from "@/api/api";

export default {
  components: {
    "vantIcon": Icon,
  },
  name: "ChatWithPerson",
  data() {
    return {
      list: [],
      msg: ""
    }
  },
  methods: {
    sendmsg() {
      this.list.push({
        id: 2,
        context: this.msg,
      })

      robot(this.msg).then(res => {
        this.list.push({
          id: 1,
          context: res.data.result.content,
        })
      })
      this.msg = ""
    }

  }
}
</script>

<style scoped lang="less">
.chatbox {
  height: 100vh;
  .header {
    width: 100%;
    background-color: darkgray;
    height: 45px;
    //padding: 10px 15px;
    position: fixed;
    top: 0;

    h4 {
      margin: 0;
      line-height: 40px;
      float: left;
      margin-left: 110px;
    }

  }

  .main {
    height: 85%;
    //height: 600px;
    overflow: scroll;
    margin-top: 40px;

    .talkshow {
      width: 100%;


      .atalk {
        margin: 10px;
        text-align: left;

        img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }

        span {
          display: inline-block;
          padding: 5px 10px;
          border: 1px solid aliceblue;
          background-color: #42b983;
          border-radius: 15px;
        }
      }

      .btalk {
        text-align: right;
        margin: 10px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          float: right;
        }

        span {
          display: inline-block;
          padding: 5px 10px;
          border: 1px solid aliceblue;
          border-radius: 15px;
          background-color: aquamarine;
          margin-top: 20px;
        }
      }
    }

  }

  .sendbox {
    width: 100%;
    height: 50px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-top: 5px;
    margin-left: 2%;
    position: fixed;
    bottom: 0;

    .inputmsg {
      outline: 0;
      width: 80%;
      height: 25px;
      border-radius: 15px;
      text-indent: 12px;
    }

    .sendbtn {
      outline: 0;
      width: 13%;
      height: 25px;
      border-radius: 15px;
      border: 1px solid grey;
      margin-left: 2%;
      background-color: #42b983;
      color: white;
      font-size: 14px;
    }

  }
}

</style>