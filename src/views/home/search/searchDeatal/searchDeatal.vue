<template>
  <van-tabs
    title-active-color="#000"
    title-inactive-color="rgb(201, 201, 201)"
    v-model:active="active"
    line-height="1"
    swipeable
    line-width="20"
    @click-tab="onClickTab"
  >
    <van-tab title="全部">1111</van-tab>
    <van-tab title="用户">2222</van-tab>
    <van-tab title="商品">333</van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
let active = ref(0);

const onClickTab = (val) => {
  console.log(val);
};
</script>
<style scoped lang="scss"></style>
