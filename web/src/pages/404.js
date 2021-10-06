import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";
import MaxWidthWrapper from "../components/maxWidthWrapper";

const NotFoundPage = () => {
  return (
    <Layout title="404: Not found">
      <IntroWrapper>
        <MainHeader>NOT FOUND</MainHeader>
        <Body>Oopsy! You just hit a route that doesn&#39;t exist... the sadness.</Body>
      </IntroWrapper>
    </Layout>
  );
};

const IntroWrapper = styled(MaxWidthWrapper)`
  margin-top: var(--responsive-margin-top);

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
