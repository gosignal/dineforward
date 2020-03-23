import React from 'react';
import { contentQuerySlug } from '~utils/queries';

import Typography from '@material-ui/core/Typography';

import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import TabbedPanels from '~components/TabbedPanels';

const FaqPage = props => {
  const { name, blocks } = props;

  return (
    <NewLayout navbar>
      <ContentPage title="FAQ" subtitle="Your Frequently asked questions, answered">
        <Typography>{name}</Typography>
        <TabbedPanels
          tabs={[
            {
              name: 'Supporter FAQ',
              label: 'faq',
              content: () => <div dangerouslySetInnerHTML={{ __html: blocks[0].richContent }} />,
            },
            {
              name: 'Business FAQ',
              label: 'faq',
              content: () => <div dangerouslySetInnerHTML={{ __html: blocks[1].richContent }} />,
            },
          ]}
        />
      </ContentPage>
    </NewLayout>
  );
};

export const getStaticProps = contentQuerySlug('faq');

export default FaqPage;
