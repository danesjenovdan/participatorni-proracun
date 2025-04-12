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
section.main-header {
  padding-block: 4rem;

  h1 {
    color: #291749;
    font-size: 5rem;
    font-weight: 900;
    line-height: 0.95;
  }

  .intro-text {
    margin-top: 1.5rem;
    font-family: var(--fnt-alt);
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 400;

    strong {
      font-weight: 700;
    }

    &.larger {
      margin-top: 2rem;
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
}
</style>
