import React from 'react';
import Link from 'next/link';
import BlockItem from '~components/BlockItem';
import Icon from '@material-ui/core/Icon';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CloudIcon from '@material-ui/icons/Cloud';
import Typography from '@material-ui/core/Typography';
import { Grid, Container, Button } from '@material-ui/core';
import { SectionHeader } from '~components/Elements';

const hiwFeatures = [
  {
    title: 'A future drink or meal',
    subtext: 'Celebrate with a meal or drink when your favorite spot re-opens.  ',
    url: '#search',
    Icon: RestaurantIcon,
    buttonText: 'Search Now',
  },
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
];

const HowItWorks = ({ data }) => {
  return (
    <Container>
      <SectionHeader
        title="How it Works"
        subtitle={`DineForward allows you to support small businesses by making a donation in exchange for a reward.`}
      />
      <Grid container spacing={3}>
        {hiwFeatures.map((item, i) => (
          <Grid item xs={12} sm={4}>
            <BlockItem
              key={`feature_key${i}`}
              Icon={item.Icon}
              title={item.title}
              subtext={item.subtext}
              btnUrl={item.url}
              btnText={item.buttonText || 'Find your fav now!'}
              anchorLink
            />
          </Grid>
        ))}

        <Button>
          <Link href="/restaurants">
            <a>Are you a restaurant?</a>
          </Link>
        </Button>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
