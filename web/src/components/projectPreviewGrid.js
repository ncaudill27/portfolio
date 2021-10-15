import React from "react";

import PreviewGrid from "./previewGrid";
import ProjectPreview from "./projectPreview";

function ProjectPreviewGrid(props) {
  return (
    <PreviewGrid width={1400}>
      {props.nodes.map(node => (
        <ProjectPreview key={node.id} {...node} />
      ))}
    </PreviewGrid>
  );
}

ProjectPreviewGrid.defaultProps = {
  nodes: []
};

export default ProjectPreviewGrid;
