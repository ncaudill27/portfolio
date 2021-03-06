import React from "react";
import styled from "styled-components";

import Flex from "./flex";
import Body from "./typography/bodySmall";

const PostTagList = ({ list }) => (
  <Flex gap={0} wrap>
    {list.map(({ name }) => (
      <Tag key={name}>
        <Body>{name}</Body>
      </Tag>
    ))}
  </Flex>
);

const Tag = styled.div`
  padding: 4px var(--spacing-0);
  background-color: var(--color-primary-muted);
  border-radius: 2px;
  white-space: nowrap;
`;

export default PostTagList;
