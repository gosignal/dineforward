import React, { Fragment } from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

const ContactPage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="Contact" subtitle="Contact us">
        <h1>Contact Content Here</h1>
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

export default ContactPage;
