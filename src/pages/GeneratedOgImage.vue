<template>
  <div class="page-container">
    <div v-if="data" class="og-container">
      <div class="og-wrapper">
        <OgImage :data="data" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import OgImage from "../components/OgImage.vue";
import { getMunicipalityBySlug } from "../utils/municipalities-data.js";

const route = useRoute();

const data = getMunicipalityBySlug(route.params.slug);
</script>

<style lang="scss" scoped>
.page-container {
  background-color: #aaa;
  padding: 2rem;
  min-height: 100vh;

  .og-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 630px;
    margin: 0 auto;
    background-color: #ccc;

    .og-wrapper {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
}
</style>
