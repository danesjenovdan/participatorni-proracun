<template>
  <section>
    <div class="scrolling-banner">
      <div>
        <div class="scrolling-text">
          Preverjamo zaveze! Preverjamo zaveze! Preverjamo zaveze! Preverjamo
          zaveze! Preverjamo zaveze! Preverjamo zaveze! Preverjamo zaveze!&nbsp;
        </div>
      </div>
      <div>
        <div class="scrolling-text">
          Preverjamo zaveze! Preverjamo zaveze! Preverjamo zaveze! Preverjamo
          zaveze! Preverjamo zaveze! Preverjamo zaveze! Preverjamo zaveze!&nbsp;
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.scrolling-banner {
  background-color: #291749;
  overflow: hidden;
  position: relative;
  height: 6rem;

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
    animation: scrollAnim 20s linear infinite;

    &:last-child {
      transform: translateX(100%);
      animation-delay: -10s;
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
    }
  }
}
</style>
