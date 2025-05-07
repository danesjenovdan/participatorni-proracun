<template>
  <section class="map-section">
    <div class="container">
      <div class="map-wrapper">
        <div class="legend">
          <div class="item yes">Se izvaja</div>
          <div class="item waiting">Zaveza ni izpolnjena</div>
          <div class="item no">Ni zaveze</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="pattern-defs">
          <defs>
            <pattern
              id="diagonalHatchYes"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                fill="var(--clr-accent-2)"
              />
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#000"
                stroke-width="1.125"
              />
            </pattern>
            <pattern
              id="diagonalHatchWaiting"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                fill="var(--clr-accent-3)"
              />
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#000"
                stroke-width="1.125"
              />
            </pattern>
            <pattern
              id="diagonalHatchNo"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                fill="var(--clr-accent-4)"
              />
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#000"
                stroke-width="1.125"
              />
            </pattern>
          </defs>
        </svg>
        <div class="pan-zoom">
          <MunicipalitiesMap />
        </div>
        <div id="map-tooltip" style="display: none"></div>
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
const mapEl = ref(null);
const mapElements = ref([]);
const selectedMunicipality = ref(null);

function disableHoverElement() {
  const hoverElement = mapEl.value.querySelector("#hover-element");
  const allPaths = mapEl.value.querySelector("#all-paths");
  const tooltip = document.querySelector("#map-tooltip");
  if (hoverElement && allPaths && tooltip) {
    allPaths.querySelectorAll(".hover").forEach((el) => {
      el.classList.remove("hover");
    });
    hoverElement.setAttribute("href", "#");
    tooltip.innerText = "";
    tooltip.style.display = "none";
  }
}

function setHoverElement(event) {
  const hoverElement = mapEl.value.querySelector("#hover-element");
  const allPaths = mapEl.value.querySelector("#all-paths");
  const tooltip = document.querySelector("#map-tooltip");
  if (hoverElement && allPaths && tooltip && event.target?.id) {
    allPaths.querySelectorAll(".hover").forEach((el) => {
      el.classList.remove("hover");
    });
    event.target.classList.add("hover");
    hoverElement.setAttribute("href", `#${event.target.id}`);
    tooltip.innerText = event.target.getAttribute("data-name");
    tooltip.style.display = "block";
  }
}

function updateTooltipPosition(event) {
  const tooltip = document.querySelector("#map-tooltip");
  if (tooltip) {
    const x = event.clientX + 15;
    const y = event.clientY + 20;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    if (tooltip.offsetWidth + x > window.innerWidth) {
      tooltip.style.left = `${x - tooltip.offsetWidth - 20}px`;
    }
    if (tooltip.offsetHeight + y > window.innerHeight) {
      tooltip.style.top = `${y - tooltip.offsetHeight - 20}px`;
    }
  }
}

function clickElement(event) {
  const hoverElement = mapEl.value.querySelector("#hover-element");
  if (hoverElement && event.target?.id) {
    const slug = event.target.id;
    const data = mapElements.value.find((m) => m.slug === slug);
    if (selectedMunicipality.value === data) {
      selectedMunicipality.value = null;
    } else {
      selectedMunicipality.value = data;
    }
  }
}

function onMapInit() {
  mapEl.value = document.querySelector(".municipalities-map svg");
  if (mapEl.value) {
    const allPaths = mapEl.value.querySelector("#all-paths");

    if (allPaths) {
      const mapSections = allPaths.querySelectorAll("[data-name]");
      const hoverElement = allPaths.querySelector("#hover-element");

      if (mapSections && hoverElement) {
        allPaths.addEventListener("mouseleave", disableHoverElement);
        allPaths.addEventListener("mousemove", updateTooltipPosition);

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
              section.classList.add("status-yes");
            } else if (data.pp_status === "waiting") {
              section.classList.add("status-waiting");
            } else if (data.pp_status === "no") {
              section.classList.add("status-no");
            }
          }

          section.addEventListener("mouseenter", setHoverElement);
          section.addEventListener("click", clickElement);
        }
      }
    }
  }
}

onMounted(() => {
  onMapInit();
});

onBeforeUnmount(() => {
  if (mapEl.value) {
    const allPaths = mapEl.value.querySelector("#all-paths");
    allPaths.removeEventListener("mouseleave", disableHoverElement);
    allPaths.removeEventListener("mousemove", updateTooltipPosition);

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
  overflow: hidden;

  .map-wrapper {
    max-width: 75rem;
    margin-inline: auto;

    .legend {
      position: relative;
      z-index: 1001;
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

    .pattern-defs {
      position: absolute;
      width: 0;
      height: 0;
    }

    .pan-zoom {
      pointer-events: none;

      :deep(.municipalities-map) {
        svg {
          #all-paths {
            cursor: pointer;
            pointer-events: all;

            .status-yes {
              fill: var(--clr-accent-2);

              &.hover {
                fill: url(#diagonalHatchYes);
              }
            }

            .status-waiting {
              fill: var(--clr-accent-3);

              &.hover {
                fill: url(#diagonalHatchWaiting);
              }
            }

            .status-no {
              fill: var(--clr-accent-4);

              &.hover {
                fill: url(#diagonalHatchNo);
              }
            }

            #hover-element {
              stroke: #000;
              stroke-width: 4;
              pointer-events: none;
            }
          }
        }
      }
    }

    #map-tooltip {
      position: fixed;
      top: 0;
      left: 0;
      border: 2px solid #000;
      background-color: #fff;
      padding: 0.125em 0.5em;
      border-radius: 3px;
      font-family: var(--fnt-main);
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
      z-index: 1002;
    }
  }
}
</style>
