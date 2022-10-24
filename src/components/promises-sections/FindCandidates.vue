<template>
  <div class="container">
    <div class="row find-candidates-row mx-0 py-5">
      <div class="col-lg-5 col--search px-0">
        <div class="col__content">
          <h2 class="nobr">
            PREVERI, ALI JE <wbr />TVOJ/-A <wbr />ŽUPAN/-JA <wbr />
            <strong>OBLJUBIL/-A</strong> <wbr />PARTICIPATIVNI <wbr />PRORAČUN!
          </h2>
          <p>
            Vpiši ime svoje občine in poglej, kdo se je zavezal k izvajanju
            participativnega proračuna!
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path
                d="M43 14H17c-.379 0-.725-.214-.895-.553l-2-4A1 1 0 0 1 15 8h30a1 1 0 0 1 .895 1.447l-2 4c-.17.339-.516.553-.895.553zm-25.382-2h24.764l1-2H16.618l1 2zM59 60H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h58a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM2 58h56v-2H2v2z"
              />
              <path
                d="M43 56H17a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v42a1 1 0 0 1-1 1zm-25-2h24V14H18v40z"
              />
              <path
                d="M17 56H3a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1zM4 54h12V28H4v26zM57 56H43a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1zm-13-2h12V28H44v26zM30 33c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.308 0-6 2.691-6 6s2.692 6 6 6 6-2.691 6-6-2.692-6-6-6z"
              />
              <path
                d="M30 26a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1z"
              />
              <path
                d="M32 26h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM30 10a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zM34 10a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zM26 10a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zM17 28H3c-.379 0-.725-.214-.895-.553l-2-4A1 1 0 0 1 1 22h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM3.618 26H16v-2H2.618l1 2zM57 28H43a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 .895 1.447l-2 4c-.17.339-.516.553-.895.553zm-13-2h12.382l1-2H44v2zM36 56H24a1 1 0 0 1-1-1V43a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-11-2h10V44H25v10z"
              />
              <path
                d="M38 44H22a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm-15-2h14v-1H23v1z"
              />
              <path
                d="M35 41H25a1 1 0 0 1-1-1c0-2.757 2.692-5 6-5s6 2.243 6 5a1 1 0 0 1-1 1zm-8.771-2h7.543c-.55-1.164-2.033-2-3.771-2s-3.222.836-3.772 2zM32 50h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM13 52H7a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1zm-5-2h4V32H8v18z"
              />
              <path
                d="M13 37H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 47H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 42H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 52h-6a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1zm-5-2h4V32h-4v18z"
              />
              <path
                d="M53 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 47h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 42h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
              />
            </svg>
          </div>
          <div v-else class="results">
            <h5>{{ selectedMunicipality.name }}</h5>
            <h5 class="mt-3 border-0">
              <small class="font-weight-bold">
                <template v-if="selectedMunicipality.candidates.length === 1">
                  OSEBA, KI JE ZMAGALA NA VOLITVAH:
                </template>
                <template
                  v-else-if="selectedMunicipality.candidates.length > 1"
                >
                  KANDIDATA, KI STA V DRUGEM KROGU:
                </template>
              </small>
            </h5>
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
                        <span
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
                            candidate.gender === "m" ? "Že izvaja" : "Že izvaja"
                          }}
                        </span>
                        <span v-else-if="candidate.promised_pp">
                          {{
                            candidate.gender === "m"
                              ? "Se je zaobljubil"
                              : "Se je zaobljubila"
                          }}
                        </span>
                        <span v-else>
                          {{
                            candidate.gender === "m"
                              ? "Se ni zaobljubil"
                              : "Se ni zaobljubila"
                          }}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div
                        v-if="candidate.promised_pp || candidate.has_pp"
                        class="social"
                        @click="onShareClick($event, null, municipality, i)"
                      >
                        <span>POVEJ NAPREJ!</span>
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
            <h5 class="mt-3 border-0">
              <small class="font-weight-bold">
                <template v-if="selectedMunicipality.candidates.length > 1">
                  Rezultata volitev še ni.
                </template>
              </small>
            </h5>
            <button
              :class="['btn', 'btn-block', 'btn-municipality']"
              @click="onShareClickMunicipality($event, null)"
            >
              <span>DELI SVOJO OBČINO!</span>
            </button>
          </div>
        </div>
        <div class="notify-us">
          <a
            :href="`mailto:maja@danesjenovdan.si?subject=${notifyUsMailSubject}`"
            target="_blank"
          >
            Si župan/-ja in nas želiš obvestiti o svoji nameri ali nam javiti
            popravek morebitne napake na spletni strani?
          </a>
        </div>
        <PromisesModal
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";
import ppList from "../../../dist/pp_list.json";

import PromisesModal from "../PromisesModal.vue";
// import { openSocialShareLink } from "../../helpers/social.js";

export default {
  name: "FindCandidates",
  components: {
    SimpleTypeahead,
    PromisesModal,
  },
  metaInfo() {
    const overrideTags = {
      meta: [],
    };

    // if (this.person || this.query) {
    //   let title = shareContent.replace("{query}", this.query.toUpperCase());
    //   let content = shareContent.replace("{query}", this.query.toUpperCase());
    //   let image = `og-image-obcina.png/gen?t=${encodeURIComponent(this.query)}`;
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
    //       vmid: "og:url",
    //       property: "og:url",
    //       content: `${domain}${baseUrl}${encodeURIComponent(
    //         this.query
    //       )}?p=${encodeURIComponent(this.person)}`,
    //     });
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
    //   } else {
    //     overrideTags.meta.push({
    //       vmid: "og:url",
    //       property: "og:url",
    //       content: `${domain}${baseUrl}${encodeURIComponent(this.query)}`,
    //     });
    //   }

    //   // description
    //   overrideTags.meta.push({
    //     vmid: "og:description",
    //     property: "og:description",
    //     content,
    //   });
    //   overrideTags.meta.push({
    //     vmid: "twitter:description",
    //     name: "twitter:description",
    //     content,
    //   });
    //   // image
    //   overrideTags.meta.push({
    //     vmid: "og:image",
    //     property: "og:image",
    //     content: `${domain}${baseUrl}${image}`,
    //   });
    //   overrideTags.meta.push({
    //     vmid: "twitter:image",
    //     name: "twitter:image",
    //     content: `${domain}${baseUrl}${image}`,
    //   });
    // }

    return overrideTags;
  },
  data() {
    const { slug } = this.$route.params;
    // const { p } = this.$route.query;

    let selectedMunicipality = null;
    let typeaheadDefaultItem = null;
    if (slug) {
      const municipality = ppList.municipalities.find((m) => m.slug === slug);
      if (municipality) {
        selectedMunicipality = municipality;
        typeaheadDefaultItem = municipality.name;
      }
    }

    return {
      municipalities: ppList.municipalities,
      municipalityNames: ppList.municipalities.map((m) => m.name),
      selectedMunicipality,
      typeaheadDefaultItem,
      // person: p,
      // notifyUsMailSubject: encodeURIComponent(notifyUsMailSubject),
      // showModal: false,
    };
  },
  computed: {
    // results() {
    //   if (!this.data || !this.data.length || !this.query) {
    //     return [];
    //   }
    //   const upperQuery = this.query.toUpperCase();
    //   return this.data.filter((row) => row.SIMPLE_OBCINA === upperQuery);
    // },
    // resultsByMunicipality() {
    //   return groupBy(this.results, "OBČINA");
    // },
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
      const municipality = ppList.municipalities.find(
        (m) => m.name === selected
      );
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
  .col__content {
    padding: 2.75rem;
  }

  .col--search .col__content {
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
      font-weight: 500;
      font-size: 2.75rem;
      line-height: 1.1;

      &.nobr {
        white-space: nowrap;
      }

      @media (max-width: 1199.98px) {
        font-size: 2rem;
      }

      strong {
        color: #5f235b;
        font-weight: 900;
      }
    }

    p {
      font-weight: 300;
      margin-top: 1.5em;
      margin-bottom: 1.5em;
    }

    form {
      position: relative;

      .simple-typeahead :deep(.simple-typeahead-input) {
        border-radius: 0;
        border: 6px solid #5f235b;
        background: transparent;
        font-size: 1.5rem;
        font-weight: 700;
        height: auto;
        color: #5f235b;
        padding-right: 2em;

        &::placeholder {
          color: rgba(#5f235b, 0.75);
        }

        &:focus {
          outline: 0;
          box-shadow: none;
          background-color: #fcf5de;
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
        fill: #5f235b;
        padding: 0.75em;
      }
    }
  }

  .col--results {
    .col__content {
      background-color: rgba(#f2cc59, 0.2);
      padding-left: 4.75rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 991.98px) {
        padding-left: 2.75rem;
      }

      .empty-state {
        border: 6px solid #5f235b;
        border-radius: 50%;
        $size: 15rem;
        width: $size;
        height: $size;
        padding: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-top: -0.5rem;
          fill: #5f235b;
          height: 100%;
        }
      }

      .results {
        width: 100%;
        height: 100%;

        h5 {
          font-size: 1.25rem;
          margin-top: 3rem;
          margin-bottom: 0;
          border-bottom: 1px solid #e26e53;
          font-weight: 700;

          &:first-child {
            margin-top: 0;
          }
        }

        table {
          table-layout: fixed;

          tr {
            border-bottom: 1px solid #e26e53;

            td {
              height: 3.5rem;
              padding-top: 0;
              padding-bottom: 0;
              vertical-align: bottom;

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
                font-size: 1.1rem;
                line-height: 1.1;
              }

              .proposer {
                font-size: 0.7rem;
                line-height: 1.2;
                margin-left: 1px;
              }

              .response {
                display: flex;
                max-width: 100px;
                align-items: flex-end;
                height: 2.75rem;
                font-size: 0.9rem;

                .promise-icon-wrapper {
                  flex: 0 0 2.75rem;
                  display: flex;
                  align-items: flex-end;
                  justify-content: center;
                  height: 100%;
                  transform: translateY(8px);

                  .promise-icon {
                    display: inline-flex;
                    box-shadow: 2px 2px rgba(#5f235b, 0.75);
                    border-radius: 50%;
                    width: 2rem;
                    height: 2rem;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    background-size: 90%;
                    background-position: center center;
                    background-repeat: no-repeat;
                    flex-shrink: 0;

                    &.cross {
                      background-color: #e26e53;
                      background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-434 236 90 90' fill='%235f235b'><path d='M-362.1 265.6l-11.6-11.6-15.4 15.4-15.3-15.4-11.6 11.6 15.4 15.3-15.4 15.4 11.6 11.6 15.4-15.3 15.3 15.3 11.6-11.6-15.3-15.3z'/></svg>");
                    }

                    &.star,
                    &.check {
                      width: 2.75rem;
                      height: 2.75rem;
                    }

                    &.star {
                      background-size: 75%;
                      background-color: #f2cc59;
                      background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%235f235b'><path d='M720 170l-29.62-15.003-29.152 15.895 5.116-32.806-24.126-22.813L675 110l14.24-29.994 15.146 29.548 32.927 4.275-23.422 23.535z' transform='matrix(.8623 0 0 .90222 -544.784 -63.183)' stroke='%235f235b' stroke-width='4.535' stroke-linecap='round' stroke-linejoin='round' overflow='visible'/></svg>");
                    }

                    &.check {
                      background-size: 69%;
                      background-color: #5f235b;
                      background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23f2cc59'><path d='M38.3 87.4L2.5 51.6 18.1 36l20.2 20.2 43.6-43.6 15.6 15.6z'/></svg>");
                    }
                  }
                }

                .promise-text {
                  margin-left: 1rem;
                  line-height: 1.1;

                  @media (max-width: 576px) {
                    font-size: 0.7rem;
                  }
                }
              }

              .social {
                height: 2.75rem;
                background-color: #5f235b;
                box-shadow: 2px 2px rgba(#5f235b, 0.75);
                transform: translateY(8px);
                margin-left: 1rem;
                font-weight: 900;
                color: #f2cc59;
                line-height: 1.1;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                cursor: pointer;
                transition: all 0.15s ease-in-out;

                @media (max-width: 576px) {
                  font-size: 0.8rem;
                }

                &:hover {
                  background-color: #864b82;
                }
              }

              .sad-face-wrapper {
                margin-left: 1rem;
                text-align: center;

                .sad-face {
                  width: 2.5rem;
                  height: 2.5rem;
                  color: #e26e53;
                }
              }
            }
          }
        }

        .btn {
          margin-top: 2rem;
          background-color: #5f235b;
          color: #f2cc59;
          box-shadow: 6px 6px rgba(#5f235b, 0.75);

          &.btn-municipality:hover {
            transition: all 0.15s ease-in-out;
            background-color: #864b82;
          }

          &:active {
            transform: translate(0);
            box-shadow: 6px 6px rgba(#5f235b, 0.75);
          }
        }
      }
    }

    .notify-us {
      text-align: center;
      font-size: 0.75rem;
      margin-top: 0.5rem;
      padding: 0 2rem;
    }
  }
}
</style>
