<template>
  <div class="location">
    <div class="header">
      <div class="box" v-for="item in txtArr" :key="item.id">
        <van-icon name="shop-collect-o" class="icon" />
        <span class="txt">{{ item.txt }}</span>
      </div>
    </div>
    <div class="article_box">
      <DetailBox v-for="(item, idex) in 10" :key="idex" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import DetailBox from "@/components/detailBox.vue";

const txtArr = reactive([
  { id: 1, txt: "拍照地" },
  { id: 1, txt: "餐厅" },
  { id: 1, txt: "玩乐" },
  { id: 1, txt: "景点" },
  { id: 1, txt: "周边游" },
  { id: 1, txt: "逛街" },
  { id: 1, txt: "下午茶" },
  { id: 1, txt: "展馆" },
  { id: 1, txt: "变美" },
  { id: 1, txt: "酒店" },
]);
</script>
<style scoped lang="scss">
.location {
  font-size: 18px;
  background: #eee;
  .header {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;
    width: 100%;
    white-space: nowrap;
    margin-bottom: 5px;
    padding: 0 5px;
    box-sizing: border-box;
    padding-top: 5px;
    .box {
      display: block;
      height: 60px;
      min-width: 60px;
      background: #fff;
      border-radius: 5px;
      margin-right: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      .icon {
        font-size: 18px;
      }
      .txt {
        margin-top: 5px;
      }
    }
  }
  .article_box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #eee;
  }
}
</style>
