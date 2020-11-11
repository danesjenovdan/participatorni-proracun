<template>
  <div class="home">
    <div class="container">
      <top-title-section></top-title-section>
      <candidate-scroll></candidate-scroll>
      <find-candidates ref="PPInput" @new-input="clearNoPPInput()" />
      <no-p-p-candidates></no-p-p-candidates>
      <find-candidates-no-p-p ref="NoPPInput" @new-input="clearPPInput()" />
        <div class="col-md-12">
            <big-video />
        </div>
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
import FindCandidatesNoPP from '@/components/FindCandidatesNoPP.vue'; // noPP -> nimajo participativnega proracuna :)
import NoPPCandidates from '@/components/NoPPCandidates.vue';
import CandidateScroll from '@/components/CandidateScroll.vue';
import SubscribeForUpdates from '@/components/SubscribeForUpdates.vue';
import Questions from '@/components/Questions.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import TopTitleSection from '@/components/TopTitleSection.vue';

const domain = 'https://danesjenovdan.si';
const baseUrl = process.env.BASE_URL;

export default {
  name: 'App',
  components: {
    BigVideo,
    FindCandidates,
    FindCandidatesNoPP,
    NoPPCandidates,
    CandidateScroll,
    SubscribeForUpdates,
    Questions,
    SiteFooter,
    TopTitleSection,
  },
  metaInfo: {
    title: 'Participativni proračun',
    meta: [
      // owner
      { property: 'fb:app_id', content: '301375193309601' },
      { name: 'twitter:creator', content: '@danesjenovdan' },
      // type
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // url
      {
        vmid: 'og:url',
        property: 'og:url',
        content: `${domain}${baseUrl}`,
      },
      // title
      {
        vmid: 'og:title',
        property: 'og:title',
        content: 'Čas je, da občinski denar postane tudi tvoja stvar!',
      },
      {
        vmid: 'twitter:title',
        name: 'twitter:title',
        content: 'Čas je, da občinski denar postane tudi tvoja stvar!',
      },
      // description
      {
        vmid: 'og:description',
        property: 'og:description',
        content:
          'Spremljaj, katere županje in župani so se zavezali, da bodo izvajali participativni proračun in preveri, ali držijo svojo obljubo.',
      },
      {
        vmid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Spremljaj, katere županje in župani so se zavezali, da bodo izvajali participativni proračun in preveri, ali držijo svojo obljubo.',
      },
      // image
      {
        vmid: 'og:image',
        property: 'og:image',
        content: `${domain}${baseUrl}og-image.png?v2`,
      },
      {
        vmid: 'twitter:image',
        name: 'twitter:image',
        content: `${domain}${baseUrl}og-image.png?v2`,
      },
    ],
  },

  methods: {
    clearPPInput(){
      this.$refs.PPInput.clearInput();
    },
    clearNoPPInput(){
      this.$refs.NoPPInput.clearInput();
    },
  }
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

div > p.lead {
  font-size: 1.3rem;

  strong {
    font-weight: 700;
  }
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
