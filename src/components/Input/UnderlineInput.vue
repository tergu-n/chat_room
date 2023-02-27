<template>
  <div style="position: relative; width: 100%; height: 44px;">
    <input v-model="input" :placeholder="props.placeholder"
           :type="props.type" @focus="isFocus" @blur="isBlur">
    <div class="right">
      <svg-icon icon-name="closeFilled" svg-class="icon"
                v-show="isShow" @touchstart="isClick"></svg-icon>
      <svg-icon icon-name="eyeOpen" svg-class="icon"
                @touchstart="showPwd"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
const props = defineProps({
  placeholder: {
    type: String
  },
  type: {
    type: String
  }
});
let input = ref('');
let tag = ref(false);
const isFocus = () => {
  tag.value = true;
}
const isBlur = () => {
  tag.value = false;
}
const isShow = computed(() => {
  if (input.value === '') {
    return false;
  } else {
    return tag.value;
  }
})
const isClick = () => {
  input.value = '';
}
const showPwd = () => {
  alert('显示密码')
}
</script>

<style scoped lang="less">
input {
  width: 100%;
  outline: none;
  font-size: 18px;
  color: #272832;
  height: 44px;
  line-height: 44px;
  border: 0;
  border-bottom: 1px solid #ededee;
  box-sizing: border-box;
  padding-right: 10px;
  font-family: AvenirNext-Medium;
}

input::-webkit-input-placeholder {
  font-size: 16px;
}

.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;

  .icon {
    width: 16px;
    height: 16px;
    color: #4e5b69;
  }
}
</style>