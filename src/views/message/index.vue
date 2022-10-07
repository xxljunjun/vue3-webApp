<template>
  <div class="message">
    <p class="headerBox">
      <span class="title">消息</span>
      <div class="toMessage">
        <van-popover
        v-model:show="showPopover"
        :actions="actions"
        placement="bottom-start"
      >
        <template #reference> 创建聊天 </template>
      </van-popover>
      </div>
      
    </p>
    <div class="topBox">
      <div v-for="item in topArr" :key="item.id" class="item">
        <img src="@/assets/vue.svg" alt="" class="loveIcon" />
        <div>{{ item.txt }}</div>
      </div>
    </div>
    <div class="messageBox">
      <div v-for="item in messageArr" :key="item.id" class="val">
        <img src="@/assets/vue.svg" alt="" class="textIcon" />
        <div class="textBox">
          <div class="topTxt">
            {{ item.txt }}<span class="time">{{ item.time }}</span>
          </div>
          <div class="bottomTxt">{{ item.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const showPopover = ref(false);
const actions = [
  { text: "选项一", icon: "add-o" },
  { text: "选项二", icon: "music-o" },
  { text: "选项三", icon: "more-o" },
];
const topArr = reactive([
  { id: 1, txt: "赞和收藏" },
  { id: 2, txt: "新增关注" },
  { id: 3, txt: "评论和@" },
]);
const messageArr = reactive([
  { id: 1, txt: "消息通知", message: "视频体验小调研", time: "08-31" },
  { id: 2, txt: "消息通知", message: "视频体验小调研", time: "08-31" },
  { id: 3, txt: "消息通知", message: "视频体验小调研", time: "08-31" },
]);
</script>

<style scoped lang="scss">
.message {
  font-size: 18px;
  .headerBox {
    text-align: center;
    position: relative;
    margin: 20px 0 40px 0;
    .title {
    }
    .toMessage {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }
  .topBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      .loveIcon {
        height: 60px;
        width: 60px;
        margin-bottom: 10px;
      }
    }
  }
  .messageBox {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 0 20px;
    .val {
      display: flex;
      align-items: center;
      height: 100px;
      width: 100%;

      .textIcon {
        margin-right: 20px;
      }
      .textBox {
        width: 100%;

        .topTxt {
          position: relative;
          margin-bottom: 5px;
        }
        .time {
          position: absolute;
          right: 20px;
        }
      }
    }
  }
}
</style>
