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

const domain = 'https://danesjenovdan.si';
const baseUrl = process.env.BASE_URL;

export default {
  name: 'App',
  components: {
    BigVideo,
    FindCandidates,
    SubscribeForUpdates,
    Questions,
    SiteFooter,
  },
  metaInfo: {
    title: 'Participatorni proračun',
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
        content: '',
        template: `${domain}${baseUrl}%s`,
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
          'Preverili smo, kdo od županskih kandidatk in kandidatov bi v primeru zmage na lokalnih volitvah uvedel participativni proračun in občankam in občanom zagotovil soupravljanje z občinskim denarjem.',
      },
      {
        vmid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Preverili smo, kdo od županskih kandidatk in kandidatov bi v primeru zmage na lokalnih volitvah uvedel participativni proračun in občankam in občanom zagotovil soupravljanje z občinskim denarjem.',
      },
      // image
      {
        vmid: 'og:image',
        property: 'og:image',
        content: `${domain}${baseUrl}og-image.png`,
      },
      {
        vmid: 'twitter:image',
        name: 'twitter:image',
        content: `${domain}${baseUrl}og-image.png`,
      },
    ],
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
