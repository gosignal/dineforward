import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui icons
import Mail from '@material-ui/icons/Mail';

import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import CustomInput from '~theme/prebuilt/components/CustomInput/CustomInput.js';

import styles from '~theme/prebuilt/jss/material-kit-pro-react/views/componentsSections/preFooter.js';

const useStyles = makeStyles(styles);

const Subscribe = () => {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={6} className={classNames(classes.mlAuto, classes.mrAuto)}>
        <div className={classes.textCenter}>
          <h3 className={classes.title}>Subscribe to our Newsletter</h3>
          <p className={classes.description}>
            Join our newsletter and get news in your inbox every week! We hate spam too, so no
            worries about this.
          </p>
        </div>
        <Card raised className={classes.card}>
          <CardBody className={classes.cardBody}>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={8}>
                  <CustomInput
                    id="emailPreFooter"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.cardForm,
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail />
                        </InputAdornment>
                      ),
                      placeholder: 'Your Email...',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  <Button color="primary" block className={classes.subscribeButton}>
                    subscribe
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Subscribe;
