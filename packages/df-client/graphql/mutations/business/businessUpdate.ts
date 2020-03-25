// import gql from 'graphql-tag';
// // import Business from '../../types';

// const businessUpdate = gql`
//   mutation BusinessUpdate($data: BusinessUpdateInput!, $id: id!) {
//     updateBusiness(data: $project, id: $id) {
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

// export default businessUpdate;
