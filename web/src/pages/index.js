import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import useRefDimensions from "../hooks/useRefDimensions";

import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";
import Strong from "../components/typography/strong"

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import VisuallyHidden from "@reach/visually-hidden";

import Header from "../components/headerTop";
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

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Header />
      <main>
        <IntroWrapper width={510}>
          <MainHeader ref={titleEl}>{site.title}</MainHeader>
          <MainBody style={{ "--width": width + "px" }}>
            Front-end developer, former bartender/<Strong>hellion</Strong>, and <em>forever</em> a student. For the time
            being, my goal is to provide the end-user with such an enjoyable experience&#8212;<em>yes</em>, that
            means accessibility &amp; inclusion&#8212;clients have no choice but to love me. In the long run,
            my objective is not just to grow but to <Strong>grow with</Strong> and help lift those looking to get
            into code.
          </MainBody>
          <MainBody style={{ "--width": width + "px" }}>
            Currently, my favorite technology to work with is React. Building with Gatsby
            alongside Sanity.io &amp; Netlify Functions allows me to create
            insanely fast &amp; secure websites. Honestly, sometimes it is too much fun.
          </MainBody>
          <IconWrapper justify="center" gap={0}>
            <a href="https://github.com/ncaudill27">
              <VisuallyHidden>Go to Github profile</VisuallyHidden>
              <Github />
            </a>
            <a href="https://twitter.com/pixel8dChappie">
              <VisuallyHidden>Go to Twitter profile</VisuallyHidden>
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/in/nelson-caudill/">
              <VisuallyHidden>Go to LinkedIn profile</VisuallyHidden>
              <Linkedin />
            </a>
            <Link to="/contact/">
              <VisuallyHidden>Send Nelson an email</VisuallyHidden>
              <Mail />
            </Link>
          </IconWrapper>
        </IntroWrapper>
      </main>
      {/* <Footer /> */}
    </>
  );
};

const MainHeader = styled(Heading)`
  width: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 333px) {
    width: 100%;
  }
`;

const MainBody = styled(Body)`
  margin-left: auto;
  margin-right: auto;
  width: var(--width);
  min-width: 297px;

  transition: width 150ms ease-in-out;
`;

const IntroWrapper = styled(MaxWidthWrapper)`
  margin-top: var(--responsive-margin-top);

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
