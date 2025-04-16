<template>
  <div class="big-video">
    <div class="aspect-16-9">
      <iframe
        src="https://www.youtube.com/embed/7o9GylegDXc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.big-video {
  .aspect-16-9 {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
    }
  }
}
</style>
