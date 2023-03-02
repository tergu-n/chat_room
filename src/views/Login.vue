<template>
  <div class="login-container">
    <div class="header" style="width: 100%; height: 44px;"></div>
    <LoginHeader left-icon="close" right-title="注册"></LoginHeader>
    <BodyLogo class="chat-logo"></BodyLogo>
    <PageTitle title="登录" sub-title="您好，欢迎来到 yike！" class="page-title"></PageTitle>
    <UnderlineInput placeholder="请输入手机号" type="tel" @isPass="isPass" style="margin-top: 25px;"></UnderlineInput>
    <UnderlineInput placeholder="请输入密码" type="password" @isPass="isPass" style="margin-top: 19px;"></UnderlineInput>
    <button class="login" :class="isActive ? 'active' : ''" :disabled="!isActive" @click="login">登录</button>
  </div>
</template>

<script setup lang="ts">
import LoginHeader from '@/components/Header/LoginHeader.vue';
import BodyLogo from '@/components/Logo/BodyLogo.vue';
import PageTitle from '@/components/Title/PageTitle.vue';
import UnderlineInput from '@/components/Input/UnderlineInput.vue';
import {reactive, ref, watch} from "vue";
import {IInput} from "@/interfaces/interfaces";
// 注册按钮是否为激活状态zx
let isActive = ref(false);
let passObj = reactive([
  {
    key: 'tel',
    value: false
  }, {
    key: 'password',
    value: false
  }
]);
const isPass = (obj: IInput) => {
  for (let i = 0; i < passObj.length; i++) {
    if (passObj[i].key === obj.key) {
      passObj[i].value = obj.value;
    }
  }
}
watch(passObj, (newVal) => {
  let num = 0;
  for (let i = 0; i < passObj.length; i++) {
    if (passObj[i].value === true) {
      num += 1;
    }
  }
  isActive.value = num === 2;
}, {
  deep: true,
  immediate: true
})
const login = () => {
  alert('登录')
}
</script>

<style scoped lang="less">
.login-container {
  box-sizing: border-box;
  padding: 0 28px 0 30px;

  .chat-logo {
    margin-top: 40px;
  }

  .page-title {
    margin-top: 27px;
  }

  .login {
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
}
</style>