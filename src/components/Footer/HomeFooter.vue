<template>
  <div class="footer-container">
    <div class="item">
      <div class="logo">
        <img :src="chat" alt="">
      </div>
      <div class="text">聊天</div>
    </div>
    <div class="item">
      <div class="logo">
        <img :src="chat" alt="">
      </div>
      <div class="text">过去</div>
    </div>
    <div class="item">
      <div class="logo">
        <img :src="chat" alt="">
      </div>
      <div class="text">未来</div>
    </div>
  </div>
  <div class="footer" style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import chat from '@/assets/chat.png'
</script>

<style scoped lang="less">
.footer-container {
  width: 100%;
  height: 49px;
  line-height: 49px;
  background: rgba(250,250,250,0.90);
  box-shadow: inset 0 0.5px 0 0 rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;

  .item {
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 3px;

    .logo {
      width: 28px;
      height: 28px;
      margin-bottom: 3px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      height: 14px;
      line-height: 14px;
      font-size: 10px;
      color: #272832;
    }
  }
}
</style>