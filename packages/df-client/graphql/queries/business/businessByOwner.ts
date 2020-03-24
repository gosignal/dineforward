// @ts-nocheck

import gql from 'graphql-tag';

// import { Business } from '../../types/Business.types';

const BusinessByOwner = gql`
  query allBusinessQuery(
    $where: BusinessWhereInput
    $orderBy: String
    $search: String
    $first: Int
    $skip: Int
  ) {
    allBusiness(where: $where, orderBy: $orderBy, search: $search, first: $first, skip: $skip) {
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

export default BusinessByOwner;
