<template>
  <section>
    <div class="scrolling-banner">
      <div class="d-flex align-items-center">
        <h2>
          Zbiramo zaveze kandidatov! Zbiramo zaveze kandidatov! Zbiramo zaveze
          kandidatov! Zbiramo zaveze kandidatov!
        </h2>
      </div>
      <div class="d-flex align-items-center">
        <h2>
          Zbiramo zaveze kandidatov! Zbiramo zaveze kandidatov! Zbiramo zaveze
          kandidatov! Zbiramo zaveze kandidatov!
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.scrolling-banner {
  background-color: #291749;
  overflow: hidden;
  position: relative;
  height: 5rem;
}

.scrolling-banner > div {
  padding: 20px 3px;
  font-family: "Barlow", sans-serif;
  font-style: italic;
  position: absolute;
  min-width: 100%;
  height: 100%;
  white-space: nowrap;
  /* Apply animation to this element */
  -moz-animation: demo-1 20s linear infinite;
  -webkit-animation: demo-1 20s linear infinite;
  animation: demo-1 20s linear infinite;

  &:last-child {
    // Starting position
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    animation-delay: -10s;
  }

  h2 {
    margin-bottom: 0;
    color: #ffffff;
    font-size: 50px;
  }
}

/* Move it (define the animation) */
@-moz-keyframes demo-1 {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes demo-1 {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes demo-1 {
  0% {
    -moz-transform: translateX(100%); /* Firefox bug fix */
    -webkit-transform: translateX(100%); /* Firefox bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%); /* Firefox bug fix */
    -webkit-transform: translateX(-100%); /* Firefox bug fix */
    transform: translateX(-100%);
  }
}
</style>
