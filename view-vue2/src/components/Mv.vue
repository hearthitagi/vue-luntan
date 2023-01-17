<template>
  <div class="mvShell">
    <transition>
      <div
        v-if="show"
        class="mvPlayShell"
        :style="{ top: clickY + 'px', left: clickX + 'px' }"
      >
        <video class="videoItem" :src="mvUrl" controls></video>
      </div>
    </transition>
    <div class="mvTitle">推荐MV</div>
    <div class="mvList">
      <div
        class="mvItem"
        v-for="(item, index) in recommendList"
        :key="index"
        @click="play(index, $event)"
      >
        <img class="mvPicShell" :id="item.id" :src="item.picUrl" alt="" />
        <span :id="item.id" class="mvName">{{ item.name }}</span>
      </div>
    </div>
    <div class="mvTitle">MV排行</div>
    <div class="mvList">
      <div
        class="mvItem"
        v-for="(item, index) in topList"
        :key="index"
        @click="play(index, $event)"
      >
        <img class="mvPicShell" :id="item.id" :src="item.cover" alt="" />
        <span :id="item.id" class="mvName">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { recommendMv, topListMv, mvPlay } from "../api/api";
export default {
  name: "Mv",
  components: {},
  data() {
    return {
      //mv显示
      show: false,
      //mv列表
      recommendList: [],
      topList: [],
      mvUrl: "",
      // 点击坐标
      clickX: "",
      clickY: "",
    };
  },
  methods: {
    // MV播放
    play: function (index, event) {
      this.show = !this.show;
      mvPlay(event.target.id)
        .then((res) => {
          this.mvUrl = res.data.data.url;
        })
        .catch((rej) => {});
      if (index % 2 != 0) {
        this.clickX = event.currentTarget.previousElementSibling.offsetLeft;
        this.clickY = event.currentTarget.previousElementSibling.offsetTop;
      } else {
        this.clickX = event.currentTarget.offsetLeft;
        this.clickY = event.currentTarget.offsetTop;
      }
      console.log(this.clickX);
      console.log(this.clickY);
    },
  },
  created() {
    recommendMv()
      .then((res) => {
        this.recommendList = res.data.result;
      })
      .catch((rej) => {
        console.log(rej);
      });
    topListMv()
      .then((res) => {
        this.topList = res.data.data;
      })
      .catch((rej) => {
        console.log(rej);
      });
  },
  mounted() {
    // this.loading = false;
  },
};
</script>

<style scoped lang="less">
.v-enter .v-leave-to {
  opacity: 0;
}
.v-enter-active .v-leave-active {
  transition: all 0.2s ease;
}
@keyframes slide {
  from {
    width: 0;
    padding-bottom: 0;
  }
  to {
    width: 86%;
    padding-bottom: 47%;
  }
}
.mvShell {
  padding-bottom: 50px;
  margin-top: 20px;
  .mvPlayShell {
    background-color: #000;
    animation: slide 0.4s;
    position: absolute;
    width: 86%;
    height: 1px;
    padding-bottom: 49%;
    z-index: 30;
    .videoItem {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .mvTitle {
    width: 100%;
    font-size: 20px;
    text-align: center;
    padding: 5px 0 10px;
  }
  .mvList {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    .mvItem {
      position: relative;
      width: 47%;
      height: 0;
      padding-bottom: 35%;
      margin-bottom: 15px;
      background-color: #f8f8f8;
      .mvPicShell {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 7px;
        width: 100%;
        height: 75%;
      }
      .mvName {
        position: absolute;
        bottom: 0;
        padding: 5px 0;
        width: 100%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>