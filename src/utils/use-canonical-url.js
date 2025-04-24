import { useHead, useSeoMeta } from "@unhead/vue";
import { useRoute } from "vue-router";

export default function useCanonicalUrl() {
  const route = useRoute();
  const baseUrl = import.meta.env.BASE_URL;
  const canonicalUrl = `${baseUrl}${route.path}`.replaceAll("//", "/");
  // we don't need to add the origin, because CanonicalPlugin in main.js
  // automatically adds it

  useHead({
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  });

  useSeoMeta({
    ogUrl: canonicalUrl,
  });
}
