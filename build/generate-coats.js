/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
import axios from "axios";
import gm from "gm";
import { join, resolve } from "path";
import { slugify } from "./slugify.js";

const im = gm.subClass({ imageMagick: true });

const municipalities = fs.readJsonSync("data/municipalities.json");
const generatedDir = resolve("public/generated/coats");
fs.mkdirSync(generatedDir, { recursive: true });

console.log("Deleting all generated coats!");
fs.emptyDirSync(generatedDir);

async function main() {
  const baseUrl = "https://volitve.dvk-rs.si/lv2022/assets/img/grbi/";

  for (const m of municipalities.dvk) {
    const id = m[0];
    const paddedNumber = id.toString().padStart(3, "0");
    const url = `${baseUrl}O${paddedNumber}.png`;
    const name = m[2];
    console.log(url, name);

    try {
      const response = await axios.get(url, { responseType: "stream" });
      const writeStream = fs.createWriteStream(
        join(generatedDir, `coat-${slugify(name)}.png`)
      );
      await new Promise((resolve_, reject) => {
        writeStream.on("finish", resolve_);
        writeStream.on("error", reject);
        // response.data.pipe(writeStream);
        im(response.data)
          .trim()
          .repage("+")
          .resize(200, 200)
          .gravity("Center")
          .background("transparent")
          .extent(200, 200)
          .stream()
          .pipe(writeStream);
      });
    } catch (error) {
      if (error.response?.status !== 404) {
        throw error;
      }
    }
  }

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
