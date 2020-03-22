import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

const BusinessProfilePage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="Restaurants" subtitle="Sign up now">
        <h1>Content Here</h1>
      </ContentPage>
    </NewLayout>
  );
};

export const getServerSideProps = async () => {
  return { props: {} };
};

// export const getStaticProps = async () => {
//   return { props: {} };
// };

// export const getStaticpaths = async () => {
//   return {};
// };

export default BusinessProfilePage;
