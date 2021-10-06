import React from "react";
import styled from "styled-components";

import Layout from "../containers/layout";
import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";

const BlogPage = () => {
  return (
    <Layout title="Blog">
      <Wrapper>
        <MainHeader>COMING SOON</MainHeader>
        <Body>I'm just as excited as you are about putting content back out! Check back soon!</Body>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
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

export default BlogPage;
