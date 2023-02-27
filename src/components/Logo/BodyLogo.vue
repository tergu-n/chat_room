<template>
  <div class="logo">
    <img :src="logo" alt="logo">
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import logo from '@/assets/logo.png';

</script>

<style scoped lang="less">
.logo {
  margin: 0 auto;
  width: 96px;
  height: 46px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>