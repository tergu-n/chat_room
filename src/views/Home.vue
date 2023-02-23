<template>
  <div class="home">
    ryan
    <svg-icon icon-name="copy"></svg-icon>
    <Test></Test>
  </div>
</template>

<script setup lang="ts">
  import Test from "@/components/Test/Test.vue";
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  font-size: 14px;
  span {
    color: @pink;
  }
}
</style>