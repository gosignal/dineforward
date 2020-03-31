import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, Grid, TextField, Card, CardContent, Button } from '@material-ui/core';

// @material-ui icons
import Mail from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({}));

const Subscribe = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} className={classNames(classes.mlAuto, classes.mrAuto)}>
        <div className={classes.textCenter}>
          <h3 className={classes.title}>Subscribe to our Newsletter</h3>
          <p className={classes.description}>
            Join our newsletter and get news in your inbox every week! We hate spam too, so no
            worries about this.
          </p>
        </div>
        <Card raised className={classes.card}>
          <CardContent className={classes.cardBody}>
            <form>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <TextField
                    id="emailPreFooter"
                    className={classes.cardForm}
                    fullWidth
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail />
                        </InputAdornment>
                      ),
                      placeholder: 'Your Email...',
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={4}>
                  <Button color="primary" className={classes.subscribeButton}>
                    subscribe
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
