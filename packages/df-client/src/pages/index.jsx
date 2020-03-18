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
              <h1 className={classes.title}>Support your favorite restaurant!</h1>
              <h4>
                Now you have no excuses, it's time to surprise your clients, your competitors, and
                why not, the world. You probably won 't have a better chance to show off all your
                potential if it's not by designing a website for your own agency or web studio.
              </h4>
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
      <Footer
        content={
          <div className={classes.footer}>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} />{' '}
              by{' '}
              <a href="https://www.creative-tim.com/?ref=mkpr-landing" target="_blank">
                Creative Tim
              </a>{' '}
              for a better web.
            </div>
          </div>
        }
      />
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
