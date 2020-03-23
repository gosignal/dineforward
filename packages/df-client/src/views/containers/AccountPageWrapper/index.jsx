import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from '~theme/sp-theme/elements/Text';
import Link from 'next/link';
import Icon from '@material-ui/core/Icon';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import style from './style.js';

import Container from '@material-ui/core/Container';

import PageWrapper from './PageWrapper.style';
const useStyles = makeStyles(style);

const AccountPage = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <PageWrapper>
      <Container width="md">{children}</Container>
    </PageWrapper>
  );
};

export default AccountPage;
