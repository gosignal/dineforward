/* eslint-disable no-console */
require('make-runnable');

const { request } = require('graphql-request');
// const fs = require('fs');

const getSchema = () => {
  // let rawdata = fs.readFileSync('student.json');
  //   let student = JSON.parse(rawdata);

  const ALL_CONTENT_PAGES = `
  query getContentPagesAndBlocks {
    allContentPages {
      name
      status
      slug
      blocks {
        name
        title
        subtitle
        hero {
          path
          filename
          originalFilename
          id
          publicUrl
          encoding
        }
        image {
          path
          filename
          originalFilename
          id
          publicUrl
          encoding
        }
        textContent
        richContent
      }
    }
  }
`;

  const url = 'http://localhost:8000/admin/api';

  request(url, ALL_CONTENT_PAGES).then(data => {
    console.log(data);
  });
};
