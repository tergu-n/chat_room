<template>
  <div class="chat-container">
    <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
    <ChatHeader :user-name="user.userName" :image-url="user.imageUrl"></ChatHeader>
    <div class="body">
      <ChatBody></ChatBody>
    </div>
    <ChatFooter></ChatFooter>
    <div class="footer" style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ChatHeader from '@/components/Header/ChatHeader.vue';
import ChatFooter from '@/components/Footer/ChatFooter.vue';
import ChatBody from '@/components/Body/ChatBody.vue';
let user = reactive({
  userName: '哈哈哈哈',
  imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493'
})
</script>

<style scoped lang="less">
.chat-container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #F4F4F4;
  flex-direction: column;

  .body {
    flex: 1;
    overflow: auto;
  }
}
</style>