<template>
  <div class="tabBar">
    <div class="ulbox">
      <router-link  to="/home/find" v-slot="{ route }">
        <Badge>
          <span class="item">首页</span>
        </Badge>
      </router-link>
      <router-link to="/myVideo" v-slot="{ route }">
        <span class="item">视频</span>
        <Badge></Badge>
      </router-link>
      <div class="wrap">
        <div class="redBox" @touchstart="pressStart" @touchend="pressEnd" :class="[{ispress:ispress}]">+</div>
      </div>
      <router-link to="/message" v-slot="{ route }">
        <Badge :count="6">
          <span class="item">消息</span>
        </Badge>
      </router-link>
      <router-link to="/mine" v-slot="{ route }">
        <Badge>
          <span class="item">我</span>
        </Badge>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
  /*
  touchstart:  // 手指放到屏幕上的时候触发
touchmove:  // 手指在屏幕上移动的时候触发
touchend:  // 手指从屏幕上拿起的时候触发
touchcancel:  // 系统取消touch事件的时候触发。至于系统什么时候会取消，不详
  */
import Badge from "@/components/badge/";
import { reactive,ref } from "vue";
let ispress = ref(false)
const pressStart = ()=>{
  console.log("1111")
  ispress.value = true
}
const pressEnd = ()=>{
  console.log("222")
  ispress.value = false
}
</script>
<style scoped lang="scss">
.tabBar {
  background: #fff;
  border-top: 1px solid #eee;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  .ulbox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    .item {
      color: rgb(201, 201, 201);
      font-size: 14px;
      display: inline-block;
      width: 36px;
    }
    .wrap{
      height: 35px;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      .redBox {
      height: 30px;
      width: 40px;
      background: red;
      font-size: 30px;
      color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    }
    
    .ispress{
      height: 35px !important;
      width: 45px !important;
    }
  }
  //路由激活时添加的css属性
  .router-link-active {
    
    .item{
      color: #000;
      font-size: 16px;
    }
  }
  .router-link-exact-active {
    .item{
      color: #000;
      font-size: 16px;
    }
  }
  
}
:deep(.van-badge__wrapper){
  font-size: 18px;
}
</style>
