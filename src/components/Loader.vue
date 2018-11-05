<template>
  <div class="loader lds-ripple">
    <div />
    <div />
  </div>
</template>

<style lang="scss" scoped>
.lds-ripple {
  $size: 8rem;

  display: inline-block;
  position: relative;
  width: $size;
  height: $size;

  div {
    position: absolute;
    border: 4px solid #5f235b;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: $size / 2;
      left: $size / 2;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: $size;
      height: $size;
      opacity: 0;
    }
  }
}
</style>
