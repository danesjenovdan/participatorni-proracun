<template>
  <section class="map-section">
    <div class="container">
      <div class="map-wrapper">
        <div class="legend">
          <div class="item yes">izvaja</div>
          <div class="item wait">obljuba še ni izpolnjena</div>
          <div class="item no">se niso zavezali</div>
        </div>
        <MunicipalitiesMap />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import municipalitiesJson from "../assets/municipalities.json";
import slugify from "../utils/slugify.js";
import MunicipalitiesMap from "./MunicipalitiesMap.vue";

const municipalitiesData = municipalitiesJson.municipalities;
const mapElements = ref([]);

function disableHoverElement() {
  const map = document.querySelector(".map svg");
  const hoverElement = map.querySelector("#hover-element");
  if (hoverElement) {
    hoverElement.setAttribute("href", "#");
  }
}

function setHoverElement(event) {
  const map = document.querySelector(".map svg");
  const hoverElement = map.querySelector("#hover-element");
  if (hoverElement && event.target?.id) {
    hoverElement.setAttribute("href", `#${event.target.id}`);
  }
}

onMounted(() => {
  const map = document.querySelector(".map svg");
  if (map) {
    const mapSections = map.querySelectorAll("[attrib\\:ob_uime]");
    const allPaths = map.querySelector("#all-paths");
    const hoverElement = map.querySelector("#hover-element");

    if (mapSections && allPaths && hoverElement) {
      allPaths.addEventListener("mouseleave", disableHoverElement);

      // eslint-disable-next-line no-restricted-syntax
      for (const section of mapSections) {
        const name = section.getAttribute("attrib:ob_uime");
        const slug = slugify(name);
        const data = municipalitiesData.find((m) => m.name === name);

        mapElements.value.push({ name, slug, data, element: section });

        if (data) {
          section.setAttribute("id", slug);

          if (data.status === "yes") {
            section.setAttribute("fill", "var(--clr-accent-2)");
            section.classList.add("status-yes");
          } else if (data.status === "wait") {
            section.setAttribute("fill", "var(--clr-accent-3)");
            section.classList.add("status-wait");
          } else if (data.status === "no") {
            section.setAttribute("fill", "var(--clr-accent-4)");
            section.classList.add("status-no");
          }
        }

        section.addEventListener("mouseenter", setHoverElement);
      }
    }
  }
});

onBeforeUnmount(() => {
  const map = document.querySelector(".map svg");
  if (map) {
    const allPaths = map.querySelector("#all-paths");
    allPaths.removeEventListener("mouseleave", disableHoverElement);

    mapElements.value.forEach(({ element }) => {
      element.removeEventListener("mouseenter", setHoverElement);
    });
  }
});
</script>

<style lang="scss" scoped>
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
      gap: 1rem;
      margin-bottom: -2rem;

      .item {
        position: relative;
        padding: 0 1.25rem 0 2.5rem;
        background-color: #fff;
        border-radius: 9999px;
        border: 2px solid #000;
        font-size: 1.125rem;
        font-weight: 500;

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

        &.wait::before {
          background-color: var(--clr-accent-3);
        }

        &.no::before {
          background-color: var(--clr-accent-4);
        }
      }
    }

    :deep(.map) {
      svg {
        #all-paths {
          cursor: pointer;

          #hover-element {
            stroke: var(--clr-dark-purple);
            stroke-width: 1000;
          }
        }
      }
    }
  }
}
</style>
