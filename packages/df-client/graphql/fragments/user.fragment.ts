import gql from 'graphql-tag';

// import User from '../types';

const User = `User`;

// I think I can do this... :)
// TODO: Abstract this into a factory

export const userFragmentOn = Obj => `fragment ${Obj}ImageFragment on ${Obj} ${User}`;

export default userFragmentOn;
