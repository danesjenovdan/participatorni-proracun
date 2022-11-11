/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
import assert from "node:assert/strict";
// eslint-disable-next-line import/no-unresolved
import { parse } from "csv-parse/sync";

const candidates = parse(
  fs.readFileSync("data/latest_candidates_with_no_email.csv", "utf-8"),
  { columns: true, skip_empty_lines: true }
);
const passwords = fs.readJsonSync("data/passwords.json");

async function main() {
  const all = [
    `<style>
      body {
        font-family: sans-serif;
        font-size: 16px;
      }

      .letter {
        page-break-after: always;
      }

      .page {
        page-break-after: always;
      }

      .header .logo {
        width: 250px;
        display: block;
        float: right;
      }

      .header .address {
        padding-top: 9rem;
        padding-bottom: 6.5rem;
        padding-left: 3rem;
        font-size: 16px;
        line-height: 1.5;
      }

      .subject {
        font-size: 18px;
        text-align: center;
        margin-bottom: 2.5rem;
      }

      p {
        text-align: justify;
        line-height: 1.4;
      }

      .link {
        color: blue;
        text-decoration: underline;
        white-space: nowrap;
      }

      .lead {
        font-size: 18px;
      }

      strong {
        font-weight: 700;
      }

      .signature {
        margin-top: 1.5rem;
        font-style: italic;
        font-weight: 600;
      }
    </style>`,
  ];

  for (const candidate of candidates) {
    const name = candidate["Ime priimek"];
    const address = `${candidate.Ulica} ${candidate["Hišna številka"]}`;
    const post = `${candidate["Poštna številka"]} ${candidate["Pošta"]}`;

    const objs = passwords.filter((o) => o.name === name && !o.email);
    assert(objs.length === 1);
    const { username, password } = objs[0];

    console.log("---");
    console.log(name);
    console.log(address);
    console.log(post);
    console.log(username);
    console.log(password);
    console.log("---");

    all.push(`
      <div class="letter">
        <div class="page">
          <div class="header">
            <img class="logo" src="https://ci3.googleusercontent.com/proxy/My8gE9N-gQTIIaExvMZLCReqvxzV7qrJcbL3nd1VCu5gmAmI_yBsMuDaQadVYbcuw_hzqoXjJOK0oByhpSWhm4XG9g5MvA=s0" alt="">
            <div class="address">
              ${name}<br>
              ${address}<br>
              ${post}
            </div>
          </div>
          <h2 class="subject">Vprašalnik za kandidatke in kandidate za županjo oziroma župana za spletno orodje Volitvomat</h2>
          <p>Spoštovani!</p>
          <p>Po državnozborskih in predsedniških volitvah se t. i. super volilno leto v Sloveniji zaključuje z lokalnimi volitvami, na katerih boste kandidirali tudi vi. Zato vas vabimo, da rešite kratek vprašalnik, na podlagi katerega bomo pripravili lokalno različico Volitvomata, spletnega orodja, s pomočjo katerega bodo lahko volivke in volivci enostavno preverili, s katerim od kandidatov oz. kandidatk imajo najbolj skladna stališča. </p>
          <p>V iniciativi Glas ljudstva, ki združuje že več kot 100 organizacij in več tisoč posameznic in posameznikov iz civilne družbe, smo že v času državnozborskih volitev z našimi aktivnostmi pripomogli k izredno visoki volilni udeležbi in od kandidatov na aprilskih volitvah zahtevali vsebinske opredelitve do ključnih vprašanj za slovensko politiko. Nadaljevali smo na predsedniških volitvah, tudi na lokalni ravni pa želimo javnosti olajšati izbor kandidatk oziroma kandidatov, ki jim bodo zaupali svoj glas. </p>
          <p>Volivkam in volivcem želimo omogočiti, da na enostaven način spoznajo vaše vrednote in prepričanja. Zavedamo se, da je funkcija župana oziroma županje izredno pomembna, saj te s svetniki in svetnicami sprejemajo številne odločitve, ki neposredno vplivajo na kakovost življenja občank in občanov. Ravno zato je vaša opredelitev do nekaterih ključnih vprašanj izrednega pomena. Volitvomat, ki smo ga pripravili za državnozborske volitve, je izpolnilo več kot 100.000 volivk in volivcev, uspešni pa smo bili tudi v sklopu predsedniških volitev, kar kaže, da ljudje želijo poznati vsebinske opredelitve kandidatov in kandidatk, med katerimi izbirajo. </p>
          <p>Verjamemo, da je tudi vam pomembno, da se čim več ljudi udeleži volitev in da javnost izbere predstavnice in predstavnike, ki bo čim bliže njihovim vrednotam in prepričanjem. Zato smo prepričani, da se boste našemu vabilu odzvali in z nami sodelovali v skupnih prizadevanjih informiranja volivk in volivcev o njihovih možnostih na lokalnih volitvah.</p>
          <div style="page-break-after: always;"></div>
          <p class="lead" style="text-align: left; margin-top: 1rem;"><strong>Vprašalnik, v katerem podate svoja stališča, je na voljo tukaj: <span class="link">https://glas-ljudstva.si/lokalne-volitve-2022/kandidati_ke/</span></strong></p>
          <p class="lead">Vanj se vpišete s spodnjim uporabniškim imenom in geslom.</p>
          <p class="lead">
            <strong>Uporabniško ime: ${username}</strong><br>
            <strong>Geslo: ${password}</strong>
          </p>
          <p>Navodila za reševanje najdete na začetku vprašalnika, odgovore pa vnesite najkasneje do 13. novembra.</p>
          <p>Za kakršnakoli vprašanja in dodatne informacije smo na voljo na <span class="link">info@glas-ljudstva.si</span>, za sodelovanje pa se vam že vnaprej zahvaljujemo in vas lepo pozdravljamo.</p>
          <p class="signature">Ekipa Glas ljudstva</p>
        </div>
      </div>
    `);
  }

  fs.writeFileSync(`data/generated_letters.html`, all.join(""));

  // generated file is html, just use print to pdf in browser and page breaks should automatically work

  console.log("DONE");
}

main()
  .then(() => {
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
