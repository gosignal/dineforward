import React, { Fragment } from 'react';
import { request } from 'graphql-request';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import { CharityWrapper, ContentWrapper } from '~containers/dineforward.style';
import TabbedPanels from '~components/TabbedPanels';
import { getAllBusinesses } from '~utils/api';
const FaqPage = ({ allBusinesses }) => {
  return (
    <NewLayout navbar>
      <ContentPage title="All businesses" subtitle="A directory of all of our businesses">
        <ul>
          {allBusinesses.map(biz => (
            <li>
              <Link href={`/business/${biz.businessSlug}`}>
                <a>
                  {biz.name} - {biz.formattedAddress}
                </a>
              </Link>
            </li>
          ))}
          <li />
        </ul>
      </ContentPage>
    </NewLayout>
  );
};

export const getStaticProps = async () => {
  const { allBusinesses } = await getAllBusinesses();

  return { props: { allBusinesses } };
};

// export const getStaticpaths = async () => {
//   return {};
// };

export default FaqPage;
