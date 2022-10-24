<template>
  <div class="big-video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/7o9GylegDXc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.big-video {
  .embed-responsive {
    video,
    iframe {
      background-color: #000;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 4.5rem;
      cursor: pointer;

      @media (max-width: 575.98px) {
        padding: 2rem 1rem;
      }

      .overlay-content {
        color: #27223a;
        font-size: 3.5rem;
        line-height: 1;
        text-transform: uppercase;
        font-weight: 500;

        @media (max-width: 575.98px) {
          font-size: 2rem;
        }

        @media (max-width: 320.98px) {
          font-size: 1.5rem;
        }

        strong {
          color: #5f235b;
          font-weight: 900;
        }

        .play-instruction {
          position: relative;
          font-size: 2rem;
          top: 16px;
          font-weight: bold;

          @media (max-width: 575.98px) {
            font-size: 1.1rem;
            top: 6px;
          }
        }
      }
    }
  }
}
</style>
