<template>
  <div class="underline-cobtainer">
    <input v-model="input" :placeholder="props.placeholder"
           :type="props.type" @focus="isFocus" @blur="isBlur">
    <div class="right">
      <svg-icon icon-name="closeFilled" svg-class="icon" style="margin-left: 10px"
                v-show="isShow" @touchstart="isClick"></svg-icon>
      <svg-icon icon-name="eyeOpen" svg-class="icon" v-if="props.type === 'password'"
                style="width: 20px; height: 20px; margin-left: 10px;"
                @touchstart="showPwd"></svg-icon>
      <svg-icon icon-name="checkMark" v-if="canShow && pass"
                style="width: 20px; height: 20px; color: #4aaaff; margin-left: 10px;">
      </svg-icon>
      <span class="error" v-if="canShow && !pass">{{ errorText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { regexUtils } from '@/tools/regulation';
import {computed, ref} from "vue";
const props = defineProps({
  placeholder: {
    type: String
  },
  type: {
    type: String
  }
});
const emits = defineEmits(['isPass']);
// 输入框的值
let input = ref('');
// 是否显示提示信息
let canShow = ref(false);
// 输入框的值是否符合条件
let pass = ref(false);
let tag = ref(false);
let errorText = ref('8-16数字 字母 特殊字符');
const isFocus = () => {
  tag.value = true;
}
const isBlur = () => {
  tag.value = false;
  canShow.value = true;
  // 判断当前值是否符合条件
  let flag = false;
  if (props.type === 'email') {
    flag = regexUtils.emailRule(input.value);
    errorText.value = '请输入正确的邮箱';
  } else if (props.type === 'password') {
    flag = regexUtils.passwordRule(input.value);
    errorText.value = '8-16数字 字母 特殊字符';
  } else if (props.type === 'tel') {
    flag = regexUtils.phoneRule(input.value);
    errorText.value = '请输入正确的号码';
  } else {
    if (input.value) {
      flag = true;
    } else {
      flag = false;
      errorText.value = '请输入内容';
    }
  }
  if (flag) {
    pass.value = true;
  } else {
    pass.value = false;
  }
  let temp = {
    key: props.type,
    value: false
  }
  if (canShow.value && pass.value) {
    temp.value = true;
  } else {
    temp.value = false;
  }
  emits('isPass', temp);
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
.underline-cobtainer {
  position: relative;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ededee;
  display: flex;

  input {
    flex: 1;
    flex-shrink: 1;
    min-width: 100px;
    outline: none;
    font-size: 18px;
    color: #272832;
    height: 44px;
    line-height: 44px;
    border: 0;
    box-sizing: border-box;
    padding-right: 5px;
    font-family: AvenirNext-Medium;
  }

  input::-webkit-input-placeholder {
    font-size: 16px;
  }

  .right {
    line-height: 44px;
    flex-shrink: 0;

    .icon {
      width: 16px;
      height: 16px;
      color: #4e5b69;
    }

    .error {
      color: #ff5d5b;
      font-size: 14px;
      margin-left: 10px;
    }
  }
}
</style>