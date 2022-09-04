<template>
  <!-- <teleport to=".header"> -->
    <van-sticky :offset-top="50">
      <div :class="allPage.header">
        <div :class="allPage.left">
          <span :class="allPage.item">综合</span>
          <span :class="allPage.item">最热</span>
          <span :class="allPage.item">最新</span>
        </div>
        <div :class="allPage.right">
          <span :class="[allPage.item, allPage.txt]"
            >视频<van-icon name="play-circle-o" style="marginleft: 10px"
          /></span>
          <span :class="[allPage.item, allPage.txt]"
            >图文<van-icon name="photo-o" style="marginleft: 10px"
          /></span>
        </div>
      </div>
    </van-sticky>
  <!-- </teleport> -->

  <div :class="allPage.content">
    <DetailBox v-for="(item, idex) in 10" :key="idex" />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import DetailBox from "@/components/detailBox.vue";

// import { useCssModule } from 'vue'
// console.log('allPage',useCssModule('allPage'))
// useCssModule('allPage')
</script>
<style module='allPage' lang="scss">
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
.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #eee;
}
</style>
