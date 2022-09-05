<template>
  <div class="daily">
    <div class="header">
      <div class="left">
        <img src="@/assets/header.jpg" alt="" class="header-img" />
        <div class="txt-box">
          <span class="txt1">记录我的日常</span>
          <span class="txt2">还没有记录</span>
        </div>
      </div>
      <div class="right" @click="goBack">x</div>
    </div>
    <div class="func-box">
        <div class="top">
            <div>语音</div>
            <div>日签</div>
        </div>
        <div class="bottom">
            <div>打卡</div>
            <div>文字</div>
            <div>拍摄</div>
        </div>
    </div>
    <div class="row-box" v-for="val in 5" :key='val'>
      <div class="title">附近人的日常</div>
      <div class="row">
        <div class="box" v-for="item in txtArr" :key="item.id">
          <img src="@/assets/header.jpg" alt="" class="photo" />
          <p class="txt">啊斌的私搭</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
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
const router = useRouter();
const goBack = () => {
  router.push({ path: "/home/find" });
};
</script>
<style scoped lang="scss">
.daily {
  background: #000;
  color: #fff;
  font-size: 14px;
  .header {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background: #000;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      .header-img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      .txt-box {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .txt1 {
          font-size: 14px;
          margin-bottom: 5px;
        }
        .txt2 {
          font-size: 10px;
          color: rgb(158, 158, 158);
        }
      }
    }
    .right {
      font-size: 26px;
    }
  }
  .func-box{
    color: #000;
    .top{
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin: 10px 0;
        div{
            flex: 1;
            height: 100px;
            border-radius: 5px;
            background: #fff;
            &:nth-child(1){
                margin-right: 10px;
            }
        }
    }
    .bottom{
         display: flex;
        align-items: center;
        padding: 0 10px;
        div{
            flex: 1;
            height: 100px;
            border-radius: 5px;
            background: #fff;
            &:nth-child(1),&:nth-child(2){
                margin-right: 10px;
            }
        }
    }
  }
  .row-box {
    .title{
        margin: 20px 0;
        padding: 0 0 0 20px;
    }
    .row {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      white-space: nowrap;
      // margin-bottom: 10px;
      padding: 0 0 0 10px;
      box-sizing: border-box;
      .box {
        display: block;
        height: 160px;
        min-width: 115px;
        background: #fff;
        border-radius: 5px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        margin-bottom: 10px;
        .photo {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .txt {
          font-size: 12px;
          margin: 0;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
