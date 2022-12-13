<template>
  <div class="container">
    <div class="row lead-text-row justify-content-center">
      <div class="col">
        <h2>
          Dobili smo <em>240 zaobljub</em>, od tega je <em>46</em> kandidatk_ov,
          ki so obljubili uvedbo participativnega proračuna, in <em>30</em>, ki
          jih participativni proračun že izvaja, zmagalo na volitvah.
        </h2>
        <p>
          Tako kot smo to počeli
          <a
            href="https://danesjenovdan.si/participativni-proracun/"
            target="_blank"
            >v prejšnjem</a
          >, bomo župane_je tudi v prihajajočem mandatu držali za besedo in
          preverjali, ali so občankam_om zares omogočili soodločanje o porabi
          proračunskih sredstev.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lead-text-row {
  padding: 110px 0;

  .col {
    max-width: 1100px;

    h2 {
      margin-bottom: 0;
      font-size: 50px;
      line-height: 1.1;
      font-weight: 700;
      color: #000000;
      text-align: center;
      text-transform: uppercase;

      em {
        font-weight: 900;
        font-style: normal;
        color: #6037a9;
      }
    }

    p {
      margin-top: 36px;
      margin-bottom: 0;
      font-family: "BioRhyme";
      font-size: 24px;
      line-height: 1.5;
      text-align: center;
      color: #272239;
    }
  }
}

@media (max-width: 991.98px) {
  .lead-text-row {
    padding: 60px 0;

    .col {
      h2 {
        font-size: 38px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
</style>
