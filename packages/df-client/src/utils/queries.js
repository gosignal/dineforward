const { apiUrl: testUrl, deployProdLike } = require('@dineforward/config');
import { request } from 'graphql-request';
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig();
const apiUrl = serverRuntimeConfig?.serverApiUrl;

console.log("Query URLs", testUrl, apiUrl);

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
  ({ allContentPages }) => {
    let content = allContentPages[0];
    if (content) return { props: content };

    const msg = `No content page found for '${slug}'`;
    if (deployProdLike) throw new Error(msg);
    return {
      props: {
        name: msg,
        blocks: [ { name: msg, title: msg, richContent: msg } ],
      }
    };
  }
);
