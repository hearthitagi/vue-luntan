<template>
  <div v-show="$store.state.musicBall" class="mainShell">
    <div class="ballShell">
      <antIcon @click="closePlay" class="closePlay" type="close" />
      <antIcon
        @click="PlayNow"
        v-if="$store.state.musicPlay"
        class="iconPos"
        type="play-circle"
      />
      <antIcon @click="PauseNow" v-else class="iconPos" type="pause-circle" />
    </div>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue';
export default {
  name: "PlayBall",
  components: {
    "antIcon": Icon,
  },
  data() {
    return {
      playShow: true,
      playShellShow: true,
      //  控制悬浮球显示
    };
  },
  methods: {
    closePlay() {
      this.$store.dispatch("getMusicBall", false);
      this.$parent.pauseMusic();
    },
    PlayNow() {
      this.$parent.ballPlayMusic();
      this.$store.dispatch("getMusicPlay", false);
    },
    PauseNow() {
      this.$parent.pauseMusic();
      this.$store.dispatch("getMusicPlay", true);
    },
  },
  beforeDestroy() {
    this.closePlay();
  },
};
</script>

<style scoped lang="less">
.mainShell {
  position: fixed;
  bottom: 12%;
  right: 6%;
  width: 20%;
  height: 0;
  padding-bottom: 20%;
  overflow: auto;

  .ballShell {
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("http://59.110.124.95:3000/images/1649904714381-admin.jpg")
      no-repeat 100%;
    background-size: cover;

    .iconPos {
      font-size: 26px;
      color: rgba(100, 100, 100, 0.7);
    }

    .closePlay {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
      font-size: 18px;
      color: rgba(150, 150, 150);
    }
  }
}
</style>