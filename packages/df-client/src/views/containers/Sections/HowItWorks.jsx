import React from 'react';
import Link from 'next/link';
import BlockItem from '~components/BlockItem';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CloudIcon from '@material-ui/icons/Cloud';
import Typography from '@material-ui/core/Typography';
import { Grid, Container, Button } from '@material-ui/core';
import { SectionHeader } from '~components/Elements';

const hiwFeatures = [
  {
    title: 'A future drink or meal',
    subtext: 'Celebrate with a meal or drink when your favorite spot re\u2011opens.  ',
    url: '#search',
    Icon: RestaurantIcon,
    buttonText: 'Find your fave now!',
  },
  /*
  {
    title: 'A group experience',
    subtext: "After social distancing, you'll need social embracing.  ",
    url: '#search',
    Icon: GroupAddIcon,
    buttonText: 'Coming Soon',
  },
  ,
  {
    title: 'A virtual experience',
    subtext: 'Why wait?  Connect now through cooking classes or virtual happy hours.',
    url: '#search',
    Icon: CloudIcon,
    buttonText: 'Search Now',
  },
  */
];

const useStyles = makeStyles(theme => ({
  offers: {
    paddingTop: '50px',
    paddingBottom: '50px',
  },
}));

const HowItWorks = ({ data }) => {
  const classes = useStyles();

  return (
    <Container>
      <SectionHeader
        title="How it Works"
        subtitle={`DineForward allows you to support small businesses by making a donation in exchange for a reward.`}
      />
      <Grid
        container
        spacing={3}
        justify="center"
        className={classes.offers}
      >
        {hiwFeatures.map((item, i) => (
          <Grid item sm={8} xs={12}>
            <BlockItem
              key={`feature_key${i}`}
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
    </Container>
  );
};

export default HowItWorks;
