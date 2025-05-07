<template>
  <div ref="container" class="pan-zoom-container">
    <div ref="content" class="pan-zoom-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from "vue";
import panZoom from "../utils/pan-zoom.js";

const emit = defineEmits(["ready", "change", "show-manipulation-overlay"]);

const containerRef = useTemplateRef("container");
const contentRef = useTemplateRef("content");

onMounted(() => {
  panZoom({
    container: containerRef.value,
    content: contentRef.value,
    onReady: (panZoomObj) => {
      emit("ready", panZoomObj);
    },
    onTransformChange: (point, scale) => {
      emit("change", { point, scale });
    },
    onShowManipulationOverlay: (type) => {
      emit("show-manipulation-overlay", type);
    },
  });
});
</script>

<style lang="scss" scoped>
.pan-zoom-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .pan-zoom-content {
    width: 100%;
    height: 100%;
  }
}
</style>
