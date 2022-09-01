<template>
  <div class="tabBar">
    <div class="ulbox">
      <router-link  to="/" v-slot="{ route }">
        <Badge>
          <span class="item">首页</span>
        </Badge>
      </router-link>
      <router-link to="/myVideo" v-slot="{ route }">
        <span class="item">视频</span>
        <Badge></Badge>
      </router-link>
      <div class="redBox">+</div>
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
import Badge from "@/components/badge/";
import { reactive } from "vue";
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
    .redBox {
      height: 35px;
      width: 35px;
      background: red;
      font-size: 30px;
      color: #fff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
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
</style>
