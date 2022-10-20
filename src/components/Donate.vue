<template>
  <div class="row footer-row">
    <div class="col-md-12">
      <h3>ŽELIŠ PODPRETI NAŠE DELO?</h3>
    </div>
    <div class="col-md-12">
      <div class="social-buttons">
        <a
          href="https://danesjenovdan.si/doniraj"
          rel="noreferrer noopener"
          target="_blank"
        >
          <button class="btn">
            <img src="../assets/heart.svg" style="height: 1em" />
            DONIRAJ!
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donate",
};
</script>

<style lang="scss" scoped>
.footer-row {
  color: #262539;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
  }

  .social-buttons {
    text-align: center;
    margin-top: 1rem;

    .btn {
      font-size: 1rem;
      margin-bottom: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      background-color: #5f235b;
      color: #f2cc59;
      box-shadow: 6px 6px #f2cc59;
    }
  }

  .credits {
    text-align: center;

    .credit {
      display: inline-block;
      padding-bottom: 0.5rem;
      border-bottom: 4px solid #f2cc59;
      width: 300px;
    }

    a {
      color: #f2cc59;
      font-weight: 500;
      text-decoration: none;

      &:hover,
      &:active,
      &:visited {
        text-decoration: underline;
      }
    }

    .disclaimer {
      //margin-top: 1rem;
      font-size: 0.75rem;
      padding: 0 2rem;
    }
  }
}
</style>
