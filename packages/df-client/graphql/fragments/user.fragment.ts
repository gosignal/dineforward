import gql from 'graphql-tag';

import User from '../types';

// I think I can do this... :)
// TODO: Abstract this into a factory

export const userFragmentOn = Obj => gql`fragment imageFragment on ${Obj} ${User}`;

export default userFragmentOn;
