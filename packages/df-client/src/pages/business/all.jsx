import React, { Fragment } from 'react';
import { request } from 'graphql-request';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import TabbedPanels from '~components/TabbedPanels';
import { getAllBusinesses } from '~utils/api';
const FaqPage = ({ allBusinesses }) => {
  return (
    <ContentPageLayout>
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
    </ContentPageLayout>
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
