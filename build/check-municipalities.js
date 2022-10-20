import fs from "fs";
import path from "path";
import _ from "lodash-es";

function slugify(value) {
  return _.kebabCase(
    _.deburr(value.toLowerCase()).replace("mestna ", "").replace("obcina ", "")
  );
}

const IMAGE_DIRS = [
  "src/assets/img-obcine/grbi",
  "src/assets/img-obcine/profilke",
];

const municipalities = JSON.parse(fs.readFileSync("build/municipalities.json"));
const slugs = municipalities.municipalities.map((m) => slugify(m));

// eslint-disable-next-line no-restricted-syntax
for (const IMAGE_DIR of IMAGE_DIRS) {
  const files = fs.readdirSync(IMAGE_DIR);
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const name = file.split(".")[0];
    if (!slugs.includes(name)) {
      console.log("WRONG IMAGE NAME", path.join(IMAGE_DIR, file));
    }
  }
}