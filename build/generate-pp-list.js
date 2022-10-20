import fs from "fs";
import { slugify } from "./slugify.js";

const municipalities = JSON.parse(fs.readFileSync("build/municipalities.json"));
const ppList = municipalities.municipalities.map((name) => {
  // TODO: fetch data from api
  const hasPP = Math.random() < 0.25;
  const promisedPP = hasPP || Math.random() < 0.25;

  return {
    name,
    slug: slugify(name),
    has_pp: hasPP,
    promised_pp: promisedPP,
  };
});

fs.mkdirSync("dist", { recursive: true });

fs.writeFileSync(
  "dist/pp_list.json",
  JSON.stringify({ municipalities: ppList }, null, 2)
);
