<template>
  <div class="topicList">
    <router-link
      :to="{ name: 'topicPost', params: { cateId: item.categoryId } }"
      tag="div"
      class="topicItem"
      v-for="(item, index) in topicList"
      :key="index"
    >
      <div
      class="topic-item"
        :style="{
          background: `url(${item.cover}) center/cover  no-repeat`,
        }"
      ></div>
      <span class="itemTitle">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script>
import { topicList } from "@/api/api";
export default {
  name: "TopicList",
  data() {
    return {
      topicList: [],
    };
  },
  methods: {},
  created() {
    topicList().then((res) => {
      console.log(res);
      this.topicList = res.data.data;
    });
  },
};
</script>

<style scoped lang="less">
.topicList {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  .topicItem {
    position: relative;
    width: 26%;
    height: 0;
    padding-bottom: 26%;
    margin-bottom: 10%;
    .topic-item {
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .itemTitle {
      position: absolute;
      left: 35%;
      bottom: -25%;
      font-size: 14px;
    }
  }
}
</style>