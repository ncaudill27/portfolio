import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";
import MaxWidthWrapper from "../components/maxWidthWrapper";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <IntroWrapper>
        <MainHeader>Contact</MainHeader>
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

export default ContactPage;
