<script setup lang="ts">
import TopBar from '@/components/topBar.vue'
</script>

<template>
  <div class="home">
    <TopBar/>
      <router-view></router-view>
  </div>
</template>
<style scoped lang="scss">
.home{

}
</style>
