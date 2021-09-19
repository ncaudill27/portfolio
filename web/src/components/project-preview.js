import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";

import Heading from './typography/headingSecondary';

function ProjectPreview(props) {
  return (
    <RootWrapper to={`/project/${props.slug.current}`}>
      <ImageWrapper>
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
            style={{width: '100%', height: '100%'}}
          />
      </ImageWrapper>
      <Title>{props.title}</Title>
      <BlockContent blocks={props._rawExcerpt} />
    </RootWrapper>
  );
}

const RootWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
  }
`;

const Title = styled(Heading)`
`;

export default ProjectPreview;
