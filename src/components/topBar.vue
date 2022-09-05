<template>
  <div class="topBar">
    <div class="flexBox">
      <div class="left"  @click="goToPage">
        <van-icon name="after-sale" />
      </div>
      <div class="middle">
        <van-tabs
          title-active-color="#000"
          title-inactive-color="rgb(201, 201, 201)"
          v-model:active="active"
          line-height="1"
          swipeable
          line-width="20"
          @click-tab="onClickTab"
        >
          <van-tab title="关注" to="/home/care"></van-tab>
          <van-tab title="发现" to="/home/find"></van-tab>
          <van-tab title="深圳" to="/home/location"></van-tab>
        </van-tabs>
      </div>
      <div class="right" @click="goToSearch">
        <van-icon name="search" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const active = ref(1);
const router = useRouter();
const route = useRoute();

/****
@function:点击tab切换
*/
const onClickTab = ({ title }) => {
  console.log(title);
};
/****
@function:点击搜索icon
*/
const goToSearch = () => {
  router.push({ path: "/search" });
};
 /***
 * @function:跳转日常页面
 */
 const goToPage = ()=>{
  console.log("1111")
  router.push({ path: "/daily"});
}
</script>
<style lang="scss">
.topBar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #eee;
  z-index: 2100;
  .flexBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      margin-left: 20px;
      font-size: 24px;
    }
    .middle {
      width: 180px;
    }
    .right {
      margin-right: 20px;
      font-size: 24px;
    }
  }
}
</style>
