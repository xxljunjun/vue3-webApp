<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
    count.value++;
  }, 1000);
};
</script>

<template>
  <div class="care"></div>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
  </van-pull-refresh>
</template>
<style scoped lang="scss">
.care {
  position: relative;
  height: 100%;
}
</style>
