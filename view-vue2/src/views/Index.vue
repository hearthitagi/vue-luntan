<template>
  <div>
    <SearchHead @headToIndex="fromSearchHead"></SearchHead>
    <SearchMain v-if="!WaterVisible" @mainToIndex="fromSearchMain"></SearchMain>
    <WaterFall v-if="WaterVisible" :listType="'index'"></WaterFall>
    <DownNav :iconNum="iconIndex"></DownNav>
  </div>
</template>

<script>
import SearchHead from "@/components/SearchHead";
import WaterFall from "@/components/WaterFall"
import DownNav from "@/components/DownNav";
import SearchMain from "@/components/SearchMain";
export default {
  name: "Index",
  components: {
    SearchHead,
    WaterFall,
    SearchMain,
    DownNav,
  },
  data() {
    return {
      // 传给底部栏
      iconIndex: 1,
      // 控制搜索组件是否可见，默认可见
      WaterVisible: true,
    };
  },
  methods: {
    // 点击head让瀑布流消失，显示搜索内容
    fromSearchHead(WaterVisibleFromSon) {
      this.WaterVisible = WaterVisibleFromSon;
    },
    // 返回时watch监听WaterVisible，搜索页面消失，显示主页瀑布流
    fromSearchMain(WaterVisible) {
      this.WaterVisible = WaterVisible;
    },
  },
  created() {
  }
};
</script>

<style scoped>
</style>