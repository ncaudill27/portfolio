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
    githubRepo
    demoVideo
    liveSite
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
    }
  }
`;
