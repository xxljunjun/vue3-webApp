<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

</script>

<template>
  <div class="home">
    <HelloWorld msg="小溪流"/>
     <van-button type="primary">111111111111</van-button>
     <van-cell-group inset>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
  </div>
</template>
<style scoped lang="scss">
.home{

}
</style>
