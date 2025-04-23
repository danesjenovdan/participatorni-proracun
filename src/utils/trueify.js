export default function trueify(input) {
  if (!input) return false;
  const string = String(input).toLowerCase().trim();
  return ["true", "t", "1", "yes", "y", "on", "enabled", "da", "ja"].includes(
    string,
  );
}
