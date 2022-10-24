import fs from "fs";
import { slugify } from "./slugify.js";

const municipalities = JSON.parse(fs.readFileSync("build/municipalities.json"));
const ppList = municipalities.municipalities.map((name) => {
  // TODO: fetch data from api
  const hasPP = Math.random() < 0.25;
  const promisedPP = hasPP || Math.random() < 0.25;

  const numCandidates = Math.random() < 0.5 ? 1 : 2;

  const obj = {
    name,
    slug: slugify(name),
    candidates: [
      {
        name: "Dummy 1",
        proposer: "Lista za Dummy 1",
        has_pp: hasPP,
        promised_pp: promisedPP,
      },
    ],
  };

  if (numCandidates > 1) {
    obj.candidates.push({
      name: "Dummy 2",
      proposer: "Lista za Dummy 2",
      has_pp: !hasPP,
      promised_pp: !promisedPP,
    });
  }

  return obj;
});

fs.mkdirSync("dist", { recursive: true });

fs.writeFileSync(
  "dist/pp_list.json",
  JSON.stringify({ municipalities: ppList }, null, 2)
);
