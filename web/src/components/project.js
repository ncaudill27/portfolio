import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// TYPOGRAPHY
import Title from "./typography/headingPrimary";
import Header from "./headerSide";
import BlockContent from "./blockContent";
// UI COMPONENTS
import Layout from "../containers/layout";
import TripleColumnLayout from "./layoutTripleColumn";

import Hamburger from "./headerHamburger";
import Aside from "./aside";
import Stack from "./projectStack";
import AsideCategory from "./projectAsideCategory";
import RelatedProjects from "./projectRelated";
import Links from "./projectLinks";

function Project({ _rawBody, title, mainImage, relatedProjects, stack, links }) {
  return (
    <Layout seo={{ title: title }}>
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
          <CopyWrapper>
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

export const CopyWrapper = styled.div`
  @media (max-width: 700px) {
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

  @media (min-width: 700px) {
    display: none;
  }
`;

export default Project;
