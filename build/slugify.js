import _ from "lodash-es";

export function slugify(value) {
  return _.kebabCase(
    _.deburr(value.toLowerCase()).replace("mestna ", "").replace("obcina ", "")
  );
}
