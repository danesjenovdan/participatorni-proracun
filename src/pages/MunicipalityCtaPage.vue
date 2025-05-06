<template>
  <div v-if="data" class="page-container">
    <div class="container container--wide">
      <div class="grid">
        <div class="span-8 info-col">
          <div class="info-content">
            <MunicipalityInfo :data="data" large />
            <MunicipalityPromise :data="data" large />
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="info-text" v-html="infoText"></p>
          </div>
        </div>
        <div class="span-16 cta-col">
          <h1>
            Pošlji spodnji poziv in spodbudi uvedbo participativnega proračuna!
          </h1>
          <hr />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="cta-text" v-html="ctaParagraphs"></div>
          <button type="button" class="copy-button" @click="onCopyClick">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="4.361 4.044 36.722 34.595"
            >
              <path
                fill="none"
                stroke="#83BA7B"
                stroke-linecap="round"
                stroke-width="8"
                d="M24.5 7.5c-4.284 0-12.278 2.279-14.389 6.5-1.907 3.815-3.197 11.914.139 15.25 4.008 4.008 11.936 5.23 17.25 4.361 8.164-1.336 11.953-13.354 5.222-18.861-2.254-1.845-7.972-.875-10.222.25-2.984 1.492-5.565 6.96-4.972 10.222.911 5.013 11.399 4.733 13.86 1.778 2.21-2.65.856-7.607-1.277-9.889-2.61-2.793-6.1-3.456-9.833-3-4.974.608-16.363 8.613-6.972 11.361 2.636.772 6.054 1.116 7.944-1.194.7-.857.872-2.395.778-1.972-.818 3.68 3.472 5.1 3.472 1.25 0-1.434-1.898-6.029-2-2.556-.062 2.117 1.23 1.91 3 2.5"
              />
              <path
                d="M18.332 4.527c-5.62 1.035-9.64 4.085-11.614 8.824-1.867 4.464-1.427 9.005-1.151 10.75.158.999.481 2.03.935 3.056-.788.833-1.508 1.75-2.034 2.735a.903.903 0 0 0 .364 1.22.9.9 0 0 0 1.22-.366 10.59 10.59 0 0 1 1.336-1.886c1.376 2.322 3.401 4.523 5.795 6.187a19.836 19.836 0 0 0 11.449 3.592c1.39 0 2.876-.14 4.45-.456 5.343-1.067 9.257-4.572 11.026-9.864 2.07-6.197.756-13.861-3.124-18.257-.549-.805-5.808-7.907-18.652-5.535Zm20.071 23.225c-1.552 4.653-4.99 7.731-9.67 8.668-6.695 1.336-11.593-.81-14.521-2.847-2.524-1.76-4.356-3.97-5.507-6.052 2.056-1.881 4.298-3.145 4.33-3.164a.906.906 0 0 0 .35-1.224.903.903 0 0 0-1.223-.351 27.183 27.183 0 0 0-4.252 3.032 10.042 10.042 0 0 1-.562-1.994C7.105 22.286 5.363 8.745 18.66 6.297a25.728 25.728 0 0 1 4.676-.45c8.605 0 12.015 5.004 12.185 5.26l.086.108c3.507 3.938 4.685 10.89 2.795 16.537Z"
              />
              <path
                d="M22.904 12.955c-4.433.756-10.027 2.034-11.34 2.786-1.529.874-2.299 1.994-2.114 3.078.126.738.747 1.705 2.988 2.115l.121.014c2.112.095 4.22.432 5.288.796-.793 1.477-1.976 3.987-2.322 6.395-.144.995.332 1.457.626 1.642.202.126.476.22.854.22.482 0 1.125-.159 1.98-.595.337 2.556.957 4.258 2.295 4.446.063.009.135.018.22.018.643 0 2.083-.572 6.152-6.56.814-1.203 7.924-11.796 6.57-14.167-.36-.629-1.101-1.928-11.318-.188ZM17.342 28.14c.225-1.327.742-2.714 1.264-3.88.05 1.125.104 2.192.176 3.182-.517.311-1.065.577-1.44.698Zm10.593-4.568c-3.182 5.094-5.611 7.92-6.435 8.432-.802-.918-1.022-6.133-1.1-7.89-.054-1.309-.089-2.07-.175-2.483-.009-.05-.032-.09-.046-.139 1.57-.865 7.46-4.064 10.918-5.296a.902.902 0 0 0-.606-1.696c-4.136 1.476-11.282 5.471-11.588 5.638l-.126.072c-1.512-.683-3.938-.963-6.084-1.061-1.16-.22-1.468-.563-1.477-.635-.017-.118.243-.643 1.232-1.211.814-.468 5.365-1.63 10.224-2.484 6.556-1.151 9.288-1.018 9.946-.752-.016.914-1.415 4.277-4.683 9.504Z"
              />
            </svg>
            <span>KOPIRAJ POZIV</span>
          </button>
          <hr />
          <div class="send-to">
            Pošlji poziv na:
            <input type="text" :value="data?.email" onfocus="this.select();" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, useSSRContext } from "vue";
import { useRoute } from "vue-router";
import textsYaml from "../assets/texts.yaml";
import MunicipalityInfo from "../components/MunicipalityInfo.vue";
import MunicipalityPromise from "../components/MunicipalityPromise.vue";
import { getMunicipalityBySlug } from "../utils/municipalities-data.js";
import useCanonicalUrl from "../utils/use-canonical-url.js";

const route = useRoute();

const data = getMunicipalityBySlug(route.params.slug);
const { texts } = textsYaml;

if (import.meta.env.SSR && !data) {
  const ctx = useSSRContext();
  ctx.statusCode = 404;
}

const infoText = computed(() => {
  let t =
    texts["promise-info"]?.[data?.pp_status]?.[data?.mayor_gender] ?? "n/a";
  t = t.replace("{{ mayor_name }}", data?.mayor_name);
  return t;
});

const ctaText = computed(() => {
  let t = texts.cta?.[data?.pp_status] || "n/a";
  t = t.replace("{{ municipality_name }}", `${data?.type} ${data?.name}`);
  return t;
});

const ctaParagraphs = computed(() => {
  const paragraphs = ctaText.value.split("\n\n").map((p) => {
    return `<p>${p}</p>`;
  });
  return paragraphs.join("\n");
});

function onCopyClick() {
  const text = ctaText.value;
  navigator.clipboard.writeText(text).then(() => {
    // eslint-disable-next-line no-alert
    alert("Poziv je bil kopiran v odložišče!");
  });
}

useCanonicalUrl();
</script>

<style lang="scss" scoped>
@use "../assets/styles/media";

.page-container {
  .container--wide {
    padding: 0;

    .grid {
      min-height: 100vh;
      min-height: 100dvh;

      .info-col {
        max-width: 520px;
        border-right: 4px solid #000;

        .info-content {
          padding: 3.25rem 2.5rem 3rem;
          font-family: var(--fnt-alt);
          text-align: center;

          .info-text {
            font-size: 1.625rem;
            line-height: 1.2;
            text-align: left;
            text-wrap: balance;

            strong {
              font-weight: 700;
            }
          }
        }
      }

      .cta-col {
        padding: 2.85rem 5rem 5.5rem;

        h1 {
          font-family: var(--fnt-alt);
          font-size: 3rem;
          font-weight: 700;
        }

        hr {
          max-width: 10rem;
          margin-block: 2.75rem 2.5rem;
          height: 0;
          border: 0;
          border-top: 2px solid #000;

          @include media.down(lg) {
            margin-block: 7rem 5rem;
          }
        }

        .cta-text {
          max-width: 55rem;
          font-family: var(--fnt-alt);
          font-size: 1.125rem;

          :deep(> p) {
            margin-bottom: 1rem;
          }
        }

        .copy-button {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2.75rem;
          padding: 0.325rem 1.25rem 0.325rem 0.5rem;
          background: #fff;
          border: 2px solid #000;
          border-radius: 9999rem;
          font-family: var(--fnt-alt);

          svg {
            width: 2.25rem;
            height: 2.25rem;
          }

          span {
            font-size: 1.125rem;
            font-weight: 700;
          }

          &:hover {
            background-color: var(--clr-accent-2-light);
          }
        }

        .send-to {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--fnt-alt);
          font-size: 1.3125rem;

          input {
            width: 300px;
            padding: 0.25rem 0.5rem;
            background: #fff;
            border: 2px solid #000;
            font-size: 1.125rem;
            font-weight: 700;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
