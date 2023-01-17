<template>
  <div class="main">
    <ul>
      <router-link to="/chatGroup" tag="li">
        <img
          :src="'https://img0.baidu.com/it/u=3061359450,46743588&fm=26&fmt=auto&gp=0.jpg'"
          alt=""
        />
        <span class="name">聊天室</span>
        <span class="content">群聊天室</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "chatGroupList",
  data() {
    return {
      msg: {},
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.main {
  margin-top: 20px;
  h4 {
    text-align: left;
    margin-left: 20px;
    font-size: 18px;
    margin-bottom: 15px;
  }
  li {
    text-align: left;
    overflow: hidden;
    img {
      float: left;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      vertical-align: top;
    }
    .name {
      display: block;
      float: left;
      font-weight: 600;
      margin-left: 10px;
    }
    .content {
      //float: left;
      display: block;
      margin: 30px 60px;
      font-size: 13px;
      color: darkgray;
    }
  }
}
</style>