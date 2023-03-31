<template>
  <div class="user-detail">
    <div style="width: 100%; height: 44px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
    <div class="header">
      <MainHeader leftIcon="back" title="详细" class="main-header"></MainHeader>
    </div>
    <div class="main">

    </div>
    <div class="footer">
      <button>退出应用</button>
    </div>
    <div style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import MainHeader from "@/components/Header/MainHeader.vue";
</script>

<style scoped lang="less">
.user-detail {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .header {
    box-sizing: border-box;
    padding: 0 12px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .main {
    flex: 1;
    //background-color: pink;
  }

  .footer {
    height: 40px;
    line-height: 40px;
    text-align: center;

    button {
      color: #FF5D5B;
      font-size: 16px;
      background-color: inherit;
      border: 0;
    }
  }
}
</style>