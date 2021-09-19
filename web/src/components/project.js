import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// TYPOGRAPHY
import Heading from "./typography/headingPrimary";
import AsideHeading from "./typography/headingTertiary";
import Link from './typography/navLink'
// UI COMPONENTS
import Header from "./headerSide";
import BlockContent from "./block-content";
import Stack from "./projectStack";

function Project({ _rawBody, title, mainImage, relatedProjects, githubRepo, demoVideo, liveSite, stack }) {
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
            marginBottom: 'var(--spacing-1)'
          }}
        />
          </ImageWrapper>
        <Title>{title}</Title>
        <BlockContent blocks={_rawBody} />
      </article>
      <AsideWrapper>
        <StickyWrapper>
          {stack.length > 0 && <Stack stack={stack} />}
          {relatedProjects.length > 0 && (
            <div>
              <AsideHeading>Related projects</AsideHeading>
              <ul>
                {relatedProjects.map(project => (
                  <li key={`related_${project._id}`}>
                    <Link to={`/project/${project.slug.current}`}>
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </StickyWrapper>
      </AsideWrapper>
    </RootWrapper>
  );
}

const Title = styled(Heading)`
  margin-bottom: var(--spacing-1);
`;

const RootWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
  padding-right: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
  display: grid;
  grid-template-columns: 90px minmax(500px, 650px) 1fr;
  gap: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
`;

const AsideWrapper = styled.aside`
  padding-top: var(--spacing-2);
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: var(--spacing-4);
`;

const ImageWrapper = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;

export default Project;
