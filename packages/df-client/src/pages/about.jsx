import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
// import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

const AboutPage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="About" subtitle="About">
        <h1>About us here</h1>
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

export default AboutPage;
