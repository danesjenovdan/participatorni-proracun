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
      <subscribe-for-updates class="py-5" />
      <hr class="separator">
      <questions class="py-5" />
    </div>
    <div class="footer-container">
      <div class="container">
        <site-footer />
      </div>
    </div>
  </div>
</template>

<script>
import BigVideo from '@/components/BigVideo.vue';
import FindCandidates from '@/components/FindCandidates.vue';
import SubscribeForUpdates from '@/components/SubscribeForUpdates.vue';
import Questions from '@/components/Questions.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    BigVideo,
    FindCandidates,
    SubscribeForUpdates,
    Questions,
    SiteFooter,
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

.footer-container {
  background-color: #27223a;
}

@media (max-width: 575.98px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
