export function ucfirst(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;
}

export function emDasher(str) {
  const emRegex = /--/g;
  return str.replaceAll(emRegex, "&#8212;");
}
