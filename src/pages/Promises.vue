<template>
  <VueHead>
    <meta property="fb:app_id" content="301375193309601" />
    <meta name="twitter:creator" content="@danesjenovdan" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>Participativni proračun</title>
    <meta
      property="og:title"
      content="Čas je, da občinski denar postane tudi tvoja stvar!"
    />
    <meta
      name="twitter:title"
      content="Čas je, da občinski denar postane tudi tvoja stvar!"
    />
    <meta
      property="og:description"
      content="Spremljaj, katere županje in župani so se zavezali, da bodo izvajali participativni proračun in preveri, ali držijo svojo obljubo."
    />
    <meta
      name="twitter:description"
      content="Spremljaj, katere županje in župani so se zavezali, da bodo izvajali participativni proračun in preveri, ali držijo svojo obljubo."
    />
    <meta property="og:image" :content="`${baseUrl}og-image.png`" />
    <meta name="twitter:image" :content="`${baseUrl}og-image.png`" />
  </VueHead>
  <div class="page page--promises">
    <Header />
    <ScrollingBanner />
    <!-- <HeroVideo /> -->
    <section style="background-color: #fff; outline: 1px solid gold">
      <LeadText />
      <FindCandidates />
    </section>
    <Separator />
    <Boxes />
    <SubscribeForUpdates />
    <Separator />
    <Questions />
    <PageFooter />
  </div>
</template>

<script setup>
import { Head as VueHead } from "@vueuse/head";
import Header from "../components/promises-sections/Header.vue";
import ScrollingBanner from "../components/promises-sections/ScrollingBanner.vue";
// import HeroVideo from "../components/promises-sections/HeroVideo.vue";
import LeadText from "../components/promises-sections/LeadText.vue";
import FindCandidates from "../components/promises-sections/FindCandidates.vue";
import Separator from "../components/promises-sections/Separator.vue";
import Boxes from "../components/promises-sections/Boxes.vue";
import SubscribeForUpdates from "../components/promises-sections/SubscribeForUpdates.vue";
import Questions from "../components/promises-sections/Questions.vue";
import PageFooter from "../components/promises-sections/PageFooter.vue";
import { baseUrl } from "../helpers/constants.js";
</script>
