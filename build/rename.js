import fs from "fs";
import path from "path";
import _ from "lodash-es";

const DIRS = ["src/assets/img-obcine/grbi", "src/assets/img-obcine/profilke"];

// eslint-disable-next-line no-restricted-syntax
for (const DIR of DIRS) {
  const files = fs.readdirSync(DIR);

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const [name, ext] = file.split(".");
    const newName = _.kebabCase(
      _.deburr(name.toLowerCase()).replace("mestna ", "").replace("obcina ", "")
    );
    const oldPath = path.join(DIR, `${name}.${ext.toLowerCase()}`);
    const newPath = path.join(DIR, `${newName}.${ext.toLowerCase()}`);
    if (oldPath !== newPath) {
      console.log(oldPath);
      console.log(newPath);
      // fs.renameSync(oldPath, newPath);
    }
  }
}
