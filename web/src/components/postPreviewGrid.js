import React from "react";

import PreviewGrid from "./previewGrid";
import PostPreview from "./postPreview";

function PostPreviewGrid(props) {
  return (
    <PreviewGrid width={1400}>
      {props.nodes.map(node => (
        <PostPreview key={node.id} {...node} />
      ))}
    </PreviewGrid>
  );
}

PostPreviewGrid.defaultProps = {
  nodes: []
};

export default PostPreviewGrid;
