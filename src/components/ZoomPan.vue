<template>
  <div ref="container" class="zoom-pan">
    <div ref="sizer" class="sizer">
      <slot />
    </div>
    <PinchScrollZoom
      v-if="isZoomed"
      :centered="false"
      :width="elWidth"
      :height="elHeight"
      :min-scale="1"
      :max-scale="7"
    >
      <slot />
    </PinchScrollZoom>
  </div>
</template>

<script setup>
import PinchScrollZoom from "@coddicat/vue-pinch-scroll-zoom";
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

const emit = defineEmits(["init"]);

const sizer = useTemplateRef("sizer");
const isZoomed = ref(false);
const elWidth = ref(0);
const elHeight = ref(0);

function calculateSizes() {
  if (sizer.value) {
    const { width, height } = sizer.value.getBoundingClientRect();
    elWidth.value = width;
    elHeight.value = height;
  }
}

function onResize() {
  if (isZoomed.value) {
    calculateSizes();
  }
}

onMounted(() => {
  window.addEventListener("resize", onResize);
  calculateSizes();
  isZoomed.value = true;
  nextTick(() => {
    emit("init", true);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style lang="scss" scoped>
.zoom-pan {
  position: relative;

  .sizer {
    pointer-events: none;
    visibility: hidden;
  }

  .pinch-scroll-zoom {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
