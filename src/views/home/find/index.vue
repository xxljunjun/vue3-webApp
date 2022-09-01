<template>
  <div class="find">
    <div class="content">
      <div class="topSearch">
        <span
          :class="[{ isChoose: item.isChoose }]"
          class="item"
          v-for="item in searchArr"
          :key="item.id"
          @click="clickTxt(item.id)"
          >{{ item.txt }}</span
        >
      </div>
      <div class="arrow" @click="drawer = true">
        <van-icon name="arrow-down" />
      </div>
    </div>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <van-loading color="#d81e06" />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <van-loading color="#d81e06" />
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <van-loading color="#d81e06" />
      </template>
      <div class="article_box">
        <DetailBox v-for="(item, idex) in 10" :key="idex" />
      </div>
    </van-pull-refresh>

    <van-popup v-model:show="drawer" position="top" :style="{ height: '80%' }">
      <Channel @on-close="drawer = false" />
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import DetailBox from "@/components/detailBox.vue";
import Channel from "@/components/channel.vue";
import { reactive, toRefs, ref, markRaw, watch,nextTick } from "vue";
let drawer = ref(false);
let searchArr = reactive([
  { id: 1, txt: "推荐", isChoose: true },
  { id: 2, txt: "直播", isChoose: false },
  { id: 3, txt: "男士理容", isChoose: false },
  { id: 4, txt: "穿搭", isChoose: false },
  { id: 5, txt: "护肤", isChoose: false },
  { id: 6, txt: "好物", isChoose: false },
  { id: 7, txt: "情感", isChoose: false },
  { id: 8, txt: "推荐", isChoose: false },
  { id: 9, txt: "直播", isChoose: false },
  { id: 10, txt: "男士理容", isChoose: false },
  { id: 11, txt: "穿搭", isChoose: false },
  { id: 12, txt: "护肤", isChoose: false },
  { id: 13, txt: "好物", isChoose: false },
  { id: 14, txt: "情感", isChoose: false },
]);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
/*
@function:点击频道
*/
const clickTxt = (id) => {
  searchArr.forEach((val) => {
    if (val.id == id) {
      val.isChoose = true;
    } else {
      val.isChoose = false;
    }
  });
  nextTick(()=>{
    let element = document.querySelector('.isChoose')
    console.log(element)
    element.scrollIntoView(false)
    // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  })
 
};
</script>

<style scoped lang="scss">
.doge {
  width: 30px;
  height: 30px;
  // margin-top: 8px;
  // border-radius: 4px;
}
:deep(.van-popup--top) {
  top: 50px;
}

.find {
  height: 100%;
  .content {
    padding-left: 20px;
    position: relative;
    padding-right: 40px;
    .topSearch {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      white-space: nowrap;
      height: 40px;
      line-height: 40px;

      .item {
        display: inline-block;
        margin-right: 40px;
        color: rgb(201, 201, 201);
        font-size: 14px;
      }
      .isChoose {
        color: #000;
      }
    }
    .arrow {
      position: absolute;
      right: 0;
      top: 0;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
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
