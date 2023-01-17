<template>
  <div class="indexHead">
    <!--搜索框-->
    <form action="/">
      <vantSearch
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      />
    </form>
    <router-link to="/sendPost">
      <vantIcon name="add" />
    </router-link>
  </div>
</template>

<script>
import { Icon,Search } from 'vant';
export default {
  components: {
    "vantIcon": Icon,
    "vantSearch": Search,
  },
  name: "SearchHead",
  data() {
    return {
      // 搜索值
      value:"",
    };
  },
  methods: {
    onSearch(val) {
      if (!val) {
        return;
      }else{
        this.$store.dispatch("getSearchText", val);
      }
      this.$emit("headToIndex", false);
    }
  },
};
</script>


<style scoped lang="less">
//搜索图标
/deep/.van-icon-search {
  font-weight: bold;
}
//发表帖子图标
.van-icon-add {
  display: inline-block;
  position: absolute;
  right: 25px;
  top: 26px;
  font-size: 24px;
}
.indexHead {
  position: relative;
  .van-search {
    padding-top: 20px;
    width: 85%;
    .van-search__content {
      border-radius: 15px;
    }
  }
}
</style>