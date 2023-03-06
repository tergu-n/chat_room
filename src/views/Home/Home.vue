<template>
  <div class="home">
    <div class="header" style="width: 100%; height: 44px;"></div>
    <HomeHeader></HomeHeader>
    {{ formatFullTime('2023-03-01 10:34:59') }}
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '@/components/Header/HomeHeader.vue';
import { formatHafTime, formatFullTime } from '@/tools/formatTime';
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>