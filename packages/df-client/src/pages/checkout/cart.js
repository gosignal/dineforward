/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
// core components

// const useStyles = makeStyles(profilePageStyle);

const useStyles = makeStyles({
  root: {},
});
const stubData = {
  donationActivity: [
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
    ['Andrew Mike', 'San Francisco', 'Develop', '2013'],
    ['John Doe', 'San Francisco', 'Design', '2012'],
    ['Alex Mike', 'San Francisco', 'Design', '2010'],
  ],
};

const CartPage = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">Your cart</Typography>
              <Table
                tableHead={['Name', 'City', 'Bought', 'Date']}
                tableData={stubData.donationActivity}
                customCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
                customHeadClassesForCells={[0, 4, 5]}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default CartPage;
