<template>
  <div class="big-video">
    <div class="aspect-16-9">
      <iframe
        v-if="videoLoaded"
        src="https://www.youtube.com/embed/7o9GylegDXc?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <button v-else type="button" @click="videoLoaded = true">
        <img
          src="https://img.youtube.com/vi/7o9GylegDXc/maxresdefault.jpg"
          alt=""
        />
        <svg version="1.1" viewBox="0 0 68 48">
          <path
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#f03"
          ></path>
          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const videoLoaded = ref(false);
</script>

<style lang="scss" scoped>
.big-video {
  .aspect-16-9 {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;

    iframe,
    button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
    }

    button {
      display: grid;
      place-items: center;
      border: 0;
      background: none;
      cursor: pointer;

      > * {
        grid-area: 1 / 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      svg {
        width: 68px;
        height: 48px;
      }
    }
  }
}
</style>
