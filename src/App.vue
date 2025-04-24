<template>
  <RouterView />
</template>

<script setup>
import { useSeoMeta } from "@unhead/vue";

// title: "TODO: Participativni proračun",
// titleTemplate: "%s | My Site",

useSeoMeta({
  title: "TODO: title",
  ogTitle: "TODO: title",
  twitterTitle: "TODO: title",
  description: "TODO: description",
  ogDescription: "TODO: description",
  twitterDescription: "TODO: description",
  ogImage: "TODO-image.png",
  twitterImage: "TODO-image.png",
  twitterCard: "summary_large_image",
  ogType: "website",
  author: "Danes je nov dan",
  twitterCreator: "@danesjenovdan",
  twitterSite: "@danesjenovdan",
});
</script>
