<template>
  <section class="bg-light-blue py-5">
    <div class="container pt-4 pb-5">
      <div class="row justify-content-center my-4">
        <div class="col-md-10 text-center">
          <h2>
            ZAKAJ JE UVEDBA PARTICIPATIVNEGA PRORAČUNA
            <span>POMEMBNA ZA DEMOKRACIJO</span>?
          </h2>
          <p class="mb-4">
            Participativni proračun gradi skupnost. Po eni strani krepi odnose
            med občani, saj se morajo ti za uspeh projektnih predlogov obrniti
            na lokalno skupnost. Najbolj uspešni projekti participativnega
            proračuna so vedno tisti, ki naslavljajo skupne probleme in
            mobilizirajo večje skupine ljudi.
          </p>
          <p>
            Po drugi strani pa participativni proračun gradi tudi zaupanje med
            občani in občino. Občani dobijo priložnost biti slišani, občina pa
            ima boljši vpogled v stanje skupnosti in lahko sprevidi, da pogosto
            prav prebivalke in prebivalci najbolje vedo, kako izboljšati stanje
            v svojem okolju. Z medsebojnim zaupanjem se krepi odnos med občani
            in občino, tako pa se postavljajo temelji za nadaljnjo, bolj
            kompleksno vključevanje občank in občanov v delovanje občine.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-12 d-flex flex-column flex-md-row justify-content-md-between my-4"
        >
          <div class="box">
            <div class="image-wrapper">
              <div class="yellow-circle"></div>
              <img class="" src="../../assets/pp-ikona-skupnost.svg" />
            </div>
            <p>
              Grajenje skupnosti – tako med občani samimi kot tudi med občani in
              občino
            </p>
          </div>
          <div class="box">
            <div class="image-wrapper">
              <div class="yellow-circle"></div>
              <img class="" src="../../assets/pp-ikona-sodelovanje.svg" />
            </div>
            <p>
              Povečanje aktivnega sodelovanja javnosti v občinskih odločevalskih
              procesih
            </p>
          </div>
          <div class="box">
            <div class="image-wrapper">
              <div class="yellow-circle"></div>
              <img class="" src="../../assets/pp-ikona-skupno.svg" />
            </div>
            <p>
              Okrepitev prepoznavanja javnega dobrega in skupne lastnine med
              občani
            </p>
          </div>
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

h2 {
  font-size: 50px;
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  color: #291749;
  line-height: 55px;
  margin-bottom: 30px;
}

h2 span {
  color: #6037a9;
}

p {
  font-family: "BioRhyme";
  font-size: 24px;
  line-height: 38px;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #272239;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  img {
    z-index: 10;
    max-width: 250px;
    max-height: 250px;
  }
}

.yellow-circle {
  position: absolute;
  background-color: #f2cc59;
  border-radius: 50%;
  width: 200px;
  height: 200px;

  @media (max-width: 991.98px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 575.98px) {
    width: 200px;
    height: 200px;
  }
}

.box {
  border: 3px solid #272239;
  padding: 30px;
  flex: 1;

  p {
    color: #000000;
    font-family: "BioRhyme";
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin: 0;

    @media (max-width: 991.98px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (min-width: 576px) {
    &:not(:first-child):not(:last-child) {
      margin: 0 40px;
    }
  }
}

@media (max-width: 991.98px) {
  h2 {
    font-size: 38px;
    line-height: 42px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
  }

  .box {
    font-size: 18px;
    line-height: 24px;
    padding: 20px;
  }
}

@media (max-width: 575.98px) {
  .box {
    margin: 10px 0;
  }
}
</style>
