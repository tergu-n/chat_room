<template>
  <div class="person-main">
    <div class="mask" v-if="true">
      <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
      <LoginHeader left-icon="back" right-icon="back" class="login-header"></LoginHeader>
      <div class="body">
        <div class="profile-header">
          <img :src="headProfile" alt="">
        </div>
        <div class="name">
          <div class="real-name">{{ '左左左表妹' }}</div>
          <div class="nick-name">昵称: {{ '很好搭档' }}</div>
        </div>
        <div class="signature">
          {{ '夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。' }}
        </div>
      </div>
      <div class="btn">
        <button>加为好友</button>
      </div>
      <div class="footer" style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import LoginHeader from "@/components/Header/MainHeader.vue";
let headProfile = ref('https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493');

</script>

<style scoped lang="less">
.person-main {
  width: 100%;
  height: 100%;
  background: url("https://img2.baidu.com/it/u=2072327970,1761030036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=493") no-repeat;
  background-size: auto 100%;
  background-position: 50% 0%;

  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .6);

    .login-header {
      box-sizing: border-box;
      padding: 0 16px 0 12px;
    }

    .body {
      flex: 1;
      flex-direction: column;

      .profile-header {
        margin: 30px auto 0;
        width: 200px;
        height: 200px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 24px;
          border: 3px solid #ffffff;
        }
      }

      .name {
        margin-top: 24px;
        text-align: center;

        .real-name {
          color: #272832;
          font-size: 26px;
          font-weight: 400;
          height: 37px;
          line-height: 37px;
        }

        .nick-name {
          color: #272832;
          font-size: 14px;
          font-weight: 400;
          height: 20px;
          line-height: 20px;
        }
      }

      .signature {
        text-align: left;
        margin-top: 10px;
        color: #272832;
        font-size: 14px;
        line-height: 24px;
        box-sizing: border-box;
        padding: 0 50px;
      }
    }

    .btn {
      height: 40px;
      box-sizing: border-box;
      padding: 0 16px;
      margin-bottom: 4px;

      button {
        background-color: #FFE431;
        border: 0;
        color: #272832;
        font-size: 16px;
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>