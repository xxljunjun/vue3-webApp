<template>
  <div class="cardBox">
    <div class="header">
      <div class="left">
        <img src="@/assets/header.jpg" alt="" class="avarage" />
        <span class="myName">MRHERO搭配室</span>
        <span class="myTime">. 昨天12:57</span>
      </div>
      <div class="right">. . .</div>
    </div>
    <div class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/header.jpg" alt="" class="swiper-img" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/shop.jpg" alt="" class="swiper-img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="bottom">
      <van-icon name="share-o" />
      <div>
        <span>
          <van-icon name="like-o" />
          <span class="txt">点赞</span>
        </span>
        <span class="txt">
          <van-icon name="star-o" />
          <span class="txt">收藏</span>
        </span>
        <span class="txt">
          <van-icon name="more-o" />
          <span class="txt">评论</span>
        </span>
      </div>
    </div>
    <div class="last_txt">
      <p>
        入秋之后，男生穿夹克是真的帅|轻...<span class="seeAll">查看全文</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.cardBox {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-bottom: 20px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
      .avarage {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .myName {
        font-size: 14px;
        margin-right: 10px;
      }
      .myTime {
        font-size: 12px;
        color: rgb(155, 155, 155);
      }
    }
    .right {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .content {
    height: 450px;
    .swiper-img {
      height: 450px;
      width: 100%;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 10px 0;
    font-size: 14px;
    .txt{
      margin-left: 5px;
    }
  }
  .last_txt {
    font-size: 14px;
    padding: 0 0 0 10px;
    box-sizing: border-box;
    .seeAll {
      font-weight: 600;
    }
  }
}
</style>
