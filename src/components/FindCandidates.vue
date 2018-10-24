<template>
  <div class="row find-candidates-row mx-0">
    <div class="col-md-5 col--search px-0">
      <div class="col__content">
        TEST<br>
        TEST<br>
        TEST<br>
        TEST
      </div>
    </div>
    <div class="col-md-7 col--results px-0">
      <div class="col__content">
        TEST<br>
        TEST<br>
        TEST<br>
        TESTTEST<br>
        TEST<br>
        TEST<br>
        TEST
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.find-candidates-row {
  .col__content {
    padding: 3rem;
  }

  .col--search .col__content {
    background-color: #f2cc59;
    margin-top: -2rem;
    margin-right: -2rem;
  }

  .col--results .col__content {
    background-color: rgba(#f2cc59, 0.2);
  }
}
</style>
