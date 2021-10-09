import React from "react";
import styled from "styled-components";

import Title from "./typography/headingPrimary";

const Post = ({
  title,
  json,
  properties: {
    tags,
    date
  }
}) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

export default Post