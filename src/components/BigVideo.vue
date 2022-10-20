<template>
  <div class="big-video">
    <div class="col-md-12 py-4 my-5">
      <h2>
        KAJ JE
        <span><b>PARTICIPATIVNI PRORAČUN</b></span>
        ?
      </h2>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        v-if="true || !showOverlay"
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/7o9GylegDXc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import PlayButton from "./PlayButton.vue";

export default {
  name: "BigVideo",
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
    // .blurred {
    //   // filter: blur(4px);
    // }

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

  h2 {
    color: #27223a;
    font-size: 3rem;
    line-height: 1.1;
    text-align: center;

    @media (max-width: 1199.98px) {
      font-size: 2.5rem;
    }

    /*span {*/
    /*  color: #f2cc59;*/
    /*}*/
  }
}
</style>
