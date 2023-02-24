<template>
  <LoginHeader :icon-name="icon"></LoginHeader>
</template>

<script setup lang="ts">
import LoginHeader from '@/components/Header/LoginHeader.vue'
import {ref} from "vue";
const icon = ref('close');

</script>

<style scoped lang="less">

</style>