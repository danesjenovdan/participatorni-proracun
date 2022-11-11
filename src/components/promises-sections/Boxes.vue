<template>
  <section class="bg-light-blue py-5">
    <div class="container">
      <div class="row justify-content-center my-4">
        <div class="col-md-10 text-center">
          <h2>
            ZAKAJ JE UVEDBA PARTICIPATIVNEGA PRORAČUNA
            <span>POMEMBNA ZA DEMOKRACIJO</span>?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between my-4">
          <div class="box">Grajenje skupnosti</div>
          <div class="box">Povečano aktivno sodelovanje javnosti</div>
          <div class="box">
            Okrepljeno prepoznavanje javnega dobrega in skupne lastnine med
            občani
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-light-blue {
  background-color: #edf4f6;
}

h2 {
  font-size: 50px;
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  color: #291749;
  line-height: 55px;
  margin-bottom: 30px;
}

h2 span {
  color: #6037a9;
}

.box {
  border: 3px solid #272239;
  padding: 30px;
  flex: 1;
  color: #000000;
  font-family: "BioRhyme";
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  &:not(:first-child):not(:last-child) {
    margin: 0 40px;
  }
}

p {
  font-family: "BioRhyme";
  font-size: 24px;
  line-height: 38px;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #272239;
}
</style>
