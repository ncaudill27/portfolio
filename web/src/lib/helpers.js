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

export function blockBuilder(obj) {
  let blocks = []
  // console.log("Type: ", obj.type);
  // console.log("Element: ", obj.tagName);
  // console.log("Properties: ", obj.properties);

  if (obj.children) {
    blocks = obj.children.map(node => {
      if (node.type === "text") {
        return
      }

      let properties = {};
      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
      }

      const { ElementTag, elementProps } = Factory(node, properties);
      if (!!ElementTag && !!elementProps) {
        if (node.children[0] && node.children[0].type === "text") {
          return React.createElement(ElementTag, elementProps, node.children.map(node => node.value).join(" "))
        } else {
          return React.createElement(ElementTag, elementProps, node.children);
        }
      }
    });
  }

  return blocks.filter(Boolean)
}

function Factory({ blocks }) {

  if (node.type === "text") {
    console.log("Hit nested text");
    return
  }

  if (node.children) {
    let properties = {};

    node.children.map(node => {
      if (node.type === "text") {
        if (node.value !== "\n") {
          children = node.value
        }
        return
      }
      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
      }

      const { ElementTag, elementProps } = Factory(node, properties);
      const reactEl = React.createElement(ElementTag, elementProps, node.children);
      console.log(reactEl);
      return reactEl;
    })
  }
  
  if (node.tagName.slice(0, 1) === "h") {
    let id = slugify(node.children[0].value);
    props = { ...props, id };
  }
  switch (node.tagName) {
    case "h2":
      return <PrimaryHeading as="h2" {...props} />
    case "h3":
      return <SecondaryHeading as="h3" {...props} />
    case "h4":
      return <TertiaryHeading as="h4" {...props} />

    default:
      const TagName = node.tageName
      return <TagName {...props} />
  }
}
