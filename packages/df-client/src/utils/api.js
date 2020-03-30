/**
 * GRAPHQL API
 * -----
 *
 *
 * Note: For some reason the current implementation of GetStaticProps and
 * GetServerSideProps makes it difficult to use apollo client, and hooks
 * especially. But using this lightweight request framework we can
 * query directly.
 *
 *
 * UPDATE: 03/29/2020
 * - todo: refactor to use Apollo-Link
 *
 */

import { apiUrl } from '@dineforward/config';
import { request } from 'graphql-request';
import { businessBySlugRawQuery } from '~gql/queries/business/businessBySlug';

export const apiRequest = query => request(apiUrl, query);

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
// const TEST_ALL_BIZ_BY_SLUG = slug => {
//   const query = QUERY_ALL_BY_SLUG(slug);
//   console.log({ query });
//   return query;
// };
const pages = page => `
        query allContentPages{
          allContentPages(where:{slug:"${page}"}){
            name,
            blocks(orderBy:"createdAt"){
              name,
              title,
              subtitle,
              image{path},
              textContent, 
              richContent
            }
          }
        }`;

const ALL_PAGE_SLUGS = `
        query allContentPages{
          allContentPages(where:{ status: published }){
            name,
            slug
          }
        }`;
export const getAllPageSlugs = async () => {
  const res = await request(apiUrl, ALL_PAGE_SLUGS);
  return res.allContentPages.map(p => p.slug);
};

// *****
// TODO: update the index so we can query by slugname
//
// const businesses = slug => `${TEST_ALL_BIZ_BY_SLUG}${slug}`;

const ALL_BUSINESES_QUERY = `
            query getBizProfile {
              allBusinesses {
                name,
                status,
                businessSlug,
                location {
                  lat,
                  lng,
                  googlePlaceID,
                  formattedAddress
                }
              }
            }
`;

export const pageContentBySlug = page => request(apiUrl, pages(page));

export const getBusinessProfileBySlug = slug => request(apiUrl, businesses(slug));

export const getAllBusinesses = () => request(apiUrl, ALL_BUSINESES_QUERY);

export default { pageContentBySlug, getBusinessProfileBySlug, getAllBusinesses };

export const CREATE_USER_AND_PASSWORD_AUTH_MUTATION = `
  mutation createUserAndPasswordAuth($user: UserCreateInput!, $email: String!, $password: String!) {
    createUser(data: $user) {
      id
    }
    authenticate: authenticateUserWithPassword(email: $email, password: $password) {
      item {
        id
      }
    }
  }
`;

export const PASSWORD_AUTH_MUTATION = `
  mutation passwordAuth($email: String!, $password: String!) {
    authenticate: authenticateUserWithPassword(email: $email, password: $password) {
      item {
        id
      }
    }
  }
`;
