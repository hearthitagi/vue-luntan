<template>
  <div>
    <UserCenterHeader></UserCenterHeader>
    <UserCenterMine></UserCenterMine>
    <DownNav :iconNum="iconUser"></DownNav>
  </div>
</template>

<script>
import DownNav from "@/components/DownNav";
import UserCenterHeader from "@/components/UserCenterHeader";
import UserCenterMine from "@/components/UserCenterMine";

export default {
  name: "MineCenter",
  components: {
    DownNav,
    UserCenterHeader,
    UserCenterMine,
  },
  data() {
    return {
      //传给底部栏
      iconUser: 5,
    };
  },
  created(){
  }
};
</script>

<style scoped>
</style>