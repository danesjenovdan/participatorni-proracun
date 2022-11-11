<template>
  <div class="container py-5">
    <div class="row faq-row mx-0">
      <div class="col-md-12 py-4 text-center">
        <h2>
          KAJ JE
          <span><strong>PARTICIPATIVNI PRORAČUN</strong></span
          >?
        </h2>
      </div>
      <div class="col-md-12">
        <BigVideo />
      </div>
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
</template>

<script>
import BigVideo from "../BigVideo.vue";

const faqs = [
  {
    q: "Kaj je participativni proračun?",
    a: `
      <p>Participativni proračun je proces demokratičnega soodločanja, pri katerem o porabi dela proračunskih sredstev neposredno odločajo prebivalke in prebivalci.</p>
      <p>Obstaja več načinov, kako se občine posvetujejo z občankami in občani; na primer preko vključevanje lokalnih svetov ali zbiranjem mnenj prebivalk in prebivalcev. Različni načini soodločanja se med seboj ne izključujejo, so pa nekateri bolj transparentni in demokratični, tako da je pomembno, da jih med seboj ne zamenjujemo. Participativni proračun, kakor ga razumemo mi in strokovna javnost, definira:</p>
      <ul>
        <li>vnaprej določen delež javnih sredstev, namenjen projektom, ki jih predlagajo in se do njih neposredno opredelijo <i>le</i> občani in občanke;</li>
        <li>do potankosti definiran postopek, v katerem ni diskrecije političnih predstavnikov/-ic oziroma krajevnih skupnosti (razen filtriranja predlogov glede na njihovo izvedljivost, pristojnosti občine in zakonitost), končna odločitev pa je na strani občanov in občank;</li>
        <li>organizacija posvetovanja oz. razprave občanov in občank;</li>
        <li>javna objava vseh korakov v postopku;</li>
        <li>ponovljivost postopka (ne gre le za enkraten dogodek, ampak za redno obliko soodločanja);</li>
        <li>vnaprej določeno in javno objavljeno časovno obdobje, v katerem bodo projekti izvedeni.</li>
      </ul>
    `,
  },
  {
    q: "Zakaj je dober za občane in občanke?",
    a: `
      <p>V 30 letih obstoja participativnega proračuna so velike organizacije, kot so Svetovna banka, Organizacija združenih narodov, pa tudi večje število univerz in posamičnih raziskovalcev dodobra preučile in identificirale učinke izvajanja participativnega proračuna. Ugotavljajo, da participativni proračun prinaša:</p>
      <ul>
        <li>povečanje učinkovitosti porabe sredstev;</li>
        <li>hitrejšo gospodarsko rast;</li>
        <li>bolj enakomeren razvoj občin;</li>
        <li>zmanjšanje socialnih razlik;</li>
        <li>boljše ravnanje z infrastrukturo in večja identifikacija z njo;</li>
        <li>povečanje zaupanja v demokratične postopke;</li>
        <li>povečanje aktivacije prebivalcev in prebivalk;</li>
        <li>pod določenimi pogoji celo več pobranih davkov.</li>
      </ul>
    `,
  },
  {
    q: "Zakaj je dober za vodstvo občine?",
    a: `
      <p>Vsaka občina, ki del proračuna prepusti v upravljanje občanom in občankam, si na ta na način pridobi zaupanje in poveča legitimost. Občinsko delovanje postane bolj transparetno in dostopno, občanke in občani pa se počutijo bolj povezani z občino in se v večji meri vključujejo v občinske procese. Uvedba participativnega proračuna je za občino dobra tudi zato, ker preko pobud občank in občanov omogoča detekcijo lokalnih potreb in problemov.</p>
    `,
  },
  {
    q: "Primeri dobre prakse iz tujine in Slovenije",
    a: `
      <p>Leta 1989 so participativni proračun kot prvi uvedli v brazilskem mestu Porto Alegre, z njegovo implementacijo pa se je predvsem izboljšala javna infrastruktura in njena dostopnost. Mehanizem se je skokovito razširil v druge države po letu 2001, ko je Porto Alegre gostil Svetovni socialni forum.</p>
      <p>Danes participativni proračun uporabljajo tako majhna kot večmilijonska mesta, med njimi Buenos Aires, La Paz, Montevideo, Boston, v Evropi pa ga je vsaj enkratno uvedlo že več kot <a href="https://ec.europa.eu/futurium/en/egovernment4eu/initiative-promote-participatory-budgeting-methods-and-tools" target="_blank">3000 mest</a>, celo velemesta, kot so Pariz, Milano, Madrid ali Lizbona.</p>
      <p>Model participativnega proračuna, ki izhaja iz Porto Alegra, v kar največji meri predaja odločanje o delu proračuna občankam in občanom. Proces se izvaja vsakoletno, ljudje sami predlagajo projekte in jih tudi izberejo, občine pa so zavezane k njihovi izvedbi.</p>
      <p>Od pričetka trenutnega mandata leta jeseni 2018 se je za izvedbo participativnega proračuna odločilo 39 slovenskih občin: Ajdovščina, Benedikt, Bohinj, Brežice, Črenšovci, Divača, Dol Pri Ljubljani, Domžale, Dravograd, Hrastnik, Hrpelje-Kozina, Izola, Jesenice, Komen, Koper, Kranj, Krško, Laško, Logatec, Lovrenc na Pohorju, Maribor, Medvode, Mislinja, Murska Sobota, Nova Gorica, Postojna, Ptuj, Razkrižje, Ruše, Semič, Sevnica, Slovenjske Konjice, Slovenj Gradec, Sveta Trojica v Slovenskih goricah, Šentilj, Škofja Loka, Šmartno ob Paki, Šoštanj, Tolmin.</p>
    `,
  },
  {
    q: "Kako smo zbirali odgovore kandidatk in kandidatov?",
    a: `
      <p>V prvi kampanji smo kontaktirali smo vseh 688 kandidatk in kandidatov na lokalnih volitvah in jih prosili za odgovor na vprašanje: “Ali boste v primeru, da boste izvoljeni, v svoji občini izvajali participativni proračun?” Kandidatke in kandidati, ki nam niso odgovorili, so bili navedeni kot “se ni zaobljubila” oziroma “se ni zaobljubil”.</p>
      <p>Vse kandidatke in kandidate večjih političnih strank (DD, DeSUS, Levica, LMŠ, NSi, Oljka, SD, SDS, SLS, SMC, SNS, SSN idr.) smo kontaktirali preko njihovih strank. Nekatere kandidatke in kandidate smo kontaktirali preko zasebnih sporočil na njihovih družbenih omrežjih. Vsem ostalim smo poslali pošto na njihov domač naslov, naveden na spletni strani volitve.gov.si.</p>
      <p>Za letošnjo kampanjo smo podatke zbrali tako, da smo vsem zaobljubljenim županom poslali poizvedbo o statusu izvajanja participativnega proračuna v njihovi občini. Prejete odgovore smo dodatno preverili s pregledom javno dostopnih informacij na spletnih mestih občin. Odločitev o stanju smo sprejeli glede na zgoraj omenjene strokovne kriterije definicije participativnega proračuna.</p>
    `,
  },
];

export default {
  name: "Questions",
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
.faq-row {
  // h2 {
  //   color: #27223a;
  //   font-size: 3rem;
  //   line-height: 1.1;
  //   text-align: center;

  //   @media (max-width: 1199.98px) {
  //     font-size: 2.5rem;
  //   }

  //   span {
  //     color: #e26e53;
  //   }
  // }

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

  .faq-q-box {
    background-color: #f2cc59;
    padding: 0.75rem 7rem 0.75rem 2.5rem;
    font-weight: 500;
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
      background-color: #5f235b;
      color: #fff;
      cursor: auto;
    }

    &::after {
      content: "";
      display: block;
      background-image: url("../../assets/arrow-right.svg");
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

    &.active::after,
    &:hover::after {
      transform: translateX(1.5rem);
    }
  }

  .faq-a-content {
    padding: 1.25rem 2.5rem;
  }

  .accordion-answer {
    display: none;

    @media (max-width: 575.98px) {
      display: block;
    }
  }

  .column-answer {
    display: block;
    height: 459px;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #5f235b #e6e6e6;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      appearance: none;
      background-color: #e6e6e6;
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #5f235b;
    }

    @media (max-width: 992px) {
      height: 420px;
    }

    @media (max-width: 767px) {
      height: auto;
      overflow-y: unset;
    }

    @media (max-width: 575.98px) {
      display: none;
    }
  }
}
</style>
