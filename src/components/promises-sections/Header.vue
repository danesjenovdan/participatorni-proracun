<template>
  <section class="bg-light-blue">
    <div class="container">
      <div class="row justify-content-center py-3 py-md-5">
        <div class="col-lg-8">
          <div class="above-heading">
            <p>Želiš soustvarjati svoje lokalno okolje?</p>
            <p>
              Poznaš rešitve, ki bi pomagale tvojim sokrajankam in sokrajanom?
            </p>
            <p>
              Veš, kateri županski kandidati oziroma kandidatke bi ti omogočili
              njihovo uresničitev?
            </p>
          </div>
          <h1>ČAS JE, DA OBČINSKI DENAR POSTANE TUDI TVOJA STVAR!</h1>
        </div>
        <div class="col-10 col-md-6 col-lg-4 my-4 my-lg-0">
          <img class="" src="../../assets/glasuj.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-light-blue {
  background-color: #edf4f6;
}

h1 {
  font-size: 80px;
  font-family: "Barlow", sans-serif;
  font-weight: 900;
  color: #291749;
  line-height: 0.95;
  margin-top: 2rem;
}

p {
  font-family: "BioRhyme";
  font-size: 32px;
  line-height: 44px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  color: #000000;
}

@media (max-width: 991.98px) {
  h1 {
    font-size: 60px;
  }

  p {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 8px;
  }
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
