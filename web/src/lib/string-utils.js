export function ucfirst(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;
}

export function emDasher(node) {
  const emRegex = /--/g;

  if (typeof node === 'string') {
    return node.replaceAll(emRegex, "&#8212;");
  } else {
    return node
  }
}
