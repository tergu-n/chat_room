<template>
  <div class="home">
    <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
    <HomeHeader class="home-header"></HomeHeader>
    <div class="body">
      <MsgListItem v-for="item in msgList" :msg="item"></MsgListItem>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '@/components/Header/HomeHeader.vue';
import MsgListItem from '@/components/Item/MsgListItem.vue';
import HomeFooter from '@/components/Footer/HomeFooter.vue';
import {reactive} from "vue";
const msgList = reactive([
  {
    imageUrl: 'https://img0.baidu.com/it/u=1614662868,1222645697&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=500',
    unReadNumber: 1,
    userName: 'Andy',
    lastTime: '2023/03/8 17:3:56',
    lastMsg: '这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。'
  }, {
    imageUrl: 'https://img0.baidu.com/it/u=1614662868,1222645697&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=500',
    unReadNumber: 0,
    userName: 'Aidy',
    lastTime: '2023/03/7 17:3:56',
    lastMsg: '这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态。'
  }, {
    imageUrl: 'https://img0.baidu.com/it/u=1614662868,1222645697&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=500',
    unReadNumber: 10,
    userName: 'Strong',
    lastTime: '2023/02/8 17:3:56',
    lastMsg: '这种更改的主要缺陷是它允许'
  }, {
    imageUrl: 'https://img0.baidu.com/it/u=1614662868,1222645697&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=500',
    unReadNumber: 3,
    userName: 'Kate',
    lastTime: '2023/03/4 17:3:56',
    lastMsg: '这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。'
  }
])
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  .home-header {
    margin-bottom: 7px;
  }

  .body {
    flex: 1;
  }
}
</style>