/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import { stringify } from "csv-stringify/sync";
import assert from "node:assert/strict";

const municipalities = fs.readJsonSync("data/municipalities.json");
const candidates = fs.readJsonSync(
  "data/2022-11-07T14-19-49_candidates_raw.json"
);

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
  const baseUrl = "https://volitve.dvk-rs.si/lv2022/data/obcine-data/";
  const all = [];

  for (const m of municipalities.dvk) {
    const id = m[0];
    const paddedNumber = id.toString().padStart(3, "0");
    const url = `${baseUrl}data_${paddedNumber}.json`;
    const name = m[2];
    console.log(url, name);

    // if (id === 5) break;

    try {
      const response = await axios.get(url);
      const winner = response.data.zup.kand_rez
        .filter((o) => o.tip_izv === 1)
        .map((o) => ({
          ...o,
          __municipality_id: id,
          __municipality_name: name,
        }));
      assert(winner.length === 1);
      all.push(...winner);
    } catch (error) {
      if (error.response?.status !== 404) {
        throw error;
      }
    }
  }

  fs.writeJsonSync(`data/${date}_winners_raw.json`, all, { spaces: 2 });
  const csvData = stringify(all, { header: true });
  fs.writeFileSync(`data/${date}_winners_raw.csv`, csvData);

  const namedAll = all
    .map((obj) => {
      const cand = candidates.filter(
        (o) =>
          o.__municipality_id === obj.__municipality_id && o.naziv === obj.naz
      );
      console.log(obj.naz);
      console.log(`'${obj.pred}'`);
      assert(cand.length === 1);
      if (cand[0].pred.trim() === obj.pred.trim()) {
        console.log(`'${cand[0].pred.trim()}'`, `'${obj.pred.trim()}'`);
      }

      const betterObj = {};
      Object.keys(fieldNameMap).forEach((key) => {
        betterObj[fieldNameMap[key]] = cand[0][key];
      });
      return betterObj;
    })
    .slice()
    .sort((a, b) => {
      const x1 = a["Občina"].localeCompare(b["Občina"]);
      const x2 = a.Ime.localeCompare(b.Ime);
      return x1 || x2;
    });

  fs.writeJsonSync(`data/${date}_winners.json`, namedAll, { spaces: 2 });
  const namedCsvData = stringify(namedAll, { header: true });
  fs.writeFileSync(`data/${date}_winners.csv`, namedCsvData);

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
