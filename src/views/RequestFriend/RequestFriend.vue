<template>
  <div class="request-friend">
    <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
    <LoginHeader left-icon="back" right-icon="back" class="login-header"></LoginHeader>
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

  .login-header {
    box-sizing: border-box;
    padding: 0 16px 0 12px;
  }

  .body {
    flex: 1;

    .btns {
      margin-bottom: 4px;
      height: 40px;
      display: flex;
      box-sizing: border-box;
      padding: 0 16px 0 17px;
      background-color: #ffffff;

      button {
        height: 100%;
        cursor: pointer;
        font-size: 16px;
        color: #272832;
        border: 0;
        border-radius: 5px;
      }

      .cancel {
        width: 86px;
        margin-right: 16px;
        background-color: rgba(39,40,50,0.10);
      }

      .confirm {
        width: 240px;
        background-color:  #FFE431;
      }
    }
  }
}
</style>