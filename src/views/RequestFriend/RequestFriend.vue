<template>
  <div class="request-friend">
    <div class="header">
      <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
      <LoginHeader left-icon="back" right-icon="back" class="login-header"></LoginHeader>
    </div>
    <div class="body">
      <div class="main">
        <div class="header-profile">
          <div class="image">
            <img src="https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493" alt="">
          </div>
        </div>
        <div class="user-name">左左左表妹</div>
        <div class="my-text">
          <textarea v-model="text"></textarea>
        </div>
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
let text = ref('');

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
    box-sizing: border-box;
    padding: 0 12px;
  }

  .body {
    flex: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 20px 20px 0 0;

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;

      .header-profile {
        height: 60px;
        margin-bottom: 24px;
        position: relative;

        .image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid #ffffff;
          position: absolute;
          overflow: hidden;
          top: -60px;
          left: 30px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .user-name {
        height: 37px;
        margin-bottom: 20px;
        margin-left: 30px;
        color: #272832;
        font-size: 26px;
      }

      .my-text {
        flex: 1;
        background-color: #F3F4F6;
        margin: 0 28px 47px;

        textarea {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          line-height: 22px;
          border: 0;
          background-color: inherit;
          outline: none;
          color: #272832;
          font-size: 16px;
          box-sizing: border-box;
          padding: 9px 11px;
        }
      }
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