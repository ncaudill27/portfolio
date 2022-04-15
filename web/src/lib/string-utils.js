import React from "react";
import reactStringReplace from "react-string-replace";

function ucfirst(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;
}

function emDasher(node) {
  const emRegex = /--/;

  if (typeof node === "string") {
    return reactStringReplace(node, emRegex, (match, i) => {
      return <>&#8212;{match}</>;
    });
  } else {
    return node;
  }
}

const validEmail = email => {
  console.log(email);
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "i"
  );
  console.log(regex.test(email));
  return regex.test(email);
};

const slugify = str => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s/g, "-");
};

export { validEmail, emDasher, ucfirst, slugify };
