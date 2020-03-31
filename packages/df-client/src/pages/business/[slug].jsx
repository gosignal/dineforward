import React, { Fragment } from 'react';
// import ContentPage from '~containers/ContentPage';
// import NewLayout from '~components/NewLayout';
import HomePageLayout from '~containers/Layouts/homepage.layout';
// import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
import { withApollo } from '~utils/apollo';
import { useRouter } from 'next/router';
import { getBusinessProfileBySlug } from '~utils/api';
// import FunraiserSection from '~containers/FundraiserSection';
// import BannerSection from '~containers/BannerSection';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import businessBySlug from '~gql/queries/business/businessBySlug';
import { useQuery } from '@apollo/react-hooks';
import Business from '../../../graphql/types/Business.types';

import AppNav from '~components/AppNav';
// const initStyles = props => {

//   // return makeStyles({ ...styles });
// };

// const useStyles = props => initStyles(props);

const useStyles = makeStyles({
  root: {},
  heroBanner: {
    display: 'flex',
    height: '30vh',
    flexDirection: 'column',
    padding: '1em',
    justifyContent: 'space-between',
    background: props => `url('${props.image}') center center no-repeat`,
    boxSizing: 'border-box',
    backgroundSize: 'cover',
  },
});

const HeroHeader = props => {
  console.log('hero image props', props);
  const classes = useStyles({ image: props.image });
  return (
    <section className={classes.heroBanner}>
      <h1>Test</h1>
    </section>
  );
};

const BusinessProfilePage = () => {
  const { query } = useRouter();
  const { loading, error, data } = useQuery(businessBySlug, {
    variables: { businessSlug: query.slug },
  });
  const classes = useStyles();
  if (error) return <h1>Error...</h1>;
  if (loading) return <span>Loading...</span>;
  if (data && data.allBusinesses.length > 0) {
    const business = data.allBusinesses[0];
    console.log(business);
    console.log(classes.heroBanner);
    return (
      <HomePageLayout>
        <AppNav />
        <HeroHeader image={business.heroImage.publicUrl} />
        <Container className={classes.root} maxWidth="lg">
          <h1>Business BY Slug</h1>
        </Container>
      </HomePageLayout>
    );
  } else {
    return <h1>Not found ${query.slug}</h1>;
  }
};

BusinessProfilePage.getInitialProps = async () => true;

export default withApollo({ ssr: true })(BusinessProfilePage);
/***
 *
 * - why can't I call it on server side at all, even with getInitialProps / HOC?
 *
 * this works for temporary MVP, but not longer than a few days, let's fix
 *
 */
