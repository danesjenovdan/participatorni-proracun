/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import fs from "fs-extra";
import { slugify } from "./slugify.js";

const municipalities = fs.readJsonSync("data/municipalities.json");
const dataFiles = fs.readdirSync("data/");
const candidatesFile = dataFiles
  .filter((f) => f.endsWith("_candidates.json"))
  .sort((a, b) => a.localeCompare(b) * -1)[0];
const allCandidates = fs.readJsonSync(`data/${candidatesFile}`);
// const date = candidatesFile.split("_candidates.json")[0];

async function main() {
  const all = [];

  for (const m of municipalities.dvk) {
    const id = m[0];
    const name = m[2];
    const candidates = allCandidates.filter((o) => o["Občina"] === name);

    all.push({
      id,
      name,
      slug: slugify(name),
      candidates: candidates.map((o) => {
        // FIXME: fetch data from api
        const hasPP = Math.random() < 0.25;
        const promisedPP = hasPP || Math.random() < 0.25;

        return {
          name: o.Ime,
          slug: slugify(o.Ime),
          gender: "m", // FIXME: add data
          proposer: o.Predlagatelj,
          has_pp: hasPP,
          promised_pp: promisedPP,
        };
      }),
    });
  }

  fs.writeJsonSync("src/assets/pp_list.json", all, { spaces: 2 });

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
