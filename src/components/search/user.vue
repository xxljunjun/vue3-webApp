<template>
 <ul>
    <li class="item" v-for="item in 20" :key='item'>
        <div class="left">
            <div>
                <img src="@/assets/header.jpg" alt="" class="header">
            </div>
            <div class="txtBox">
                <div class="txt1 txt">男士发型</div>
                <div class="txt2 txt">小红书号:245234652345</div>
                <div class="txt3 txt">笔记.333|粉丝.4325</div>
            </div>
        </div>
        <div class="right">
            <span class="btn">关注</span>
        </div>
    </li>
 </ul>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

</script>
<style scoped lang="scss">
.item{
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 20px;
    background: #fff;
    .header{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    .left{
        margin-left: 20px;
        display: flex;
    align-items: center;
    .txtBox{
        margin-left: 20px;
        div{
            margin-bottom: 5px;
        }
        .txt2,.txt3{
            color: rgb(158, 158, 158);
        }
    }
    }
    .right{
        margin-right: 20px;
        .btn{
            display: inline-block;
            height: 25px;
            width: 60px;
            border: 1px solid red;
            border-radius: 20px;
            text-align: center;
            line-height: 30px;
            color: red;
        }
    }
}
</style>
