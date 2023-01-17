<template>
  <div class="create">
    <vantTabs v-model="active">
      <vantTab title="聊天室">
        <chatGroupList></chatGroupList>
      </vantTab>
      <vantTab title="好友">
        <chatSingleList></chatSingleList>
      </vantTab>
    </vantTabs>
    <DownNav :iconNum="iconChat"></DownNav>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import chatGroupList from "@/components/chatGroupList";
import chatSingleList from "@/components/chatSingleList";
import DownNav from "@/components/DownNav";
export default {
  name: "Chatwith",
  components: {
    "vantTabs":Tabs,
    "vantTab":Tab,
    chatSingleList,
    chatGroupList,
    DownNav,
  },
  data() {
    return {
      // 传给底部栏
      iconChat: 4,
      active: 0,
    };
  },
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