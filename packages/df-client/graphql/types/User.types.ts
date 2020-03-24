import gql from 'graphql-tag';

const User = gql`
  {
    name
    id
    username
    userSlug
    image
    isBusiness
    favoriteFood
    userSlug
    lastLogin
  }
`;

export default User;
