/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
// import Box from '~theme/sp-theme/elements/Box';
// import Text from '~theme/sp-theme/elements/Text';

import FooterWrapper, { List, ListItem } from './footer.style';
import Heading from '../../theme/sp-theme/elements/Heading';
// import Logo from '~theme/sp-theme/elements/UI/Logo';
import Container from '../../theme/sp-theme/components/UI/Container';

import { menuWidgets } from '~config/stubData';

// const LogoImage = '/images/logo.svg';

const useStyles = makeStyles({ root: { backgroundColor: '#fff' } });

const Footer = () => {
  const classes = useStyles();
  return (
    <FooterWrapper>
      <Container maxWidth="md" align="center">
        <Grid container>
          {menuWidgets.map(widget => (
            <Grid item md={4} sm={12} key={`footer__widget-key${widget.id}`}>
              <Heading className="widget_title" as="h3" content={widget.title} />
              <List>
                {widget.menu.map(item => (
                  <ListItem key={`list__item-${item.id}`}>
                    <Link href={item.link}>
                      <a>{item.text}</a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <div align="center">
              &copy; {1900 + new Date().getYear()} , All rights reserved. Made with{' '}
              <Favorite className={classes.icon} /> by{' '}
              <a href="http://fullsignal.co" target="_blank" rel="noopener noreferrer">
                Signal Labs
              </a>
              in Oakland, CA
            </div>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

// // Footer style props
// Footer.propTypes = {
//   row: PropTypes.object,
//   col: PropTypes.object,
//   colOne: PropTypes.object,
//   colTwo: PropTypes.object,
// };

// // Footer default style
// Footer.defaultProps = {
//   // Footer row default style
//   row: {
//     flexBox: true,
//     flexWrap: 'wrap',
//     ml: '-15px',
//     mr: '-15px',
//   },
//   // Footer col one style
//   colOne: {
//     width: ['100%', '30%', '35%', '30%'],
//     mt: [0, '13px', '0'],
//     mb: ['30px', 0],
//     pl: ['15px', 0],
//     pr: ['15px', '15px', 0],
//   },
//   // Footer col two style
//   colTwo: {
//     width: ['100%', '70%', '65%', '70%'],
//     flexBox: true,
//     flexWrap: 'wrap',
//   },
//   // Footer col default style
//   col: {
//     width: ['100%', '50%', '50%', '33.33%'],
//     pl: '15px',
//     pr: '15px',
//     mb: '30px',
//   },
// };

export default Footer;
