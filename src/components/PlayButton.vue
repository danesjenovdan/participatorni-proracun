<template>
  <div class="circle">
    <div class="triangle" />
  </div>
</template>

<style lang="scss" scoped>
.circle {
  $size: 6rem;
  width: $size;
  height: $size;
  background-color: #e26e53;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-left-color: #f2cc59;
    border-width: 1.5rem 0 1.5rem 2.4rem;
    margin-left: 0.5rem;
  }
}
</style>
