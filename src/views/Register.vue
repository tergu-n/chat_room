<template>
  <div class="register-container">
    <div class="header" style="width: 100%; height: 44px;"></div>
    <LoginHeader left-icon="back" right-icon="close"></LoginHeader>
    <BodyLogo class="body-logo"></BodyLogo>
    <PageTitle title="注册" class="page-title"></PageTitle>
    <UnderlineInput placeholder="请取个名字" type="text" @isPass="isPass" style="margin-top: 25px;"></UnderlineInput>
    <UnderlineInput placeholder="请输入邮箱" type="email" @isPass="isPass" style="margin-top: 19px;"></UnderlineInput>
    <UnderlineInput placeholder="请输入密码" type="password" @isPass="isPass" style="margin-top: 19px;"></UnderlineInput>
    <button class="register" :class="isActive ? 'active' : ''" :disabled="!isActive" @click="register">注册</button>
  </div>
</template>

<script setup lang="ts">
import LoginHeader from '@/components/Header/MainHeader.vue';
import BodyLogo from '@/components/Logo/BodyLogo.vue';
import PageTitle from '@/components/Title/PageTitle.vue';
import UnderlineInput from '@/components/Input/UnderlineInput.vue';
import {IInput} from "@/interfaces/interfaces";
import {ref, reactive, onMounted, watch} from "vue";
const register = () => {
  alert('注册')
}
// 注册按钮是否为激活状态zx
let isActive = ref(false);
let passObj = reactive([
  {
    key: 'text',
    value: false
  }, {
    key: 'email',
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
  isActive.value = num === 3;
}, {
  deep: true,
  immediate: true
})
</script>

<style scoped lang="less">
.register-container {
  box-sizing: border-box;
  padding: 0 28px 0 30px;

  .body-logo {
    margin-top: 40px;
  }

  .page-title {
    margin-top: 30px;
  }

  .active {
    background-color: #FFE431;
    color: #272832;
  }

  .register {
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
    background-color: #ffe431;
    color: #272832;
  }
}
</style>