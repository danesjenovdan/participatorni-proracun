<template>
  <section class="map-section">
    <div class="container">
      <div class="map-wrapper">
        <div class="legend">
          <div class="item yes">izvaja</div>
          <div class="item waiting">obljuba še ni izpolnjena</div>
          <div class="item no">se niso zavezali</div>
        </div>
        <MunicipalitiesMap />
        <InfoModal
          v-if="selectedMunicipality"
          ref="info-modal"
          :key="selectedMunicipality?.slug"
          :data="selectedMunicipality?.data"
          @close="selectedMunicipality = null"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { getMunicipalitiesData } from "../utils/municipalities-data.js";
import InfoModal from "./InfoModal.vue";
import MunicipalitiesMap from "./MunicipalitiesMap.vue";

const municipalitiesData = getMunicipalitiesData();
const mapElements = ref([]);
const selectedMunicipality = ref(null);

function disableHoverElement() {
  const map = document.querySelector(".municipalities-map svg");
  const hoverElement = map.querySelector("#hover-element");
  if (hoverElement) {
    hoverElement.setAttribute("href", "#");
  }
}

function setHoverElement(event) {
  const map = document.querySelector(".municipalities-map svg");
  const hoverElement = map.querySelector("#hover-element");
  if (hoverElement && event.target?.id) {
    hoverElement.setAttribute("href", `#${event.target.id}`);
  }
}

function clickElement(event) {
  const map = document.querySelector(".municipalities-map svg");
  const hoverElement = map.querySelector("#hover-element");
  if (hoverElement && event.target?.id) {
    const slug = event.target.id;
    const data = mapElements.value.find((m) => m.slug === slug);
    selectedMunicipality.value = data;
  }
}

onMounted(() => {
  const map = document.querySelector(".municipalities-map svg");
  if (map) {
    const allPaths = map.querySelector("#all-paths");

    if (allPaths) {
      const mapSections = allPaths.querySelectorAll("[data-name]");
      const hoverElement = allPaths.querySelector("#hover-element");

      if (mapSections && hoverElement) {
        allPaths.addEventListener("mouseleave", disableHoverElement);

        // eslint-disable-next-line no-restricted-syntax
        for (const section of mapSections) {
          const name = section.getAttribute("data-name");
          const slug = section.getAttribute("data-slug");
          const data = municipalitiesData.find((m) => m.slug === slug);
          if (!data) {
            // eslint-disable-next-line no-console
            console.warn(`Missing data with slug "${slug}"`);
          }

          mapElements.value.push({ name, slug, data, element: section });

          if (data) {
            section.setAttribute("id", slug);

            if (data.pp_status === "yes") {
              section.setAttribute("fill", "var(--clr-accent-2)");
              section.classList.add("status-yes");
            } else if (data.pp_status === "waiting") {
              section.setAttribute("fill", "var(--clr-accent-3)");
              section.classList.add("status-waiting");
            } else if (data.pp_status === "no") {
              section.setAttribute("fill", "var(--clr-accent-4)");
              section.classList.add("status-no");
            }
          }

          section.addEventListener("mouseenter", setHoverElement);
          section.addEventListener("click", clickElement);
        }
      }
    }
  }
});

onBeforeUnmount(() => {
  const map = document.querySelector(".municipalities-map svg");
  if (map) {
    const allPaths = map.querySelector("#all-paths");
    allPaths.removeEventListener("mouseleave", disableHoverElement);

    mapElements.value.forEach(({ element }) => {
      element.removeEventListener("mouseenter", setHoverElement);
      element.removeEventListener("click", clickElement);
    });
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/media";

section.map-section {
  padding-block: 2rem;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  .map-wrapper {
    max-width: 75rem;
    margin-inline: auto;

    .legend {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: -2rem;

      @include media.down(lg) {
        margin-bottom: 0;
      }

      @include media.down(md) {
        gap: 0.5rem;
      }

      .item {
        position: relative;
        padding: 0 1.25rem 0 2.5rem;
        background-color: #fff;
        border-radius: 9999px;
        border: 2px solid #000;
        font-size: 1.125rem;
        font-weight: 500;

        @include media.down(md) {
          font-size: 0.875rem;
        }

        &::before {
          content: "";
          position: absolute;
          left: -2px;
          top: -2px;
          bottom: -2px;
          aspect-ratio: 1;
          display: block;
          border-radius: inherit;
          border: inherit;
        }

        &.yes::before {
          background-color: var(--clr-accent-2);
        }

        &.waiting::before {
          background-color: var(--clr-accent-3);
        }

        &.no::before {
          background-color: var(--clr-accent-4);
        }
      }
    }

    :deep(.municipalities-map) {
      svg {
        #all-paths {
          cursor: pointer;

          #hover-element {
            stroke: var(--clr-dark-purple);
            stroke-width: 4;
            pointer-events: none;
          }
        }
      }
    }
  }
}
</style>
