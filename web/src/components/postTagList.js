import React from "react";
import styled from "styled-components";

import Flex from "./flex";
import Body from "./typography/bodySmall";

const PostTagList = ({ list }) => (
  <Flex gap={0}>
    {list.map(({ name }) => (
      <Tag>
        <Body>{name}</Body>
      </Tag>
    ))}
  </Flex>
);

const Tag = styled.div`
  padding: 4px var(--spacing-0);
  background-color: var(--color-primary-muted);
  border-radius: 2px;
`;

export default PostTagList;
