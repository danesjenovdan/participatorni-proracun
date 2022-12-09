/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
// eslint-disable-next-line import/no-unresolved
import { stringify } from "csv-stringify/sync";
import assert from "node:assert/strict";
import { prepareNameForSlug, slugify } from "./slugify.js";

const winners = fs.readJsonSync("data/2022-12-08T13-35-28_winners.json");
const ppList = fs.readJsonSync("src/assets/pp_list.json");

async function main() {
  const all = winners.map((o) => {
    const m = ppList.find((mun) => mun.id === o["ID Občine"]);
    const p = m.candidates.filter(
      (cand) =>
        slugify(prepareNameForSlug(cand.name)) ===
        slugify(prepareNameForSlug(o.Ime))
    );
    assert(p.length === 1);
    return { ...o, has_pp: p[0].has_pp, promised_pp: p[0].promised_pp };
  });

  fs.writeJsonSync(`data/winners_promises_temp.json`, all, { spaces: 2 });
  const csvData = stringify(all, { header: true });
  fs.writeFileSync(`data/winners_promises_temp.csv`, csvData);

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
