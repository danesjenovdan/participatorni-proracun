<template>
  <div class="title_section_wrapper">
    <div class="container">
      <div class="row title_section">
        <div class="col">
          <div class="row">
            <div class="col">
              <h1>
                <b>Kje je</b><br>
                <strong>PARTICIPATIVNI</strong><br>
                PRORAČUN?
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>
                Pred lokalnimi volitvami leta 2018 smo vse kandidate za župane
                <a href="https://danesjenovdan.si/participativni-proracun/zaobljube/"
                   rel="noreferrer noopener"
                   target="_blank"
                   style="color: black;"
                ><b>javno pozvali</b></a>
                k zavezi, da bodo v svoji občini vzpostavili participativni proračun.
              </p>
            </div>
            <div class="col-lg-6 col-md-12">
              <img id="ilustracija" src="../assets/pp-ilustracija.svg" alt="illustration"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopTitleSection',
  };
</script>

<style lang="scss" scoped>
.title_section_wrapper{
  background-color: #f2cc59;

  .title_section {
    padding: 0 2rem 2rem;
    overflow: hidden;

    @media (max-width: 575.98px) {
      padding: 2rem;
    }

    h1 {
      font-size: 5rem;
      line-height: 1;

      strong {
        color: #e5816a;
      }

      b {
        font-size: 3rem;
        font-style: italic;
      }

      @media (max-width: 767px) {
        font-size: 4rem;
      }

      @media (max-width: 575.98px) {
        font-size: 2.5rem;
      }
    }

    p {
      font-style: italic;
      font-size: 1.6rem;
      line-height: 1.5;

      b {
        text-decoration: underline;
      }
    }

    #ilustracija {
      margin-top: -7rem;
      margin-right: -4rem;
      /*margin-bottom: 3rem;*/
      transform: rotate(-15deg);

      @media (max-width: 1199.98px) {
        margin-bottom: 0;
        transform: rotate(-15deg) translateY(5rem);
      }

      @media (max-width: 992px) {
        height: auto;
        width: 656px;
      }

      @media (max-width: 575.98px) {
        height: auto;
        width: 575px;
      }
    }
  }
}
</style>
