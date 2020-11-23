<template>
  <div class="wrapper">
    <div class="container">
      <div class="row p-sm-5 px-0 pt-0">
        <div class="row find-candidates-row mx-0">
          <div class="col-xl-5 col-lg-12 col--search px-0 mb-3 align-self-center">
            <div id="first_box" class="col__content mb-3">
              <h2>
                <nobr>DRŽIMO ŽUPANE</nobr> <wbr>
                <nobr> ZA <strong> BESEDO! </strong> </nobr>
              </h2>
              <p>
                Pomagaj jih spomniti, da so se zaobljubili k
                izvajaju participativnega proračuna. Pošlji jim sporočilo!
              </p>
              <form
                      action="javascript:"
                      @submit="onSubmitLocation"
              >
                <suggestions
                        v-model="inputValue"
                        :options="{
                placeholder: 'vpiši občino',
                inputClass: 'form-control',
              }"
                        :on-input-change="updateItems"
                        :on-item-selected="onSubmitLocation"
                />
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        @click="onSubmitLocation"
                >
                  <!-- eslint-disable-next-line max-len -->
                  <path d="M511.987 454.086L375.65 317.748c21.452-32.404 33.936-71.186 33.936-112.934C409.586 91.693 317.903.009 204.8.009 91.695.009.013 91.693.013 204.814c0 113.09 91.683 204.805 204.787 204.805 41.731 0 80.559-12.529 112.932-33.967L454.068 511.99l57.919-57.904zM58.042 204.845c0-81.06 65.715-146.745 146.758-146.745 81.059 0 146.773 65.685 146.773 146.745 0 81.061-65.715 146.776-146.773 146.776-81.043 0-146.758-65.715-146.758-146.776z" />
                </svg>
              </form>
            </div>
            <div class="text-center">
          <span>
            <img class="icon" src="../assets/point_down.svg" alt="point_down" style="-webkit-transform: scaleX(-1);-moz-transform: scaleX(-1);-ms-transform: scaleX(-1);-o-transform: scaleX(-1);transform: scaleX(-1);">
            Ne najdeš svoje občine? Premakni se nižje.
            <img class="icon" src="../assets/point_down.svg" alt="point_down">
          </span>
            </div>
          </div>
          <div class="col-xl-7 col-lg-12 col--results pr-xl-0 pl-xl-5">
            <happy-email-section :info="selectedObcina" v-if="selectedObcina && selectedObcina['IZVAJA PP'] === '1'"></happy-email-section>
            <span v-if="query && inputValue && query.toUpperCase() === inputValue.toUpperCase() &&
                                        selectedObcina && selectedObcina['IZVAJA PP'] !== '1'">
              <div class="row pb-3" >
              <div class="col-sm-6 col-12 mb-sm-0 mb-3 text-center-xs align-self-center">
                <span class="py-auto">Kopiraj sporočilo in ga pošlji na: </span>
              </div>
              <div class="col p-2 text-center-xs">
                <input  readonly
                        :value="selectedObcina['MAIL']"
                        class="form-control"
                        spellcheck="false"
                        @focus="$event.target.select()"
                        style="font-size: 1rem; padding: inherit;"
                >
              </div>
            </div>
            </span>
            <span v-else-if="!(selectedObcina && selectedObcina['IZVAJA PP'] === '1')">
              <div class="row">
                <div class="col my-4 mt-xl-0" style="font-size: 25px; font-weight: 500; ">
                  <span>Izberi občino, da ti prikažemo županov/-jin e-naslov, nato pa mu/ji pošlji spodnje sporočilo.</span>
                </div>
              </div>
            </span>
            <div v-show="!selectedObcina || (selectedObcina && selectedObcina['IZVAJA PP'] !== '1')" class="row">
              <div class="col" >
                  <textarea readonly
                            id="textarea"
                            class="form-control text-left"
                            @focus="$event.target.select()"
                            @change="resizeTextarea"
                  >{{ textareaInput }}</textarea>
              </div>
            </div>
            <span v-if="query && inputValue && query.toUpperCase() === inputValue.toUpperCase()">
              <hr class="separator">
              <div class="row">
                <div class="col-sm-6 col-12 mb-sm-0 mb-3 text-center-xs">
                  <span v-if="selectedObcina && selectedObcina['IZVAJA PP'] === '1'">Pohvali župana/-jo na družbenih omrežjih!</span>
                  <span v-else>Opozori župana/-jo na participativni proračun tudi na družbenih omrežjih!</span>
                </div>
                <div class="col pb-5 pb-sm-0">
                  <button
                          :class="[
                          'btn',
                          'btn-block',
                          'btn-municipality',
                          { 'btn-municipality--hover': hoveredSocialMunicipality },
                        ]"
                        @mouseenter="onMouseEnterMunicipality"
                        @mouseleave="onMouseLeaveMunicipality"
                        @click="onShareClickMunicipality($event, null)"
                  >
                    <span>DELI!</span>
                  </button>
                </div>
              </div>
            </span>
            <modal
                    v-if="showModal"
                    :share-link="shareLink"
                    :pp="true"
                    :obcina-info="data.filter(x => x.SIMPLE_OBCINA.toLowerCase() === query.toLowerCase())[0]"
                    @close="showModal = false"
                    @twShare="onShareClickMunicipality($event, 'tw', showModal[0], showModal[1])"
                    @fbShare="onShareClickMunicipality($event, 'fb', showModal[0], showModal[1])"
                    @emailShare="onShareClickMunicipality($event, 'mail', showModal[0], showModal[1])"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Papa from 'papaparse';
  import { transliterate as tr } from 'transliteration';
  import Suggestions from 'v-suggestions';
  import 'v-suggestions/dist/v-suggestions.css';
  import Loader from './Loader.vue';
  import Modal from './Modal.vue';
  import HappyEmailSection from './HappyEmailSection.vue';
  import { openSocialShareLink } from '../helpers/social';
  // eslint-disable-next-line
  import csvData from '!raw-loader!../assets/seznam_kandidatov.csv';

  function groupBy(arr, key) {
  return arr.reduce((acc, cur) => {
    acc[cur[key]] = acc[cur[key]] || [];
    acc[cur[key]].push(cur);
    return acc;
  }, {});
}

const domain = process.env.NODE_ENV === 'production' ? 'https://danesjenovdan.si' : 'http://localhost:8801';
const baseUrl = process.env.BASE_URL;

const notifyUsMailSubject = 'Namera o uvedbi participativnega proračuna v moji občini';

const shareTitle = 'Kje je participativni proračun?';
const shareContent = 'Preveri, katere občine ga že izvajajo, predvsem pa, kateri župani še ' +
                      'niso izpolnili svoje obljube.';

const sharePersonM = '{name} obljublja participativni proračun';
const sharePersonF = '{name} obljublja participativni proračun';

const shareElectedPersonM = '{name} se je zaobljubil, da bo uvedel participativni proračun.';
const shareElectedPersonF = '{name} se je zaobljubila, da bo uvedla participativni proračun.';

export default {
  name: 'FindCandidates',
  components: {
    Loader,
    Suggestions,
    Modal,
    HappyEmailSection
  },
  metaInfo() {
    const overrideTags = {
      meta: [],
    };

    if (this.person || this.query) {
      // let title = shareTitle;
      let content = shareContent;
      let image = `og-image-obcina.png/gen?t=${encodeURIComponent(this.query)}`;

      // url
      // overrideTags.meta.push({
      //   vmid: 'og:url',
      //   property: 'og:url',
      //   content: `${domain}${baseUrl}${encodeURIComponent(this.query)}`,
      // });
      //
      // // description
      // overrideTags.meta.push({
      //   vmid: 'og:description',
      //   property: 'og:description',
      //   content,
      // });
      // overrideTags.meta.push({
      //   vmid: 'twitter:description',
      //   name: 'twitter:description',
      //   content,
      // });

      // image
      overrideTags.meta.push({
        vmid: 'og:image',
        property: 'og:image',
        content: `${domain}${baseUrl}${image}`,
      });
      overrideTags.meta.push({
        vmid: 'twitter:image',
        name: 'twitter:image',
        content: `${domain}${baseUrl}${image}`,
      });
    }

    return overrideTags;
  },
  data() {
    const { query } = this.$route.params;
    const { p } = this.$route.query;

    const data = Papa.parse(csvData, { header: true, skipEmptyLines: true });
    if (data.errors.length) {
      // eslint-disable-next-line no-console
      console.error('CSV Parse Errors:', data.errors);
    }
    const allData = data.data
      .map(row => ({
        ...row,
        SIMPLE_OBCINA: row['OBČINA'].replace(/(?:MESTNA )?OBČINA /gi, ''),
      }))
      .filter(row => row.ZMAGA !== '')
      .filter(row => row['PRVI DROPDOWN'] === '1')
    const allMunicipalities = Object.keys(groupBy(allData, 'SIMPLE_OBCINA'));

    return {
      inputValue: query && allData.map(row => row.SIMPLE_OBCINA).includes(query.toUpperCase()) ? query.toUpperCase() : '',
      query: (query || '').toLowerCase(),
      person: p,
      loading: false,
      data: allData,
      allMunicipalities,
      hoveredSocial: null,
      hoveredSocialMunicipality: false,
      notifyUsMailSubject: encodeURIComponent(notifyUsMailSubject),
      showModal: false,
      selectedObcina: query && allData.filter(x => x.SIMPLE_OBCINA.toLowerCase() === query.toLowerCase()).length ?
                      allData.filter(x => x.SIMPLE_OBCINA.toLowerCase() === query.toLowerCase())[0] : null,
    };
  },
  computed: {
    results() {
      if (!this.data || !this.data.length || !this.query) {
        return [];
      }
      const upperQuery = this.query.toUpperCase();
      return this.data.filter(row => row.SIMPLE_OBCINA === upperQuery);
    },
    resultsByMunicipality() {
      return groupBy(this.results, 'OBČINA');
    },
    shareLink() {
      if (this.showModal && this.showModal.length) {
        const row = this.resultsByMunicipality[this.showModal[0]][this.showModal[1]];
        const ime = row.KANDIDAT;
        const docHref = typeof document !== 'undefined' ? document.location.href.split('?')[0] : '';
        return `${docHref}?p=${encodeURIComponent(ime)}`;
      }
      return typeof document !== 'undefined' ? document.location.href : '';
    },
    textareaInput(){
      let obcina;
      if(this.query){
        if(this.data.filter(x => x.SIMPLE_OBCINA.toLowerCase() === this.query.toLowerCase()).length){
          obcina = this.data.filter(x => x.SIMPLE_OBCINA.toLowerCase() === this.query.toLowerCase())[0].OBČINA
        }else {
          obcina = '<ime obcine>'
        }
      }else {
        obcina = '<ime obcine>'
      }
      return 'Spoštovani,\n' + '\n' +
        'želim vas spomniti na vašo obljubo pred lokalnimi volitvami 2018, s katero ste se javno zavezali, da boste v primeru izvolitve tekom vašega mandata pričeli z izvajanjem participativnega proračuna.\n' + '\n' +
        'Participativni proračun izvaja že 24 slovenskih občin in želim si, da se jim pridruži tudi ' + obcina + '.\n' + '\n' +
        'Ustrezna izvedba participativnega proračuna občankam in občanom omogoča, da neposredno odločajo o porabi deleža občinskih sredstev. Uvedba participativnih mehanizmov prinaša pozitivne učinke za prebivalce, ki se počutijo opolnomočeni in bolj povezani s svojo lokalno skupnostjo. Hkrati pa si tudi vi okrepite zaupanje in legitimnost med občankami in občani, v širši skupnosti pa ste prepoznani kot vključujoči predstavniki ljudstva.\n' + '\n' +
        'Pregled trenutnega stanja razširjenosti participativnega proračuna v Sloveniji lahko najdete na: https://danesjenovdan.si/participativni-proracun/.\n' + '\n' +
        'V upanju, da boste držali svojo zavezo vašim volivkam in volivcem, vas lepo pozdravljam.';
    }
  },
  methods: {
    updateItems(text) {
      const upperInput = tr(text.toUpperCase());
      const filteredItems = this.allMunicipalities.filter(m => tr(m).indexOf(upperInput) !== -1);
      if (text.length > 2 || filteredItems.length < 5) {
        return filteredItems;
      }
      return [];
    },
    onSubmitLocation(selected) {
      if(this.data.filter(x => x.SIMPLE_OBCINA.toLowerCase() === selected.toLowerCase()).length){
        const text = typeof selected === 'string' ? selected : this.inputValue || '';
        this.loading = true;
        this.query = text.trim().toLowerCase();
        this.inputValue = this.query.toUpperCase();
        this.$router.push(`/${this.query}`);
        this.hoveredSocial = null;
        this.loading = false;
        this.selectedObcina = this.data.filter(x => x.SIMPLE_OBCINA.toLowerCase() === selected.toLowerCase())[0];
        this.$emit('new-input');
        this.resizeTextarea()
      }
    },
    clearInput(){
      this.inputValue = '';
      this.query = '';
      this.selectedObcina = null;
      this.resizeTextarea()
    },
    onMouseEnter(i) {
      this.hoveredSocial = i;
    },
    onMouseLeave() {
      this.hoveredSocial = null;
    },
    onMouseEnterMunicipality() {
      this.hoveredSocialMunicipality = true;
    },
    onMouseLeaveMunicipality() {
      this.hoveredSocialMunicipality = false;
    },
    onShareClickMunicipality($event, type) {
      if (!type) {
        this.showModal = true;
        return;
      }

      const shareHashtag = '';
      const link = 'https://danesjenovdan.si/participativni-proracun/'

      openSocialShareLink(type, shareTitle, shareContent, link, shareHashtag);
    },
    resizeTextarea(){
      let timer = setInterval(() => {
        let dom = document.getElementById('textarea')
        if (dom) {
          dom.style.height = '';
          dom.style.height = dom.scrollHeight + 12 + 'px';
          clearInterval(timer);
        }else if(!this.inputValue){
          clearInterval(timer)
        }
      }, 100) // check every 100ms
    }
  },
  mounted() {
    this.resizeTextarea()
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fcf5de;

  .find-candidates-row {
    .col__content {
      padding: 2.75rem;
    }

    .col--search .col__content {
      background-color: #f2cc59;

      @media (max-width: 991.98px) {
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0;
      }

      h2 {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 1.1;

        @media (max-width: 1199.98px) {
          font-size: 2rem;
        }

        strong {
          color: #262539;
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

        .v-suggestions /deep/ .form-control {
          border-radius: 0;
          border: 6px solid #262539;
          background: transparent;
          font-size: 1.5rem;
          font-weight: 700;
          height: auto;
          color: #e26e53;
          padding-right: 2em;

          &::placeholder {
            color: rgba(#e26e53, 0.75);
          }

          &:focus {
            outline: 0;
            box-shadow: none;
            background-color: #fcf5de;
          }
        }

        .v-suggestions /deep/ .suggestions {
          top: 3.5rem;
          background-color: #f2cc59;

          .items {
            border-color: #262539;
            border-width: 4px 4px 0 4px;
          }

          .item {
            border-bottom: 4px solid #262539;
            color: #e26e53;
            font-weight: 500;
            padding: 0.35rem 0.8rem;

            &.is-active,
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
          fill: #262539;
          cursor: pointer;
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
                  // text-transform: uppercase;
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

                  &.social--hover {
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
        }
      }

      .text-center-xs {
        @media (max-width: 575.98px) {
          text-align: center;
        }
      }

      .form-control {
        border-radius: 0;
        border: 6px solid #e26e53;
        background: #fcf5de;
        font-size: 0.9rem;
        font-weight: 500;
        height: auto;
        padding: 30px;
        text-align: center;

        &::placeholder {
          color: rgba(#5f235b, 0.75);
        }

        &:focus {
          outline: 0;
          box-shadow: none;
          background-color: #fcf5de;
        }
      }

      .notify-us {
        text-align: center;
        font-size: 0.75rem;
        margin-top: 0.5rem;
        padding: 0 2rem;
      }

      .separator {
        border-color: #e26e53;
        border-top-width: 2px;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .btn {
        /*margin-top: 2rem;*/
        background-color: #262539;
        color: #f2cc59;
        box-shadow: 6px 6px rgba(#5f235b, 0.75);

        &.btn-municipality--hover {
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
}

.icon {
  height: 1.5em;
  width: 1.5em;
}
</style>
