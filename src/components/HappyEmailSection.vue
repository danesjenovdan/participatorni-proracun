<template>
  <div class="row">
    <div class="col mx-3" style="border: 5px solid #e26e53; padding: 1.75rem;">
      <div class="row smile-wrapper">
        <div class="col-md col-auto align-self-center">
          <img class="smile" src="../assets/happy_face_no_border.svg">
        </div>
        <div class="col-12 col-md py-5 px-5 text-col">
          <a :href="info['LINK DO PP']" rel="noreferrer noopener" target="_blank">
          <span class="text">
              <span>{{ info.OBČINA }}</span><br>
              <b>ŽE IZVAJA</b><br>
              <span>PARTICIPATIVNI</span><br>
              <span>PRORAČUN</span>
                <img id="link-icon"
                     src="../assets/link-icon.svg"
                     alt="link_icon">
          </span>
          </a>
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
.smile-wrapper{
  .smile {
    background-color: #f2cc59;
    border-radius: 50%;
    height: 100px;
    width: auto;
    float: right;

    @media (max-width: 767px) {
      float: unset;
      align-self: center;
    }
  }

  @media (max-width: 767px) {
    float: unset;
    justify-content: center;
  }
}

.text-col {
  a {
    color: black;
    text-decoration: none;

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

    &:hover {
      b {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 767px) {
    text-align: center;
  }
}

.align-xs {
  @media (max-width: 767px) {
    justify-content: center;
  }
}

#link-icon {
  height: 1em;
  width: 1em;
  vertical-align: top;
  margin-left: 10px;
}

</style>
