<template>
  <div class="row find-candidates-row mx-0">
    <div class="col-lg-5 col--search px-0">
      <div class="col__content">
        <h2>
          Kdo v tvoji
          občini <strong>obljublja</strong>
          participatorni proračun?
        </h2>
        <p>
          Vpiši ime svoje občine in poglej katere kandidatke in kandidati so se
          zavezali, da participatorni proračun pripeljejo tudi v tvoj kraj!
        </p>
        <form
          action="javascript:;"
          @submit="onSubmitLocation"
        >
          <input
            ref="locationInput"
            v-model="inputValue"
            type="text"
            class="form-control"
            placeholder="vpiši občino"
          >
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
    </div>
    <div class="col-lg-7 col--results px-0">
      <div class="col__content">
        <div
          v-if="!results || !results.length"
          class="empty-state"
        >
          <loader v-if="loading" />
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M43 14H17c-.379 0-.725-.214-.895-.553l-2-4A1 1 0 0 1 15 8h30a1 1 0 0 1 .895 1.447l-2 4c-.17.339-.516.553-.895.553zm-25.382-2h24.764l1-2H16.618l1 2zM59 60H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h58a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM2 58h56v-2H2v2z" /><path d="M43 56H17a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v42a1 1 0 0 1-1 1zm-25-2h24V14H18v40z" /><path d="M17 56H3a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1zM4 54h12V28H4v26zM57 56H43a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1zm-13-2h12V28H44v26zM30 33c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.308 0-6 2.691-6 6s2.692 6 6 6 6-2.691 6-6-2.692-6-6-6z" /><path d="M30 26a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1z" /><path d="M32 26h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM30 10a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zM34 10a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zM26 10a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zM17 28H3c-.379 0-.725-.214-.895-.553l-2-4A1 1 0 0 1 1 22h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM3.618 26H16v-2H2.618l1 2zM57 28H43a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 .895 1.447l-2 4c-.17.339-.516.553-.895.553zm-13-2h12.382l1-2H44v2zM36 56H24a1 1 0 0 1-1-1V43a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-11-2h10V44H25v10z" /><path d="M38 44H22a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm-15-2h14v-1H23v1z" /><path d="M35 41H25a1 1 0 0 1-1-1c0-2.757 2.692-5 6-5s6 2.243 6 5a1 1 0 0 1-1 1zm-8.771-2h7.543c-.55-1.164-2.033-2-3.771-2s-3.222.836-3.772 2zM32 50h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM13 52H7a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1zm-5-2h4V32H8v18z" /><path d="M13 37H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 47H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 42H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 52h-6a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1zm-5-2h4V32h-4v18z" /><path d="M53 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 47h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 42h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
          </svg>
        </div>
        <div
          v-else
          class="results"
        >
          <table class="w-100">
            <tbody>
              <tr
                v-for="(row, i) in results"
                :key="row[1]"
              >
                <td>
                  <div class="name">{{ row[1] }}</div>
                  <div class="proposer">
                    <small>({{ row[2] }})</small>
                  </div>
                </td>
                <td>
                  <div class="response">
                    <div class="promise-icon-wrapper">
                      <span
                        :class="[
                          'promise-icon',
                          { check: i % 3 === 0, cross: i % 3 === 1, star: i % 3 === 2 }
                        ]"
                      />
                    </div>
                    <div
                      class="promise-text"
                      v-text="i % 3 === 0
                        ? 'se je zaobljubil'
                        : i % 3 === 1
                          ? 'se ni zaobljubil'
                      : 'že izvaja'"
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <div class="social">
                      POVEJ NAPREJ!
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            class="btn btn-block"
          >
            DELI SVOJO OBČINO
          </button>
        </div>
      </div>
      <div class="notify-us">
        <a
          href="mailto:maja@danesjenovdan.si?subject=Participatorni%20proračun"
          target="_blank"
        >
          Si kandidat/-ka in nas želiš obvestiti o svoji nameri?
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Papa from 'papaparse';
import Loader from './Loader.vue';

export default {
  name: 'FindCandidates',
  components: {
    Loader,
  },
  data() {
    const { query } = this.$route.params;
    return {
      inputValue: (query || '').toUpperCase(),
      query: (query || '').toLowerCase(),
      loading: false,
      data: null,
    };
  },
  computed: {
    results() {
      if (!this.data || !this.data.length || !this.query) {
        return [];
      }
      const upperQuery = this.query.toUpperCase();
      return this.data.filter(row => row[0].indexOf(upperQuery) !== -1);
    },
  },
  mounted() {
    this.loading = true;
    const baseUrl = process.env.BASE_URL;
    axios
      .get(`${baseUrl}kandidati_names.csv`)
      .then((res) => {
        const data = Papa.parse(res.data);
        if (data.errors.length) {
          // eslint-disable-next-line no-console
          console.error('CSV Parse Errors:', data.errors);
        }
        this.data = data.data;
        this.loading = false;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('CSV Fetch Error:', error);
      });
  },
  methods: {
    onSubmitLocation() {
      this.loading = true;
      this.query = (this.inputValue || '').trim().toLowerCase();
      this.inputValue = this.query.toUpperCase();
      this.$router.push(`/${this.query}`);
      this.loading = false;
    },
  },
  metaInfo() {
    return {
      titleTemplate: `${this.query ? `${this.query} - ` : ''}%s`,
      meta: [
        // url
        {
          vmid: 'og:url',
          property: 'og:url',
          content: this.query, // this is added to the template from Home.vue
        },
        // title
        {
          vmid: 'og:title',
          property: 'og:title',
          content: `TODO: ${this.query} og title`,
        },
        {
          vmid: 'twitter:title',
          name: 'twitter:title',
          content: `TODO: ${this.query} og title`,
        },
        // description
        {
          vmid: 'og:description',
          property: 'og:description',
          content: `TODO: ${this.query} og desc`,
        },
        {
          vmid: 'twitter:description',
          name: 'twitter:description',
          content: `TODO: ${this.query} og desc`,
        },
      ],
    };
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

      input {
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

      svg {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        fill: #5f235b;
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
              }
            }
          }

          // @media (max-width: 991.98px) {
          //   tbody,
          //   tr,
          //   tr td:nth-child(1) {
          //     display: block;
          //     width: 100%;
          //   }

          //   tr {
          //     margin-bottom: 2rem;

          //     td {
          //       height: 2.75rem;

          //       &:nth-child(1) {
          //         height: auto;
          //       }
          //     }
          //   }
          // }
        }

        .btn {
          margin-top: 2rem;
          background-color: #5f235b;
          color: #f2cc59;
          box-shadow: 6px 6px rgba(#5f235b, 0.75);

          &:not(.disabled):not([disabled]):hover {
            background-color: rgba(#5f235b, 0.9);
            color: #fff;
          }

          &:active {
            transform: translate(4px, 4px);
            box-shadow: 2px 2px rgba(#5f235b, 0.75);
          }
        }
      }
    }

    .notify-us {
      text-align: center;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
  }
}
</style>
