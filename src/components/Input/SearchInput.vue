<template>
  <div class="input-container">
    <input type="text" placeholder="请输入搜索内容" v-model="input" @focus="isFocus" @blur="OnBlur">
    <svg-icon icon-name="search" svg-class="icon" style="margin-left: 10px"
              @touchstart="search"></svg-icon>
    <svg-icon icon-name="closeFilled" svg-class="icon" style="margin-left: 10px"
              @touchstart="isClick" v-show="isShow"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, watch} from "vue";
const emits = defineEmits(['search']);
let input = ref('小');
let isShow = ref(false);
const isClick = () => {
  input.value = '';
}
const search = () => {
  emits('search', input.value);
}
const isFocus = () => {
  watch(input, (newVal) => {
    isShow.value = newVal.length > 0;
  }, {
    immediate: true
  })
}
const OnBlur = () => {
  isShow.value = false;
}
// 暴露自己的数据，方法
defineExpose({
  input
})
</script>

<style scoped lang="less">
.input-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    box-sizing: border-box;
    padding: 0 calc(6px + 18px + 6px + 18px + 12px) 0 12px;
    flex: 1;
    outline: none;
    border: 0;
    background-color: #F3F4F6;
    border-radius: 5px;
  }

  ::-webkit-input-placeholder { /* Webkit browsers*/
    color: rgba(39,40,50,0.60);
    font-size: 12px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(39,40,50,0.60);
    font-size: 12px;
  }
  :-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(39,40,50,0.60);
    font-size: 12px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: rgba(39,40,50,0.60);
    font-size: 12px;
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: #a0a1a6;
  }
  .icon:nth-child(2) {
    right: 6px;
  }
  .icon:nth-child(3) {
    width: 16px;
    height: 16px;
    right: calc(6px + 18px + 6px);
  }
}
</style>