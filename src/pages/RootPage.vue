<template>
  <div class="page-container">
    <MainHeader />
    <ScrollingBanner />
    <StatsSection />
    <MapSection />
    <WhySection />
    <QuestionsSection />
  </div>
</template>

<script setup>
import MainHeader from "../components/MainHeader.vue";
import MapSection from "../components/MapSection.vue";
import QuestionsSection from "../components/QuestionsSection.vue";
import ScrollingBanner from "../components/ScrollingBanner.vue";
import StatsSection from "../components/StatsSection.vue";
import WhySection from "../components/WhySection.vue";
</script>
