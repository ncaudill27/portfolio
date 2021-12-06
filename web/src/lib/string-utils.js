function ucfirst(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;
}

function emDasher(node) {
  const emRegex = /--/g;

  if (typeof node === "string") {
    return node.replaceAll(emRegex, "&#8212;");
  } else {
    return node;
  }
}

const validate = email => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "i"
  );
  return regex.test(email);
};

const validateEmail = async email => {
  let validEmail = true;

  if (!email || !validate(email)) validEmail = false;

  return validEmail;
};

const slugify = str => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s/g, "-");
};

export { validateEmail, emDasher, ucfirst, slugify };
