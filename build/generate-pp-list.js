/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import axios from "axios";
import fs from "fs-extra";
import assert from "node:assert/strict";
import { prepareNameForSlug, slugify } from "./slugify.js";

const municipalities = fs.readJsonSync("data/municipalities.json");
const allCandidates = fs.readJsonSync("data/candidates.json");
const allWinners = fs.readJsonSync("data/2022-12-08T13-35-28_winners.json");

async function main() {
  const all = [];

  const response = await axios.get(
    "https://glas-ljudstva.si/api/municipalities/?election_id=3&question_ids=288"
  );
  const candidatesData = response.data.parties;
  const answers = response.data.questions["288"].party_answers;

  for (const m of municipalities.dvk) {
    const id = m[0];
    const name = m[2];
    const winners = allWinners
      .filter((o) => o["Občina"] === name)
      .map((o) => slugify(prepareNameForSlug(o.Ime)));
    const candidates = allCandidates.filter(
      (o) =>
        o.municipality === name &&
        winners.includes(slugify(prepareNameForSlug(o.name)))
    );
    assert(candidates.length === 1);

    all.push({
      id,
      name,
      slug: slugify(name),
      candidates: candidates.map((o) => {
        const cData = candidatesData.find((c) => c.party_name === o.name);
        let promisedPP = false;
        let hasPP = o.already_has_pp;
        if (cData) {
          promisedPP = answers[cData.id];
          hasPP = cData.already_has_pp;
        }

        return {
          name: o.name,
          slug: slugify(prepareNameForSlug(o.name)),
          gender: o.gender,
          proposer: o.proposer,
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
