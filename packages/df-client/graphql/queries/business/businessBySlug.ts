import gql from 'graphql-tag';

const projectBySlug = gql`
  query BusinessBySlug($slug: String!) {
    Business(where: { slug: $slug }) {
      slug
      tags {
        contents {
          title
        }
        color
      }
      contents {
        id
        language {
          country
        }
        title
        text
        metaTitle
        metaDescription
        isActive
      }
    }
  }
`;

export default projectBySlug;
