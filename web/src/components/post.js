import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Title from "./typography/headingPrimary";

const Post = ({ frontmatter: { title, brief, hero, tags }, htmlAst }) => {
  const image = getImage(hero[0].file.url);

  return (
    <div>
      <img src={hero[0].file.url} />
      <Title>{title}</Title>
    </div>
  );
};

export default Post;
