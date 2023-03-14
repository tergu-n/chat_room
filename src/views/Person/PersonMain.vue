<template>
  <div class="person-main">
    <div class="header" style="width: 100%; height: 44px; text-align: center;">预留部分</div>
    <LoginHeader left-icon="back" right-icon="back"></LoginHeader>
    <div class="footer" style="width: 100%; height: 34px; text-align: center; background-color: rgba(250,250,250,0.90);">预留部分</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import LoginHeader from "@/components/Header/LoginHeader.vue"

</script>

<style scoped lang="less">
.person-main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 16px 0 12px;
  display: flex;
  flex-direction: column;


}
</style>