import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// import Config from "~config";
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// layout related
import ContentPageLayout from '~containers/Layouts/contentpage.layout';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const IndexPage = ({ ...rest }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = React.useState();
  // const img =
  //   'https://images.unsplash.com/photo-1495299458363-c7d39bb37892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80';

  // const img =
  //   'https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=70';
  const img =
    'https://images.unsplash.com/photo-1582585308790-cae68199feec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60';
  return (
    <ContentPageLayout>
      <h1>Finder</h1>
    </ContentPageLayout>
  );
};
{
  {
    /*<Header color="primary" fixed appBar absolute brand="Dine Forward" links={<NavLinks />} /> */
  }
  {
    /* <FullPageImg image={img} filter="primary"> */
  }
  {
    /* <HomeHeader className={classes.headerDark} /> */
  }
  {
    /* </FullPageImg> */
  }
  /* <Container maxWidth="md">
  <PageContentSection>
    <ParticipatingRestaurants />
  </PageContentSection>
  <Subscribe />
</Container>; */
}

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default IndexPage;
