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
import MunicipalitiesMap from "./MunicipalitiesMap.vue";
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
        g[attrib\:ob_uime]:hover {
          fill: blue;
        }
      }
    }
  }
}
</style>
