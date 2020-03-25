// import gql from 'graphql-tag';
// // import { Business } from '../../types/Business.types';

// // import { userFragmentOn, imageFragmentOn } from '../../fragments';

// const onType = 'Business';

// const businessCreate = gql`
//   mutation BusinessCreate($business: BusinessCreateInput!) {
//     createBusiness(data: $business) {
//       id
//       name
//       description
//       owner {
//         name
//       }
//       staffMembers {
//         name
//         position

//         useraccount {
//           name
//           id
//         }
//       }
//       _staffMembersMeta {
//         count
//       }
//       profileImage {
//         id
//         path
//         filename
//         mimetype
//         encoding
//         publicUrl
//         publicUrlTransformed
//       }
//       heroImage {
//         id
//         path
//         filename
//         mimetype
//         encoding
//         publicUrl
//         publicUrlTransformed
//       }
//       location {
//         id
//         googlePlaceID
//         formattedAddress
//         lat
//         lng
//       }
//       backers {
//         name
//         id
//         image {
//           id
//           path
//           filename
//           mimetype
//           encoding
//           publicUrl
//           publicUrlTransformed
//         }
//         username
//         userSlug
//         _backingMeta {
//           count
//         }
//       }
//       status
//     }
//   }
// `;

// // ${imageFragmentOn('Business')}
// // ${userFragmentOn('Business')}

// export default businessCreate;
