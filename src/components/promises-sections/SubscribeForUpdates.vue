<template>
  <div class="container">
    <div class="row subscribe-for-updates-row mx-0">
      <div class="col-lg-6">
        <div class="cta">
          <h2>
            Od zmagovalk in zmagovalcev na volitvah bomo zahtevali izpolnitev
            predvolilne zaveze!
          </h2>
          <p>
            Pusti svoj e-naslov, mi pa se ti bomo oglasili s pomembnimi
            novicami!
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="subscribe">
          <form action="javascript:;" @submit.prevent="onSubscribeClick">
            <div class="form-group">
              <label for="emailInput" class="email-label">E-naslov</label>
              <input
                id="emailInput"
                ref="emailInput"
                type="email"
                class="form-control"
                required
              />
              <div class="custom-control custom-checkbox">
                <input
                  id="emailCheck"
                  type="checkbox"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="emailCheck">
                  Strinjam se, da mi občasno pošljete elektronsko sporočilo.
                </label>
              </div>
            </div>
            <button ref="subscribeButton" class="btn" type="submit">
              Naroči me!
            </button>
            <div :class="['email-confirm', { visible: emailSent }]">
              Na tvoj spletni naslov smo poslali navodila, kako potrdiš
              naročnino.
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubscribeForUpdates",
  data() {
    return {
      emailSent: false,
    };
  },
  methods: {
    async onSubscribeClick() {
      const btn = this.$refs.subscribeButton;
      const email = this.$refs.emailInput.value;
      const oldBtnText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Nalaganje...";

      try {
        const response = await axios.post(
          "https://podpri.djnd.si/api/subscribe/",
          {
            email,
            segment: 11,
          }
        );
        if (response.data?.msg === "mail sent") {
          this.emailSent = true;
          btn.textContent = oldBtnText;
          btn.disabled = false;
        } else {
          btn.textContent = "Napaka :(";
        }
      } catch {
        btn.textContent = "Napaka :(";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe-for-updates-row {
  padding: 110px 0;

  .cta {
    h2 {
      color: #fff;
      text-transform: uppercase;
      font-size: 50px;
      font-weight: 700;
      line-height: 1.1;

      @media (max-width: 991.98px) {
        font-size: 38px;
      }
    }

    p {
      margin-top: 35px;
      color: #fff;
      font-family: "BioRhyme";
      font-size: 24px;

      @media (max-width: 991.98px) {
        font-size: 20px;
      }
    }
  }

  .subscribe {
    position: relative;
    background-color: #f2cc59;
    padding: 32px;
    margin-left: 32px;

    @media (max-width: 991.98px) {
      margin-left: 0;
      margin-top: 16px;
    }

    form {
      .form-group {
        position: relative;

        .email-label {
          margin-bottom: 0;
          font-size: 20px;
          font-weight: 700;
          color: #000;
        }

        .form-control {
          border-radius: 0;
          border: 6px solid #291749;
          background-color: #fbf5e2;
          font-size: 1.5rem;
          font-weight: 700;
          height: auto;
          color: #291749;
        }

        .custom-checkbox {
          margin-top: 12px;
          padding-left: 36px;
          min-height: 30px;
          display: flex;
          align-items: center;

          .custom-control-label {
            position: static;
            display: block;
            color: #000000;
            font-family: "BioRhyme";
            font-size: 16px;
            line-height: 1.2;

            &::before,
            &::after {
              width: 30px;
              height: 30px;
              left: 0;
              top: 0;
            }

            &::before {
              border: 6px solid #291749;
              border-radius: 0;
              background-color: #fbf5e2;
            }
          }

          .custom-control-input:checked ~ .custom-control-label::after {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23291749' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
          }
        }
      }

      .btn {
        &,
        &:hover,
        &:active {
          padding: 8px 42px;
          background-color: #6037a9;
          color: #fefefe;
          box-shadow: 6px 6px #291749;
          font-weight: 600;
        }

        &:active {
          box-shadow: 2px 2px #291749;
        }
      }
    }

    .email-confirm {
      position: absolute;
      inset: 0;
      padding: 32px;
      display: none;
      align-items: center;
      justify-content: center;
      background-color: #f2cc59dd;
      text-align: center;
      font-family: "BioRhyme";
      font-size: 27px;
      font-weight: 800;
      line-height: 1.2;
      color: #000000;

      &.visible {
        display: flex;
      }
    }
  }
}
</style>
