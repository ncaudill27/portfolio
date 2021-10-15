import React from "react";
import styled from "styled-components";

import Flex from "./flex";
import Body from "./typography/bodyRegular";

const ProjectTagList = ({ list }) => (
  <Flex gap={0}>
    {list.map(({ name }) => (
      <Tag>
        <Name>{name}</Name>
      </Tag>
    ))}
  </Flex>
);

const Tag = styled.div``;

const Name = styled(Body)`
  font-size: 0.75em; // 12px
  font-weight: var(--font-weight-medium);
  color: var(--color-text-alt);
  line-height: 1;
`;

export default ProjectTagList;
