<template>
  <div class="bottomNav">
    <router-link
      :to="item.linkPath"
      class="iconList"
      v-for="(item, index) in iconList"
      :key="index"
      tag="div"
    >
      <vantIcon
        :id="index"
        v-model="item.iconShow"
        :name="item.iconShow ? item.iconName : item.iconNameBlack"
      />
    </router-link>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  components: {
    "vantIcon": Icon,
  },
  name: "DownNav",
  data() {
    return {
      iconList: [
        {
          iconShow: true,
          linkPath: "/index",
          iconName: "wap-home-o",
          iconNameBlack: "wap-home",
        },
        {
          iconShow: true,
          linkPath: "/topic",
          iconName: "star-o",
          iconNameBlack: "star",
        },
        {
          iconShow: true,
          linkPath: "/creativity",
          iconName: "music-o",
          iconNameBlack: "music",
        },
        {
          iconShow: true,
          linkPath: "/chatWith",
          iconName: "chat-o",
          iconNameBlack: "chat",
        },
        {
          iconShow: true,
          linkPath: "/mineCenter",
          iconName: "manager-o",
          iconNameBlack: "manager",
        },
      ],
    };
  },
  props: {
    iconNum: { type: Number },
  },
  methods: {},
  created() {
    switch (this.iconNum) {
      case 1:
        this.iconList[0].iconShow = false;
        break;
      case 2:
        this.iconList[1].iconShow = false;
        break;
      case 3:
        this.iconList[2].iconShow = false;
        break;
      case 4:
        this.iconList[3].iconShow = false;
        break;
      case 5:
        this.iconList[4].iconShow = false;
        break;
      default:
        break;
    }
  },
};
</script>

<style scoped lang="less">
.bottomNav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 7%;
  background-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  .iconList {
    font-size: 1.6rem;
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>