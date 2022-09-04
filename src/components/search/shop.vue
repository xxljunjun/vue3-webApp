<template>
  <div class="header">
        <div class="left">
          <span class="item">综合</span>
          <span class="item">销量</span>
        </div>
        <div class="right">
          <span class="item txt"
            >筛选<van-icon name="photo-o" style="marginleft: 10px"
          /></span>
        </div>
      </div>
       <div class="content">
    <DetailBox v-for="(item, idex) in 10" :key="idex" />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

</script>
<style scoped lang="scss">
.header {
  height: 40px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  color: rgb(130, 130, 130);
}
.left {
  margin-left: 10px;
}
.right {
  // margin-right: 10px;
}
.item {
  margin-right: 20px;
}
.txt {
  padding-left: 10px;
  border-left: 1px solid #ccc;
}
.content{
    display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #eee;
}
</style>
