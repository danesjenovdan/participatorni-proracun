<template>
  <div class="page page--promises">
    <HeroVideo />
    <LeadText />
    <FindCandidates />
    <Separator />
    <SubscribeForUpdates />
    <Separator />
    <Questions />
    <PageFooter />
  </div>
</template>

<script>
import HeroVideo from "../components/promises-sections/HeroVideo.vue";
import LeadText from "../components/promises-sections/LeadText.vue";
import FindCandidates from "../components/promises-sections/FindCandidates.vue";
import Separator from "../components/promises-sections/Separator.vue";
import SubscribeForUpdates from "../components/promises-sections/SubscribeForUpdates.vue";
import Questions from "../components/promises-sections/Questions.vue";
import PageFooter from "../components/promises-sections/PageFooter.vue";
import { domain, baseUrl } from "../helpers/constants.js";

export default {
  name: "App",
  components: {
    HeroVideo,
    LeadText,
    FindCandidates,
    Separator,
    SubscribeForUpdates,
    Questions,
    PageFooter,
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
        content: `${domain}${baseUrl}og-image.png`,
      },
      {
        vmid: "twitter:image",
        name: "twitter:image",
        content: `${domain}${baseUrl}og-image.png`,
      },
    ],
  },
};
</script>
