<template>
  <RouterView />
</template>

<script setup>
import { useHead, useSeoMeta } from "@unhead/vue";

useHead({
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ],
});

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
