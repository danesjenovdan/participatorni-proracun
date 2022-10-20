<template>
  <div class="home">
    <top-title-section></top-title-section>

    <div class="container">
      <candidate-scroll
        @obcina-clicked="submitLocation($event)"
      ></candidate-scroll>
    </div>
    <find-candidates id="PPInput" ref="PPInput" @new-input="clearNoPPInput()" />
    <div class="container">
      <no-p-p-candidates></no-p-p-candidates>
    </div>
    <find-candidates-no-p-p
      id="NoPPInput"
      ref="NoPPInput"
      @new-input="clearPPInput()"
    />
    <div class="container">
      <div class="col-md-12">
        <big-video />
      </div>
      <questions class="py-5" />
    </div>
    <div class="container" style="background-color: #27223a; margin-top: 3rem">
      <site-footer />
    </div>
    <div class="container" style="background-color: #e26e53; margin-top: 2rem">
      <donate></donate>
    </div>
    <div class="container">
      <bottom-section></bottom-section>
    </div>
  </div>
</template>

<script>
import BigVideo from "../components/BigVideo.vue";
import FindCandidates from "../components/FindCandidates.vue";
import FindCandidatesNoPP from "../components/FindCandidatesNoPP.vue"; // noPP -> nimajo participativnega proracuna :)
import NoPPCandidates from "../components/NoPPCandidates.vue";
import CandidateScroll from "../components/CandidateScroll.vue";
import Questions from "../components/Questions.vue";
import SiteFooter from "../components/SiteFooter.vue";
import TopTitleSection from "../components/TopTitleSection.vue";
import Donate from "../components/Donate.vue";
import BottomSection from "../components/BottomSection.vue";

const domain = "http://localhost:3000"; // process.env.NODE_ENV === "production" ? "https://danesjenovdan.si" : "http://localhost:8801";
const baseUrl = "/"; // process.env.BASE_URL;

export default {
  name: "App",
  components: {
    BigVideo,
    FindCandidates,
    FindCandidatesNoPP,
    NoPPCandidates,
    CandidateScroll,
    Questions,
    SiteFooter,
    TopTitleSection,
    Donate,
    BottomSection,
  },
  metaInfo: {
    title: "Participativni proračun",
    meta: [
      // owner
      { property: "fb:app_id", content: "301375193309601" },
      { name: "twitter:creator", content: "@danesjenovdan" },
      // type
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      // url
      {
        vmid: "og:url",
        property: "og:url",
        content: `${domain}${baseUrl}`,
      },
      // title
      {
        vmid: "og:title",
        property: "og:title",
        content: "Kje je participativni proračun?",
      },
      {
        vmid: "twitter:title",
        name: "twitter:title",
        content: "Kje je participativni proračun?",
      },
      // description
      {
        vmid: "og:description",
        property: "og:description",
        content:
          "Preveri, katere občine ga že izvajajo, predvsem pa, kateri župani še niso izpolnili svoje obljube.",
      },
      {
        vmid: "twitter:description",
        name: "twitter:description",
        content:
          "Preveri, katere občine ga že izvajajo, predvsem pa, kateri župani še niso izpolnili svoje obljube.",
      },
      // image
      {
        vmid: "og:image",
        property: "og:image",
        content: `${domain}${baseUrl}pp-og.png?v2`,
      },
      {
        vmid: "twitter:image",
        name: "twitter:image",
        content: `${domain}${baseUrl}pp-og.png?v2`,
      },
    ],
  },

  methods: {
    clearPPInput() {
      this.$refs.PPInput.clearInput();
    },
    clearNoPPInput() {
      this.$refs.NoPPInput.clearInput();
    },
    submitLocation(obcina) {
      const reference =
        obcina["PRVI DROPDOWN"] === "1"
          ? this.$refs.PPInput
          : this.$refs.NoPPInput;
      const id = obcina["PRVI DROPDOWN"] === "1" ? "PPInput" : "NoPPInput";
      const elem = document.getElementById(id);

      reference.onSubmitLocation(obcina.SIMPLE_OBCINA);
      setTimeout(() => {
        elem.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 100);
    },
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
