<script setup lang="ts">
  import TabBar from '@/components/TabBar.vue'
  import {useRoute } from "vue-router";
  import { ref } from "vue";
  const route = useRoute()
</script>

<template>
  <router-view></router-view>
  <TabBar v-if="route.meta?.isTab"/>
</template>
<style lang="scss">
</style>
