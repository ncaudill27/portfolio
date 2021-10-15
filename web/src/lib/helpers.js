export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function blockBuilder(blocks) {
  // console.log("Type: ", blocks.type);
  // console.log("Element: ", obj.tagName);
  // console.log("Properties: ", obj.properties);

  if (blocks.children) {
    let properties = {};
    blocks.children.map(node => {
      if (node.type === "text") {
        console.log("\tWith text: " + node.value);
        return;
      }
      console.log("This will be a", node.tagName);
      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
        console.log("With properties:", properties);
      }
      blockBuilder(node);
    });
  }
}
