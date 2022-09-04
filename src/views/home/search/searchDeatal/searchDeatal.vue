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
    <van-tab title="全部">
       <All/>
    </van-tab>
    <van-tab title="用户">
       <User/>
    </van-tab>
    <van-tab title="商品">
      <Shop/>
    </van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import All from '@/components/search/all.vue'
import User from '@/components/search/user.vue'
import Shop from '@/components/search/shop.vue'
import { ref, watch } from "vue";
import emitter from "@/utils/bus"
let active = ref(0);



//监听
watch(active,(newVal)=>{
  console.log('tab标签切换了',newVal)
  emitter.emit('tabChange',newVal)
})

const onClickTab = (val) => {
  console.log(val);
};
</script>
<style scoped lang="scss">
:deep(.van-tabs__wrap){
  border-bottom: 1px solid #ccc;
}
</style>
