import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Header from './headerSide'
import Heading from "./typography/headingPrimary";
import BlockContent from "./block-content";
import LordIcon from "./lordIcon";

import * as styles from "./project.module.css";

function Project({ _rawBody, title, relatedProjects }) {
  return (
    <RootWrapper>
    <Header />
    <article>
      <Title>{title}</Title>
      <BlockContent blocks={_rawBody} />
    </article>
    <aside className={styles.metaContent}>
          <LordIcon />
          {relatedProjects && relatedProjects.length > 0 && (
            <div className={styles.relatedProjects}>
              <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
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
        </aside>
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
  grid-template-columns: 90px minmax(500px, 650px) 300px;
  gap: clamp(var(--spacing-2),1px + 5vw, var(--spacing-10));
  height: 200vh;
`;

export default Project;
