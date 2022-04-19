import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// TYPOGRAPHY
import Title from "./typography/headingPrimary";
import Header from "./headerSide";
import BlockContent from "./sanityBlockContent";
// UI COMPONENTS
import Layout from "../containers/layout";
import TripleColumnLayout from "./layoutTripleColumn";

import Hamburger from "./headerHamburger";
import Aside from "./asideColumn";
import Stack from "./projectStack";
import AsideCategory from "./projectAsideCategory";
import RelatedProjects from "./projectRelated";
import Links from "./projectLinks";
import MaxWidthWrapper from "./maxWidthWrapper";

function Project({ _rawBody, title, mainImage, relatedProjects, stack, links, currentPath }) {
  return (
    <Layout currentPath={currentPath} seo={{ title: title }}>
      <TripleColumnLayout>
        <Header />
        <Hamburger />
        <main>
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
          <CopyWrapper width={690}>
            <Title>{title}</Title>
            <BlockContent blocks={_rawBody} />
          </CopyWrapper>
        </main>
        <Aside>
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
        </Aside>
      </TripleColumnLayout>
    </Layout>
  );
}

export const CopyWrapper = styled(MaxWidthWrapper)`
  // lead paragraph
  & > div > p:nth-child(1) {
    font-size: ${22 / 16}rem;
    font-weight: var(--font-weight-medium);
  }

  @media (max-width: 914px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`;

const ImageWrapper = styled.div`
  & > img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 915px) {
    display: none;
  }
`;

export default Project;
