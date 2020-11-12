<template>
  <div :style="cssVars"></div>
</template>

<script>
  export default {
    name: 'BackgroundSquare',
    props: {
      tiltAngle: {
        type: String,
        required: true,
      },
      height: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      opacity: {
        type: Number,
        required: true,
      },
      top: {
        type: String,
        required: false,
      },
      bottom: {
        type: String,
        required: false,
      },
      left: {
        type: String,
        required: false,
      },
      right: {
        type: String,
        required: false,
      }
    },
    computed: {
      cssVars() {
        return {
          '--bg-color': this.color,
          '--opacity': this.opacity,
          '--height': this.height,
          '--width': this.width,
          '--angle': this.tiltAngle,
          '--top': this.top ? this.top : 'unset',
          '--bottom': this.bottom ? this.bottom : 'unset',
          '--left': this.left ? this.left : 'unset',
          '--right': this.right ? this.right : 'unset',
        }
      }
    }

  };
</script>

<style lang="scss" scoped>
  div {
    background-color: var(--bg-color);
    opacity: var(--opacity);
    height: var(--height);
    width: var(--width);
    transform: rotate(var(--angle));
    z-index: -100;
    position: absolute;
    top: var(--top);
    bottom: var(--bottom);
    right: var(--right);
    left: var(--left);
  }
</style>
