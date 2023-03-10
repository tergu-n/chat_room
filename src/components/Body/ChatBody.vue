<template>
  <div class="chat-body">
    <div class="item" v-for="item in msg">
      <div class="time">{{ formatHafTime(item.time) }}</div>
      <div class="main" :class="item.userName === '吼吼吼吼' ? 'me' : ''">
        <div class="profile-image">
          <img :src="item.headerUrl" alt="">
        </div>
        <div class="message" v-if="item.message?.length > 0">{{ item.message }}</div>
        <div class="image" v-if="item.imageUrl?.length > 0">
          <img :src="item.imageUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { formatHafTime } from "@/tools/formatTime";

let msg = reactive([
  {
    userName: '哈哈哈哈',
    headerUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
    time: '2023/02/10 14:36:57',
    message: '当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行' +
        '。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。',
    imageUrl: ''
  }, {
    userName: '哈哈哈哈',
    headerUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
    time: '2023/03/1 14:36:57',
    message: '当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的。',
    imageUrl: ''
  }, {
    userName: '吼吼吼吼',
    headerUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
    time: '2023/03/9 14:36:57',
    message: '当你在 Vue 中更改响应式状态时。',
    imageUrl: ''
  }, {
    userName: '哈哈哈哈',
    headerUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
    time: '2023/03/10 10:36:57',
    message: '当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行' +
        '。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。',
    imageUrl: ''
  }, {
    userName: '吼吼吼吼',
    headerUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
    time: '2023/03/10 14:30:57',
    message: '当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中。',
    imageUrl: ''
  }, {
    userName: '哈哈哈哈',
    headerUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
    time: '2023/03/10 14:36:57',
    message: '',
    imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493'
  }
])
</script>

<style scoped lang="less">
.chat-body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 14px 16px;

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;

    .time {
      text-align: center;
      height: 17px;
      font-size: 12px;
      color: rgba(39,40,50,0.30);
      font-weight: 400;
      margin-bottom: 20px;
    }

    .main {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;


      .profile-image {
        width: 40px;
        height: 40px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .message {
        flex: 1;
        margin-left: 10px;
        margin-right: 50px;
        box-sizing: border-box;
        padding: 8px 11px 8px 12px;
        font-size: 16px;
        color: #272832;
        font-weight: 400;
        line-height: 22px;
        background-color: #ffffff;
        border-radius: 0 10px 10px 10px;
      }

      .image {
        flex: 1;
        margin-left: 10px;
        margin-right: 50px;

        img {
          width: 100%;
        }
      }
    }

    .me {
      flex-direction: row-reverse;

      .message {
        margin-left: 50px;
        margin-right: 10px;
        background-color: #FFE431;
        border-radius: 10px 0 10px 10px;
      }

      .image {
        margin-left: 50px;
        margin-right: 10px;
      }
    }
  }
}
</style>