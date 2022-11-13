<template>
  <div class="footer-container my-1 my-md-5">
    <div class="container">
      <div class="row footer-row">
        <div class="col-md-12 text-center">
          <p class="mb-3 mb-md-5">
            Kampanjo “Kje je participativni proračun?” izvaja <br /><b
              >Danes je nov dan, Inštitut za druga vprašanja</b
            >.
          </p>
        </div>
        <div class="col-md-12 text-center">
          <h3>PODPRI NAŠE DELO!</h3>
          <a class="btn" href="https://danesjenovdan.si/doniraj">Doniraj!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style lang="scss" scoped>
.footer-container {
  .footer-row {
    color: #000000;
    padding-top: 2rem;
    padding-bottom: 2rem;

    p {
      font-family: "BioRhyme";
      font-size: 24px;

      @media (max-width: 991.98px) {
        font-size: 16px;
      }
    }

    h3 {
      font-size: 40px;
      font-weight: 700;
      line-height: 55px;
      text-align: center;

      @media (max-width: 991.98px) {
        font-size: 30px;
        line-height: 40px;
      }
    }

    .btn {
      &,
      &:hover,
      &:active {
        font-size: 30px;
        font-weight: 700;
        font-family: Barlow;
        padding: 8px 42px;
        background-color: #6037a9;
        color: #fefefe;
        box-shadow: 6px 6px #291749;
        text-decoration: none;

        @media (max-width: 575.98px) {
          font-size: 20px;
        }
      }

      &:active {
        box-shadow: 2px 2px #291749;
      }
    }
  }
}
</style>
