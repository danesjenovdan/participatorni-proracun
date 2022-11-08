import _ from "lodash-es";

export function prepareNameForSlug(value) {
  const prepared = value
    .replace(/\(.+\)/gi, "")
    .replace(/mag\./gi, "")
    .replace(/dr\./gi, "")
    .replace(/farm\./gi, "")
    .replace(/vet\./gi, "")
    .replace(/med\./gi, "")
    .replace(/prof\./gi, "")
    .replace(/posl\.\s?ved/gi, "")
    .replace(/ing.\s?mehatronike/gi, "")
    .replace(/ing.\s?mehatronike/gi, "")
    .replace(/univ.\s?dipl.\s?prav./gi, "")
    .replace(/\smed$/g, "")
    .replace(/\s+/gi, " ")
    .trim();

  if (!/^[a-zćčšžđĆČŠŽĐ\- ]+$/gi.test(prepared)) {
    throw new Error(`Check name for slugify: ${prepared}`);
  }

  if (prepared.split(/\s+/gi).some((p) => p === p.toLowerCase())) {
    throw new Error(`Check name for slugify: ${prepared}`);
  }

  return prepared;
}

export function slugify(value) {
  return _.kebabCase(
    _.deburr(value.toLowerCase()).replace("mestna ", "").replace("obcina ", "")
  );
}
