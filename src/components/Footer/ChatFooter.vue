<template>
  <div class="chat-footer">
    <div class="icon voice">
      <img :src="voice" alt="">
    </div>
    <div class="input">
      <input type="text">
    </div>
    <div class="icon emoji">
      <img :src="emoji" alt="">
    </div>
    <div class="icon more">
      <img :src="add_circle" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import voice from '@/assets/voice.png';
import emoji from '@/assets/emoji.png';
import add_circle from '@/assets/add_circle.png';

</script>

<style scoped lang="less">
.chat-footer {
  width: 100%;
  height: 49px;
  box-sizing: border-box;
  padding: 0 16px;
  box-shadow: inset 0 0.5px 0 0 rgba(0,0,0,0.1);
  display: flex;
  align-items: center;

  .icon {
    width: 28px;
    height: 28px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .voice {
    margin-right: 10px;
  }

  .input {
    flex: 1;
    height: 36px;

    input {
      width: 100%;
      height: 100%;
      outline: none;
      border-radius: 5px;
      border: 0;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0 10px;
    }
  }

  .emoji {
    margin-left: 10px;
  }

  .more {
    margin-left: 12px;
  }
}
</style>