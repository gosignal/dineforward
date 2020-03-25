// import gql from 'graphql-tag';

// import { imageFragmentOn } from '../fragments';

// const onType = 'User';
// const User = `
//   {
//     name
//     id
//     username
//     userSlug
//     image {
//       image {
//         ...UserImageFragment
//       }
//     }
//     isBusiness
//     favoriteFood
//     userSlug
//     lastLogin
//     managingBusinesses
//     _managingBusinessesMeta {
//       count
//     }
//     backing {
//       name
//     }
//     _backingMeta {
//       count
//     }
//   }
//   ${imageFragmentOn(onType)}
// `;

// export default User;

const t = `{
    name
    id
    username
    userSlug
    image {
      image {
        ...UserImageFragment
      }
    }
    favoriteFood
    userSlug
    lastLogin
    managingBusinesses
    _managingBusinessesMeta {
      count
    }
    backing {
      name
    }
    _backingMeta {
      count
    }
  }`;
