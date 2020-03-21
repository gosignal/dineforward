import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

const InProgressPage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="Launching Monday" subtitle="">
        <h1>This will be live by monday</h1>
      </ContentPage>
    </NewLayout>
  );
};

export const getStaticProps = async () => {
  return { props: {} };
};

export const getStaticpaths = async () => {
  return {};
};

export default InProgressPage;
