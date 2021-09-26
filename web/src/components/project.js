import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// TYPOGRAPHY
import Title from "./typography/headingPrimary";
// UI COMPONENTS
import Header from "./headerSide";
import BlockContent from "./block-content";
import Stack from "./projectStack";
import AsideCategory from "./projectAsideCategory";
import RelatedProjects from "./projectRelated";
import Links from "./projectLinks";

function Project({ _rawBody, title, mainImage, relatedProjects, stack, links }) {
  return (
    <RootWrapper>
      <Header />
      <article>
        <ImageWrapper>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(650)
              .height(300)
              // .fit('fill')
              .url()}
            alt={mainImage.alt}
            style={{
              marginBottom: "var(--spacing-1)"
            }}
          />
        </ImageWrapper>
        <CopyWrapper>
          <Title>{title}</Title>
          <BlockContent blocks={_rawBody} />
        </CopyWrapper>
      </article>
      <AsideWrapper>
        <StickyWrapper>
          {links.length > 0 && (
            <AsideCategory title="Project Links">
              <Links list={links} />
            </AsideCategory>
          )}
          {stack.length > 0 && (
            <AsideCategory title="Stack">
              <Stack list={stack} />
            </AsideCategory>
          )}
          {relatedProjects.length > 0 && (
            <AsideCategory title="Related Projects">
              <RelatedProjects list={relatedProjects} />
            </AsideCategory>
          )}
        </StickyWrapper>
      </AsideWrapper>
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  padding-bottom: var(--spacing-10);

  @media (min-width: 700px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
    padding-right: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
    display: grid;
    grid-template-columns: 1fr minmax(500px, 65ch) 1fr;
    gap: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
  }
`;

export const CopyWrapper = styled.div`
  @media (max-width: 700px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`;

const AsideWrapper = styled.aside`
  padding-top: var(--spacing-2);
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: var(--spacing-3);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const ImageWrapper = styled.div`
  & > img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export default Project;
