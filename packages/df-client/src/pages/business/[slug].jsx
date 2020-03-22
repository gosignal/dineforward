import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
// import { withApollo } from '~utils/apollo';
import { getBusinessProfileBySlug } from '~utils/api';

const BusinessProfilePage = props => {
  React.useEffect(() => {
    console.log(props);
    console.log('----DEBUG----');
  }, []);

  return (
    <NewLayout navbar>
      <ContentPage title="Restaurants" subtitle="Sign up now">
        <h1>Content Here</h1>
      </ContentPage>
    </NewLayout>
  );
};

export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {
  console.log(params, req, res);
  const business = await getBusinessProfileBySlug('nicksonmission');
  return { props: { business } };
};

// export default withApollo()(BusinessProfilePage);
export default BusinessProfilePage;
