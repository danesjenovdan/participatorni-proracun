<template>
  <div class="row">
    <div class="col align-self-center p-5 pt-0 second_column text-center-xs">
      <p>
        <strong>141</strong><br>
        <nobr> ŽUPANOV </nobr><br>
        <nobr> PARTICIPATIVNI </nobr><br>
        <nobr> PRORAČUN SPLOH </nobr><br>
        <nobr> NE ZANIMA </nobr>
      </p>
      <background-square class="bg-square-xl"
                         color="#e5816a"
                         :opacity="0.2"
                         height="170px"
                         width="170px"
                         tilt-angle="-10deg"
                         top="25%"
                         left="15%"
      ></background-square>
      <background-square class="bg-square-lg"
                         color="#e5816a"
                         :opacity="0.2"
                         height="170px"
                         width="170px"
                         tilt-angle="-10deg"
                         top="25%"
                         left="15%"
      ></background-square>
      <background-square class="bg-square-md"
                         color="#e5816a"
                         :opacity="0.2"
                         height="170px"
                         width="170px"
                         tilt-angle="-10deg"
                         top="25%"
                         left="15%"
      ></background-square>
      <background-square class="bg-square-sm"
                         color="#e5816a"
                         :opacity="0.2"
                         height="170px"
                         width="170px"
                         tilt-angle="-10deg"
                         top="25%"
                         left="35%"
      ></background-square>
      <background-square class="bg-square"
                         color="#e5816a"
                         :opacity="0.2"
                         height="150px"
                         width="150px"
                         tilt-angle="-10deg"
                         top="30%"
                         left="33%"
      ></background-square>
      <background-square class="bg-square-xs"
                         color="#e5816a"
                         :opacity="0.2"
                         height="150px"
                         width="150px"
                         tilt-angle="-10deg"
                         top="25%"
                         left="30%"
      ></background-square>
    </div>
    <div class="col-12 col-md-6 align-self-center p-sm-5 pb-5 px-5 first_column text-center-xs">
      <p>
        Če želimo demokratično in vključujočo lokalno upravo,
        je nujno, da vse slovenske občine uvedejo participativni proračun.
      </p>
    </div>
  </div>
</template>

<script>
  import BackgroundSquare from './BackgroundSquare'

  export default {
    name: 'NoPPCandidates',
    components: {
      BackgroundSquare,
    }
  };
</script>

<style lang="scss" scoped>
  .first_column {
    p {
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 500;
    }
  }
  .second_column {
    p {
      font-size: 2rem;
      line-height: 1;
      font-weight: 500;

      strong {
        color: #e5816a;
        font-size: 3rem;
      }
    }
  }
  .text-center-xs {
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  .bg-square-xl {

    @media (max-width: 1199px) {
      display: none;
    }
  }
  .bg-square-lg {
    display: none;

    @media (max-width: 1199px) {
      display: unset;
    }

    @media (max-width: 991px) {
      display: none;
    }
  }
  .bg-square-md {
    display: none;

    @media (max-width: 991px) {
      display: unset;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
  .bg-square-sm {
    display: none;

    @media (max-width: 767px) {
      display: unset;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }
  .bg-square {
    display: none;

    @media (max-width: 575px) {
      display: unset;
    }
    @media (max-width: 390px) {
      display: none;
    }
  }
  .bg-square-xs {
    display: none;

    @media (max-width: 390px) {
      display: unset;
    }
  }

</style>
