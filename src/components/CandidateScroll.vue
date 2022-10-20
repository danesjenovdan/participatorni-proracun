<template>
  <div class="row">
    <div class="col p-lg-5 p-3 pretext">
      <div class="row">
        <div class="col align-self-center pretext-xl">
          <p>
            <strong
              >56
              <img
                class="icon"
                src="../assets/handshake.svg"
                alt="handshake"
              /> </strong
            ><br />
            <nobr> KANDIDATOV, KI </nobr><br />
            <nobr> SO SE ZAVEZALI K </nobr><br />
            <nobr> PARTICIPATIVNEMU </nobr><br />
            <nobr> PRORAČUNU, JE </nobr><br />
            <nobr> BILO IZVOLJENIH. </nobr>
          </p>
          <background-square
            color="#e5816a"
            :opacity="0.2"
            height="150px"
            width="150px"
            tilt-angle="-10deg"
            top="35px"
            left="35px"
          ></background-square>
        </div>
        <div class="col align-self-center text-center pretext-xs">
          <p>
            <strong
              >56
              <img
                class="icon"
                src="../assets/handshake.svg"
                alt="handshake"
              /> </strong
            ><br />
            <nobr> KANDIDATOV, KI </nobr><br />
            <nobr> SO SE ZAVEZALI K </nobr><br />
            <nobr> PARTICIPATIVNEMU </nobr><br />
            <nobr> PRORAČUNU, JE </nobr><br />
            <nobr> BILO IZVOLJENIH. </nobr>
          </p>
          <background-square
            class="bg-square-lg"
            color="#e5816a"
            :opacity="0.2"
            height="150px"
            width="150px"
            tilt-angle="-10deg"
            top="40px"
            left="30%"
          ></background-square>
          <background-square
            class="bg-square-sm"
            color="#e5816a"
            :opacity="0.2"
            height="140px"
            width="140px"
            tilt-angle="-10deg"
            top="40px"
            left="25%"
          ></background-square>
          <background-square
            class="bg-square"
            color="#e5816a"
            :opacity="0.2"
            height="140px"
            width="140px"
            tilt-angle="-10deg"
            top="40px"
            left="38%"
          ></background-square>
          <background-square
            class="bg-square-xs"
            color="#e5816a"
            :opacity="0.2"
            height="140px"
            width="140px"
            tilt-angle="-10deg"
            top="40px"
            left="33%"
          ></background-square>
        </div>
        <div class="col-12 col-sm-6 pretext-xs text-center">
          <p>
            <strong>
              <img
                class="icon"
                src="../assets/slabo.svg"
                alt="suggest"
              /> </strong
            ><br />
            4 leta po danih<br />
            <nobr> zavezah jih </nobr><br />
            <nobr> PARTICIPATIVNEGA </nobr><br />
            <nobr> PRORAČUNA </nobr><br />
            <nobr> NE IZVAJA </nobr><br />
            <nobr
              ><strong>{{ unimplemetedCount }}</strong></nobr
            >
          </p>
          <background-square
            class="bg-square-lg"
            color="#e5816a"
            :opacity="0.2"
            height="180px"
            width="180px"
            tilt-angle="10deg"
            top="40px"
            left="90px"
          ></background-square>
          <background-square
            class="bg-square-sm"
            color="#e5816a"
            :opacity="0.2"
            height="170px"
            width="170px"
            tilt-angle="10deg"
            top="40px"
            left="20%"
          ></background-square>
          <background-square
            class="bg-square"
            color="#e5816a"
            :opacity="0.2"
            height="170px"
            width="170px"
            tilt-angle="10deg"
            top="40px"
            left="35%"
          ></background-square>
          <background-square
            class="bg-square-xs"
            color="#e5816a"
            :opacity="0.2"
            height="170px"
            width="170px"
            tilt-angle="10deg"
            top="40px"
            left="30%"
          ></background-square>
        </div>
      </div>
      <div class="row pretext-xl">
        <div class="col-lg-10 col-md-12 align-right">
          <p>
            <strong>
              <img
                class="icon suggest_icon"
                src="../assets/slabo.svg"
                alt="suggest"
              /> </strong
            ><br />
            4 leta po danih<br />
            <nobr> zavezah jih </nobr><br />
            <nobr> PARTICIPATIVNEGA </nobr><br />
            <nobr> PRORAČUNA </nobr><br />
            <nobr> NE IZVAJA </nobr><br />
            <nobr
              ><strong>{{ unimplemetedCount }}</strong></nobr
            >
          </p>
          <background-square
            color="#e5816a"
            :opacity="0.2"
            height="200px"
            width="200px"
            tilt-angle="10deg"
            top="20px"
            right="20px"
          ></background-square>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-lg-7 col-12 px-sm-0 scroll mb-5 mb-lg-0">
      <div class="scroll">
        <vuescroll :ops="ops">
          <div
            v-for="(c, i) in candidates"
            :key="c.SIMPLE_OBCINA"
            class="scroll-item"
            :class="{
              active: c['IZVAJA PP'] === '1',
              margin_top: i === 0,
            }"
          >
            <span class="obcina" @click="$emit('obcina-clicked', c)">{{
              c.SIMPLE_OBCINA
            }}</span>
            <span v-if="c['IZVAJA PP'] === '1'" class="happy_face_text">
              <img
                class="icon"
                src="../assets/happy_face.svg"
                alt="happy_face"
              />
              Izvaja
            </span>
            <span v-else class="sad_face_text">
              <img class="icon" src="../assets/sad_face.svg" alt="sad_face" />
              Ne izvaja
            </span>
            <br />
            <span class="candidate">{{ c.KANDIDAT }}</span>
          </div>
        </vuescroll>
      </div>
    </div>
  </div>
</template>

<script>
import Papa from "papaparse";
// import vuescroll from "vuescroll";
import BackgroundSquare from "./BackgroundSquare.vue";
// import csvData from "../assets/seznam_kandidatov.csv";
const csvData = "";

export default {
  name: "NoPPCandidates",
  components: {
    // vuescroll,
    BackgroundSquare,
  },

  data() {
    const data = Papa.parse(csvData, { header: true, skipEmptyLines: true });
    if (data.errors.length) {
      // eslint-disable-next-line no-console
      console.error("CSV Parse Errors:", data.errors);
    }
    const allData = data.data
      .map((row) => ({
        ...row,
        SIMPLE_OBCINA: row["OBČINA"].replace(/(?:MESTNA )?OBČINA /gi, ""),
      }))
      .filter((row) => row.ZMAGA !== "")
      .filter((row) => row["PRVI DROPDOWN"] === "1")
      .sort((a, b) => {
        if (a.SIMPLE_OBCINA < b.SIMPLE_OBCINA) {
          return -1;
        }
        if (a.SIMPLE_OBCINA > b.SIMPLE_OBCINA) {
          return 1;
        }
        return 0;
      });

    const implemetedCount = allData
      .map((o) => o["IZVAJA PP"])
      .filter((o) => o === "1").length;
    const unimplemetedCount = allData.filter(
      (o) => o["IZVAJA PP"] === "0" && o.OBLJUBA === "1"
    ).length;

    return {
      candidates: allData,
      implemetedCount,
      unimplemetedCount,
      ops: {
        vuescroll: {
          mode: "native",
        },
        scrollPanel: {},
        rail: {
          specifyBorderRadius: "0",
          size: "15px",
          background: "#e6e6e6",
          opacity: 1,
        },
        bar: {
          keepShow: true,
          background: "#e26e53",
          specifyBorderRadius: "0",
          size: "15px",
          minSize: 0.2,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.pretext {
  p {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 500;

    strong {
      color: #e5816a;
      font-size: 3rem;
    }
  }

  .align-right {
    p {
      text-align: right;
    }
  }

  .pretext-xs {
    display: none;
    @media (max-width: 992px) {
      display: unset;
    }
  }

  .pretext-xl {
    @media (max-width: 992px) {
      display: none;
    }
  }
}
.scroll {
  display: block;
  height: 590.25px;
  overflow-y: auto;

  .scroll-item {
    line-height: 1;
    margin-bottom: 40px;
  }

  .happy_face_text {
    color: #5f235b;
    margin-left: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  .sad_face_text {
    color: #e5816a;
    margin-left: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  .icon {
    margin-right: 0.2rem;
  }

  .obcina {
    font-size: 2rem;
    font-style: italic;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    @media (max-width: 575.98px) {
      font-size: 1.5rem;
    }
  }

  .candidate {
    font-size: 1.5rem;

    @media (max-width: 575.98px) {
      font-size: 1rem;
    }
  }

  .active {
    color: #5f235b;

    .obcina {
      font-weight: bold;
    }
  }

  @media (max-width: 992px) {
    height: 501px;
  }

  @media (max-width: 575.98px) {
    font-size: 1rem;
    padding-left: 15px;
  }
}

.icon {
  height: 1em;
  width: 1em;
}

.suggest_icon {
  margin-right: 3rem;
}

.bg-square-lg {
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

.margin_top {
  margin-top: 40px;
}
</style>
