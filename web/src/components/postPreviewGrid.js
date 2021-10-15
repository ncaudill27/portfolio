import React from "react";

import PreviewGrid from "./previewGrid";
import ProjectPreview from "./projectPreview";

function PostPreviewGrid(props) {
  return (
    <PreviewGrid width={1400}>
      {props.nodes.map(node => (
        <ProjectPreview key={node.id} {...node} />
      ))}
    </PreviewGrid>
  );
}

PostPreviewGrid.defaultProps = {
  nodes: []
};

export default PostPreviewGrid;
