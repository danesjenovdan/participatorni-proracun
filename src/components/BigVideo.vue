<template>
  <div class="big-video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        v-if="!showOverlay"
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/yilFJTdo8u0?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <img
        v-else
        src="@/assets/video-cover.jpg"
        class="embed-responsive-item blurred"
      >
      <div
        v-if="showOverlay"
        class="overlay"
        @click="onPlayClick"
      >
        <div class="overlay-content text-center">
          <div class="mb-lg-5">
            Čas je, da občinski denar postane tudi <strong>tvoja stvar</strong>!
          </div>
          <play-button
            class="mt-3 mx-auto"
            @click.native="onPlayClick"
          />
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
  data() {
    return {
      showOverlay: true,
    };
  },
  methods: {
    onPlayClick() {
      this.showOverlay = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.big-video {
  .embed-responsive {
    .blurred {
      // filter: blur(4px);
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
      // background-color: rgba(#fff, 0.5);
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
        // max-width: 700px;
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
      }
    }
  }
}
</style>
