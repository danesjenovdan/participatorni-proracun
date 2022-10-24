<template>
  <div class="home">
    <HeroVideo />
    <LeadText />
    <FindCandidates />
    <!-- <div class="container">
      <hr class="separator" />
      <subscribe-for-updates class="py-5" />
      <hr class="separator" />
      <questions class="py-5" />
    </div>
    <div class="footer-container">
      <div class="container">
        <PromisesFooter />
      </div>
    </div> -->
  </div>
</template>

<script>
import FindCandidates from "../components/promises-sections/FindCandidates.vue";
import HeroVideo from "../components/promises-sections/HeroVideo.vue";
import LeadText from "../components/promises-sections/LeadText.vue";

// import FindCandidates from "../components/FindPromiseCandidates.vue";
// import SubscribeForUpdates from "../components/SubscribeForUpdates.vue";
// import Questions from "../components/Questions.vue";
// import PromisesFooter from "../components/PromisesFooter.vue";

const domain = "http://localhost:3000"; // process.env.NODE_ENV === "production" ? "https://danesjenovdan.si" : "http://localhost:8801";
const baseUrl = "/"; // process.env.BASE_URL;

export default {
  name: "App",
  components: {
    HeroVideo,
    LeadText,
    FindCandidates,
  },
  metaInfo: {
    title: "Participativni proračun",
    meta: [
      // owner
      { property: "fb:app_id", content: "301375193309601" },
      { name: "twitter:creator", content: "@danesjenovdan" },
      // type
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      // url
      {
        vmid: "og:url",
        property: "og:url",
        content: `${domain}${baseUrl}`,
      },
      // title
      {
        vmid: "og:title",
        property: "og:title",
        content: "Čas je, da občinski denar postane tudi tvoja stvar!",
      },
      {
        vmid: "twitter:title",
        name: "twitter:title",
        content: "Čas je, da občinski denar postane tudi tvoja stvar!",
      },
      // description
      {
        vmid: "og:description",
        property: "og:description",
        content:
          "Spremljaj, katere županje in župani so se zavezali, da bodo izvajali participativni proračun in preveri, ali držijo svojo obljubo.",
      },
      {
        vmid: "twitter:description",
        name: "twitter:description",
        content:
          "Spremljaj, katere županje in župani so se zavezali, da bodo izvajali participativni proračun in preveri, ali držijo svojo obljubo.",
      },
      // image
      {
        vmid: "og:image",
        property: "og:image",
        content: `${domain}${baseUrl}og-image.png?v2`,
      },
      {
        vmid: "twitter:image",
        name: "twitter:image",
        content: `${domain}${baseUrl}og-image.png?v2`,
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.separator {
  border-color: #5f235b;
  border-top-width: 4px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.footer-container {
  background-color: #27223a;
}

@media (max-width: 575.98px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
