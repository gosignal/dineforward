import React from 'react';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  dynamicContent: {
    marginTop: '200px',
  },
});
const DynamicContent = ({ name, blocks, subtitle }) => {
  const classes = useStyles();
  return (
    <ContentPageLayout>
      <div className={classes.dynamicContent}>
        <h1>{name}</h1>
        <b>{subtitle}</b>
        {blocks.map((b, id) => (
          <div key={id} dangerouslySetInnerHTML={{ __html: b.richContent }} />
        ))}
      </div>
    </ContentPageLayout>
  );
};

export default DynamicContent;
