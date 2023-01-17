<template>
  <div>
    <Login v-show="number==0">
      <span class="register" @click="number=1">立即注册</span>
      <span class="forget" @click="number=2">忘记密码</span>
    </Login>
    <Register v-show="number==1">
      <vantIcon name="arrow-left" class="back" @click="number=0"/>
    </Register>
    <ForgetPassword v-show="number==2">
      <vantIcon name="arrow-left" class="back" @click="number=0"/>
    </ForgetPassword>
  </div>
</template>

<script>
import { Icon } from 'vant';
import Login from "@/components/Login";
import Register from "@/components/Register";
import ForgetPassword from "@/components/ForgetPassword";
export default {
  name: "Sign",
  data(){
    return {
      number:0
    }
  },
  components:{
    Login,
    Register,
    ForgetPassword,
    "vantIcon": Icon,
  }
}
</script>

<style scoped lang="less">


</style>