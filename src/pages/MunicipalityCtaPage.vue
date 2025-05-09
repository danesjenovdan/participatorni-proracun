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
          <div>
            <RouterLink class="back-button" :to="{ name: 'root' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2.4 1.9 30.9 29.4"
              >
                <g>
                  <path
                    stroke="#edf4f6"
                    stroke-linecap="round"
                    stroke-width="8"
                    d="M19.6 6c-3.427 0-9.823 1.823-11.511 5.2-1.526 3.052-2.558 9.531.111 12.2 3.206 3.206 9.549 4.185 13.8 3.489 6.532-1.069 9.563-10.683 4.178-15.089-1.804-1.476-6.378-.7-8.178.2-2.387 1.193-4.452 5.568-3.978 8.178.73 4.01 9.12 3.786 11.09 1.422 1.766-2.12.683-6.086-1.023-7.911-2.089-2.234-4.88-2.765-7.867-2.4-3.979.486-13.09 6.89-5.578 9.089 2.11.617 4.844.892 6.356-.956.56-.685.697-1.916.622-1.578-.654 2.945 2.778 4.081 2.778 1 0-1.146-1.518-4.822-1.6-2.044-.05 1.694.984 1.528 2.4 2"
                  />
                  <path
                    fill="#000"
                    stroke="#000"
                    stroke-width=".5"
                    d="M14.666 3.621c-4.496.828-7.712 3.268-9.292 7.06-1.493 3.571-1.141 7.204-.92 8.6.126.799.385 1.624.747 2.444 0 0 .647 1.257.71 1.363 1.1 1.857 2.72 3.618 4.636 4.95a15.869 15.869 0 0 0 9.158 2.873c1.113 0 2.301-.111 3.561-.364 4.274-.854 7.405-3.658 8.82-7.892 1.657-4.957.605-11.089-2.499-14.606-.439-.644-4.646-6.325-14.921-4.428Zm16.056 18.58c-1.241 3.723-3.992 6.186-7.735 6.935-5.357 1.069-9.275-.648-11.617-2.278-2.02-1.408-3.485-3.175-4.406-4.842l-.636-1.365a8.032 8.032 0 0 1-.45-1.595c-.194-1.228-1.588-12.06 9.05-14.019a20.583 20.583 0 0 1 3.742-.36c6.883 0 9.611 4.004 9.748 4.21l.069.085c2.805 3.15 3.747 8.711 2.235 13.23Z"
                  />
                  <path
                    fill="#000"
                    stroke="#000"
                    d="M25.142 11.493c-.795-.257-2.201.047-3.689.37-.943.203-3.151.68-3.335.333-.166-.316-.231-.852-.292-1.369-.1-.857-.197-1.668-.8-1.955-.535-.256-1.115.107-1.316.235-.328.19-5.507 3.24-7.146 7.34-1.172 2.93 4.975 6.902 7.347 8.018.4.188.75.283 1.06.283.248 0 .468-.06.663-.181.755-.471.775-1.64.795-2.771.01-.538.03-1.656.265-1.656.394 0 .965.043 1.628.095 2.7.206 4.823.295 5.577-.543.836-.927.96-4.559.444-6.491-.258-.96-.662-1.533-1.2-1.708Zm.091 7.594c-.521.578-3.332.363-4.845.249-.68-.052-1.267-.096-1.695-.096-1.116 0-1.138 1.348-1.16 2.535-.014.767-.032 1.815-.372 2.028-.153.096-.462.042-.867-.15-1.309-.617-3.313-1.853-4.848-3.229-1.664-1.492-2.392-2.787-2.05-3.647 1.541-3.852 6.716-6.87 6.768-6.9l.017-.01c.267-.171.397-.189.441-.189.014 0 .018.003.018.003.157.076.248.869.293 1.25.072.598.144 1.218.388 1.682.501.95 2.269.569 4.316.125 1.248-.268 2.661-.575 3.225-.392.168.056.42.368.61 1.082.528 1.954.232 5.137-.239 5.66Z"
                  />
                  <path
                    fill="#000"
                    stroke="#000"
                    d="M13.563 14.217c-1.539.914-2.155 2.95-2.181 3.037a.447.447 0 0 0 .43.573.45.45 0 0 0 .431-.32c.004-.017.544-1.787 1.779-2.52a.447.447 0 1 0-.459-.77Z"
                  />
                </g>
              </svg>

              <span>NA SPLETNO MESTO KAMPANJE</span>
            </RouterLink>
          </div>
          <h1>
            <template v-if="data.pp_status === 'yes'">
              V tej občini se participativni proračun že izvaja!
            </template>
            <template v-else>
              Pošlji spodnji poziv in spodbudi uvedbo participativnega
              proračuna!
            </template>
          </h1>
          <hr />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="cta-text" v-html="ctaParagraphs"></div>
          <template v-if="data.pp_status !== 'yes'">
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
              <input
                type="text"
                :value="data?.email"
                onfocus="this.select();"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSeoMeta } from "@unhead/vue";
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

  if (data?.evidence_links) {
    const links = data.evidence_links.map((link) => {
      return `<a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a>`;
    });
    t = t.replace("{{ evidence_links }}", links.join(", "));
  } else {
    t = t.replace("{{ evidence_links }}", "");
  }

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

const pageOgImage = `/generated/og-images/og-image-${data.slug}.png?v=2`;

useSeoMeta({
  ogImage: pageOgImage,
  twitterImage: pageOgImage,
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/media";

.page-container {
  .container--wide {
    padding: 0;

    .grid {
      min-height: 100vh;
      min-height: 100dvh;

      @include media.down(lg) {
        display: flex;
        flex-direction: column;
      }

      .info-col {
        max-width: 520px;
        border-right: 4px solid #000;

        @include media.down(lg) {
          max-width: initial;
          border-right: 0;
          border-bottom: 4px solid #000;
        }

        .info-content {
          padding: 3.25rem 2.5rem 3rem;
          font-family: var(--fnt-alt);
          text-align: center;

          @include media.down(lg) {
            padding-inline: 1.5rem;
          }

          .info-text {
            font-size: 1.625rem;
            line-height: 1.2;
            text-align: left;
            text-wrap: balance;

            @include media.down(md) {
              font-size: 1.3125rem;
            }

            strong {
              font-weight: 700;
            }
          }
        }
      }

      .cta-col {
        padding: 2.85rem 5rem 5.5rem;

        @include media.down(lg) {
          padding-inline: 1.5rem;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          width: fit-content;
          text-decoration: none;

          svg {
            height: 2rem;
          }

          span {
            font-family: var(--fnt-alt);
            font-size: 1rem;
            font-weight: 700;
            text-decoration: underline;
          }

          &:hover {
            span {
              text-decoration: none;
            }
          }
        }

        h1 {
          font-family: var(--fnt-alt);
          font-size: 3rem;
          font-weight: 700;

          @include media.down(lg) {
            font-size: 2.5rem;
          }

          @include media.down(md) {
            font-size: 2rem;
          }
        }

        hr {
          max-width: 10rem;
          margin-block: 2.75rem 2.5rem;
          height: 0;
          border: 0;
          border-top: 2px solid #000;
        }

        .cta-text {
          max-width: 55rem;
          font-family: var(--fnt-alt);
          font-size: 1.125rem;

          @include media.down(md) {
            font-size: 1rem;
          }

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

          @include media.down(md) {
            flex-direction: column;
            align-items: flex-start;
            font-size: 1.125rem;
          }

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
