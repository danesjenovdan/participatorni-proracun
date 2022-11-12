<template>
  <div id="og-image-wrapper">
    <div id="og-image">
      <ShareCardPerson
        :municipality="selectedMunicipality"
        :candidate="selectedCandidate"
      />
    </div>
  </div>
</template>

<script>
import ShareCardPerson from "../components/ShareCardPerson.vue";
import ppList from "../assets/pp_list.json";

export default {
  components: {
    ShareCardPerson,
  },
  data() {
    const { slug } = this.$route.params;
    const { p } = this.$route.query;
    let selectedCandidate = null;
    let selectedMunicipality = null;
    if (slug) {
      const municipality = ppList.find((m) => m.slug === slug);
      if (municipality) {
        selectedMunicipality = municipality;
      }
    }
    if (selectedMunicipality && p) {
      const candidate = selectedMunicipality.candidates.find(
        (c) => c.slug === p
      );
      if (candidate) {
        selectedCandidate = candidate;
      }
    }
    return {
      selectedMunicipality,
      selectedCandidate,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Barlow:500&subset=latin-ext");

#og-image-wrapper {
  --width: 1200px;
  --height: 628px;
  --scale: 1;
  width: calc(var(--width) * var(--scale));
  height: calc(var(--height) * var(--scale));
  // outline: 1px solid red;
  outline-offset: 1px;
  margin: 5px;

  #og-image {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: #f2cc59;
  }
}
</style>
