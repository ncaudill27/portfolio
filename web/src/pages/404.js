import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby'

import Layout from "../components/layout";
import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Button from "../components/button";

const NotFoundPage = () => {
  return (
    <Layout title="404: Not found">
      <IntroWrapper>
        <MainHeader>NOT FOUND</MainHeader>
        <Body>Oopsy! You just hit a route that doesn&#39;t exist... the sadness.</Body>
        <Button as={Link} to="/">Go back home</Button>
      </IntroWrapper>
    </Layout>
  );
};

const IntroWrapper = styled(MaxWidthWrapper)`
  position: absolute;
  height: fit-content;
  top: 0;w
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;

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
