import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
// import { withApollo } from '~utils/apollo';
import { getBusinessProfileBySlug } from '~utils/api';
import { Typography } from '@material-ui/core';

const BusinessProfilePage = ({ allBusinesses }) => {
  const business = allBusinesses[0];
  const { name, status } = business;
  //   React.useEffect(() => {
  //     console.log(allBusinesses);
  //     console.log('----DEBUG----');
  //   }, []);
  return (
    <NewLayout navbar>
      <ContentPage title={name} subtitle={status} />
    </NewLayout>
  );
};

export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {
  const { slug } = params;
  //   const business = await getBusinessProfileBySlug('nicksonmission');
  const { allBusinesses } = await getBusinessProfileBySlug(slug);
  return { props: { allBusinesses } };
};

// export default withApollo()(BusinessProfilePage);
export default BusinessProfilePage;
