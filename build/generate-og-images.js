/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import fs from "fs-extra";
import puppeteer from "puppeteer";
import { join, resolve } from "path";
import { spawn } from "child_process";
import { prepareNameForSlug, slugify } from "./slugify.js";

const municipalities = fs.readJsonSync("data/municipalities.json");
const allCandidates = fs.readJsonSync("data/candidates.json");
const generatedDir = resolve("public/generated/og-images");
fs.mkdirSync(generatedDir, { recursive: true });

console.log("Deleting all generated og images!");
fs.emptyDirSync(generatedDir);

// spawn dev server
const devServer = spawn("yarn", ["dev"], {});

async function main() {
  // wait for dev server to start
  await new Promise((r) => {
    setTimeout(() => r(), 5000);
  });

  const browser = await puppeteer.launch();

  let i = 0;
  for (const m of municipalities.dvk) {
    i += 1;

    const name = m[2];
    const slug = slugify(m[2]);
    console.log(slug, `${i}/${municipalities.dvk.length}`);

    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/promises-og-image/${slug}`, {
      waitUntil: "networkidle0",
    });

    const elem = await page.$("#og-image-wrapper");
    await elem.screenshot({ path: join(generatedDir, `og-image-${slug}.png`) });

    const candidates = allCandidates.filter((o) => o.municipality === name);

    for (const c of candidates) {
      const personSlug = slugify(prepareNameForSlug(c.name));
      await page.goto(
        `http://localhost:3000/promises-og-image/${slug}?p=${personSlug}`,
        {
          waitUntil: "networkidle0",
        }
      );

      const personElem = await page.$("#og-image-wrapper");
      await personElem.screenshot({
        path: join(generatedDir, `og-image-${slug}-${personSlug}.png`),
      });
    }
  }

  await browser.close();
}

main()
  .then(() => {
    devServer.kill();
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    devServer.kill();
    process.exit(1);
  });
