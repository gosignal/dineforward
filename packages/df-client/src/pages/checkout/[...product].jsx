/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
// core components

import CheckoutForm from '~components/Checkout/Render';

import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const BizPage = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12}>
              <CheckoutForm />
            </Grid>
          </Grid>
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
