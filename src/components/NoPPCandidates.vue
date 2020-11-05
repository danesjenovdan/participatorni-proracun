<template>
  <div class="row">
    <div class="col align-self-center p-sm-5 p-2 first_column text-center-xs">
      <p>
        Za resnično demokratično in vključujočo lokalno upravo je
        nujno, da participativni proračun uvedejo vse slovenske občine.
      </p>
    </div>
    <div class="col align-self-center p-sm-5 p-2 second_column text-center-xs">
      <p>
        <strong>155</strong><br>
        <nobr> ŽUPANOV </nobr><br>
        <nobr> PARTICIPATIVNI </nobr><br>
        <nobr> PRORAČUN SPLOH </nobr><br>
        <nobr> NE ZANIMA </nobr>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoPPCandidates',
  };
</script>

<style lang="scss" scoped>
  .first_column {
    p {
      font-size: 1.5rem;
      font-style: italic;
    }
  }
  .second_column {
    p {
      font-size: 2rem;
      line-height: 1;

      strong {
        color: #e5816a;
        font-size: 3rem;
      }
    }
  }
  .text-center-xs {
    @media (max-width: 575.98px) {
      text-align: center;
    }
  }

</style>
