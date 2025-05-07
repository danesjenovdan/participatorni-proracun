<template>
  <section>
    <div class="scrolling-banner">
      <div>
        <div class="scrolling-text">
          Preverjamo izpolnjevanje zavez! Preverjamo izpolnjevanje zavez!
          Preverjamo izpolnjevanje zavez! Preverjamo izpolnjevanje zavez!
          Preverjamo izpolnjevanje zavez!&nbsp;
        </div>
      </div>
      <div>
        <div class="scrolling-text">
          Preverjamo izpolnjevanje zavez! Preverjamo izpolnjevanje zavez!
          Preverjamo izpolnjevanje zavez! Preverjamo izpolnjevanje zavez!
          Preverjamo izpolnjevanje zavez!&nbsp;
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/media";

.scrolling-banner {
  background-color: var(--clr-dark-purple);
  overflow: hidden;
  position: relative;
  height: 6rem;

  @include media.down(md) {
    height: 4.5rem;
  }

  @keyframes scrollAnim {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    animation: scrollAnim 30s linear infinite;

    &:nth-child(2) {
      animation-delay: -15s;
    }

    .scrolling-text {
      display: block;
      margin-top: -0.125em;
      font-size: 2.8125rem;
      font-style: italic;
      font-weight: 600;
      line-height: 1;
      color: #fff;
      white-space: nowrap;

      @include media.down(md) {
        font-size: 2rem;
      }
    }
  }
}
</style>
