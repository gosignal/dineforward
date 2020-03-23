/*eslint-disable*/
import React from 'react';

import Error from 'next/error';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import { grey } from '@material-ui/core/colors';

import errorPageStyle from '~theme/prebuilt/jss/material-kit-pro-react/views/errorPageStyles.js';

const useStyles = makeStyles(errorPageStyle);

const ErrorPage = ({ ...rest }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          //   backgroundImage: 'url(' + image + ')',
          backgroundColor: grey[600],
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>
                <Error statusCode={rest.statusCode} />
              </h1>
              <h4 className={classes.description}>Doh! We hate errors too.</h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = (res && res.statusCode) || (err && err.statusCode) || null;

  return { statusCode };
};

export default ErrorPage;
