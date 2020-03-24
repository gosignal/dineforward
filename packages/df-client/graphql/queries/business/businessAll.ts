// @ts-nocheck

import gql from 'graphql-tag';

import { Business } from '../../types/Business.types';

const projectsAll = gql`
  query allBusinessQuery(
    $where: BusinessWhereInput
    $orderBy: String
    $search: String
    $first: Int
    $skip: Int
  ) {
    allBusiness(
      where: $where
      $orderBy:$orderBy
      search: $search
      first: $first
      skip: $skip
    ) {
        ${Business}
    }
}`;

export default projectsAll;
