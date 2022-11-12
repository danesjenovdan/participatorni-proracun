<template>
  <div id="og-image-wrapper">
    <div id="og-image">
      <template v-if="selectedMunicipality">
        <img src="/og-image-obcina.png" class="bg" />
        <div class="text">{{ selectedMunicipality.name }}</div>
      </template>
      <template v-else>
        <div>NO</div>
      </template>
    </div>
  </div>
</template>

<script>
import ppList from "../assets/pp_list.json";

export default {
  data() {
    const { slug } = this.$route.params;
    // const { p } = this.$route.query;

    let selectedMunicipality = null;
    if (slug) {
      const municipality = ppList.find((m) => m.slug === slug);
      if (municipality) {
        selectedMunicipality = municipality;
      }
    }

    return {
      selectedMunicipality,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Barlow:500&subset=latin-ext");

#og-image-wrapper {
  --width: 600px;
  --height: 314px;
  --scale: 1.5;
  width: calc(var(--width) * var(--scale));
  height: calc(var(--height) * var(--scale));
  outline: 1px solid red;
  outline-offset: 1px;
  margin: 5px;

  #og-image {
    position: relative;
    width: 100%;
    height: 100%;

    .bg {
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      pointer-events: none;
    }

    .text {
      position: absolute;
      top: 10%;
      left: 0;
      width: 50%;
      height: 30%;
      text-align: center;
      font-size: calc(32px * var(--scale));
      color: #5f235b;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-family: Barlow;
      padding: 0 1em;
      box-sizing: border-box;
      font-weight: 500;
    }
  }
}
</style>
