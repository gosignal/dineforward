import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
import { withApollo } from '~utils/apollo';
const BusinessProfilePage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="Restaurants" subtitle="Sign up now">
        <h1>Content Here</h1>
      </ContentPage>
    </NewLayout>
  );
};

export const getServerSideProps = async ctx => {
  console.log(ctx);
  return { props: {} };
};

export default withApollo()(BusinessProfilePage);
