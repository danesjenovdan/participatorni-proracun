<template>
  <div class="share-card-person-container">
    <div class="content">
      <div class="half left">
        <div class="title">Participativni proračun</div>
        <div class="slogan">
          ČAS JE, DA OBČINSKI DENAR POSTANE TUDI TVOJA STVAR!
        </div>
      </div>
      <div class="half right">
        <div class="bg">
          <div class="municipality">
            <div class="coat">
              <img
                :src="`/generated/coats/coat-${municipality.slug}.png`"
                alt=""
              />
            </div>
            <div class="name">Občina {{ municipality.name }}</div>
          </div>
          <div class="promise">
            <template v-if="candidate">
              {{ candidate.name }}
              <template v-if="candidate.has_pp">
                <strong>že izvaja</strong>
              </template>
              <template v-else>
                <template v-if="candidate.gender === 'm'">
                  <strong>
                    se {{ candidate.promised_pp ? "je" : "ni" }} zaobljubil,
                  </strong>
                  da bo izvajal
                </template>
                <template v-else>
                  <strong>
                    se
                    {{ candidate.promised_pp ? "je" : "ni" }} zaobljubila,
                  </strong>
                  da bo izvajala
                </template>
              </template>
              participativni proračun.
            </template>
            <template v-else>
              <strong
                >Preveri, kdo se je zavezal k uvedbi participativnega
                proračuna.</strong
              >
            </template>
          </div>
        </div>
        <div v-if="candidate" class="icon">
          <img
            v-if="candidate.has_pp || candidate.promised_pp"
            src="../assets/happy_face_no_border_bg.svg"
            alt=""
          />
          <img v-else src="../assets/sad_face_no_border_bg.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="logo">
        <img src="../assets/djnd-logo.svg" alt="Danes je nov dan" />
      </div>
      <div class="text">participativni-proracun.djnd.si</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareCardPerson",
  props: {
    municipality: {
      type: Object,
      required: true,
    },
    candidate: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.share-card-person-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  background-color: #f2cc59;

  .content {
    flex: 1;
    display: flex;

    .half {
      flex: 1;

      &.left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 50px;

        .title {
          margin-bottom: 1rem;
          font-family: "BioRhyme";
          font-size: 30px;
          line-height: 1.2;
          color: #000;
        }

        .slogan {
          font-size: 50px;
          line-height: 1;
          font-weight: 900;
          color: #000;
        }
      }

      &.right {
        position: relative;

        .bg {
          position: absolute;
          inset: 16px 28px 0 0;
          background-color: #fefaee;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px;

          .municipality {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 28px;

            .coat img {
              height: 70px;
            }

            .name {
              font-size: 20px;
              font-weight: 500;
              font-style: italic;
              color: #27223a;
              margin-bottom: 10px;
            }
          }

          .promise {
            font-size: 36px;
            line-height: 1.2;
            color: #000;

            strong {
              display: block;
              font-family: "BioRhyme";
              font-size: 42px;
              font-weight: 900;
              line-height: 1.1;
            }
          }
        }

        .icon {
          position: absolute;
          top: 0;
          right: 0;
          width: 120px;
          height: 120px;
        }
      }
    }
  }

  .footer {
    flex: 0 0 30px;
    display: flex;
    gap: 100px;
    height: 30px;

    img {
      height: 100%;
    }

    .text {
      color: #000;
      font-size: 16px;
      font-weight: 500;
      font-style: italic;
      line-height: 30px;
    }
  }
}
</style>
