<template>
  <div class="container">
    <div class="col-md-12">
      <big-video />
    </div>
    <questions class="py-5" />
  </div>
</template>

<script>
import BigVideo from "../BigVideo.vue";
import Questions from "../Questions.vue";

export default {
  components: {
    BigVideo,
    Questions,
  },
};
</script>
