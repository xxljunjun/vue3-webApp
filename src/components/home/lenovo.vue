<template>
  <div class="lenovo">
    <ul>
      <li v-for="item in 40" :key="item" @click="goToPag">
        <span class="txt">看看</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import {useRouter,useRoute } from "vue-router";
  const router = useRouter()
  const goToPag  = ()=>{
    router.push({path:'/search/searchDeatal'})
  }
</script>

<style scoped lang="scss">
.lenovo {
  li {
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: rgb(126, 126, 126);
    .txt {
      margin-left: 20px;
    }
  }
}
</style>
