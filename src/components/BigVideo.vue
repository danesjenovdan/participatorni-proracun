<template>
  <div class="big-video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item blurred"
        src="https://player.vimeo.com/video/292283117?portrait=0&amp;title=0&amp;byline=0"
        width="640"
        height="360"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
      <div class="overlay">
        <div class="overlay-content">
          Čas je, da občinski denar postane tudi <strong>tvoja stvar</strong>!
          <br>
          <play-button class="mt-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayButton from './PlayButton.vue';

export default {
  name: 'BigVideo',
  components: {
    PlayButton,
  },
};
</script>

<style lang="scss" scoped>
.big-video {
  .embed-responsive {
    .blurred {
      filter: blur(4px);
    }

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
      background-color: rgba(#fff, 0.5);
      display: flex;
      align-items: center;
      padding: 4.5rem;

      @media (max-width: 575.98px) {
        padding: 2rem;
      }

      .overlay-content {
        color: #27223a;
        font-size: 3.5rem;
        line-height: 1;
        text-transform: uppercase;
        max-width: 700px;
        font-weight: 500;

        @media (max-width: 575.98px) {
          font-size: 2rem;
        }

        strong {
          color: #5f235b;
          font-weight: 900;
        }
      }
    }
  }
}
</style>
