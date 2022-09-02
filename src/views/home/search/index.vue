<template>
  <div class="search">
    <TopSearch :placeholder='changeArr[0]?.txt' @changeshowPag="changeshowPag"/>
    <!-- 搜索页面 -->
    <div class="content" v-if="showPag == 1">
      <div class="title" v-if="historyArr.length > 0">
        <span>历史记录</span>
        <van-icon name="delete-o" @click="clearHistory" />
      </div>
      <div class="history" v-if="historyArr.length > 0">
        <ul>
          <li v-for="item in historyArr" :key="item.id">{{ item.txt }}</li>
        </ul>
      </div>
      <div class="title">
        <span>猜你想搜</span>
        <div class="change-box">
          <van-icon name="replay" />
          <span class="change">换一换</span>
        </div>
      </div>
      <div class="thinkSearch">
        <ul>
          <li v-for="item in changeArr" :key="item.id">{{ item.txt }}</li>
        </ul>
      </div>
    </div>
    <!-- 联想页面 -->
    <div v-if="showPag == 2" class="lenovo">
      <Lenovo/>
    </div>
    <!-- 搜素页面 -->
    <div v-if="showPag == 3" class="result">
      <Result/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs, ref, markRaw,watch } from "vue";
import TopSearch from "@/components/topSearch.vue";
import Lenovo from '@/components/home/lenovo.vue'
import Result from "@/components/home/result.vue"

let showPag = ref(1)
let historyArr = reactive([
  { id: 1, txt: "小溪流1" },
  { id: 2, txt: "小溪流2" },
  { id: 3, txt: "小溪流3" },
  { id: 4, txt: "小溪流4" },
  { id: 5, txt: "小溪流5" },
  { id: 6, txt: "小溪流6" },
  { id: 7, txt: "小溪流7" },
]);
let changeArr = reactive([
  { id: 1, txt: "小溪流1" },
  { id: 2, txt: "小溪流2" },
  { id: 3, txt: "小溪流3" },
  { id: 4, txt: "小溪流4" },
  { id: 5, txt: "小溪流5" },
  { id: 6, txt: "小溪流6" },
]);

/*
    @function:清空历史数据
  */
const clearHistory = () => {
  historyArr.length = 0;
};
/*
    @function:子组件触发
  */
const changeshowPag = (val)=>{
  showPag.value = val
}
</script>
<style scoped lang="scss">
.search {
  font-size: 16px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 20px 0;
    .change-box {
      // font-size: 14px;
      .change {
        margin-left: 5px;
        color: rgb(121, 121, 121);
      }
    }
  }
  .thinkSearch {
    margin-left: 10px;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 180px;
        height: 30px;
        text-align: start;
        font-size: 14px;
      }
    }
  }
  .history {
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 100px;
        height: 30px;
        border: 1px solid #eee;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        margin-bottom: 10px;
        margin-right: 10px;
      }
    }
  }
}
</style>
