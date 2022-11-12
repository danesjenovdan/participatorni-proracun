<!--
//   if (this.person) {
//     const rows = this.data.filter((r) => r.KANDIDAT === this.person);
//     if (rows && rows.length && rows[0].OBLJUBA > 0) {
//       title =
//         rows[0].SPOL === "m"
//           ? sharePersonM.replace("{name}", this.person)
//           : sharePersonF.replace("{name}", this.person);
//       image = `og-image-oseba.png/gen?t=${encodeURIComponent(this.person)}`;
//       content = "Čas je, da občinski denar postane tudi tvoja stvar!";
//     }
//     if (rows && rows.length && rows[0].ZMAGA > 0) {
//       title =
//         rows[0].SPOL === "m"
//           ? shareElectedPersonM.replace("{name}", this.person)
//           : shareElectedPersonF.replace("{name}", this.person);
//     }
//     overrideTags.meta.push({
//       vmid: "og:title",
//       property: "og:title",
//       content: title,
//     });
//     overrideTags.meta.push({
//       vmid: "twitter:title",
//       property: "twitter:title",
//       content: title,
//     });
//   }
-->

<template>
  <VueHead v-if="slug && selectedMunicipality">
    <title>
      Preveri, ali lahko pričakuješ uvedbo participativnega proračuna v občini
      {{ selectedMunicipality.name }}.
    </title>
    <meta
      property="og:description"
      :content="`Preveri, ali lahko pričakuješ uvedbo participativnega proračuna v občini ${selectedMunicipality.name}.`"
    />
    <meta
      name="twitter:description"
      :content="`Preveri, ali lahko pričakuješ uvedbo participativnega proračuna v občini ${selectedMunicipality.name}.`"
    />
    <meta
      property="og:image"
      :content="`${baseUrl}generated/og-images/og-image-${slug}.png`"
    />
    <meta
      name="twitter:image"
      :content="`${baseUrl}generated/og-images/og-image-${slug}.png`"
    />
  </VueHead>
  <div class="container">
    <div class="row find-candidates-row mx-0">
      <div class="col-lg-5 col--search px-0">
        <div class="col__content">
          <h2>KDO V TVOJI OBČINI OBLJUBLJA PARTICIPATIVNI PRORAČUN?</h2>
          <p>
            Vpiši ime svoje občine in poglej, kateri kandidati_ke so se
            zavezali_e, da uvedejo participativni proračun!
          </p>
          <form action="javascript:;" @submit="onSubmitLocation">
            <SimpleTypeahead
              class="form-control"
              placeholder="vpiši občino"
              :items="municipalityNames"
              :default-item="typeaheadDefaultItem"
              :item-projection="typeaheadItemProjection"
              @select-item="typeaheadSelectItem"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M511.987 454.086L375.65 317.748c21.452-32.404 33.936-71.186 33.936-112.934C409.586 91.693 317.903.009 204.8.009 91.695.009.013 91.693.013 204.814c0 113.09 91.683 204.805 204.787 204.805 41.731 0 80.559-12.529 112.932-33.967L454.068 511.99l57.919-57.904zM58.042 204.845c0-81.06 65.715-146.745 146.758-146.745 81.059 0 146.773 65.685 146.773 146.745 0 81.061-65.715 146.776-146.773 146.776-81.043 0-146.758-65.715-146.758-146.776z"
              />
            </svg>
          </form>
        </div>
      </div>
      <div class="col-lg-7 col--results px-0">
        <div class="col__content">
          <div
            v-if="!selectedMunicipality?.candidates?.length"
            class="empty-state"
          >
            <div class="hand"></div>
            <div class="text">
              V iskalnik vpiši ime občine in prikazali ti bomo rezultate.
            </div>
          </div>
          <div v-else class="results">
            <table class="w-100">
              <tbody>
                <tr
                  v-for="(candidate, i) in selectedMunicipality.candidates"
                  :key="candidate.name"
                >
                  <td>
                    <div class="name">{{ candidate.name }}</div>
                    <div class="proposer">
                      <small>({{ candidate.proposer }})</small>
                    </div>
                  </td>
                  <td>
                    <div class="response">
                      <div class="promise-icon-wrapper">
                        <div
                          :class="[
                            'promise-icon',
                            {
                              star: candidate.has_pp,
                              check: !candidate.has_pp && candidate.promised_pp,
                              cross:
                                !candidate.has_pp && !candidate.promised_pp,
                            },
                          ]"
                        />
                      </div>
                      <div class="promise-text">
                        <span v-if="candidate.has_pp">
                          {{
                            candidate.gender === "m" ? "že izvaja" : "že izvaja"
                          }}
                        </span>
                        <span v-else-if="candidate.promised_pp">
                          {{
                            candidate.gender === "m"
                              ? "se je zaobljubil"
                              : "se je zaobljubila"
                          }}
                        </span>
                        <span v-else>
                          {{
                            candidate.gender === "m"
                              ? "se ni zaobljubil"
                              : "se ni zaobljubila"
                          }}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div
                        v-if="candidate.promised_pp || candidate.has_pp"
                        role="button"
                        class="social"
                        @click="onShareClick($event, null, municipality, i)"
                      >
                        <span>Povej naprej!</span>
                      </div>
                      <div v-else class="sad-face-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                          fill="currentColor"
                          class="sad-face"
                        >
                          <path
                            d="M35.95 33c-2.648 0-4.85 2.202-4.85 4.85 0 2.648 2.202 4.85 4.85 4.85 2.648 0 4.85-2.202 4.85-4.85 0-2.648-2.202-4.85-4.85-4.85zm28.1 0c-2.648 0-4.85 2.202-4.85 4.85 0 2.648 2.202 4.85 4.85 4.85 2.648 0 4.85-2.202 4.85-4.85 0-2.648-2.202-4.85-4.85-4.85z"
                          />
                          <path
                            d="M50 5C25.177 5 5 25.177 5 50s20.177 45 45 45 45-20.177 45-45S74.823 5 50 5zm0 5.46c21.868 0 39.54 17.672 39.54 39.54S71.868 89.54 50 89.54 10.46 71.868 10.46 50 28.132 10.46 50 10.46z"
                          />
                          <path
                            d="M50 56.716c-8.291.016-16.617 3.8-21.531 11.436-.961 1.493-.798 3.395.562 4.17 1.44.822 3.083.238 3.969-1.123 3.833-5.888 10.418-8.821 17-8.837 6.582-.017 13.167 2.917 17 8.805.886 1.361 2.528 1.977 3.969 1.155 1.36-.775 1.523-2.71.562-4.202C66.617 60.484 58.291 56.7 50 56.716z"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="social-municipality">
              <button
                class="btn btn-municipality"
                @click="onShareClickMunicipality($event, null)"
              >
                <span>Deli svojo občino!</span>
              </button>
            </div>
          </div>
        </div>
        <!-- <PromisesModal
          v-if="showModal"
          :share-link="shareLink"
          @close="showModal = false"
          @tw-share="
            onShareClickMunicipality($event, 'tw', showModal[0], showModal[1])
          "
          @fb-share="
            onShareClickMunicipality($event, 'fb', showModal[0], showModal[1])
          "
          @email-share="
            onShareClickMunicipality($event, 'mail', showModal[0], showModal[1])
          "
        /> -->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="notify-us">
          <a
            :href="`mailto:maja@danesjenovdan.si?subject=${encodeURIComponent(
              'Namera o uvedbi participativnega proračuna v moji občini'
            )}`"
            target="_blank"
          >
            Si kandidat/-ka in nas želiš obvestiti o svoji nameri ali nam javiti
            popravek morebitne napake na spletnem mestu? Piši nam!
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Head as VueHead } from "@vueuse/head";
import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";
import { baseUrl } from "../../helpers/constants.js";
import ppList from "../../assets/pp_list.json";

// import PromisesModal from "../PromisesModal.vue";
// import { openSocialShareLink } from "../../helpers/social.js";

export default {
  name: "FindCandidates",
  components: {
    VueHead,
    SimpleTypeahead,
    // PromisesModal,
  },
  data() {
    const { slug } = this.$route.params;
    // const { p } = this.$route.query;

    let selectedMunicipality = null;
    let typeaheadDefaultItem = null;
    if (slug) {
      const municipality = ppList.find((m) => m.slug === slug);
      if (municipality) {
        selectedMunicipality = municipality;
        typeaheadDefaultItem = municipality.name;
      }
    }

    return {
      baseUrl,
      slug,
      municipalities: ppList,
      municipalityNames: ppList.map((m) => m.name),
      selectedMunicipality,
      typeaheadDefaultItem,
      // person: p,
      // showModal: false,
    };
  },
  computed: {
    // shareLink() {
    //   if (this.showModal && this.showModal.length) {
    //     const row =
    //       this.resultsByMunicipality[this.showModal[0]][this.showModal[1]];
    //     const ime = row.KANDIDAT;
    //     const docHref =
    //       typeof document !== "undefined"
    //         ? document.location.href.split("?")[0]
    //         : "";
    //     return `${docHref}?p=${encodeURIComponent(ime)}`;
    //   }
    //   return typeof document !== "undefined" ? document.location.href : "";
    // },
  },
  methods: {
    typeaheadItemProjection(item) {
      return item.toUpperCase();
    },
    typeaheadSelectItem(selected) {
      const municipality = ppList.find((m) => m.name === selected);
      if (municipality) {
        this.selectedMunicipality = municipality;
        this.$router.push(`/${municipality.slug}`);
      }
    },
    // onShareClick($event, type, municipality, i) {
    //   if (!type) {
    //     this.showModal = [municipality, i];
    //     return;
    //   }

    //   const row = this.resultsByMunicipality[municipality][i];
    //   const ime = row.KANDIDAT;

    //   const shareText =
    //     row.SPOL === "m"
    //       ? sharePersonM.replace("{name}", ime)
    //       : sharePersonF.replace("{name}", ime);
    //   const shareHashtag = "#TvojaStvar";

    //   openSocialShareLink(type, shareText, this.shareLink, shareHashtag);
    // },
    // onShareClickMunicipality($event, type) {
    //   if (!type) {
    //     this.showModal = true;
    //     return;
    //   }

    //   const shareText = shareContent.replace(
    //     "{query}",
    //     this.query.toUpperCase()
    //   );
    //   const shareHashtag = "#TvojaStvar";

    //   openSocialShareLink(type, shareText, this.shareLink, shareHashtag);
    // },
  },
};
</script>

<style lang="scss" scoped>
.find-candidates-row {
  padding-top: 2rem;

  .col__content {
    padding: 2.75rem;
  }

  .col--search .col__content {
    position: relative;
    z-index: 1;
    background-color: #f2cc59;
    margin-top: -2rem;
    margin-right: -2rem;
    margin-bottom: 4rem;

    @media (max-width: 991.98px) {
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 0;
    }

    h2 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 40px;
      line-height: 1.1;
      color: #000;

      @media (max-width: 1199.98px) {
        font-size: 2rem;
      }

      strong {
        color: #5f235b;
        font-weight: 900;
      }
    }

    p {
      font-family: "BioRhyme";
      font-size: 20px;
      line-height: 1.2;
      font-weight: 400;
      margin-top: 1.5em;
      margin-bottom: 1.5em;
      color: #000000;
    }

    form {
      position: relative;

      .simple-typeahead :deep(.simple-typeahead-input) {
        border-radius: 0;
        border: 6px solid #291749;
        background-color: #fcf5de;
        font-size: 1.5rem;
        font-weight: 700;
        height: auto;
        color: #000;
        padding-right: 2em;

        &:focus {
          outline: 0;
          box-shadow: none;
        }
      }

      .simple-typeahead :deep(.simple-typeahead-list) {
        top: 3.5rem;
        background-color: #f2cc59;
        border: 4px solid #5f235b;
        border-bottom: 0;

        .simple-typeahead-list-item {
          border: 0;
          border-bottom: 4px solid #5f235b;
          color: #5f235b;
          font-weight: 500;
          padding: 0.35rem 0.8rem;
          background: transparent;

          &.simple-typeahead-list-item-active,
          &:hover {
            background-color: #fcf5de;
          }
        }
      }

      svg {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        fill: #291749;
        padding: 0.75em;
      }
    }
  }

  .col--results .col__content {
    background-color: #fefaee;
    padding-left: 4.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991.98px) {
      padding-left: 2.75rem;
    }

    .empty-state {
      padding: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .hand {
        flex-shrink: 0;
        width: 23px;
        height: 31px;
        background-image: url("../../assets/point_down.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: rotate(90deg);
        margin-right: 20px;
      }

      .text {
        font-size: 20px;
        line-height: 1.5;
        font-style: italic;
        color: #000000;
        max-width: 320px;
      }
    }

    .results {
      width: 100%;
      height: 100%;

      table,
      tbody,
      tr,
      td {
        margin: 0;
        padding: 0;
        border: 0;
      }

      table {
        table-layout: fixed;

        tr {
          border-bottom: 1px solid #000;

          td {
            height: 82px;
            vertical-align: middle;

            &:nth-child(1) {
              width: 50%;
            }
            &:nth-child(2) {
              width: 25%;
            }
            &:nth-child(3) {
              width: 25%;
            }

            @media (max-width: 1200px) {
              &:nth-child(1) {
                width: 42%;
              }
              &:nth-child(2) {
                width: 33%;
              }
              &:nth-child(3) {
                width: 25%;
              }
            }

            @media (max-width: 576px) {
              &:nth-child(1) {
                width: 31%;
              }
              &:nth-child(2) {
                width: 38%;
              }
              &:nth-child(3) {
                width: 31%;
              }
            }

            .name {
              font-size: 24px;
              line-height: 1.1;
              font-weight: 500;
              color: #27223a;
            }

            .proposer {
              font-size: 16px;
              line-height: 1.1;
              font-style: italic;
              color: #27223a;
            }

            .response {
              display: flex;
              align-items: center;

              .promise-icon-wrapper {
                flex-shrink: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 55px;
                height: 55px;
                margin-right: 8px;

                .promise-icon {
                  flex-shrink: 0;
                  width: 38px;
                  height: 38px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
                  background-position: center center;
                  background-repeat: no-repeat;
                  box-shadow: 2px 2px #291749;

                  &.cross {
                    background-color: #f2cc59;
                    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-416 254 53.9 53.9"><path d="m-362.1 265.6-11.6-11.6-15.4 15.4-15.3-15.4-11.6 11.6 15.4 15.3-15.4 15.4 11.6 11.6 15.4-15.3 15.3 15.3 11.6-11.6-15.3-15.3z"/></svg>');
                    background-size: 19px 19px;
                  }

                  &.star,
                  &.check {
                    width: 55px;
                    height: 55px;
                  }

                  &.star {
                    background-color: #6037a9;
                    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.9 86.08" fill="%23f2cc59"><path d="M42.47 0a1.96 2.05 0 0 0-1.73 1.17L28.9 27.26 1.65 31.84a1.96 2.05 0 0 0-1.04 3.5L20.67 55.2l-4.25 28.53a1.96 2.05 0 0 0 2.86 2.1l24.23-13.81 24.63 13.04a1.96 2.05 0 0 0 2.81-2.2l-5.08-28.38L85.34 34a1.96 2.05 0 0 0-1.13-3.47l-27.38-3.72-12.59-25.7A1.96 2.05 0 0 0 42.48 0Z"/></svg>');
                    background-size: 35px 35px;
                  }

                  &.check {
                    box-shadow: 2px 2px #376274;
                    background-color: #4e8ca6;
                    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="2.5 12.6 95 74.8" fill="%23fefaee"><path d="M38.3 87.4 2.5 51.6 18.1 36l20.2 20.2 43.6-43.6 15.6 15.6z"/></svg>');
                    background-size: 34px 34px;
                  }
                }
              }

              .promise-text {
                font-size: 20px;
                line-height: 1.1;
                font-weight: 900;
                color: #27223a;
              }
            }

            .social {
              padding: 12px;
              background-color: #6037a9;
              box-shadow: 3px 3px #291749;
              font-size: 20px;
              font-weight: 700;
              color: #fff;
              text-align: center;
              cursor: pointer;
              user-select: none;
            }

            .sad-face-wrapper {
              text-align: center;

              .sad-face {
                width: 44px;
                height: 44px;
                color: #000;
              }
            }
          }
        }
      }

      .social-municipality {
        text-align: center;

        .btn-municipality {
          margin-top: 2rem;
          padding: 12px 38px;
          background-color: #6037a9;
          box-shadow: 5px 5px #291749;
          font-size: 30px;
          font-weight: 700;
          color: #fff;
        }
      }
    }
  }
}

.notify-us {
  text-align: center;
  border: 3px solid #272239;
  border-width: 3px 0;
  padding: 35px 0;
  margin: 110px 0;

  a,
  a:visited {
    font-family: "BioRhyme";
    font-size: 18px;
    color: #272239;
  }
}
</style>
