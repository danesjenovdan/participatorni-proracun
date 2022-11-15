<template>
  <section class="bg-light-blue">
    <div class="container py-5">
      <div class="row faq-row mx-0">
        <div class="col-md-12 py-4 text-center">
          <h2>
            KAJ SPLOH JE
            <span><strong>PARTICIPATIVNI PRORAČUN</strong></span
            >?
          </h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <BigVideo />
        </div>
      </div>
      <div class="row faq-row">
        <div class="col-md-6 mt-5 px-0">
          <template v-for="(qa, i) in faqs" :key="qa.q">
            <div
              :class="['faq-q-box', { active: i === selected }]"
              @click="selectAnswer(i)"
            >
              {{ qa.q }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-if="i === selected"
              class="faq-a-content accordion-answer"
              v-html="qa.a"
            />
            <!-- eslint-enable vue/no-v-html -->
          </template>
        </div>
        <div class="col-md-6 mt-5 px-0">
          <!-- eslint-disable vue/no-v-html -->
          <div
            ref="answerEl"
            class="faq-a-content column-answer"
            v-html="faqs[selected].a"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BigVideo from "../BigVideo.vue";

const faqs = [
  {
    q: "Kaj je občinski participativni proračun?",
    a: `
      <p>Občinski participativni proračun je proces demokratičnega soodločanja, pri katerem o porabi dela občinskih proračunskih sredstev neposredno odloča lokalna skupnost. S pomočjo participativnega proračuna lahko prebivalke in prebivalci občine sami prepoznajo težave ali možnosti izboljšav, sami predlagajo rešitve in nato predloge za izvedbo izberejo z demokratičnim glasovanjem.</p>
      <p>Participativni proračun je proces, ki vsebuje:</p>
      <ul>
        <li>vnaprej določen delež javnih sredstev, namenjen projektom, ki jih predlagajo in se do njih neposredno opredelijo občanke in občani;</li>
        <li>do potankosti definiran postopek, v katerem politični predstavniki in predstavnice nimajo odločevalske moči (razen filtriranja predlogov glede na njihovo izvedljivost, pristojnosti občine in zakonitost), končna odločitev pa je na strani občank in občanov;</li>
        <li>organizacijo posvetovanja oziroma razprave med občankami in občani;</li>
        <li>javno objavo vseh korakov v postopku;</li>
        <li>ponovljivost postopka (ne gre le za enkraten dogodek, ampak za redno obliko soodločanja);</li>
        <li>vnaprej določeno in javno objavljeno časovno obdobje, v katerem bodo projekti izvedeni.</li>
      </ul>
    `,
  },
  {
    q: "Kaj ni participativni proračun?",
    a: `
      <p>Občina ne izvaja participativnega proračuna, če:</p>
      <ul>
        <li>izvoljenemu ali imenovanemu svetu ožjega dela občine namenijo del proračuna, s katerim ta svet prosto razpolaga (takšen primer so krajevni sveti, vaški sveti itd.);</li>
        <li>občankam in občanom omogočijo kakršno koli oddajo svojih predlogov ali rešitev, pri tem pa ima zadnjo odločitev, ali bo predlog implementiran, župan oziroma županja.</li>
      </ul>
      <p>Oba mehanizma sta sicer primer vključevanja širše javnosti v delovanje občine, vendar ne gre za mehanizem participativnega proračuna. Pri participativnem proračunu je jasno določen del oziroma višina proračuna, ki je namenjena participativnem procesu, občanke in občani pa ne oddajajo le predlogov, temveč imajo tudi končno besedo pri odločitvi, kateri predlogi bodo izvedeni. Gre za izrazito bolj vključujoč proces, ki sodelovanje omogoča vsakomur – brez povezav v krajevni skupnosti, vaškem svetu ali z županom.</p>
    `,
  },
  {
    q: "Zakaj je dober za občanke in občane?",
    a: `
      <p>V skoraj 30 letih obstoja participativnega proračuna so mnoge organizacije, med drugim Združeni narodi, večje število univerz ter posamičnih raziskovalk in raziskovalcev, dodobra preučili in identificirali učinke izvajanja participativnega proračuna.</p>
      <p>Ugotavljajo, da participativni proračun prinaša:</p>
      <ul>
        <li>povečanje učinkovitosti porabe sredstev,</li>
        <li>hitrejšo gospodarsko rast,</li>
        <li>bolj enakomeren razvoj občin,</li>
        <li>zmanjšanje socialnih razlik,</li>
        <li>boljše ravnanje z infrastrukturo in večja identifikacija z njo,</li>
        <li>povečanje zaupanja v demokratične postopke,</li>
        <li>povečanje aktivacije prebivalcev in prebivalk,</li>
        <li>izboljšane odnose v skupnosti in medsebojno sodelovanje.</li>
      </ul>
    `,
  },
  {
    q: "Zakaj je participativni proračun dober za vodstvo občine?",
    a: `
      <p>Vsaka občina, ki del proračuna prepusti v upravljanje javnosti, si na ta način pridobi njihovo zaupanje in poveča legitimnost v svoje delo. Občinsko delovanje postane bolj transparentno in dostopno, občanke in občani pa se počutijo bolj povezani z občino in se v večji meri vključujejo v občinske procese. Uvedba participativnega proračuna je za občino dobra tudi zato, ker preko pobud občank in občanov omogoča izboljšano zaznavanje lokalnih potreb in težav.</p>
    `,
  },
  {
    q: "Primeri dobre prakse iz tujine in Slovenije",
    a: `
      <p>Leta 1989 so participativni proračun kot prvi uvedli v brazilskem mestu Porto Alegre, z njegovo vpeljavo pa se je predvsem izboljšalo javno infrastrukturo in njeno dostopnost. Mehanizem se je skokovito razširil v druge države po letu 2001, ko je Porto Alegre gostil Svetovni socialni forum.</p>
      <p>Danes participativni proračun uporabljajo tako majhna kot večmilijonska mesta, med njimi Buenos Aires, La Paz, Montevideo in Boston, v Evropi pa ga je vsaj enkratno uvedlo že več kot <a href="https://www.euractiv.com/section/participatory-democracy/infographic/participatory-budgeting-europes-bet-to-increase-trust-in-government/" target="_blank">4500 mest</a>, celo velemesta kot so Pariz, Milano, Madrid in Lizbona. V Evropi je participativni proračun najbolj razširjen na Poljskem, kjer je celo zakonsko predpisan v vseh večjih mestih, v manjših pa spodbujan s finančnimi instrumenti.</p>
      <p>Model participativnega proračuna, ki izhaja iz Porto Alegra, v kar največji meri predaja odločanje o delu proračuna občankam in občanom. Proces se izvaja vsakoletno, ljudje sami predlagajo projekte in jih tudi izberejo, občine pa so zavezane k njihovi izvedbi.</p>
      <p>V Sloveniji najdemo najboljše primere izpeljave participativnega proračuna v Ajdovščini, ki izvaja že tretji cikel participativnega proračuna, in v občini Radovljica, kjer so že s prvo izvedbo participativnega proračuna dosegli participacijo, ki je višja od 30 %. Nekatere občine proces odpirajo tudi mladostnikom ter dnevnim migrantom, kar prinaša vedno nove vpoglede v stanje v občini in nove ideje za projekte.</p>
      <p>Trenutno v Sloveniji participativni proračun izvaja 39 občin. Veseli nas, da zanimanje za ta mehanizem iz leta v leto raste.</p>
    `,
  },
  {
    q: "Kako smo zbirali odgovore kandidatk in kandidatov?",
    a: `
      <p>Kandidatom in kandidatkam smo v okviru iniciative Glas ljudstva na njihove e-naslove poslali vprašalnik, v katerega je bilo vključeno vprašanje: “Občina bi morala uvesti participativni proračun v višini najmanj 1 % občinskega proračuna.” Prosili smo jih, da se do vprašanja opredelijo z odgovorom DA ali NE. Če odgovora niso podali, so navedeni kot “se ni zaobljubila” oziroma “se ni zaobljubil”.</p>
      <p>Seznam kandidatov in kandidatk smo pridobili s spletnega mesta Državne volilne komisije, e-naslove pa smo zbirali prek političnih strank, lokalnih, nevladnih in civilnodružbenih organizacij ter brskanjem po spletu. Nekatere kandidatke in kandidate smo kontaktirali preko zasebnih sporočil na njihovih družbenih omrežjih. V primeru stranke Levica in SNS smo kandidatkam in kandidatom, za katere nismo našli e-naslovov, vprašalnik poslali direktno na stranko. Ostalim, za katere nismo našli e-naslova, vprašalnika nismo posredovali in so v naši raziskavi navedeni kot kot “se ni zaobljubila” oziroma “se ni zaobljubil”.</p>
      <p>Kandidati in kandidatke, ki niso prejeli vprašalnika, nam lahko še vedno posredujejo svoj e-naslov, na katerega jim bomo poslali vprašalnik, ob prejemu odgovorov pa bomo kar najhitreje spremenili tudi stanje zaobljube.</p>
      <p>Za kakršne koli napake se kandidatkam in kandidatom opravičujemo, spremembe odgovorov pa nam lahko sporočite na <a href="mailto:jasmina@danesjenovdan.si">jasmina@danesjenovdan.si</a>.</p>
    `,
  },
  {
    q: "Kako je potekala prva kampanja?",
    a: `
      <p>Pred lokalnimi volitvami leta 2018 smo s kampanjo “<a href="https://danesjenovdan.si/participativni-proracun/zaobljube/">Čas je, da občinski denar postane tudi tvoja stvar</a>” kandidate in kandidatke za župane oziroma županje pozvali, da se zavežejo k uvedbi participativnega proračuna v svoji občini. Prejeli smo 275 zaobljub, od tega je 57 kandidatov in kandidatk zmagalo na volitvah..</p>
      <p>Leta 2020 smo z obnovljeno kampanjo “<a href="https://danesjenovdan.si/participativni-proracun/" target="_blank">Kje je participativni proračun?</a>” preverjali, če zavezani župani svoje obljube držijo. Na spletnem mestu smo objavili seznam občin in županov s statusom o (ne)izvajanju. S kampanjo smo javnosti nudili vpogled v stanje v njihovem lokalnem okolju in ji dali možnost pritiska na njihove odločevalce s pošiljanjem dveh vrst e-sporočil – za župane in županje, ki so se zavezali, in za tiste, ki se niso.</p>
      <p>S kampanjo smo dosegli, da se je v slovenski javnosti (še dodatno) odprl pogovor o prednostih participativnega proračuna in stanju v Sloveniji, z velikim številom medijskih objav in pritiskom lokalnih skupnosti pa konec mandata 2018–2022 participativni proračun izvaja 39 slovenskih občin. Seznam teh občin je na voljo <a href="https://danesjenovdan.si/participativni-proracun/">tukaj</a>.</p>
    `,
  },
];

export default {
  name: "Questions",
  components: {
    BigVideo,
  },
  data() {
    return {
      faqs,
      selected: 0,
    };
  },
  methods: {
    selectAnswer(i) {
      this.selected = i;
      this.$refs.answerEl.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-light-blue {
  background-color: #edf4f6;
}
.faq-row {
  h2 {
    font-size: 50px;
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    color: #291749;
    line-height: 55px;
    margin-bottom: 30px;

    @media (max-width: 991.98px) {
      font-size: 38px;
      line-height: 42px;
    }
  }

  h2 span {
    color: #6037a9;
  }

  .faq-q-box {
    background-color: #a7c6d3;
    padding: 0.75rem 7rem 0.75rem 2.5rem;
    font-weight: 700;
    margin-top: 0.75rem;
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:first-child {
      margin-top: 0;
    }

    &.active {
      background-color: #291749;
      color: #fff;
      cursor: auto;
    }

    &::after {
      content: "";
      display: block;
      background-image: url("../../assets/arrow-right-purple.svg");
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 4rem;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50%;
      transform: translateX(-1rem);
      transition: transform 0.15s ease-in-out;
    }

    &.active::after {
      background-image: url("../../assets/arrow-right-blue.svg");
    }

    &.active::after,
    &:hover::after {
      transform: translateX(1.5rem);
    }
  }

  .faq-a-content {
    padding: 0 3.5rem;
    font-family: "BioRhyme";
    font-size: 20px;
    color: #000000;
    line-height: 28px;

    @media (max-width: 991.98px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 575.98px) {
      padding: 2rem;
    }
  }

  .accordion-answer {
    display: none;

    @media (max-width: 575.98px) {
      display: block;
    }
  }

  .column-answer {
    display: block;
    // height: 650px;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #6037a9 #e6e6e6;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      appearance: none;
      background-color: #e6e6e6;
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #6037a9;
    }

    // @media (max-width: 991.98px) {
    //   height: 600px;
    // }

    @media (max-width: 767.98px) {
      height: auto;
      overflow-y: unset;
    }

    @media (max-width: 575.98px) {
      display: none;
    }
  }
}
</style>
