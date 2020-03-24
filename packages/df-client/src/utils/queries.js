const { apiUrl, deployProdLike } = require('@dineforward/config');
import { request } from 'graphql-request';


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
    const content = allContentPages[0];
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
