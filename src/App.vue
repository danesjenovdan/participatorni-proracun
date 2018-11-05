<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:300,400,500,700,900&subset=latin-ext');

html,
body {
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
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
    text-decoration: none;
  }
}
</style>
