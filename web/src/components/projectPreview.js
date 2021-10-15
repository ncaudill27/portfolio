import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { useSpring, animated } from "react-spring";

import BlockContent from "./block-content";
import Title from "./typography/headingSecondary";
import Flex from "./flex";
import TechStack from "./projectStack";

function ProjectPreview(props) {
  const [isHover, setIsHover] = React.useState(false);
  const hover = () => setIsHover(true);
  const unHover = () => setIsHover(false);

  const styles = useSpring({
    transform: isHover ? `scale(1.015)` : `scale(1)`,
    backgroundColor: isHover ? "var(--color-text-transparent)" : "var(--color-background)",
    config: {
      tension: 150,
      friction: 10
    }
  });

  return (
    <RootWrapper
      as={Link}
      to={`/projects/${props.slug.current}`}
      onMouseEnter={hover}
      onMouseLeave={unHover}
    >
      <animated.div style={styles}>
        <ImageWrapper>
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
            style={{ width: "100%", height: "100%" }}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Flex gap={1}>
            <StackWrapper gap={0} stack>
              <TechStack list={props.stack} iconOnly />
            </StackWrapper>
            <div>
              <Title>{props.title}</Title>
              <BlockContent blocks={props._rawExcerpt} />
            </div>
          </Flex>
        </ContentWrapper>
      </animated.div>
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
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

const StackWrapper = styled(Flex)`
  padding-top: var(--spacing-1);
`;

const ContentWrapper = styled.div`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  padding-bottom: var(--spacing-4);
`;
export default ProjectPreview;
