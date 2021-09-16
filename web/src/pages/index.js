import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import useRefDimensions from "../hooks/useRefDimensions";

import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import VisuallyHidden from "@reach/visually-hidden";

import Layout from "../containers/layout";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Flex from "../components/flex";

import Github from "../components/images/iconGithub";
import Twitter from "../components/images/iconTwitter";
import Linkedin from "../components/images/iconLinkedin";
import Mail from "../components/images/iconMail";

const IndexPage = ({ data, errors }) => {
  const titleEl = React.useRef();
  const { width } = useRefDimensions(titleEl);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = data?.site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  console.log(width);
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <IntroWrapper width={510}>
        <MainHeader ref={titleEl}>{site.title}</MainHeader>
        <MainBody style={{ "--width": width + "px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat lectus justo, porta
          rutrum arcu gravida quis. Ut at iaculis erat. Maecenas sagittis nibh sem, at pellentesque
          dolor condimentum eu. Nam varius quam in hendrerit lacinia. Curabitur id imperdiet sapien.
          Nam metus arcu, elementum a ante quis, dignissim tincidunt dolor. Nulla egestas, magna
          eget ultricies tempus, sem tellus accumsan felis, vitae rutrum turpis turpis id nunc.
          Etiam fermentum non odio ut laoreet. Nam mollis quam a tortor lobortis hendrerit. Nunc
          venenatis pulvinar euismod. Integer pharetra libero nec erat aliquet ultrices. Donec
          mattis nibh vel nibh eleifend ornare.
        </MainBody>
        <IconWrapper justify="center" gap={8}>
          <a href="https://github.com/ncaudill27">
            <VisuallyHidden>Github profile</VisuallyHidden>
            <Github />
          </a>
          <a href="https://twitter.com/pixel8dChappie">
            <VisuallyHidden>Twitter profile</VisuallyHidden>
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/nelson-caudill/">
            <VisuallyHidden>LinkedIn profile</VisuallyHidden>
            <Linkedin />
          </a>
          <a href="">
            <VisuallyHidden>Send Nelson an email</VisuallyHidden>
            <Mail />
          </a>
        </IconWrapper>
      </IntroWrapper>
    </Layout>
  );
};

const MainHeader = styled(Heading)`
  width: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const MainBody = styled(Body)`
  margin-left: auto;
  margin-right: auto;
  width: var(--width);

  transition: width 150ms ease-in-out;
`;

const IntroWrapper = styled(MaxWidthWrapper)`
  --margin-top-min: var(--spacing-1);
  --margin-top-max: 150px;
  --margin-top-value: 30px + 5.83vw;
  margin-top: clamp(var(--margin-top-min), var(--margin-top-max), var(--margin-top-value));

  padding: 0 var(--spacing-1);
`;

const IconWrapper = styled(Flex)`
  --margin-top-min: var(--spacing-2);
  --margin-top-max: var(--spacing-8);
  --margin-top-value: 3px + 4.7vw;
  margin-top: clamp(var(--margin-top-min), var(--margin-top-max), var(--margin-top-value));
`;

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

export default IndexPage;
