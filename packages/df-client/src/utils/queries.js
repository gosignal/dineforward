import { request } from 'graphql-request';
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig();
const apiUrl = serverRuntimeConfig?.serverApiUrl;

export const contentQuery = (query, cb) => async () => cb(await request(apiUrl, query));

export const contentQuerySlug = (slug) => contentQuery(`
  query allContentPages{
    allContentPages(where:{slug:"${slug}"}){
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
  }`,
  ({ allContentPages }) => ({
    props: allContentPages[0],
  })
);
