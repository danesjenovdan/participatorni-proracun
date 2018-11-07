<template>
  <div class="row faq-row mx-0">
    <div class="col-md-12">
      <h2>
        VSE, KAR STE ŽELELI VEDETI O
        <span>PARTICIPATIVNEM PRORAČUNU</span>
      </h2>
    </div>
    <div class="col-md-6 mt-5 px-0">
      <template v-for="(qa, i) in stuff">
        <div
          :key="qa.q"
          :class="['faq-q-box', { active: i === selected }]"
          @click="selectAnswer(i)"
        >
          {{ qa.q }}
        </div>
        <div
          v-if="i === selected"
          :key="qa.a"
          class="faq-a-content accordion-answer"
          v-html="qa.a"
        />
      </template>
    </div>
    <div class="col-md-6 mt-5 px-0">
      <div
        class="faq-a-content column-answer"
        v-html="stuff[selected].a"
      />
    </div>
  </div>
</template>

<script>
const stuff = [
  {
    q: 'Kaj je participativni proračun?',
    a: `
      <p>Participativni proračun je proces demokratičnega soodločanja, pri katerem o porabi dela proračunskih sredstev neposredno odločajo prebivalke in prebivalci.</p>
      <p>Obstaja več načinov, kako se občine posvetujejo z občankami in občani; na primer preko vključevanje lokalnih svetov ali zbiranjem mnenj prebivalk in prebivalcev. Različni načini soodločanja se med seboj ne izključujejo, so pa nekateri bolj transparentni in demokratični, tako da je pomembno, da jih med seboj ne zamenjujemo. Participativni proračun, kakor ga razumemo mi in strokovna javnost, definira:</p>
      <ul>
        <li>vnaprej določen delež javnih sredstev, namenjen projektom, ki jih predlagajo in se do njih neposredno opredelijo <i>le</i> občani in občanke;</li>
        <li>do potankosti definiran postopek, v katerem ni diskrecije političnih predstavnikov/-ic oziroma krajevnih skupnosti (razen filtriranja predlogov glede na njihovo izvedljivost, pristojnosti občine in zakonitost), končna odločitev pa je na strani občanov in občank;</li>
        <li>organizacija posvetovanja oz. razprave občanov in občank; </li>
        <li>javna objava vseh korakov v postopku; </li>
        <li>ponovljivost postopka (ne gre le za enkraten dogodek, ampak za redno obliko soodločanja); </li>
        <li>vnaprej določeno in javno objavljeno časovno obdobje, v katerem bodo projekti izvedeni. </li>
      </ul>
    `,
  },
  {
    q: 'Zakaj je dober za občane in občanke?',
    a: `
      <p>V skoraj 30 letih obstoja participativnega proračuna so velike organizacije, kot so Svetovna banka, Organizacija združenih narodov, pa tudi večje število univerz in posamičnih raziskovalcev dodobra preučile in identificirale učinke izvajanja participativnega proračuna. Ugotavljajo, da participativni proračun prinaša:</p>
      <ul>
        <li>povečanje učinkovitosti porabe sredstev,</li>
        <li>hitrejšo gospodarsko rast,</li>
        <li>bolj enakomeren razvoj občin,</li>
        <li>zmanjšanje socialnih razlik,</li>
        <li>boljše ravnanje z infrastrukturo in večja identifikacija z njo,</li>
        <li>povečanje zaupanja v demokratične postopke,</li>
        <li>povečanje aktivacije prebivalcev in prebivalk,</li>
        <li>pod določenimi pogoji celo več pobranih davkov.</li>
      </ul>
    `,
  },
  {
    q: 'Zakaj je dober za vodstvo občine?',
    a: `
      <p>Vsaka občina, ki del proračuna prepusti v upravljanje občanom in občankam, si na ta na način pridobi zaupanje in poveča legitimost. Občinsko delovanje postane bolj transparetno in dostopno, občanke in občani pa se počutijo bolj povezani z občino in se v večji meri vključujejo v občinske procese. Uvedba participativnega proračuna je za občino dobra tudi zato, ker preko pobud občank in občanov omogoča detekcijo lokalnih potreb in problemov.</p>
    `,
  },
  {
    q: 'Primeri dobre prakse iz tujine in Slovenije',
    a: `
      <p>Leta 1989 so participativni proračun kot prvi uvedli v brazilskem mestu Porto Alegre, z njegovo implementacijo pa se je predvsem izboljšala javna infrastruktura in njena dostopnost. Mehanizem se je skokovito razširil v druge države po letu 2001, ko je Porto Alegre gostil Svetovni socialni forum.</p>
      <p>Danes participativni proračun uporabljajo tako majhna kot večmilijonska mesta, med njimi Buenos Aires, La Paz, Montevideo, Boston, v Evropi pa ga je vsaj enkratno uvedlo že več kot <a href="https://ec.europa.eu/futurium/en/egovernment4eu/initiative-promote-participatory-budgeting-methods-and-tools" target="_blank">3000 mest</a>, celo velemesta, kot so Pariz, Milano, Madrid ali Lizbona.</p>
      <p>Model participativnega proračuna, ki izhaja iz Porto Alegra, v kar največji meri predaja odločanje o delu proračuna občankam in občanom. Proces se izvaja vsakoletno, ljudje sami predlagajo projekte in jih tudi izberejo, občine pa so zavezane k njihovi izvedbi.</p>
      <p>V Sloveniji najdemo najboljše primere implementacije participativnega proračuna v Ajdovščini, Komnu in Novi Gorici, v manjši obliki pa tudi v Kranjski Gori.</p>
      <p>Ajdovščina je participativni proračun uvedla v sklopu projekta Moja pobuda, v okviru katerega od maja 2016 poteka izbor projektov za dvoletne proračune.</p>
      <p>V občini Komen so v okviru projekta Jaz predlagam septembra 2016 prav tako uvedli predlaganje in izbor projektov za dveleten proračun, obe občini pa trenutno zaključujeta z izvedbenim delom proračuna iz leta 2016. V občini Ajdovščina je bilo tako izvedenih 31 projektov v skupnem znesku 360000 &euro;, v občini Komen pa 22 projektov v vrednosti 120000 &euro;. Obenem sta letos obe občini že izvedli tudi nov krog participativnega proračuna za leti 2019 in 2020, v okviru katerega so v Ajdovščini celo uvedli poseben del za mladinski participativni proračun. Občina Nova Gorica je participativni proračun uvedla maja 2017, v lanskem letu pa so lahko sodelujoči predlagali in izbirali projekte za leto 2018. Izbranih je bilo 19 predlogov, ki so trenutno v fazi izvajanja.</p>
      <p>Vse tri zgoraj omenjene občine so participativni proračun odprle tudi mladostnikom, saj je minimalna starost za sodelovanje 15 let, medtem ko so se v Kranjski Gori letošnje leto odločili za pilotno izvedbo mladinskega participativnega proračuna, ki je trenutno v fazi glasovanja.</p>
    `,
  },
  {
    q: 'Kako smo zbirali odgovore kandidatk in kandidatov?',
    a: `
      <p>Kontaktirali smo vseh 688 kandidatk in kandidatov na letošnjih lokalnih volitvah in jih prosili za odgovor na vprašanje: &ldquo;Ali boste v primeru, da boste izvoljeni, v svoji občini izvajali participativni proračun?&rdquo; Kandidatke in kandidati, ki nam niso odgovorili, so navedeni kot &ldquo;se ni zaobljubila&rdquo; oziroma &ldquo;se ni zaobljubil&rdquo;.</p>
      <p>Vse kandidatke in kandidate večjih političnih strank (DD, DeSUS, Levica, LMŠ, NSi, Oljka, SAB, SD, SDS, SLS, SMC, SNS, SSN idr.) smo kontaktirali preko njihovih strank. Nekatere kandidatke in kandidate smo kontaktirali preko zasebnih sporočil na njihovih družbenih omrežjih. Vsem ostalim smo poslali pošto na njihov domač naslov, naveden na spletni strani volitve.gov.si.</p>
      <p>Za kakršne koli napake se kandidatkam in kandidatom opravičujemo, spremembe odgovorov pa nam lahko sporočite na <a href="mailto:maja@djnd.si" target="_blank">maja@djnd.si</a>.</p>
    `,
  },
];

export default {
  name: 'Questions',
  data() {
    return {
      stuff,
      selected: 0,
    };
  },
  methods: {
    selectAnswer(i) {
      this.selected = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-row {
  h2 {
    color: #27223a;
    font-size: 3rem;
    line-height: 1.1;
    text-align: center;

    @media (max-width: 1199.98px) {
      font-size: 2.5rem;
    }

    span {
      color: #f2cc59;
    }
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

    &.active {
      background-color: #5f235b;
      color: #fff;
      cursor: auto;
    }

    &::after {
      content: '';
      display: block;
      background-image: url('../assets/arrow-right.svg');
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
    padding: 1.75rem 2.5rem;
  }

  .accordion-answer {
    display: none;

    @media (max-width: 575.98px) {
      display: block;
    }
  }

  .column-answer {
    display: block;

    @media (max-width: 575.98px) {
      display: none;
    }
  }
}
</style>
