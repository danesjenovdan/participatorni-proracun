<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <big-video />
      </div>
    </div>
  </div>
</template>

<script>
import BigVideo from './components/BigVideo.vue';

export default {
  name: 'App',
  components: {
    BigVideo,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow:300,400,700,900&subset=latin-ext');

#app {
  font-family: 'Barlow', sans-serif;
}
</style>
