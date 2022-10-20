<template>
  <div class="background">
    <div class="row">
      <div id="col_one" class="col-lg-7 col-12 align-self-center">
        <div class="row">
          <div class="col align-self-center">
            <img class="float-right" :src="getGrbPath()" alt="grb" />
          </div>
          <div class="col-7 text-left text align-self-end">
            <span
              >Občina<br />{{ info.SIMPLE_OBCINA }}<br />
              <span v-if="info['IZVAJA PP'] === '1'" class="izvaja"
                >izvaja</span
              >
              <span v-else class="ne_izvaja">še vedno čaka na</span>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span
              ><strong>PARTICIPATIVNI<br />PRORAČUN!</strong></span
            >
          </div>
        </div>
      </div>
      <div id="col_two" class="col-lg-5 col-12 align-self-center">
        <div class="text-left py-5 px-4 text" style="background-color: #f2cc59">
          <img
            class="candidate_img"
            :src="getProfilePicPath()"
            alt="profile_image"
          />
          <img
            v-if="info['IZVAJA PP'] === '1'"
            class="icon"
            src="../assets/happy_face_no_border.svg"
            alt="happy_face"
          />
          <img
            v-else
            class="icon"
            src="../assets/sad_face_no_border.svg"
            alt="happy_face"
          />
          <span style="text-align: left">
            <span v-if="info.SPOL === 'm'">Župan</span>
            <span v-else>Županja</span><br />
            <span>{{ info.KANDIDAT }}</span
            ><br />
            <b v-if="info['IZVAJA PP'] === '1'">
              je izpolnil<span v-if="info.SPOL === 'ž'">a</span>
            </b>
            <b v-else> ni izpolnil<span v-if="info.SPOL === 'ž'">a</span> </b>
            <span v-if="info['IZVAJA PP'] === '1'"> zavezo</span>
            <span v-else> zaveze</span>
            iz lokalnih volitev 2018
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { removeDiacritics } from "../helpers/removeDiacritics";

export default {
  name: "CardPP",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getProfilePicPath() {
      const img_name = removeDiacritics(this.info.OBČINA);
      return require(`../assets/img-obcine/profilke/${img_name}.png`);
    },
    getGrbPath() {
      const img_name = removeDiacritics(this.info.OBČINA);
      return require(`../assets/img-obcine/grbi/${img_name}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-color: #fcf5de;
  padding: 5rem 4rem 3rem;

  #col_one {
    .text {
      font-size: 1.5rem;
      line-height: 1;

      .izvaja {
        font-size: 3.5rem;
      }
      .ne_izvaja {
        font-size: 3.2rem;
        line-height: 0.7;
      }
    }

    strong {
      font-size: 3rem;
      line-height: 1;
      color: #5f235b;
      font-weight: 800;
    }
  }

  #col_two {
    .text {
      font-size: 1.8rem;
      line-height: 1;
      font-style: italic;

      .icon {
        position: absolute;
        top: -2.5rem;
        right: calc(120px - 0.5rem);
        background-color: #f2cc59;
        border-radius: 50%;
        display: inline-block;
        height: 100px;
        width: auto;
      }

      .candidate_img {
        position: absolute;
        height: 140px;
        width: auto;
        border-radius: 50%;
        top: -3.5rem;
        right: -0.5rem;
      }
    }

    b {
      color: #5f235b;
    }
  }
}
</style>
