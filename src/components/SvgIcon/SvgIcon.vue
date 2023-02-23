<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
import { computed } from "vue";
export default {
  name: "SvgIcon",
  props: {
    iconName: { type: String },
    svgClass: { type: String },
  },
  setup(props) {
    const iconName = computed(() => {
      return props.iconName ? `#icon-${props.iconName}` : "#icon";
    });
    const svgClass = computed(() => {
      return props.svgClass ? "svg-icon " + props.svgClass : "svg-icon";
    });
    return { iconName, svgClass };
  },
};
</script>
<style scoped lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>