import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// import useSWR from "swr";
// import Config from "~config";

import PropTypes from 'prop-types';

// nodejs library that concatenates classes
import classNames from 'classnames';

// layout related
import Layout from '~components/Layout';
import CommonFooter from '~components/Layout/LayoutFooter';
// import Menu from '~components/Menu';
// import Banner from '~components/Banner';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Card from '@material-ui/core/Card';
// import CardBody from '@material-ui/core/CardBody';
import ListItem from '@material-ui/core/ListItem';

import Header from '~components/Header';
import Footer from '~theme/prebuilt/components/Footer/Footer.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import HeaderLinks from '~theme/prebuilt/components/Header/HeaderLinks.js';
import Parallax from '~theme/prebuilt/components/Parallax/Parallax.js';
import Card from '~theme/prebuilt/components/Card/Card';
import CardBody from '~theme/prebuilt/components/Card/CardBody';
import CustomInput from '~theme/prebuilt/components/CustomInput/CustomInput';
import InfoArea from '~theme/prebuilt/components/InfoArea/InfoArea.js';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import SearchBox from '~components/SearchBox';

import IndexPageStyles from '~theme/IndexPageStyles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(IndexPageStyles);

const HeaderLink = () => {
  return (
    <div className={classes.collapse}>
      <List className={`${classes.list} ${classes.mlAuto}`}>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            Home
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

const IndexPage = ({ ...rest }) => {
  // const { page, posts, pages } = props;
  // console.log(props);

  const classes = useStyles();

  const [searchInput, setSearchInput] = React.useState();

  return (
    <>
      <Header
        absolute
        brand="Dine Forward"
        color="primary"
        links={
          <div className={classes.collapse}>
            <List className={`${classes.list} ${classes.mlAuto}`}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Home
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  About us
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Products
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Contact us
                </Button>
              </ListItem>
            </List>
            <List className={`${classes.list} ${classes.mlAuto}`}>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                >
                  <i className="fab fa-twitter" />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                >
                  <i className="fab fa-facebook" />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                >
                  <i className="fab fa-instagram" />
                </Button>
              </ListItem>
            </List>
          </div>
        }
      />
      <Parallax
        image={
          'https://images.unsplash.com/photo-1495299458363-c7d39bb37892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
        }
        className={classes.headerHero}
        filter
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <Typography variant="h1" className={classes.title}>
                Dine Forward
              </Typography>
              <Typography variant="subtitle1">
                They’ve taken care of you, it’s time to take care of them. Dine Forward allows you
                to make sure your favorite bars & restaurants get the support they need while closed
                due to COVID-19. Independently owned eateries operate on slim margins………. most can’t
                survive with losing a few weeks of revenue. This platform allows patrons to support
                their favorite establishments through small future purchases, gift cards, server
                tips, or donations. We know we will make it out of this pandemic, let’s make sure
                our favorite places do too.
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
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8}>
                <h2 className={classes.title}>Let's talk product</h2>
                <h5 className={classes.description}>
                  This is the paragraph where you can write more details about your product. Keep
                  you user engaged by providing meaningful information. Remember that by this time,
                  the user is curious, otherwise he wouldn 't scroll to get here. Add a button if
                  you want the user to see more.
                </h5>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer content={<CommonFooter />} />
    </>
  );
};

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default IndexPage;
