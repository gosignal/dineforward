import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// import Config from "~config";
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography, Grid } from '@material-ui/core';

// layout related
import ContentPageLayout from '~containers/Layouts/contentpage.layout';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const SearchPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { term } = router.query;

  const [searchInput, setSearchInput] = React.useState();
  const img =
    'https://images.unsplash.com/photo-1495299458363-c7d39bb37892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80';
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
          <Typography variant="h2">Search Results for {JSON.stringify(term)}</Typography>
          <hr />
        </Grid>
      </Grid>
    </div>
  );
};

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default SearchPage;
