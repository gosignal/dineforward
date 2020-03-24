import React from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardHeader from '~theme/prebuilt/components/Card/CardHeader.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import Muted from '~theme/prebuilt/components/Typography/Muted.js';

import profilePageStyle from '~theme/prebuilt/jss/material-kit-pro-react/views/profilePageStyle.js';
const darrenColeshill = '/images/examples/darren-coleshill.jpg';

const christian = '/images/faces/christian.jpg';
const avatar = '/images/faces/avatar.jpg';
const marc = '/images/faces/marc.jpg';
const kendall = '/images/faces/kendall.jpg';
const cardProfile2Square = '/images/faces/card-profile2-square.jpg';

const stubData = {
  businessStaff: [
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
    {
      name: 'Test Employee',
      title: 'manager',
      details: 'myemail@gmail.com',
    },
  ],
};

const useStyles = makeStyles(profilePageStyle);

const ProfileStaff = () => {
  const classes = useStyles();
  const { businessStaff } = stubData;
  return (
    <GridContainer justify="center">
      {businessStaff.map(staff => {
        return (
          <GridItem xs={6} sm={6} md={3} className={classes.gridItem}>
            <Card profile plain className={classes.card}>
              <GridContainer>
                <GridItem xs={6} sm={6} md={3}>
                  <CardHeader image plain>
                    <img src={avatar} alt="..." />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: 'url(' + avatar + ')',
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>{staff.name}</h4>
                    <Typography variant="subtitle2">{staff.title}</Typography>
                    <Typography variant="body1">{staff.details}</Typography>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default ProfileStaff;
