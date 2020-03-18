import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
// import useSWR from "swr";
// import Config from "~config";

// layout related
import Layout from '~components/Layout';
// import Menu from '~components/Menu';
// import Banner from '~components/Banner';

const WebflowPage = props => {
  // const { page, posts, pages } = props;
  // console.log(props);
  return (
    <Layout>
      <h1>Greg - test your webflow here</h1>
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default WebflowPage;
