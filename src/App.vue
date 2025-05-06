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

const pageOgTitle = "Kje je participativni proračun?";
const pageOgDescription =
  "Ali so župani izpolnili svoje zaveze in občanom omogočili sooblikovanje lokalnega okolja?";

useSeoMeta({
  title: pageOgTitle,
  ogTitle: pageOgTitle,
  twitterTitle: pageOgTitle,
  description: pageOgDescription,
  ogDescription: pageOgDescription,
  twitterDescription: pageOgDescription,
  ogImage: "/pp-kampanja-og.jpg",
  twitterImage: "/pp-kampanja-og.jpg",
  twitterCard: "summary_large_image",
  ogType: "website",
  author: "Danes je nov dan",
  twitterCreator: "@danesjenovdan",
  twitterSite: "@danesjenovdan",
});
</script>
