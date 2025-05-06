<template>
  <section class="main-header bg-light-blue">
    <div class="container">
      <div class="grid">
        <div class="span-13">
          <h1>KJE JE PARTICIPATIVNI PRORAČUN?</h1>
          <p class="intro-text">
            Pred lokalnimi volitvami leta 2022 smo vse kandidate za župane
            <a
              href="https://participativni-proracun.danesjenovdan.si/2018/zaobljube/"
              >javno pozvali</a
            >
            k zavezi, da v svoji občini vzpostavijo
            <strong>participativni proračun</strong>.
          </p>
          <p class="intro-text larger">Letos preverjamo, kako jim gre.</p>
        </div>
        <div class="span-3"></div>
        <div class="span-8">
          <img class="" src="../assets/pp-ilustracija.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/media";

section.main-header {
  padding-block: 4rem;

  .grid {
    @include media.between(lg, xl) {
      .span-13 {
        display: grid;
        grid-template-columns: subgrid;
        grid-row: 1;
        grid-column: 1 / -1;

        h1 {
          grid-column: 1 / -1;
        }

        p {
          grid-column: 1 / span 13;
        }
      }

      .span-3 {
        display: none;
      }

      .span-8 {
        display: grid;
        grid-template-columns: subgrid;
        grid-row: 1;
        grid-column: 1 / -1;
        align-items: end;

        img {
          grid-column: 17 / span 8;
        }
      }
    }

    @include media.down(lg) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    img {
      @include media.down(lg) {
        margin-top: 3rem;
        max-width: 300px;
        margin-inline: auto;
      }
    }
  }

  h1 {
    color: var(--clr-dark-purple);
    font-size: 5rem;
    font-weight: 900;
    line-height: 0.95;

    @include media.down(md) {
      font-size: 4rem;
    }

    @include media.down(sm) {
      font-size: 3rem;
    }
  }

  .intro-text {
    margin-top: 1.5rem;
    font-family: var(--fnt-alt);
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 400;

    @include media.down(md) {
      font-size: 1.75rem;
    }

    strong {
      font-weight: 700;
    }

    &.larger {
      margin-top: 2rem;
      font-size: 2.5rem;
      font-weight: 700;

      @include media.down(md) {
        font-size: 2.125rem;
      }
    }
  }
}
</style>
