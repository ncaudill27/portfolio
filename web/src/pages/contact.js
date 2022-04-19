import React from "react";
import styled from "styled-components";

import Layout from "../containers/layout";
import Heading from "../components/typography/headingPrimary";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Form from "../containers/form";

const ContactPage = ({ location }) => {
  return (
    <Layout currentPath={location.pathname} seo={{ title: "Contact Me" }}>
      <Wrapper width={510}>
        <MainHeader>Contact</MainHeader>
        <Form />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  margin-top: var(--responsive-top-spacing-0);

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
