/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import { stringify } from "csv-stringify/sync";

const municipalities = fs.readJsonSync("data/municipalities.json");

const fieldNameMap = {
  __municipality_id: "ID Občine",
  __municipality_name: "Občina",
  naziv: "Ime",
  pred: "Predlagatelj",
  // "lista": "Lista", // always the same as `pred`
  dat_roj: "Datum rojstva",
  izob: "Izobrazba",
  nas: "Naslov",
  ulc: "Ulica",
  hst: "Hišna številka",
  pos_id: "Poštna številka",
  pos: "Pošta",
  drz: "Državljan",
};

async function main() {
  const date = new Date().toISOString().replaceAll(":", "-").split(".")[0];
  const baseUrl = "https://volitve.dvk-rs.si/lv2022/data/obcine-kandidati/";
  const all = [];

  for (const m of municipalities.dvk) {
    const id = m[0];
    const paddedNumber = id.toString().padStart(3, "0");
    const url = `${baseUrl}kandidati_${paddedNumber}.json`;
    const name = m[2];
    console.log(url, name);

    try {
      const response = await axios.get(url);
      const mayorCandidates = response.data
        .filter((o) => o.tip === "501")
        .map((o) => ({
          ...o,
          dat_roj: (o.dat_roj || "").split("T")[0],
          __municipality_id: id,
          __municipality_name: name,
        }));
      all.push(...mayorCandidates);
    } catch (error) {
      if (error.response?.status !== 404) {
        throw error;
      }
    }
  }

  fs.writeJsonSync(`data/${date}_candidates_raw.json`, all, { spaces: 2 });
  const csvData = stringify(all, { header: true });
  fs.writeFileSync(`data/${date}_candidates_raw.csv`, csvData);

  const namedAll = all
    .map((obj) => {
      const betterObj = {};
      Object.keys(fieldNameMap).forEach((key) => {
        betterObj[fieldNameMap[key]] = obj[key];
      });
      return betterObj;
    })
    .slice()
    .sort((a, b) => {
      const x1 = a["Občina"].localeCompare(b["Občina"]);
      const x2 = a.Ime.localeCompare(b.Ime);
      return x1 || x2;
    });

  fs.writeJsonSync(`data/${date}_candidates.json`, namedAll, { spaces: 2 });
  const namedCsvData = stringify(namedAll, { header: true });
  fs.writeFileSync(`data/${date}_candidates.csv`, namedCsvData);

  // To generate diff files:
  // - copy new candidats.csv file to `latest_candidates.csv` to get a good diff on github
  // - run commands to generate files for only added and removed lines:
  //     diff -d --color=never data/2022-10-26T16-06-30_candidates.csv data/2022-11-02T13-55-14_candidates.csv | grep -E '^>' | sed 's/^>\s//' > data/latest_candidates_additions.csv
  //     diff -d --color=never data/2022-10-26T16-06-30_candidates.csv data/2022-11-02T13-55-14_candidates.csv | grep -E '^<' | sed 's/^<\s//' > data/latest_candidates_removals.csv

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
