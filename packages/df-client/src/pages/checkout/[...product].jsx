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
import NavPills from '~theme/prebuilt/components/NavPills/NavPills.js';

import CommonFooter from '~components/Layout/LayoutFooter';
import SupportLevels from '~components/SupportLevels';
import ProfileStaff from '~components/ProfileStaff';
import Backes from '~components/Backers';

import profilePageStyle from '../../theme/prebuilt/jss/material-kit-pro-react/views/profilePageStyle.js';
import Backers from '~components/Backers';
import CheckoutForm from '~components/Checkout';

const useStyles = makeStyles(profilePageStyle);

const BizPage = ({ ...rest }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = React.useState();
  const img =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <div>
        <Container maxWidth="md">
          <GridContainer>
            <GridItem xs={12}>
              <CheckoutForm />
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

export default BizPage;
