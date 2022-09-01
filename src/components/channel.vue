<template>
  <div class="channel">
    <div class="title">
      <div>我的频道<span class="txt_1">{{isEdit?'长按拖动排序':'点击进入频道'}}</span></div>
      <div>
        <span class="txt_2" @click="changeEditStatus">{{isEdit?'完成编辑':'进入编辑'}}</span>
        <van-icon name="arrow-up" @click="close" class="arrow"/>
      </div>
    </div>
    <div class="content">
      <span @click="chooseChannel(item)" v-for="item in myChannel" :key="item.id" class="item">
        <span class="btn" v-if="isEdit" @click="reduceChannel(item)">x</span>
        {{item.txt}}
      </span>
    </div>
    <div class="title">
      <div>推荐频道<span class="txt_1">点击添加频道</span></div>
    </div>
    <div class="content">
      <span @click="addChannel(item)" v-for="item in recommendMyChannel" :key="item.id" class="item"><span class="add">+</span>{{item.txt}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, markRaw } from "vue";
//emit的写法
const emit = defineEmits(['on-close'])
//watch
let isEdit = ref(false)
let myChannel = reactive([
  { id: 1, txt: "推荐" },
  { id: 2, txt: "直播" },
  { id: 3, txt: "男士理容" },
  { id: 4, txt: "穿搭" },
  { id: 5, txt: "护肤" },
  { id: 6, txt: "好物" },
  { id: 7, txt: "情感" },
  { id: 8, txt: "推荐" },
  { id: 9, txt: "直播" },
  { id: 10, txt: "男士理容" },
  { id: 11, txt: "穿搭" },
  { id: 12, txt: "护肤" },
  { id: 13, txt: "好物" },
  { id: 14, txt: "情感" },
]);
let recommendMyChannel = reactive([
  { id: 15, txt: "推荐" },
  { id: 16, txt: "直播" },
  { id: 17, txt: "男士理容" },
  { id: 18, txt: "穿搭" },
  { id: 19, txt: "护肤" },
  { id: 20, txt: "好物" },
  { id: 21, txt: "情感" },
  { id: 22, txt: "推荐" },
  { id: 23, txt: "直播" },
  { id: 24, txt: "男士理容" },
  { id: 25, txt: "穿搭" },
  { id: 26, txt: "护肤" },
  { id: 27, txt: "好物" },
  { id: 28, txt: "情感" },
]);
/*
  @function:点击箭头触发
*/
const close = ()=>{
  isEdit.value = false
  emit('on-close')
}
/*
  @function:改变编辑状态
*/
const changeEditStatus = ()=>{
  isEdit.value = !isEdit.value
}
/*
  @function:减少我的频道
*/
const reduceChannel = (item)=>{
  let newArr = myChannel.filter(val=>{
    return val.id!=item.id
  })
  // Vue3.0不能直接对数组进行赋值
  myChannel.length = 0 // 清空原数组
  myChannel.push(...newArr)
  //对推荐频道也要新增
  recommendMyChannel.push(item)
  
}
/*
  @function:增加我的频道
*/
const addChannel = (item)=>{
  let newArr = recommendMyChannel.filter(val=>{
    return val.id!=item.id
  })
  // Vue3.0不能直接对数组进行赋值
  recommendMyChannel.length = 0 // 清空原数组
  recommendMyChannel.push(...newArr)
  //对我的频道新增
  myChannel.push(item)
}
/*
  @function:选择某个频道
*/
const chooseChannel = (item)=>{
  if(isEdit.value){
    reduceChannel(item)
  }else{
    emit('on-close')
  }
  
}
</script>

<style lang="scss" scoped>
.channel {
  overflow: auto;
  font-size: 14px;
  padding: 0 20px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .arrow{
      font-size: 16px;
    }
    .txt_1{
      margin-left: 20px;
      color: #333;
      font-size: 12px;
    }
    .txt_2{
      margin-right: 20px;
      display: inline-block;
      width: 80px;
      height: 30px;
      border-radius: 15px;
      background: #ccc;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: blue;
    }
  }
  .content {
    display: flex;
      flex-wrap: wrap;
    .item{
      display: inline-block;
      text-align: center;
      line-height: 35px;
      height: 35px;
      width: 70px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      margin-bottom: 28px;
      margin-right: 14px;
      position: relative;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
    .add{
      color: #333;
      margin-right: 2px;
    }
    .btn{
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      border-radius: 50%;
      background: #ccc;
      display: inline-block;
      position: absolute;
      right: -10px;
      top: -5px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
