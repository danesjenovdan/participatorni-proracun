<template>
  <div class="page-container">
    <MainHeader />
    <ScrollingBanner />
    <StatsSection />
    <MapSection />
    <WhySection />
    <QuestionsSection />
    <AboutSection />
  </div>
</template>

<script setup>
import { useHead, useSeoMeta } from "@unhead/vue";
import AboutSection from "../components/AboutSection.vue";
import MainHeader from "../components/MainHeader.vue";
import MapSection from "../components/MapSection.vue";
import QuestionsSection from "../components/QuestionsSection.vue";
import ScrollingBanner from "../components/ScrollingBanner.vue";
import StatsSection from "../components/StatsSection.vue";
import WhySection from "../components/WhySection.vue";

useHead({
  title: "Root Page",
  meta: [
    {
      key: "og:title",
      property: "og:title",
      content: "Root Page",
    },
  ],
});

useSeoMeta({
  title: "About",
  description: "My about page",
  ogDescription: "Still about my about page",
  ogTitle: "About",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
