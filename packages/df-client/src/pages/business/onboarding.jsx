import React, { Fragment } from 'react';
import { request } from 'graphql-request';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import TabbedPanels from '~components/TabbedPanels';
import { getAllBusinesses } from '~utils/api';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const steps = [
  {
    name: 'Step 1',
    description: 'Import your business',
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '200px',
  },
});

const BusinessRequestPage = ({ allBusinesses }) => {
  const classes = useStyles();
  const [place, setPlace] = React.useState('');
  const handleSetPlace = incomingplace => {
    console.log(incomingplace);
    setPlace(incomingplace);
  };
  return (
    <ContentPageLayout className={classes.root}>
      <br />
      <Grid container spacing={5} className={classes.container}>
        <Grid item md={12}>
          <GeoSearchBox fullWidth setPlace={handleSetPlace} />
        </Grid>
        <Grid item md={12} />
      </Grid>
    </ContentPageLayout>
  );
};

// export const getStaticProps = async () => {
//   const { allBusinesses } = await getAllBusinesses();

//   return { props: { allBusinesses } };
// };

// export const getStaticpaths = async () => {
//   return {};
// };

export default BusinessRequestPage;
