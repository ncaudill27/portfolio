import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import useRefDimensions from "../hooks/useRefDimensions";

import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Flex from "../components/flex";

import Github from '../components/images/iconGithub'
import Twitter from '../components/images/iconTwitter'
import Linkedin from '../components/images/iconLinkedin'
import Mail from '../components/images/iconMail'

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
      <IntroWrapper width={width}>
        <MainHeader ref={titleEl}>{site.title}</MainHeader>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat lectus justo, porta
          rutrum arcu gravida quis. Ut at iaculis erat. Maecenas sagittis nibh sem, at pellentesque
          dolor condimentum eu. Nam varius quam in hendrerit lacinia. Curabitur id imperdiet sapien.
          Nam metus arcu, elementum a ante quis, dignissim tincidunt dolor. Nulla egestas, magna
          eget ultricies tempus, sem tellus accumsan felis, vitae rutrum turpis turpis id nunc.
          Etiam fermentum non odio ut laoreet. Nam mollis quam a tortor lobortis hendrerit. Nunc
          venenatis pulvinar euismod. Integer pharetra libero nec erat aliquet ultrices. Donec
          mattis nibh vel nibh eleifend ornare.
        </Body>
      </IntroWrapper>
      <Flex justify="center" gap={8}>
        <IconWrapper>
          <Github />
        </IconWrapper>
        <IconWrapper>
          <Twitter />
        </IconWrapper>
        <IconWrapper>
          <Linkedin />
        </IconWrapper>
        <IconWrapper>
          <Mail />
        </IconWrapper>
      </Flex>
    </Layout>
  );
};

const MainHeader = styled(Heading)`
  width: fit-content;
`;

const IntroWrapper = styled(MaxWidthWrapper)`
  margin-top: 150px;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  max-width: 50px;
  max-height: 50px;
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
