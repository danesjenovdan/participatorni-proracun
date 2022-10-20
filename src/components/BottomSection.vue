<template>
  <div class="footer-row">
    <div class="col-md-12">
      <div class="text-center">
        <div>
          <a href="https://danesjenovdan.si/" target="_blank">
            DANES JE NOV DAN
          </a>
        </div>
        <p class="disclaimer">
          Opravičujemo se za morebitne napake. Za popravke, dodatne informacije
          in medijska vprašanja smo dosegljivi na
          <a href="mailto:tadej@djnd.si" target="_blank">tadej@djnd.si</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomSection",
};
</script>

<style lang="scss" scoped>
.footer-row {
  color: #262539;
  padding-top: 1rem;
  padding-bottom: 1rem;

  a {
    color: #262539;
    font-weight: 500;
    text-decoration: none;

    &:hover,
    &:active,
    &:visited {
      text-decoration: underline;
    }
  }

  .disclaimer {
    //margin-top: 1rem;
    font-size: 0.75rem;
    padding: 0 2rem;
  }
}
</style>
