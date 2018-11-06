<template>
  <div class="row subscribe-for-updates-row mx-0">
    <div class="col-lg-7 px-0 d-flex align-items-center">
      <div class="cta w-100">
        <p class="lead">
          ZMAGOVALCE VOLITEV BOMO NA OBLJUBO OPOMINJALI <strong>TUDI PO VOLITVAH</strong>.
        </p>
        <p>
          Pusti svoj e-naslov, da ti javimo, ko bo kaj novega!
        </p>
      </div>
    </div>
    <div class="col-lg-5 px-0">
      <div class="subscribe w-100">
        <form action="javascript:;">
          <div class="form-group">
            <input
              ref="emailInput"
              type="text"
              class="form-control"
              placeholder="E-naslov"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <!-- eslint-disable-next-line max-len -->
              <path d="M49.631 49.332h11.257a1.886 1.886 0 0 0 0-3.772H49.631a1.886 1.886 0 0 0 0 3.772zM1.796 32.234L12.37 53.352a5.401 5.401 0 0 0 7.24 2.408l33.802-16.926a5.401 5.401 0 0 0 2.408-7.24L45.246 10.478a5.363 5.363 0 0 0-.881-1.266l.001-.001-.003-.001a5.377 5.377 0 0 0-1.573-1.161l-.003-.002-.001-.001-.011-.005-.007-.003-.161-.075-.005-.001a5.45 5.45 0 0 0-1.611-.43l-.004-.002v.001a5.359 5.359 0 0 0-2.98.538L4.204 24.995a5.358 5.358 0 0 0-2.211 2.055h-.001l-.002.005c-.275.463-.48.964-.608 1.485l-.002.006-.001.002-.001.004-.003.015-.002.01-.027.12-.02.093-.003.01-.003.017v.008a5.382 5.382 0 0 0-.013 1.928v.006h.001c.089.502.249.998.488 1.475zM20.08 34.82l-5.098 15.323-9.224-18.421L20.08 34.82zm14.353-4.294l16.31 5.426-32.472 16.26 5.519-16.589 6.039 1.307c.432.094.869.031 1.243-.157.371-.186.68-.492.865-.891l2.496-5.356zm4.568-18.736l-9.848 21.133-22.596-4.887L39.001 11.79zm3.449 1.53l9.551 19.074-15.964-5.311L42.45 13.32zM40.35 56.5h20.537a1.886 1.886 0 0 0 0-3.772H40.35a1.886 1.886 0 0 0 0 3.772z" />
            </svg>
          </div>
          <button
            ref="subscribeButton"
            class="btn btn-block"
            @click="onSubscribeClick"
          >
            Naroči me!
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SubscribeForUpdates',
  data() {
    return {};
  },
  methods: {
    onSubscribeClick() {
      const btn = this.$refs.subscribeButton;

      btn.disabled = true;
      axios
        .get(`https://spam.djnd.si/deliver-email-pp/?email=${this.$refs.emailInput.value}`)
        .then((res) => {
          if (String(res.data) === '1') {
            btn.textContent = 'HVALA';
          } else {
            btn.textContent = 'Napaka :(';
            // eslint-disable-next-line no-console
            console.error('Error: res.data:', res.data);
          }
        })
        .catch((error) => {
          btn.textContent = 'Napaka :(';
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe-for-updates-row {
  .cta {
    margin: 0 2.75rem;

    @media (max-width: 991.98px) {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.25;

      &.lead {
        color: #27223a;
        font-size: 2.75rem;
        font-weight: 500;
        line-height: 1.1;

        @media (max-width: 1199.98px) {
          font-size: 2rem;
        }

        strong {
          color: #e26e53;
          font-weight: 900;
        }
      }
    }
  }

  .subscribe {
    background-color: #e26e53;
    padding: 2rem 2.75rem 2.75rem 2.75rem;

    form {
      .form-group {
        position: relative;

        svg {
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          fill: #f2cc59;
          padding: 0.5em 0.5em 0.5em 0;
        }

        .form-control {
          border-radius: 0;
          border: 0;
          border-bottom: 4px solid #5f235b;
          background: transparent;
          font-size: 1.5rem;
          font-weight: 500;
          height: auto;
          color: #5f235b;
          padding-left: 2em;

          &::placeholder {
            color: rgba(#5f235b, 0.75);
          }

          &:focus {
            outline: 0;
            box-shadow: none;
          }
        }
      }
    }
  }
}
</style>
