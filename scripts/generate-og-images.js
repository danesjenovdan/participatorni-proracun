/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import { csvParse } from "d3-dsv";
import fs from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { mapKeyNames } from "../src/utils/municipalities-data-helpers.js";

const dirName = fileURLToPath(new URL(".", import.meta.url));

function loadData() {
  const rawCsv = fs.readFileSync(
    resolve(dirName, "../src/assets/municipalities.csv"),
    "utf8",
  );
  const parsedCsv = csvParse(rawCsv);
  const data = mapKeyNames(parsedCsv);
  return data;
}

async function main() {
  const generatedDir = resolve(dirName, "../public/generated/og-images");
  console.log(generatedDir);

  console.log("Cleaning up old images...");
  fs.rmSync(generatedDir, { recursive: true, force: true });

  console.log("Creating new directory...");
  fs.mkdirSync(generatedDir, { recursive: true });

  console.log("Loading data...");
  const data = loadData();

  const browser = await puppeteer.launch();

  console.log("Generating og images...");

  let i = 0;
  for (const municipality of data) {
    i += 1;
    const url = `http://localhost:3000/generated/og-image/${municipality.slug}`;
    console.log(`${i}/${data.length}`, url);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    const elem = await page.$(".og-container");
    await elem.screenshot({
      path: join(generatedDir, `og-image-${municipality.slug}.png`),
    });
  }

  await browser.close();
}

main()
  .then(() => {
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
