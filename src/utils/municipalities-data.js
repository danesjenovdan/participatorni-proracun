import municipalitiesCsv from "../assets/municipalities.csv";
import { mapKeyNames } from "./municipalities-data-helpers.js";

export function getMunicipalitiesData() {
  return mapKeyNames(municipalitiesCsv);
}

export function getMunicipalityByName(name) {
  const municipalities = getMunicipalitiesData();
  return municipalities.find((municipality) => municipality.name === name);
}

export function getMunicipalityBySlug(slug) {
  const municipalities = getMunicipalitiesData();
  return municipalities.find((municipality) => municipality.slug === slug);
}
