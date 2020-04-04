import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Help from '@material-ui/icons/Help';
import Restaurant from '@material-ui/icons/Restaurant';
import BlockItem from '~components/BlockItem';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';

const features = [
  {
    title: 'Sign Up',
    subtext: 'Joining is easy as 1\u20112\u20113',
    url: '/business/signup',
    Icon: GroupAdd,
    buttonText: 'Sign up now!',
  },
  {
    title: 'Samples',
    subtext: 'See a sample restaurant page',
    url: '/sample-restaurant',
    Icon: Restaurant,
    buttonText: 'Sample Page',
  },
  ,
  {
    title: 'FAQ',
    subtext: <div>Got questions?<br/>We have answers.</div>,
    url: '/faq',
    Icon: Help,
    buttonText: 'Read the FAQ',
  },
];

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: '0 5%',
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
  features: {
    maxWidth: '1200px',
    margin: '40px auto',
  },
  featureRoot: {
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '300px',
    },
  },
  featureTitle: {
    [theme.breakpoints.up('md')]: {
      height: '2em',
    },
  },
  featureSubtitle: {
    lineHeight: '1.7em',
    [theme.breakpoints.up('md')]: {
      height: '4em',
    },
  },
}));

const RestaurantsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ContentPageLayout
        classes={classes}
        title="Restaurants"
        heading="Restaurants"
        subheading="What do I get by signing up with DineForward?"
      >
        <div className={classes.content}>
          <p>
            Whether you’re a restaurant, bar, cafe, or bagel place - times
            are tough. Which is why we want to help. 
          </p>
          <p>
            We’re starting with putting as many restaurants as we can online,
            then arming you with the tools you need to raise funds and stay afloat. 
          </p>
          <p>
            This site is free to join and use. It's run by a team of volunteers
            from all over the country. We’re constantly working on new ideas
            and features, including the ability for supporters to buy group
            meals, and engage with your staff in virtual happy hours and
            cooking lessons. 
          </p>
          <p>
            The possibilities are endless and we want to make them happen!
          </p>
        </div>
      </ContentPageLayout>

      <Grid
        container
        spacing={3}
        justify="center"
        className={classes.features}
      >
        {features.map((item, i) => (
          <Grid item md={4} xs={12} key={i}>
            <BlockItem
              key={`feature_key${i}`}
              classes={{
                root: classes.featureRoot,
                subtitle: classes.featureSubtitle,
                title: classes.featureTitle,
              }}
              Icon={item.Icon}
              title={item.title}
              subtext={item.subtext}
              btnUrl={item.url}
              btnText={item.buttonText || 'Find your fave now!'}
              anchorLink
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RestaurantsPage;
