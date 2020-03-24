import gql from 'graphql-tag';

const me = gql`
  query Me {
    me {
      id
      profile {
        bio
        avatar {
          id
          publicId
          src
        }
      }
      name
      email
    }
  }
`;

export default me;
