<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Barlow:300,400,500,700,900&subset=latin-ext");

html,
body {
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  color: #27223a;
  overflow-x: hidden;

  @media (max-width: 991.98px) {
    font-size: 16px;
  }

  @media (max-width: 575.98px) {
    // font-size: 14px;
  }
}

::selection {
  background-color: #5f235b;
  color: #fff;
}

a,
a:visited,
a:focus,
a:active {
  color: #5f235b;
  text-decoration: underline;

  &:hover {
    color: #5f235b;
    text-decoration: none;
  }
}

.btn,
.btn:focus {
  border-radius: 0;
  background-color: #f2cc59;
  color: #5f235b;
  font-size: 1.75rem;
  font-weight: 900;
  box-shadow: 6px 6px #5f235b;
  transition: all 0.15s ease-in-out;

  &.disabled,
  &[disabled] {
    filter: grayscale(1);
  }

  &:not(.disabled):not([disabled]):hover {
    background-color: #fcf5de;
    color: rgba(#5f235b, 0.75);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 2px 2px #5f235b;
  }
}

body .swal2-container .swal2-popup {
  border-radius: 0;
  background-color: #f2cc59;

  .swal2-title {
    color: #5f235b;
  }

  .form-control {
    border-radius: 0;
    border: 6px solid #5f235b;
    background: #f2cc59;
    font-size: 1.25rem;
    font-weight: 700;
    height: auto;
    color: #5f235b;

    &::placeholder {
      color: rgba(#5f235b, 0.75);
    }

    &:focus {
      outline: 0;
      box-shadow: none;
      background-color: #fcf5de;
    }
  }

  .btn {
    background-color: #5f235b;
    color: #f2cc59;
    box-shadow: 6px 6px rgba(#5f235b, 0.75);
    font-size: 1.25rem;

    &:active {
      transform: translate(0);
      box-shadow: 6px 6px rgba(#5f235b, 0.75);
    }
  }
}
</style>
