<template>
  <div class="search">
    <div class="left">
      <van-icon name="arrow-left" @click="back" />
    </div>
    <div class="middle">
      <van-search
        v-model="value"
        :clearable="true"
        :placeholder="placeholder"
        :autofocus="focusStatus"
        :class="[
          'vantInp',
          widthStatus == 2 ? 'activeLength' : '',
          showPag == 3 ? 'noactiveLength' : '',
          { hasSearch: showPag == 3 },
        ]"
        @clear="clearTxt"
        @update:model-value="txtChange"
      />
    </div>
    <div class="right" @click="goToSearch" v-if="showPag == 1 || showPag == 2">
      搜索
    </div>
    <div class="boxStatus" v-if="widthStatus == 2 && showPag == 3">
      <van-icon name="apps-o" class="icon" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, inject, toRef, nextTick, onMounted } from "vue";
import { useRouter } from "vue-router";

let value = ref("");
let showBtn = ref(true);
let widthStatus = ref(0);
let focusStatus = ref(true);

//非ts专有声明
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  showPag: {
    type: Number,
  },
});
//emit的写法
const emit = defineEmits(["changeshowPag"]);
//路由跳转
const router = useRouter();

/***
 * @function:返回上一级菜单
 */
const back = () => {
  value.value = "";
  router.back();
};
/***
 * @function:点击搜索按钮
 */
const goToSearch = () => {
  if (value.value == "") {
    value.value = props.placeholder;
  }
  emit("changeshowPag", 3);
  router.push({ path: "/search/searchDeatal" });
};
/***
 * @function:点击清空按钮
 */
const clearTxt = () => {
  console.log("点击清空按钮");
  emit("changeshowPag", 1);
  router.push({ path: "/search" });
};
 /***
 * @function:输入框文字改变
 */
const txtChange = () => {
  console.log("输入框文字改变");
  if (value.value == "") {
    emit("changeshowPag", 1);
    router.push({ path: "/search" });
  } else {
    emit("changeshowPag", 2);
    router.push({ path: "/search" });
  }
};
</script>
<style scoped lang="scss">
.search {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: #fff;
  .left {
    font-size: 16px;
    width: 30px;
    margin-left: 10px;
  }
  .middle {
    font-size: 16px;
    .vantInp {
      width: 260px;
      margin: 0 20px 0 10px;
      border-radius: 10px;
      :deep(.van-search__content) {
        border-radius: 15px;
        height: 30px;
      }
    }
    .hasSearch {
      width: 300px;
    }
    .activeLength {
      width: 260px;
      transition: width linear 0.3s;
    }
    .noactiveLength {
      transition: width linear 0.3s;
    }
    :deep(.van-search) {
      padding: 0;
    }
  }
  .right {
    font-size: 16px;
    width: 60px;
    margin-right: 10px;
    color: rgb(105, 105, 105);
  }
  .boxStatus {
    .icon {
      font-size: 24px;
      color: rgb(148, 148, 148);
    }
  }
}
</style>
