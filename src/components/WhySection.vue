<template>
  <section class="why-section bg-light-gray">
    <div class="container">
      <div class="subtitle">
        <h2>
          ZAKAJ JE UVEDBA PARTICIPATIVNEGA PRORAČUNA
          <em>POMEMBNA ZA DEMOKRACIJO</em>?
        </h2>
        <p class="mb-4">
          Participativni proračun gradi skupnost. Po eni strani krepi odnose med
          občani, saj se morajo ti za uspeh projektnih predlogov obrniti na
          lokalno skupnost. Najbolj uspešni projekti participativnega proračuna
          so vedno tisti, ki naslavljajo skupne probleme in mobilizirajo večje
          skupine ljudi.
        </p>
        <p>
          Po drugi strani pa participativni proračun gradi tudi zaupanje med
          občani in občino. Občani dobijo priložnost biti slišani, občina pa ima
          boljši vpogled v stanje skupnosti in lahko sprevidi, da pogosto prav
          prebivalke in prebivalci najbolje vedo, kako izboljšati stanje v
          svojem okolju. Z medsebojnim zaupanjem se krepi odnos med občani in
          občino, tako pa se postavljajo temelji za nadaljnjo, bolj kompleksno
          vključevanje občank in občanov v delovanje občine.
        </p>
      </div>
      <div class="boxes">
        <div class="box">
          <div class="image">
            <div class="yellow-circle"></div>
            <img src="../assets/pp-ikona-skupnost.svg" />
          </div>
          <div class="content">
            <p>
              Grajenje skupnosti – tako med občani samimi kot tudi med občani in
              občino
            </p>
          </div>
        </div>
        <div class="box">
          <div class="image">
            <div class="yellow-circle"></div>
            <img src="../assets/pp-ikona-sodelovanje.svg" />
          </div>
          <div class="content">
            <p>
              Povečanje aktivnega sodelovanja javnosti v občinskih odločevalskih
              procesih
            </p>
          </div>
        </div>
        <div class="box">
          <div class="image">
            <div class="yellow-circle"></div>
            <img src="../assets/pp-ikona-skupno.svg" />
          </div>
          <div class="content">
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

<style lang="scss" scoped>
section.why-section {
  padding-block: 8rem;

  .subtitle {
    max-width: 80rem;
    margin-inline: auto;

    h2 {
      font-size: 3.25rem;
      font-weight: 700;
      text-align: center;
      color: var(--clr-dark-purple);

      em {
        font-style: normal;
        color: var(--clr-light-purple);
      }
    }

    p {
      max-width: 70rem;
      margin-inline: auto;
      margin-top: 1.5rem;
      text-align: center;
      font-family: var(--fnt-alt);
      font-size: 1.5rem;
    }
  }

  .boxes {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-top: 7rem;

    .box {
      flex: 1;
      max-width: 25rem;
      height: auto;
      aspect-ratio: 1;
      padding: 1.5rem 2.5rem;
      border: 4px solid var(--clr-dark-purple);

      .content {
        margin-top: 0.5rem;
        font-family: var(--fnt-alt);
        font-size: 1.25rem;
        font-weight: 800;
        line-height: 1.2;
        text-align: center;
      }

      .image {
        margin-inline: auto;
        display: grid;
        place-items: center;
        aspect-ratio: 1;
        max-height: 15rem;

        > * {
          grid-area: 1 / 1;
        }

        .yellow-circle {
          background-color: #f2cc59;
          border-radius: 50%;
          width: 85%;
          height: 85%;
        }
      }
    }
  }
}
</style>
