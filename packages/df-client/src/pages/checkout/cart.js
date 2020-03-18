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
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
// core components
import Header from '~theme/prebuilt/components/Header/Header.js';
import Footer from '~theme/prebuilt/components/Footer/Footer.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import HeaderLinks from '~theme/prebuilt/components/Header/HeaderLinks.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import CardHeader from '~theme/prebuilt/components/Card/CardHeader.js';
import Badge from '~theme/prebuilt/components/Badge/Badge.js';
import Muted from '~theme/prebuilt/components/Typography/Muted.js';
import Parallax from '~theme/prebuilt/components/Parallax/Parallax.js';
import Clearfix from '~theme/prebuilt/components/Clearfix/Clearfix.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import NavPills from '~theme/prebuilt/components/NavPills/Navpills.js';

import CommonFooter from '~components/Layout/LayoutFooter';
import SupportLevels from '~components/SupportLevels';
import ProfileStaff from '~components/ProfileStaff';
import Backes from '~components/Backers';

import profilePageStyle from '../../theme/prebuilt/jss/material-kit-pro-react/views/profilePageStyle.js';
import Backers from '~components/Backers';
import CheckoutForm from '~components/Checkout';

const useStyles = makeStyles(profilePageStyle);

import Table from '../../theme/prebuilt/components/Table/Table.js';
// import Button from '../../theme/prebuilt/components/CustomButtons/Button.js';

import style from '../../theme/prebuilt/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';

// const useStyles = makeStyles(style);
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
          <GridContainer>
            <GridItem xs={12}>
              <Typography variant="h4">Your cart</Typography>
              <Table
                tableHead={['Name', 'City', 'Bought', 'Date']}
                tableData={stubData.donationActivity}
                customCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[classes.textCenter, classes.textRight, classes.textRight]}
                customHeadClassesForCells={[0, 4, 5]}
              />
            </GridItem>
          </GridContainer>
        </Container>
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default CartPage;
