<template>
  <div class="linkStart">
    <router-link class="shell" to="/index" tag="div">
      <!-- <video autoplay loop muted src="https://cdn.jsdelivr.net/gh/recreyed/blogImg/luntan/video.mp4"></video> -->
      <video autoplay loop muted src="http://59.110.124.95:3000/images/linkStart.mp4"></video>
      <span class="intro">点击进入</span>
    </router-link>
  </div>
</template>
<script>
// import { linkstart } from "@/api/api";
export default {
  name: "LinkStart",
  data() {
    return {
      imglist: "",
    };
  },
  methods: {},
  created() {
    // linkstart().then((res) => {
    //   this.imglist = res.data.imgurl;
    // });
  },
};
</script>

<style scoped lang="less">
.linkStart {
  height: 100vh;
  width: 100%;
  .shell {
    width: 100%;
    height: 100vh;
    .intro {
      position: fixed;
      bottom: 20px;
      right: 20px;
      font-size: 20px;
      color: white;
    }
    img,video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>