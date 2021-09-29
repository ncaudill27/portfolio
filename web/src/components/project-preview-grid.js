import React from "react";
import styled from "styled-components";

import MaxWidthWrapper from "./maxWidthWrapper";
import ProjectPreview from "./project-preview";

function ProjectPreviewGrid(props) {
  return (
    <RootWrapper width={1400}>
      <Grid>
        {props.nodes.map(node => (
          <ProjectPreview key={node.id}  {...node} />
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  width: 100%;

  @media (min-width: 724px) and (max-width: 1332px) {
    padding-left: var(--spacing-2);
    padding-right: var(--spacing-2);
  }
`;

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: []
};

export default ProjectPreviewGrid;
