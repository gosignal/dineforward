import React from 'react';
import FakeBrowser from '~components/FakeBrowser';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  outer: {
    padding: '0 10%',
    [theme.breakpoints.only('xs')]: {
      padding: '0 10px',
    },
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
  img: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  text: {
    marginBottom: '30px',
  },
}));

const SampleRestaurantPage = () => {
  const classes = useStyles();
  return (
    <ContentPageLayout
      classes={classes}
      title="Sample Restaurant Profile"
      heading="Sample Restaurant Profile"
    >
      <div className={classes.content}>
        <p className={classes.text}>
          While our tech team is diligently working on our site, we've made
          a preview of what your restaurant profile page might
          look like. Take a look!
        </p>
        <FakeBrowser url="https://dineforward.org/my-restaurant">
          <img className={classes.img} src="/images/restaurant-page-sample.png" />
        </FakeBrowser>
      </div>
    </ContentPageLayout>
  );
};

export default SampleRestaurantPage;
