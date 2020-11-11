<template>
  <div class="row">
    <div class="col" style="border: 5px solid #e26e53; padding: 1.75rem;">
      <div class="row">
        <div class="col align-self-center">
          <img class="smile float-right" src="../assets/happy_face_no_border.svg">
        </div>
        <div class="col py-5 px-5 text-left">
          <span class="text">
            <span>{{ info.SIMPLE_OBCINA }}</span><br>
            <b>ŽE IZVAJA</b><br>
            <span>PARTICIPTIVNI</span><br>
            <span>PRORAČUN</span><br>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HappyEmailSection',
    props: {
      info: {
        type: Object,
        required: true,
      }
    },
    mounted() {
      console.log(this.info)
    }
  };
</script>

<style lang="scss" scoped>
.smile {
  background-color: #f2cc59;
  border-radius: 50%;
  height: 100px;
  width: auto;
}

.text {
  font-size: 2rem;
  line-height: 1;
  font-style: italic;

  b {
    color: #5f235b;
    font-weight: 800;
    font-style: normal;
  }
}

</style>
