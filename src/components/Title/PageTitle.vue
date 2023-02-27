<template>
  <div class="head-line">
    <div class="title">{{ title }}</div>
    <div class="sub-title" v-if="subTitle">{{ subTitle }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  }
})
</script>

<style scoped lang="less">
.title {
  font-size: 28px;
  color: #272832;
  height: 40px;
  font-weight: 500;
  font-family: PingFangSC-Medium;
}

.sub-title {
  font-size: 20px;
  color: rgba(39,40,50,0.50);
  height: 28px;
  margin-top: 7px;
  font-family: PingFangSC-Regular;
}
</style>