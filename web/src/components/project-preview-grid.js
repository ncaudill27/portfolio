import React from "react";
import styled from 'styled-components'

import MaxWidthWrapper from './maxWidthWrapper';
import ProjectPreview from "./project-preview";

import * as styles from "./project-preview-grid.module.css";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  );
}

const RootWrapper = styled(MaxWidthWrapper)`
  margin-top: var(--spacing-8);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
`;



ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
