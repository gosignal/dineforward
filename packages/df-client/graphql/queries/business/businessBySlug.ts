// import gql from 'graphql-tag';

// const BusinessBySlug = gql`
//   query BusinessBySlug($slug: String!) {
//     Business(where: { slug: $slug }) {
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

// export default BusinessBySlug;
