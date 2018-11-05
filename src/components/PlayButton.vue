<template>
  <div class="circle">
    <div class="triangle" />
  </div>
</template>

<style lang="scss" scoped>
.circle {
  $size: 8rem;
  width: $size;
  height: $size;
  background-color: #e26e53;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 575.98px) {
    width: $size / 2;
    height: $size / 2;
  }

  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-left-color: #f2cc59;
    border-width: ($size / 4) 0 ($size / 4) ($size / 2.5);
    margin-left: 0.5rem;

    @media (max-width: 575.98px) {
      border-width: ($size / 4 / 2) 0 ($size / 4 / 2) ($size / 2.5 / 2);
      margin-left: 0.25rem;
    }
  }

  &:hover {
    background-color: #5f235b;

    .triangle {
      border-left-color: #fcf5de;
    }
  }
}
</style>
