import React from "react";

import Link from "../typography/hyperlink";

export function Hyperlink(props) {
  return <Link href={props.mark.href} {...props} />;
}
