import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";
import MaxWidthWrapper from "../components/maxWidthWrapper";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <IntroWrapper>
        <MainHeader>NOT FOUND</MainHeader>
        <Body>
          Oopsy! You just hit a route that doesn&#39;t exist... the sadness.
        </Body>
      </IntroWrapper>
    </Layout>
  );
};

const IntroWrapper = styled(MaxWidthWrapper)`
  --margin-top-min: var(--spacing-1);
  --margin-top-max: 120px;
  --margin-top-value: 4px + 7.83vw;
  margin-top: clamp(var(--margin-top-min), var(--margin-top-max), var(--margin-top-value));

  text-align: center;
`;

const MainHeader = styled(Heading)`
  width: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 333px) {
    width: 100%;
  }
`;

export default NotFoundPage;
