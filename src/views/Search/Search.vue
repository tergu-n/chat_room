<template>
  <div class="search-container">
    <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
    <div class="search-header">
      <SearchInput class="input" @search="search" ref="searchInput"></SearchInput>
      <div class="text">取消</div>
    </div>
    <div class="body">
      <div class="result">
        <div class="title">用户</div>
        <div class="item" v-for="item in searchResult.users">
          <div class="img">
            <img :src="item.imageUrl" alt="">
          </div>
          <div class="name">{{ item.userName }}</div>
          <button class="btn" :class="item.isFriend ? 'is-friend' : ''">{{ item.isFriend ? '发消息' : '加好友' }}</button>
        </div>
      </div>
      <div class="result">
        <div class="title">群组</div>
        <div class="item" v-for="item in searchResult.groups">
          <div class="img">
            <img :src="item.imageUrl" alt="">
          </div>
          <div class="name">{{ item.groupName }}</div>
          <button class="btn" :class="item.isFriend ? 'is-friend' : ''">{{ item.inGroupe ? '发消息' : '加好友' }}</button>
        </div>
      </div>
    </div>
    <div class="footer" style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, watch, nextTick, onMounted, computed} from "vue";
import SearchInput from '@/components/Input/SearchInput.vue';
import { replaceHandle } from "@/tools/replaceHandle";

let searchInput: any = ref(null);
onMounted(() => {
  let input = computed(() => {
    return searchInput.value.input;
  })
  watch(input, (newVal) => {
    nextTick(() => {
      let names: any = document.querySelectorAll('.name');
      for (let i = 0; i < names.length; i++) {
        names[i].innerHTML = replaceHandle(names[i].innerText, newVal);
      }
    })
  }, {
    immediate: true
  })
})

let searchResult = reactive({
  users: [
    {
      imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
      userName: '小智',
      isFriend: true
    }, {
      imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
      userName: '小霞',
      isFriend: true
    }, {
      imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
      userName: '小小噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢哦哦哦噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢',
      isFriend: false
    }, {
      imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
      userName: '小刚',
      isFriend: true
    }
  ],
  groups: [
    {
      imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
      groupName: '火炎队',
      inGroupe: false
    },  {
      imageUrl: 'https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493',
      groupName: '火箭队',
      inGroupe: true
    }
  ]
})
const search = (input: string) => {
  alert('start search')
  console.log(input)
}

</script>

<style scoped lang="less">
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .search-header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    padding: 7px 16px;
    display: flex;
    box-shadow: 0px 0.5px 0px 0px rgba(0,0,0,0.11);

    .input {
      flex: 1;
      height: 100%;
    }

    .text {
      width: 28px;
      line-height: 30px;
      margin-left: 15px;
      font-size: 14px;
      color: #272832;
    }
  }

  .body {
    flex: 1;
    box-sizing: border-box;
    padding: 0 16px;

    .result {
      width: 100%;

      .title {
        height: 30px;
        line-height: 30px;
        font-size: 22px;
        color: #272832;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .item {
        height: 40px;
        line-height: 40px;
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        .img {
          width: 40px;
          height: 40px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .name {
          flex: 1;
          box-sizing: border-box;
          padding: 0 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 18px;
          color: #272832;
          font-weight: 400;
        }

        .btn {
          width: 60px;
          height: 24px;
          border-radius: 12px;
          border: 0;
          margin-left: 10px;
          font-size: 12px;
          background: rgba(74,170,255,0.10);
          color: #4AAAFF;
          font-weight: 400;
        }

        .is-friend {
          background-color: #FFE431;
          color: #272832;
        }
      }
      .item:last-child {
        margin-bottom: 0;
      }

    }

    .result:nth-child(1) {
      margin-top: 17px;
    }
    .result:nth-child(2) {
      margin-top: 30px;
    }
  }
}
</style>