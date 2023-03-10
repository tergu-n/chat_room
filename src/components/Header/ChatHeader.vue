<template>
  <div class="chat-header">
    <div class="back">
      <svg-icon icon-name="back" svg-class="icon"></svg-icon>
    </div>
    <div class="name">{{ props.userName }}</div>
    <div class="img">
      <img :src="props.imageUrl" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const props = defineProps({
  userName: {
    type: String
  },
  imageUrl: {
    type: String
  }
})
</script>

<style scoped lang="less">
.chat-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  padding: 0 16px 0 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 0.5px 0 0 rgba(0,0,0,0.1);

  .back {
    width: 24px;
    height: 24px;
    color: #272832;
    position: relative;

    .icon {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .name {
    flex: 1;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    color: #272832;
    font-weight: 400;
    text-align: center;
  }

  .img {
    width: 34px;
    height: 34px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 8px;
    }
  }
}
</style>