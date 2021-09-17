import React from "react";
import styled from 'styled-components'

import MaxWidthWrapper from './maxWidthWrapper';
import ProjectPreview from "./project-preview";

function ProjectPreviewGrid(props) {
  return (
    <RootWrapper width={1400}>
      <Grid>
        {props.nodes &&
          props.nodes.map(node => (
              <ProjectPreview {...node} />
          ))}
      </Grid>
    </RootWrapper>
  );
}

const RootWrapper = styled(MaxWidthWrapper)`
  --margin-top-min: var(--spacing-1);
  --margin-top-max: var(--spacing-12);
  --margin-top-value: 30px + 3.83vw;
  margin-top: clamp(var(--margin-top-min), var(--margin-top-max), var(--margin-top-value));
`;

const Grid = styled.div`
  display: grid;
  gap: var(--spacing-2);
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  width: 100%;
`;



ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
