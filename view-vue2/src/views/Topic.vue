<template>
  <div class="topicShell">
    <div class="topicTitle">Category</div>
    <router-view></router-view>
    <DownNav :iconNum="iconTopic"></DownNav>
  </div>
</template>

<script>
import DownNav from "@/components/DownNav";
import TopicList from "@/components/TopicList";
export default {
  name: "Topic",
  components: {
    TopicList,
    DownNav,
  },
  data() {
    return {
      // 传给底部栏
      iconTopic: 2,
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "../assets/fonts/fonts.css";
.topicShell {
  overflow: hidden;
  // height: 100%;
  padding-bottom: 100px;
  .topicTitle {
    padding: 20px 0 25px 20px;
    font-size: 30px;
    font-family: "playball";
  }
}
</style>