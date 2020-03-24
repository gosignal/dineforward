import gql from 'graphql-tag';
import { Business } from '../../types/Business.types';

const businessCreate = gql`
  mutation BusinessCreate($business: BusinessCreateInput!) {
    createBusiness(data: $business) {
      ${Business}
    }
  }
`;

export default businessCreate;
