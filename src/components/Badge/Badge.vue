<template>
  <div class="badge-container" v-if="props.num !== 0">
    {{ num }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const props = defineProps(['num']);
</script>

<style scoped lang="less">
.badge-container {
  position: absolute;
  right: -6px;
  top: -6px;
  height: 18px;
  line-height: 18px;
  z-index: 10;
  border-radius: 9px;
  padding: 0 6px;
  background-color: #FF5D5B;
  color: #ffffff;
  font-size: 12px;
}
</style>