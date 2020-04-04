import React from 'react';
import { makeStyles } from '@material-ui/core';
import { contentQuerySlug } from '~utils/queries';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import TabbedPanels from '~components/TabbedPanels';

const isHeading = b => b.name.toLowerCase().includes('heading');

const useStyles = makeStyles(theme => ({
  '@global': {
    strong: {
      fontWeight: 800,
    },
  },
  outer: {
    padding: '0 10%',
  },
  inner: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '800px',
  },
  content: {
    fontSize: '1.4em',
    lineHeight: '1.8em',
    fontFamily: theme.typography.fontFamily,
  },
}));

const FaqPage = ({ blocks })=> {
  const classes = useStyles();

  const headings = blocks
    .filter(isHeading)
    .map(b => <div key={b.name} dangerouslySetInnerHTML={{ __html: b.richContent }} />);

  const tabs = blocks
    .filter(b => !isHeading(b))
    .map(b => ({
      name: b.name,
      content: <div key={b.name} dangerouslySetInnerHTML={{ __html: b.richContent }} />,
    }));

  return (
    <ContentPageLayout
      classes={classes}
      title="FAQ"
      heading="FAQ"
      subheading="Your frequently asked questions, answered"
    >
      <div className={classes.content}>
        {headings}
        <TabbedPanels tabs={tabs} />
      </div>
    </ContentPageLayout>
  );
};

export const getStaticProps = contentQuerySlug('faq');

export default FaqPage;
