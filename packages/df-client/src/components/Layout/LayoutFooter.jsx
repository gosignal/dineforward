import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Card from '@material-ui/core/Card';
// import CardBody from '@material-ui/core/CardBody';
import ListItem from '@material-ui/core/ListItem';

import CommonStyles from './CommonStyles';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Favorite from '@material-ui/icons/Favorite';
import Footer from '~theme/prebuilt/components/Footer/Footer.js';

const face1 = '/images/faces/card-profile6-square.jpg';
const face2 = '/images/faces/card-profile6-square.jpg';
const face3 = '/images/faces/card-profile6-square.jpg';
const face4 = '/images/faces/card-profile6-square.jpg';
const face5 = '/images/faces/card-profile6-square.jpg';
const face6 = '/images/faces/card-profile6-square.jpg';
const face7 = '/images/faces/card-profile6-square.jpg';
const face8 = '/images/faces/card-profile6-square.jpg';

const useStyles = makeStyles(CommonStyles);
const LayoutFooter = () => {
  const classes = useStyles();
  return (
    <>
      <Footer
        theme="dark"
        content={
          <div>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4} align="left">
                <h5>About Us</h5>
                <p>DineForward -- about copy needed... </p>
                <p>lorem ipsum. </p>
              </GridItem>
              <GridItem xs={12} sm={4} md={4} align="left">
                <h5>Social Feed</h5>
                <div className={classes.socialFeed}>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div>
                    <i className="fab fa-facebook-square" />
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Instagram Feed</h5>
              </GridItem>
              <GridItem xs={12} align="center">
                <div align="center">
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a href="#" className={classes.block} onClick={e => e.preventDefault()}>
                        Sign your business up
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a href="#" className={classes.block} onClick={e => e.preventDefault()}>
                        About Us
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a href="#" className={classes.block} onClick={e => e.preventDefault()}>
                        How it works
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a href="#" className={classes.block} onClick={e => e.preventDefault()}>
                        Privacy Policy & Terms
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a href="#" className={classes.block} onClick={e => e.preventDefault()}>
                        Contact Us
                      </a>
                    </ListItem>
                  </List>
                </div>
              </GridItem>
              <GridItem xs={12}>
                <div align="center">
                  &copy; {1900 + new Date().getYear()} , All rights reserved. Made with{' '}
                  <Favorite className={classes.icon} /> by{' '}
                  <a href="https://fullsignal.co" target="_blank">
                    Signal Labs
                  </a>{' '}
                  in Oakland, CA
                </div>
              </GridItem>
            </GridContainer>
          </div>
        }
      />
    </>
  );
};

export default LayoutFooter;
