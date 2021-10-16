import React from 'react';
import { blockBuilder } from '../lib/helpers';

const BlockRenderer = ({ blocks }) => {
  const ReactStuff = blockBuilder(blocks)
  console.log(ReactStuff);

  return (
    <div>{ReactStuff.map(el => {
      console.log(el);
      const Tag = el
      return <Tag />
    })}</div>
  )
}

export default BlockRenderer