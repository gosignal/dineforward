import gql from 'graphql-tag';

const image = `{
    id
    postedBy {
      login
      html_url
    }
    createdAt
    content
  }
  `;

// I think I can do this... :)
export const imageFragmentOn = Obj => `fragment ${Obj}ImageFragment on ${Obj} ${image}`;

export default imageFragmentOn;
