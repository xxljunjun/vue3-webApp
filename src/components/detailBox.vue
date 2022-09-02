
<template>
<div class="detailBox">
    <div class="top">
        <img src="@/assets/shop.jpg" alt="" class="showimg">
    </div>
    <div class="middle">姐妹们快进来帮我选照片！！！</div>
    <div class="buttom">
        <div class="flex-box">
            <img src="@/assets/header.jpg" alt="" class="header">
            <span class="myName">赖先生</span>
        </div>
        <div class="flex-box">
            <van-icon name="like-o" />
            <span class="nums">1.4万</span>
        </div>
    </div>
</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.detailBox{
    width: 49%;
    min-height: 300px;
    margin-bottom: 6px;
    background: #fff;
    border-radius: 4px;
    font-size: 16px;
    .top{
        .showimg{
            width: 100%;
            height: 250px;
        }
    }
    .middle{
        padding: 0 10px;
        margin: 10px 0 15px;
    }
    .buttom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        margin-bottom: 15px;
        .flex-box{
            display: flex;
        align-items: center;
        }
        .header{
            // font-size: 10px;
            height: 20px;
            margin-right: 5px;
            border-radius: 50%;
        }
        .myName{
            font-size: 12px;
            color: rgb(155, 155, 155);
        }
        .nums{
            font-size: 12px;
            margin-left: 5px;
            color: rgb(155, 155, 155);
        }
        .heart{
            // font-size: 10px;
        }
    }
}
</style>
