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
 */

import { request } from 'graphql-request';

const API_HOST = process.env.API_HOST || 'http://localhost:8000/admin/api';

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

// *****
// TODO: update the index so we can query by slugname
//
const businesses = slug => `
            query getBizProfile {
                allBusinesses(where:{businessSlug:"${slug}"}) {
                    name,
                    status,
                    location {
                    lat,
                    lng,
                    googlePlaceID,
                    formattedAddress
                    }
                }
            }
`;

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

export const pageContentBySlug = page => request(API_HOST, pages(page));

export const getBusinessProfileBySlug = slug => request(API_HOST, businesses(slug));

export const getAllBusinesses = () => request(API_HOST, ALL_BUSINESES_QUERY);

export default { pageContentBySlug, getBusinessProfileBySlug, getAllBusinesses };

export const CREATE_USER_MUTATION = `
  mutation CreateUser($data: UserCreateInput) {
    createUser(data: $data) {
      id
    }
  }
`;

export const PASSWORD_AUTH_MUTATION = `
mutation signin($email: String, $password: String) {
  authenticate: authenticateUserWithPassword(email: $email, password: $password) {
    item {
      id
    }
  }
}
`;