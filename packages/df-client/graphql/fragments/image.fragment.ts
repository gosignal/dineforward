import gql from 'graphql-tag';
// type CloudinaryImage_File {
// id: ID
// path: String
// filename: String
// originalFilename: String
// mimetype: String
// encoding: String
// publicUrl: String
// publicUrlTransformed(...): String
// }

const image = `
  {
    id
    path
    filename
    mimetype
    encoding
    publicUrl
    publicUrlTransformed
  }
`;

// I think I can do this... :)
export const imageFragmentOn = Obj => `fragment ${Obj}ImageFragment on ${Obj} ${image}`;

export default imageFragmentOn;
