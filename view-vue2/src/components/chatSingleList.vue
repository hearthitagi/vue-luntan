<template>
<div class="main">
    <ul>
      <router-link to="/chatWithPerson" tag="li">
        <img src="../assets/robot.jpeg" alt="" />
        <span class="name">智熄机器人</span>
        <span class="content">你好，我是智熄机器人</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "chatSingleList",
  components: {},
  data() {
    return {
        msg: {},
    };
  },
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