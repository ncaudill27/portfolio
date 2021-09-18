
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import Title from './typography/headingPrimary'
import BlockContent from "./block-content";

import LordIcon from "./lordIcon";
import MaxWidthWrapper from "./maxWidthWrapper";

import * as styles from "./project.module.css";

function Project(props) {
  const { _rawBody, title, mainImage, relatedProjects } = props;
  return (
    <RootWrapper as="article" width={1200}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <div>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <Title>{title}</Title>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
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
        </div>
      </div>
    </RootWrapper>
  );
}

const RootWrapper = styled(MaxWidthWrapper)`
  --margin-top-min: var(--spacing-1);
  --margin-top-max: var(--spacing-12);
  --margin-top-value: 30px + 3.83vw;
  margin-top: clamp(var(--margin-top-min), var(--margin-top-max), var(--margin-top-value));
`;

export default Project;
