<template>
  <div class="item-container">
    <div class="img">
      <Badge :num="props.msg.unReadNumber"></Badge>
      <img :src="props.msg.imageUrl" alt="">
    </div>
    <div class="body">
      <div class="nick-name">
        <div class="name">{{ props.msg.userName }}</div>
        <div class="time">{{ formatHafTime(props.msg.lastTime) }}</div>
      </div>
      <div class="message">
        {{ props.msg.lastMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Badge from '@/components/Badge/Badge.vue';
import { formatHafTime, formatFullTime } from '@/tools/formatTime';
const props = defineProps({
  msg: {
    type: Object,
    default () {
      return {
        imageUrl: '',
        unReadNumber: 0,
        userName: '',
        lastTime: '',
        lastMsg: ''
      }
    }
  }
});
</script>

<style scoped lang="less">
.item-container {
  height: 64px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 8px 16px;
  margin: 3px 0;

  .img {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    position: relative;
    margin-right: 16px;
    border-radius: 12px;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .body {
    flex: 1;
    width: 0;

    .nick-name {
      background-color: pink;
      width: 100%;
      height: 25px;
      line-height: 25px;
      display: flex;
      justify-content: space-between;

      .name {
        color: #272832;
        font-size: 18px;
      }

      .time {
        color: rgba(39, 40, 50, 0.4);
        font-size: 12px;
      }
    }

    .message {
      background-color: skyblue;
      width: 100%;
      height: 20px;
      line-height: 20px;
      color: rgba(39,40,50,0.60);
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.active {
  background-color: #F3F3F3;
}
</style>