<template>
  <div class="forget-container">
    <div class="header" style="width: 100%; height: 44px;"></div>
    <LoginHeader left-icon="back" title="找回密码"></LoginHeader>
    <BodyLogo class="body-logo"></BodyLogo>
    <PageTitle title="找回密码" sub-title="请输入注册邮箱获取验证码" class="page-title"></PageTitle>
    <UnderlineInput placeholder="请输入邮箱" type="email" @isPass="isPass" style="margin-top: 25px;"></UnderlineInput>
    <div class="security-code">
      <input type="number">
      <button @click="getSecurityCode">获取验证码</button>
    </div>
    <button class="reset" :class="isActive ? 'active' : ''" :disabled="!isActive" @click="reset">重置密码</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import LoginHeader from '@/components/Header/LoginHeader.vue';
import BodyLogo from '@/components/Logo/BodyLogo.vue';
import PageTitle from '@/components/Title/PageTitle.vue';
import UnderlineInput from '@/components/Input/UnderlineInput.vue';
import {IInput} from "@/interfaces/interfaces";
let isActive = ref(false);
const isPass = (obj: IInput) => {
  isActive.value = obj.value;
}
const getSecurityCode = () => {
  alert('获取验证码');
}
const reset = () => {
  alert('重置密码');
}
</script>

<style scoped lang="less">
.forget-container {
  box-sizing: border-box;
  padding: 0 28px 0 30px;

  .body-logo {
    margin-top: 40px;
  }

  .page-title {
    margin-top: 27px;
  }

  .reset {
    display: block;
    margin: 60px auto 0;
    width: 260px;
    height: 48px;
    border-radius: 24px;
    border: 0;
    background-color: rgba(39,40,50,0.20);
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }

  .active {
    background-color: #FFE431;
    color: #272832;
  }

  .security-code {
    width: 100%;
    height: 48px;
    margin-top: 24px;
    display: flex;

    input {
      flex: 1;
      outline: none;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #E0E0E0;
    }

    button {
      width: 130px;
      height: 48px;
      margin-left: 21px;
      border: 0;
      border-radius: 24px;
      background-color: #FFE431;
      color: #272832;
    }
  }
}
</style>