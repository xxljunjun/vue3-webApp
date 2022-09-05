<template>
  <div class="care">
    <div class="header">
      <div class="one">
        <img src="@/assets/header.jpg" alt="" class="header" />
        <span class="txt">分享瞬间</span>
      </div>
    </div>
    <div class="interesting">
      <div class="top">
        <div class="int-txt">可能感兴趣的人</div>
        <div class="more-txt">查看更多></div>
      </div>
      <div class="bottom">
        <div class="box" v-for="item in txtArr" :key="item.id">
          <img src="@/assets/header.jpg" alt="" class="photo" />
          <p class="txt">啊斌的私搭</p>
          <p class="txt1">因为你关注了</p>
          <p class="txt1">陈太阳工作室</p>
          <span class="btn">关注</span>
        </div>
      </div>
    </div>
    <div class="content" v-for="(item, idex) in 10" :key="idex">
      <CardBox />
    </div>
  </div>
</template>
<script setup lang="ts">
import CardBox from "@/components/home/care/card-box.vue";
import { ref, reactive } from "vue";
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
.care {
  font-size: 18px;
  box-sizing: border-box;
  padding-bottom: 50px;
  .header {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    .one {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      .header {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-bottom: 5px;
      }
      .txt {
        font-size: 12px;
      }
    }
  }
  .interesting {
    background: rgb(240, 240, 240);
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      font-size: 14px;
      padding: 0 10px;
      box-sizing: border-box;
      .int-txt {
        font-size: 12px;
      }
      .more-txt {
        font-size: 10px;
        color: rgb(129, 129, 129);
      }
    }
    .bottom {
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
        .btn {
          height: 20px;
          width: 50px;
          text-align: center;
          line-height: 20px;
          background: red;
          border-radius: 15px;
          color: #fff;
          font-size: 10px;
          margin-top: 5px;
        }
        .txt1 {
          font-size: 10px;
          color: rgb(136, 136, 136);
          margin: 0;
          margin-bottom: 5px;
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
