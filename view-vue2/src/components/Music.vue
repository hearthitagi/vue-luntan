<template>
  <div class="musicShell">
    <div
      @click="playMusic"
      class="musicList"
      v-for="(item, index) in songList"
      :key="index"
    >
      <div class="singCover">
        <img :id="item.id" :src="item.picUrl" alt="" />
      </div>
      <div class="song" :id="item.id">
        <p :id="item.id">{{ item.name }}</p>
        <div :id="item.id">
          <span
            :id="item.id"
            class="singer"
            v-for="(itemartist, index) in item.song.artists"
            :key="index"
          >
            {{ itemartist.name }}
          </span>
        </div>
      </div>
    </div>
    <PlayBall></PlayBall>
  </div>
</template>

<script>
import { recommendMusic, musicPlay } from "@/api/api";
import PlayBall from "@/components/PlayBall";
export default {
  name: "Music",
  components: {
    PlayBall,
  },
  data() {
    return {
      songList: [],
      // 音乐url
      musicUrl: "",
      // 控制播放
      audio: new Audio(),
    };
  },
  methods: {
    playMusic(e) {
      this.$store.dispatch("getMusicBall", true);
      musicPlay(e.target.id)
        .then((res) => {
          this.audio.src = res.data.data[0].url;
          this.$store.dispatch("getMusicPlay", false);
          this.audio.play(); // 播放
        })
        .catch((rej) => {
          console.log(rej);
        });
    },
    // 子组件调用的播放音乐的方法
    ballPlayMusic() {
      this.audio.play();
    },
    // 子组件调用的暂停音乐的方法
    pauseMusic() {
      this.audio.pause(); // 暂停
    },
  },
  created() {
    recommendMusic()
      .then((res) => {
        this.songList = res.data.result;
      })
      .catch((rej) => {
        console.log(rej);
      });
  },
};
</script>

<style scoped lang="less">
.musicShell {
  margin-top: 20px;
  padding-bottom: 65px;
  .musicList {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    margin-top: 10px;
    .singCover {
      position: relative;
      width: 15%;
      height: 0;
      padding-bottom: 15%;
      border-radius: 10%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .song {
      width: 90%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      padding-left: 10px;
      background-color: #fafafa;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      .singer {
        font-size: 12px;
        color: #aaa;
      }
    }
  }
}
</style>