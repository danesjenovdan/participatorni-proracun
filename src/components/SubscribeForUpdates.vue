<template>
  <div class="row subscribe-for-updates-row mx-0">
    <div class="col-md-7 px-0 d-flex align-items-center">
      <div class="cta w-100">
        <p class="lead">
          ZMAGOVALCE VOLITEV BOMO NA OBLJUBO OPOMINJALI <strong>TUDI PO VOLITVAH</strong>.
        </p>
        <p>
          Pusti svoj email naslov, da ti javimo, kaj je novega!
        </p>
      </div>
    </div>
    <div class="col-md-5 px-0 d-flex">
      <div class="subscribe w-100">
        <form action="javascript:;">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="email"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <!-- eslint-disable-next-line max-len -->
              <path d="M49.631 49.332h11.257a1.886 1.886 0 0 0 0-3.772H49.631a1.886 1.886 0 0 0 0 3.772zM1.796 32.234L12.37 53.352a5.401 5.401 0 0 0 7.24 2.408l33.802-16.926a5.401 5.401 0 0 0 2.408-7.24L45.246 10.478a5.363 5.363 0 0 0-.881-1.266l.001-.001-.003-.001a5.377 5.377 0 0 0-1.573-1.161l-.003-.002-.001-.001-.011-.005-.007-.003-.161-.075-.005-.001a5.45 5.45 0 0 0-1.611-.43l-.004-.002v.001a5.359 5.359 0 0 0-2.98.538L4.204 24.995a5.358 5.358 0 0 0-2.211 2.055h-.001l-.002.005c-.275.463-.48.964-.608 1.485l-.002.006-.001.002-.001.004-.003.015-.002.01-.027.12-.02.093-.003.01-.003.017v.008a5.382 5.382 0 0 0-.013 1.928v.006h.001c.089.502.249.998.488 1.475zM20.08 34.82l-5.098 15.323-9.224-18.421L20.08 34.82zm14.353-4.294l16.31 5.426-32.472 16.26 5.519-16.589 6.039 1.307c.432.094.869.031 1.243-.157.371-.186.68-.492.865-.891l2.496-5.356zm4.568-18.736l-9.848 21.133-22.596-4.887L39.001 11.79zm3.449 1.53l9.551 19.074-15.964-5.311L42.45 13.32zM40.35 56.5h20.537a1.886 1.886 0 0 0 0-3.772H40.35a1.886 1.886 0 0 0 0 3.772z" />
            </svg>
          </div>
          <div class="form-group form-check my-4 ml-3">
            <input
              id="djnd-news-check"
              type="checkbox"
              class="form-check-input"
            >
            <label
              class="form-check-label"
              for="djnd-news-check"
            >
              Naroči me na novice <a
                href="https://danesjenovdan.si/"
                target="_blank"
              >Danes je nov dan</a>!
            </label>
          </div>
          <button class="btn btn-block">NAROČI ME</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subscribe-for-updates-row {
  .cta {
    padding: 0 2.75rem;

    p {
      font-size: 1.3rem;
      line-height: 1.25;

      &.lead {
        color: #27223a;
        font-size: 2.75rem;
        font-weight: 500;
        line-height: 1.1;

        strong {
          color: #e26e53;
          font-weight: 900;
        }
      }
    }
  }

  .subscribe {
    background-color: #e26e53;
    padding: 2.75rem;

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

        .form-check-input {
          opacity: 0;
          visibility: hidden;
        }

        .form-check-label {
          color: #5f235b;
          margin-left: 0.75em;
          cursor: pointer;

          &::before {
            content: '';
            display: block;
            border: 4px solid #5f235b;
            position: absolute;
            left: 0;
            top: 0;
            width: 1.5em;
            height: 1.5em;
          }
        }

        .form-check-input:checked + .form-check-label {
          &::after {
            content: '';
            display: block;
            border: 4px solid #5f235b;
            border-width: 0 4px 4px 0;
            position: absolute;
            left: 0.52em;
            top: 0.25em;
            width: 0.45em;
            height: 0.85em;
            transform: rotate(45deg);
          }
        }
      }

      .btn {
        border-radius: 0;
        background-color: #f2cc59;
        color: #5f235b;
        font-size: 1.75rem;
        font-weight: 900;
        box-shadow: 6px 6px #5f235b;
        transition: all 0.15s ease-in-out;

        &:hover {
          background-color: #fcf5de;
          color: rgba(#5f235b, 0.75);
        }

        &:active {
          transform: translate(4px, 4px);
          box-shadow: 2px 2px #5f235b;
        }
      }
    }
  }
}
</style>
