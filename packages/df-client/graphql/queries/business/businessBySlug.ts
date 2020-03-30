import gql from 'graphql-tag';

export const businessBySlugRawQuery = `
  query BusinessBySlug($businessSlug: String!) {
    allBusinesses(where: { businessSlug: $businessSlug }) {
      id
      name
      description
      owner {
        name
      }
      staffMembers {
        name
        position

        useraccount {
          name
          id
        }
      }
      _staffMembersMeta {
        count
      }
      profileImage {
        id
        path
        filename
        mimetype
        encoding
        publicUrl
        publicUrlTransformed
      }
      heroImage {
        id
        path
        filename
        mimetype
        encoding
        publicUrl
        publicUrlTransformed
      }
      location {
        id
        googlePlaceID
        formattedAddress
        lat
        lng
      }
      backers {
        name
        id
        image {
          id
          path
          filename
          mimetype
          encoding
          publicUrl
          publicUrlTransformed
        }
        username
        userSlug
        _backingMeta {
          count
        }
      }
      status
    }
  }
`;

const BusinessBySlug = gql`
  ${businessBySlugRawQuery}
`;

export default BusinessBySlug;
