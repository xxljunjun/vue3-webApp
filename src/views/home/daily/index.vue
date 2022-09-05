<template>
    <div class="daily">
        <div class="header">
            <div class="left">
                <img src="@/assets/header.jpg" alt="" class="header-img">
                <div class="txt-box">
                    <span class="txt1">记录我的日常</span>
                    <span class="txt2">还没有记录</span>
                </div>
            </div>
            <div class="right" @click="goBack">x</div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    import { useRouter, useRoute } from "vue-router";
    const router = useRouter();
    const goBack = ()=>{
        router.push({ path: "/home/find"});
    }
</script>
<style scoped lang="scss">
    .daily{
        background: #000;
        color: #fff;
        font-size: 14px;
        .header{
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            box-sizing: border-box;
            .left{
                display: flex;
                align-items: center;
                justify-content: center;
                .header-img{
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                }
                .txt-box{
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    .txt1{
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    .txt2{
                        font-size: 10px;
                        color: rgb(158, 158, 158);
                    }
                }
            }
            .right{
                font-size: 26px;
            }
        }
    }
</style>
