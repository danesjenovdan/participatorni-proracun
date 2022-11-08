/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
import { capitalize, sample } from "lodash-es";
// eslint-disable-next-line import/no-unresolved
import { parse } from "csv-parse/sync";
import { prepareNameForSlug, slugify } from "./slugify.js";

const candidates = parse(
  fs.readFileSync("data/latest_candidates_edited_with_contacts.csv", "utf-8"),
  { columns: true, skip_empty_lines: true }
);
const words = fs.readJsonSync("data/words.json");
const PASS_WORD_COUNT = 3;

async function main() {
  const all = [];

  for (const candidate of candidates) {
    const name = prepareNameForSlug(candidate["Ime priimek"]);
    const username = `${slugify(name).replace(/-/gi, ".")}@glas-ljudstva.si`;

    let password = "";
    for (let i = 0; i < PASS_WORD_COUNT; i += 1) {
      password += capitalize(sample(words));
    }

    const email = (candidate["E-naslov kandidat"] || "")
      .trim()
      .split(/[ ;]+/g)[0]
      .trim()
      .toLowerCase();

    console.log(email);
    // console.log(username);
    // console.log(password);
    all.push({
      name: candidate["Ime priimek"],
      municipality: candidate["Občina"],
      email,
      username,
      password,
      proposer: candidate.Predlagatelj,
      gender: (candidate.Spol || "").toLowerCase() === "m" ? "m" : "f",
      already_has_pp: candidate["Župan že izvaja PP"] === "TRUE",
    });
  }

  fs.writeJsonSync(`data/passwords.json`, all, { spaces: 2 });

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
