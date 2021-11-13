import BaseBlockContent from "@sanity/block-content-to-react";
import React from "react";
import clientConfig from "../../client-config";
import serializers from "./serializers";

import MaxWidthWrapper from "./maxWidthWrapper";

const BlockContent = ({ blocks }) => (
  <MaxWidthWrapper width={690}>
    <BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  </MaxWidthWrapper>
);

export default BlockContent;
