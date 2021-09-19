import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Header from "./headerSide";
import Heading from "./typography/headingPrimary";
import BlockContent from "./block-content";
import Stack from './projectStack'

function Project({ _rawBody, title, relatedProjects, githubRepo, demoVideo, liveSite, stack }) {
  console.log(stack);
  return (
    <RootWrapper>
      <Header />
      <article>
        <Title>{title}</Title>
        <BlockContent blocks={_rawBody} />
      </article>
      <AsideWrapper>
        <StickyWrapper>
          {stack.length > 0 && <Stack stack={stack} />}
          {relatedProjects.length > 0 && (
            <div>
              <h3>Related projects</h3>
              <ul>
                {relatedProjects.map(project => (
                  <li key={`related_${project._id}`}>
                    {project.slug ? (
                      <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                    ) : (
                      <span>{project.title}</span>
                    )}
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

export default Project;
