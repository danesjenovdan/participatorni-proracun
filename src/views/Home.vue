<template>
  <div class="home">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-12">
          <big-video />
          <img
            class="arrow-down"
            src="@/assets/arrow-down.svg"
          >
        </div>
      </div>
      <find-candidates class="py-5" />
      <hr class="separator">
      <div class="row mx-0">
        <div class="col-md-7 px-0 d-flex align-items-center">
          <div class="cta p-5 w-100">
            <p class="lead">
              ZMAGOVALCE VOLITEV BOMO NA OBLJUBO OPOMINJALI <strong>TUDI PO VOLITVAH</strong>.
            </p>
            <p>
              Pusti svoj email naslov, da ti javimo, kaj je novega!
            </p>
          </div>
        </div>
        <div class="col-md-5 px-0 d-flex">
          <div class="subscribe p-4 w-100">
            <form>
              test<br>
            </form>
          </div>
        </div>
      </div>
      <hr class="separator">
    </div>
  </div>
</template>

<script>
import BigVideo from '@/components/BigVideo.vue';
import FindCandidates from '@/components/FindCandidates.vue';

export default {
  name: 'App',
  components: {
    BigVideo,
    FindCandidates,
  },
};
</script>

<style lang="scss" scoped>
.arrow-down {
  position: absolute;
  right: 3.5rem;
  bottom: 0;
  height: 6rem;
  transform: translateY(50%);
}

.separator {
  border-color: #5f235b;
  border-top-width: 4px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.cta {
  p {
    font-size: 1.3rem;
    line-height: 1.25;

    &.lead {
      color: #27223a;
      font-size: 50px;
      font-weight: 500;
      line-height: 54px;
      text-transform: uppercase;

      strong {
        color: #e26e53;
        font-weight: 900;
      }
    }
  }
}

.subscribe {
  background-color: #e26e53;
}
</style>
