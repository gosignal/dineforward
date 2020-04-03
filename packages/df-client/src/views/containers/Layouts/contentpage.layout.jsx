import React, { Fragment } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import AppNav from '~components/AppNav';
import SideNav, { useDrawer } from '~components/Drawer';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  outer: {
    padding: 0,
    marginTop: '200px',
  },
});
const routes = [
  {
    route: '/',
  },
];

const ContentPageLayout = ({ children, classes = {}, heading, subheading, title, })=> {
  const local = useStyles();
  const { open, toggleOpen } = useDrawer();
  title = title ? `${title} | DineForward` : 'DineForward';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classNames(classes.root, local.root)}>
        <AppNav />
        <Container className={classNames(classes.outer, local.outer)} maxWidth="lg">
          <div className={classNames(classes.inner, local.inner)}>
            {heading && <Typography variant="h1">{heading}</Typography>}
            {subheading && <Typography variant="subtitle1">{subheading}</Typography>}
            {children}
          </div>
        </Container>
      </div>
      <SideNav routes={routes} opened={open} onClose={toggleOpen} toggleDrawer={toggleOpen} />
    </React.Fragment>
  );
};

export default ContentPageLayout;
