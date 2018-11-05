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
            :value="query"
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
        <div class="empty-state">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M43 14H17c-.379 0-.725-.214-.895-.553l-2-4A1 1 0 0 1 15 8h30a1 1 0 0 1 .895 1.447l-2 4c-.17.339-.516.553-.895.553zm-25.382-2h24.764l1-2H16.618l1 2zM59 60H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h58a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM2 58h56v-2H2v2z" /><path d="M43 56H17a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v42a1 1 0 0 1-1 1zm-25-2h24V14H18v40z" /><path d="M17 56H3a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1zM4 54h12V28H4v26zM57 56H43a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1zm-13-2h12V28H44v26zM30 33c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.308 0-6 2.691-6 6s2.692 6 6 6 6-2.691 6-6-2.692-6-6-6z" /><path d="M30 26a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1z" /><path d="M32 26h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM30 10a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zM34 10a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zM26 10a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zM17 28H3c-.379 0-.725-.214-.895-.553l-2-4A1 1 0 0 1 1 22h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM3.618 26H16v-2H2.618l1 2zM57 28H43a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 .895 1.447l-2 4c-.17.339-.516.553-.895.553zm-13-2h12.382l1-2H44v2zM36 56H24a1 1 0 0 1-1-1V43a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-11-2h10V44H25v10z" /><path d="M38 44H22a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm-15-2h14v-1H23v1z" /><path d="M35 41H25a1 1 0 0 1-1-1c0-2.757 2.692-5 6-5s6 2.243 6 5a1 1 0 0 1-1 1zm-8.771-2h7.543c-.55-1.164-2.033-2-3.771-2s-3.222.836-3.772 2zM32 50h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM13 52H7a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1zm-5-2h4V32H8v18z" /><path d="M13 37H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 47H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM13 42H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 52h-6a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1zm-5-2h4V32h-4v18z" /><path d="M53 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 47h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM53 42h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
          </svg>
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
export default {
  name: 'FindCandidates',
  data() {
    const { query } = this.$route.params;
    return {
      query: query || '',
    };
  },
  methods: {
    onSubmitLocation() {
      const loc = (this.$refs.locationInput && this.$refs.locationInput.value) || '';
      const query = loc.trim().toLowerCase();
      if (query) {
        this.$router.push(`/${query}`);
      } else {
        this.$router.push('/');
      }
    },
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

      .empty-state {
        border: 6px solid #5f235b;
        border-radius: 50%;
        $size: 15rem;
        width: $size;
        height: $size;
        padding: 2.5rem;

        svg {
          margin-top: -0.5rem;
          fill: #5f235b;
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
