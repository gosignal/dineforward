import gql from 'graphql-tag';
import Business from '../../types';

const businessUpdate = gql`
  mutation BusinessUpdate($data: BusinessUpdateInput!, $id:id!) {
    updateBusiness(data: $project, id: $id) {
        ${Business}
    }
  }
`;

export default businessUpdate;
