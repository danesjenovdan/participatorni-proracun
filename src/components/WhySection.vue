<template>
  <section class="why-section bg-light-gray">
    <div class="container">
      <div class="subtitle">
        <h2>
          ZAKAJ JE UVEDBA PARTICIPATIVNEGA PRORAČUNA
          <em>POMEMBNA ZATE</em>?
        </h2>
        <p class="mb-4">
          Participativni proračun pomaga graditi skupnost. Po eni strani krepi
          odnose med občani, saj se morajo ti za uspeh projektnih predlogov
          obrniti na ljudi okoli sebe. Najbolj uspešni projekti participativnega
          proračuna so vedno tisti, ki obravnavajo skupne probleme in
          vključujejo večje skupine.
        </p>
        <p>
          Po drugi strani pa participativni proračun gradi tudi zaupanje med
          občani in občino. Občani dobijo priložnost biti slišani, občina pa
          boljši vpogled v stanje skupnosti. Tako lahko sprevidi, da pogosto
          prav prebivalci najbolje vedo, kako izboljšati svoje okolje.
          Medsebojno zaupanje krepi odnos, pri čemer se postavljajo temelji za
          nadaljnje, bolj poglobljeno vključevanje občanov v delovanje občine.
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
              Povečanje aktivnega sodelovanja občanov v občinskih odločevalskih
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
@use "../assets/styles/media";

section.why-section {
  padding-block: 8rem;

  @include media.down(lg) {
    padding-block: 6rem;
  }

  @include media.down(md) {
    padding-block: 4rem;
  }

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

      @include media.down(lg) {
        font-size: 2.75rem;
      }

      @include media.down(sm) {
        font-size: 2.25rem;
      }
    }

    p {
      max-width: 70rem;
      margin-inline: auto;
      margin-top: 1.5rem;
      text-align: center;
      font-family: var(--fnt-alt);
      font-size: 1.5rem;

      @include media.down(sm) {
        font-size: 1.25rem;
      }
    }
  }

  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    margin-top: 7rem;

    @include media.down(lg) {
      margin-top: 5rem;
    }

    .box {
      flex: 1;
      max-width: 25rem;
      min-width: 20rem;
      height: auto;
      aspect-ratio: 1;
      padding: 1.5rem 2.5rem;
      background-color: #fff;
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
