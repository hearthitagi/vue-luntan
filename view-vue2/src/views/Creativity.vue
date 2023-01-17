<template>
  <div class="create">
    <vantTabs v-model="active">
      <vantTab title="音乐">
        <Music></Music>
      </vantTab>
      <vantTab title="MV">
        <Mv></Mv>
      </vantTab>
    </vantTabs>
    <DownNav :iconNum="iconCreativity"></DownNav>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import DownNav from "@/components/DownNav";
import Music from "@/components/Music";
import Mv from "@/components/Mv";
export default {
  name: "Creativity",
  components: {
    "vantTabs":Tabs,
    "vantTab":Tab,
    DownNav,
    Music,
    Mv,
  },
  data() {
    return {
      // 传给底部栏
      iconCreativity: 3,
      active: 0,
    };
  },
  method: {},
};
</script>

<style scoped lang="less">
@import "../assets/fonts/fonts.css";
.create {
  /deep/.van-tabs__line {
    display: none;
  }
  /deep/.van-tabs {
    margin-top: 20px;
    padding: 0 20px;
    .van-tabs__nav {
      padding: 0;
      .van-tab {
        justify-content: center;
        border-radius: 20px;
        background-color: #f8f8f8;
        flex: none;
        width: 20%;
        height: 35px;
        margin-right: 5px;
      }
      .van-tab--active {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>