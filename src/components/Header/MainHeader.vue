<template>
  <div class="header-container">
    <div class="left">
      <svg-icon :icon-name="leftIcon" svg-class="icon"></svg-icon>
    </div>
    <div class="title" v-if="title">{{ title }}</div>
    <div class="right">
      <span v-if="rightTitle">{{ rightTitle }}</span>
      <svg-icon :icon-name="rightIcon" svg-class="icon" v-if="rightIcon"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  leftIcon: {
    type: String
  },
  rightIcon: {
    type: String
  },
  rightTitle: {
    type: String
  },
  title: {
    type: String
  }
})

</script>

<style scoped lang="less">
.header-container {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .icon {
    color: #272832;
    width: 20px;
    height: 20px;
  }

  .title {
    color: #333333;
    font-size: 20px;
  }

  .left {
    cursor: pointer;
  }

  .right {
    font-size: 18px;
    cursor: pointer;

    .rightTitle {
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
  }
}
</style>