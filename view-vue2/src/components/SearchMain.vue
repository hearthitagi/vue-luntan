<template>
  <div class="searchMain">
    <WaterFall :listType="'search'" :key="$store.state.searchText"></WaterFall>
  </div>
</template>

<script>
import WaterFall from "@/components/WaterFall";
export default {
  name: "SearchMain",
  components: {
    WaterFall
  },
  data() {
    return {
      // 瀑布流是否显示，默认不显示
      WaterVisible: false,
      searchList : [],
    };
  },
  methods: {
    hideSearch() {
      this.WaterVisible = true;
      this.$emit("mainToIndex", this.WaterVisible);
    },
  },
  mounted() {
    // 如果支持 popstate 一般移动端都支持了
    if (window.history && window.history.pushState) {
      // 往历史记录里面添加一条新的当前页面的url
      history.pushState(null, null, document.URL);
      // 给 popstate 绑定一个方法 监听页面刷新
      window.addEventListener("popstate", this.hideSearch, false); //false阻止默认事件
    }
  },
  destroyed() {
    window.removeEventListener("popstate", this.hideSearch, false);
  },
};
</script>

<style scoped>
</style>