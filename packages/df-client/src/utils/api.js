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

import { apiUrl } from '@dineforward/config';
import { request } from 'graphql-request';

export const apiRequest = (query) => request(apiUrl, query);

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