import React from 'react';
import { contentQuerySlug } from '~utils/queries';

import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';
import TabbedPanels from '~components/TabbedPanels';

const isHeading = b => b.name.toLowerCase().includes('heading');

const FaqPage = props => {
  const { blocks } = props;

  const headings = blocks
    .filter(isHeading)
    .map(b => <div dangerouslySetInnerHTML={{ __html: b.richContent }} />);

  const tabs = blocks
    .filter(b => !isHeading(b))
    .map(b => ({
      name: b.name,
      content: <div dangerouslySetInnerHTML={{ __html: b.richContent }} />,
    }));

  return (
    <NewLayout navbar>
      <ContentPage title="FAQ" subtitle="Your frequently asked questions, answered">
        {headings}
        <TabbedPanels tabs={tabs} />
      </ContentPage>
    </NewLayout>
  );
};

export const getStaticProps = contentQuerySlug('faq');

export default FaqPage;
