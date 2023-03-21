<template>
  <div class="request-friend">
    <div class="header">
      <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
      <LoginHeader left-icon="back" right-icon="back" class="login-header"></LoginHeader>
    </div>
    <div class="body">
      <div class="main">

      </div>
      <div class="btns">
        <button class="cancel">取消</button>
        <button class="confirm">发送</button>
      </div>
      <div class="footer" style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import LoginHeader from "@/components/Header/LoginHeader.vue";


</script>

<style scoped lang="less">
.request-friend {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(255,228,49,0.60);
  flex-direction: column;

  .header {
    height: 186px;
  }

  .body {
    flex: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    .main {
      flex: 1;
    }

    .btns {
      height: 40px;
      display: flex;
      box-sizing: border-box;
      padding: 0 16px 0 17px;
      margin-bottom: 4px;

      button {
        border: 0;
        border-radius: 5px;
        color: #272832;
        font-size: 16px;
      }

      .cancel {
        background-color: rgba(39, 40, 50, 0.1);
        margin-right: 16px;
        width: 86px;
      }

      .confirm {
        background-color: #FFE431;
        width: 240px;
      }
    }
  }
}
</style>