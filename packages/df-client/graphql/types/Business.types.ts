import gql from 'graphql-tag';

import { imageFragmentOn, userFragmentOn } from '../fragments';

import User from './User.types';

imageFragmentOn('Business');
userFragmentOn('Business');

// const heroImage = imageFragmentOn('Business');
// const photo = imageFragmentOn('Business');
// const backers = userFragmentOn('Business');
// const owner = userFragmentOn('Business');

export const Business = gql`{
      id
      name
      description
      owner {
          ...user
      }
      staffMembers {
        name 
        position
        ...useraccount
        ...photo
      }
      _staffMembersMeta {
        count
      }

      ...profileImage
      ...heroImage
      location {
            id
            googlePlaceID
            formattedAddress
            lat
            lng
      }
      ...backers
      status
    }
  }`;

export default Business;
