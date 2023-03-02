<template>
  <!-- 用户头像 logo 搜索 更多 -->
  <div class="home-header">
    <div class="profile-picture">
      <img :src="profilePicture" alt="">
    </div>
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="btn">
      <svg-icon icon-name="search" svg-class="icon"></svg-icon>
    </div>
    <div class="btn" style="margin-left: 16px;">
      <svg-icon icon-name="search" svg-class="icon"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import profilePicture from '@/assets/profilePicture.png';
import logo from '@/assets/logo.png'
</script>

<style scoped lang="less">
.home-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0.5px 0px 0px rgba(0,0,0,0.1);

  .profile-picture {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    background-color: #f2f2f2;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .logo {
    flex: 1;
    height: 44px;
    text-align: center;
    box-sizing: border-box;
    padding: 10px 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }

  .btn {
    width: 26px;
    height: 26px;

    .icon {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
}
</style>