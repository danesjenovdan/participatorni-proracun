<template>
  <div class="container">
    <div class="row justify-content-center pt-5">
      <div class="col-md-12">
        <BigVideo />
        <img class="arrow-down" src="../../assets/arrow-down.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BigVideo from "../BigVideo.vue";
</script>

<style lang="scss" scoped>
.arrow-down {
  position: absolute;
  right: 3.5rem;
  bottom: 0;
  height: 6rem;
  transform: translateY(50%);
}
</style>
