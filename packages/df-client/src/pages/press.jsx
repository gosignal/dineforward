import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

const PressPage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="FAQ" subtitle="Your Frequently asked questions, answered">
        <h1>FAQ Content Here</h1>
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

export default PressPage;
