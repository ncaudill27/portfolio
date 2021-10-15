import React from 'react';
import { blockBuilder } from '../lib/helpers';

const BlockRenderer = ({ blocks }) => {
  blockBuilder(blocks)

  return (
    <div>Hello</div>
  )
}

export default BlockRenderer