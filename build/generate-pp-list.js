/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import axios from "axios";
import fs from "fs-extra";
import { prepareNameForSlug, slugify } from "./slugify.js";

const municipalities = fs.readJsonSync("data/municipalities.json");
const allCandidates = fs.readJsonSync("data/candidates.json");

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
    const candidates = allCandidates.filter((o) => o.municipality === name);

    all.push({
      id,
      name,
      slug: slugify(name),
      candidates: candidates.map((o) => {
        const cData = candidatesData.find((c) => c.party_name === o.name);
        let promisedPP = false;
        if (cData) {
          promisedPP = answers[cData.id];
        }

        return {
          name: o.name,
          slug: slugify(prepareNameForSlug(o.name)),
          gender: o.gender,
          proposer: o.proposer,
          has_pp: o.already_has_pp,
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
