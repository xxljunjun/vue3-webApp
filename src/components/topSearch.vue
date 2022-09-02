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
        class="vantInp"
        @clear="clearTxt"
        @update:model-value="txtChange"
      />
    </div>
    <div class="right" @click="goToSearch">搜索</div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

let value = ref("");

//监听
// watch(value,(newVal)=>{
//   console.log(newVal)
// })
//非ts专有声明
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
});
//emit的写法
const emit = defineEmits(["changeshowPag"]);
//路由跳转
const router = useRouter();

/*
    @function:返回上一级菜单
  */
const back = () => {
  router.back();
};
/*
    @function:点击搜索按钮
  */
const goToSearch = () => {
  if (value.value == "") {
    value.value = props.placeholder;
  }
  emit("changeshowPag", 3);
};
/*
    @function:点击清空按钮
  */
const clearTxt = () => {
  console.log("点击清空按钮");
  emit("changeshowPag", 1);
};
/*
    @function:输入框文字改变
  */
const txtChange = () => {
  console.log("输入框文字改变");
  if (value.value == "") {
    emit("changeshowPag", 1);
  } else {
    emit("changeshowPag", 2);
  }
};
</script>
<style scoped lang="scss">
.search {
  height: 50px;
  width: 100%;
  //   background:red;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      // height: 20px;
      width: 240px;
      margin: 0 20px;
      border-radius: 10px;
      :deep(.van-search__content) {
        border-radius: 15px;
        height: 30px;
      }
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
}
</style>
