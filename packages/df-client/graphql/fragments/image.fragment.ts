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
export const imageFragmentOn = Obj => gql`fragment imageFragment on ${Obj} ${image}`;

export default imageFragmentOn;
