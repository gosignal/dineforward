import React from 'react';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
  },
});

const DynamicContent = ({ name, blocks, subtitle }) => {
  const classes = useStyles();
  return (
    <ContentPageLayout classes={classes} title={name} heading={name} subheading={subtitle}>
      <div className={classes.content}>
        {blocks.map((b, id) => (
          <div key={id} dangerouslySetInnerHTML={{ __html: b.richContent }} />
        ))}
      </div>
    </ContentPageLayout>
  );
};

export default DynamicContent;
