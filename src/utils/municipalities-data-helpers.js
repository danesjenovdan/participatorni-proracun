import slugify from "./slugify.js";
import trueify from "./trueify.js";

function trueifyKey(item, dataKey) {
  return trueify(item[dataKey]);
}

function calculateStatus(item, isExecutingKey, hasCommittedKey) {
  const isExecuting = trueify(item[isExecutingKey]);
  const hasCommitted = trueify(item[hasCommittedKey]);
  if (isExecuting) {
    return "yes";
  }
  if (hasCommitted) {
    return "waiting";
  }
  return "no";
}

function slugifyName(item, dataKey) {
  const name = item[dataKey];
  return slugify(name);
}

function parseGender(item, dataKey) {
  const str = String(item[dataKey]).trim().toLowerCase();
  if (["f", "w", "z", "ž"].includes(str)) {
    return "f";
  }
  return "m";
}

function parseLinks(item, dataKey) {
  let linkString = item[dataKey];
  if (!linkString) {
    return [];
  }
  linkString = linkString.replaceAll("\n", "|||").replaceAll(",", "|||");
  const links = linkString.split("|||").map((link) => link.trim());
  const validLinks = links.filter((link) => link.length > 0);
  return validLinks;
}

const keys = {
  id: ["ID"],
  type: ["Občina/Mestna občina"],
  name: ["Občina"],
  slug: [slugifyName, "Občina"],
  pp_promise: [trueifyKey, "Zaveza PP"],
  pp_status: [calculateStatus, "Izvaja PP", "Zaveza PP"],
  mayor_name: ["Župan"],
  mayor_gender: [parseGender, "Spol"],
  email: ["Email"],
  proposer: ["Predlagatelj"],
  evidence_links: [parseLinks, "Dokazilo"],
};

// eslint-disable-next-line import/prefer-default-export
export function mapKeyNames(data) {
  return data.map((item) => {
    const mappedItem = {};
    Object.keys(keys).forEach((key) => {
      const [dataKey, ...rest] = keys[key];
      if (typeof dataKey === "string") {
        mappedItem[key] = item[dataKey];
      } else if (typeof dataKey === "function") {
        mappedItem[key] = dataKey(item, ...rest);
      }
    });
    return mappedItem;
  });
}
