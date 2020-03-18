import React from 'react';
import classNames from 'classnames';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';

import { makeStyles } from '@material-ui/core/styles';
import profilePageStyle from '../../theme/prebuilt/jss/material-kit-pro-react/views/profilePageStyle.js';

const stubData = {
  supportLevels: [
    {
      name: 'Buy a beer!',
      price: '6',
      details: 'Test test',
    },
    {
      name: 'Buy a beer!',
      price: '6',
      details: 'Test test',
    },
    {
      name: 'Buy a beer!',
      price: '6',
      details: 'Test test',
    },
  ],
};

const useStyles = makeStyles(profilePageStyle);

const SupportLevels = () => {
  const classes = useStyles();
  const { supportLevels } = stubData;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
        <h4 className={classes.title}>Latest Collections</h4>
        <GridContainer className={classes.collections}>
          {supportLevels.map((offering, i) => {
            return (
              <GridItem xs={6} sm={6} md={4} key={i}>
                <Card plain pricing>
                  <CardBody pricing>
                    <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                      {offering.name}
                    </h6>
                    <h1 className={classes.cardTitle}>
                      <small>$</small>6
                    </h1>
                    <ul>
                      <li>
                        <b>1000</b> Project
                      </li>
                      <li>
                        <b>100</b> Team Members
                      </li>
                      <li>
                        <b>550</b> Personal Contacts
                      </li>
                      <li>
                        <b>50.000</b> Messages
                      </li>
                    </ul>
                    <Button onClick={() => console.log('support!')} color="rose" round>
                      Get started
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
};

export default SupportLevels;
