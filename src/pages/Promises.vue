<template>
  <VueHead>
    <meta property="fb:app_id" content="301375193309601" />
    <meta name="twitter:creator" content="@danesjenovdan" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>Participativni proračun</title>
    <meta property="og:title" content="Kje je participativni proračun?" />
    <meta name="twitter:title" content="Kje je participativni proračun?" />
    <meta
      property="og:description"
      content="Preverili smo, kateri županski kandidati in kandidatke bi v primeru zmage na lokalnih volitvah uvedli participativni proračun in javnosti zagotovili soupravljanje z občinskim denarjem."
    />
    <meta
      name="twitter:description"
      content="Preverili smo, kateri županski kandidati in kandidatke bi v primeru zmage na lokalnih volitvah uvedli participativni proračun in javnosti zagotovili soupravljanje z občinskim denarjem."
    />
    <meta property="og:image" :content="`${baseUrl}og-image.png`" />
    <meta name="twitter:image" :content="`${baseUrl}og-image.png`" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32.png" />
  </VueHead>
  <div class="page page--promises">
    <Header />
    <ScrollingBanner />
    <section style="background-color: #fff">
      <LeadText />
      <FindCandidates />
    </section>
    <Boxes />
    <section style="background-color: #291749">
      <SubscribeForUpdates />
    </section>
    <Questions />
    <PageFooter />
  </div>
</template>

<script setup>
import { Head as VueHead } from "@vueuse/head";
import Header from "../components/promises-sections/Header.vue";
import ScrollingBanner from "../components/promises-sections/ScrollingBanner.vue";
import LeadText from "../components/promises-sections/LeadText.vue";
import FindCandidates from "../components/promises-sections/FindCandidates.vue";
import Boxes from "../components/promises-sections/Boxes.vue";
import SubscribeForUpdates from "../components/promises-sections/SubscribeForUpdates.vue";
import Questions from "../components/promises-sections/Questions.vue";
import PageFooter from "../components/promises-sections/PageFooter.vue";
import { baseUrl } from "../helpers/constants.js";
</script>
