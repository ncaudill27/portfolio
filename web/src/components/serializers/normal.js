import React from "react";
import styled from 'styled-components';

import Body from '../typography/bodyRegular'

export function Normal(props) {
  if (!props.node.style === "normal") {
    return null;
  }
  
  return (
    <Body>
      {props.children}
    </Body>
  );
}