import { graphql } from "gatsby";

export const SanityImage = graphql`
  fragment SanityImage on SanityFigure {
    alt
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
`;

export const SanityProject = graphql`
  fragment SanityProject on SanitySampleProject {
    _rawBody
    _rawExcerpt
    id
    title
    links {
      title
      url
    }
    slug {
      current
    }
    mainImage {
      ...SanityImage
    }
    stack {
      title
      logo {
        ...SanityImage
      }
    }
    relatedProjects {
      title
      slug {
        current
      }
      mainImage {
        ...SanityImage
      }
    }
  }
`;

export const NotionPost = graphql`
  fragment NotionPost on MarkdownRemark {
    id
    htmlAst
    # heroImg
    frontmatter {
      title
      date: Date {
        start
      }
      hero: Hero {
        file {
          url
        }
      }
      tags: Tags {
        name
      }
      slug {
        string
      }
      brief: Brief
    }
  }
`;
