<template>
  <div class="container">
    <svg-icon :icon-name="iconName" svg-class="icon"></svg-icon>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String
  }
})

</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  padding: 0 28px 0 30px;

  .icon {
    color: red;
  }
}
</style>