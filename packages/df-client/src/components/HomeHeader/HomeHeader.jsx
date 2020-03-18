import React from 'react';
import classNames from 'classnames';

// Material
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Prebuilt
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Card from '~theme/prebuilt/components/Card/Card';
import CardBody from '~theme/prebuilt/components/Card/CardBody';

// DF Components
import SearchBox from '~components/SearchBox/GeoSearchbox';

// TODO Split this
// Styles
import IndexPageStyles from '~theme/IndexPageStyles';
const useStyles = makeStyles({ ...IndexPageStyles });

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
          <Typography variant="h1" className={classes.title}>
            Dine<i>Forward</i>
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            They’ve served you, now support them{' '}
          </Typography>
        </GridItem>
        <GridItem xs={12} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <Card raised className={classes.card}>
            <CardBody formHorizontal>
              <form>
                <GridContainer>
                  <GridItem>
                    <SearchBox />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Typography variant="subtitle1">
            DineForward supports independent bars and restaurants by allowing patrons to purchase
            future meals, gift cards, and make donations. In the midst of the COVID-19 pandemic, 15
            million restaurant industry employees in the US are facing an uncertain future. Many
            restaurants and bars operate on slim margins and most can’t survive longer than a few
            weeks without revenue. You can help by Dining Forward.
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default HomeHeader;
