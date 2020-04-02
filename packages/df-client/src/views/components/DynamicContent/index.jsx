import React from 'react';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {},
  dynamicContent: {
    marginTop: '200px', //todo move this to the contentPageLayout for all individual refs
  },
});
const DynamicContent = ({ name, blocks, subtitle }) => {
  const classes = useStyles();
  return (
    <ContentPageLayout>
      <div className={classes.dynamicContent}>
        <Typography variant="h1">{name}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        {blocks.map((b, id) => (
          <div key={id} dangerouslySetInnerHTML={{ __html: b.richContent }} />
        ))}
      </div>
    </ContentPageLayout>
  );
};

export default DynamicContent;
