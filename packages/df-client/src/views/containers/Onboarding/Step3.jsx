import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ComplexFormBuilder from '~components/ComplexFormBuilder';
import GeoSearchBox from '~components/SearchBox/GeoSearchbox';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    marginTop: '200px',
    paddingTop: '200px',
  },
  container: {
    marginTop: '200px',
  },
});
const OnboardingStep2 = ({ cnfig, previous }) => {
  const classes = useStyles();
  const router = useRouter();
  const validateAndCreate = info => {
    return info;
  };

  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item md={12}>
        <Typography variant="subtitle1">Congrats, you're all set. </Typography>
        <Typography variant="body1">
          Preview your profile{' '}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              router.push('/biz/nicksongrand');
            }}
          >
            Here
          </Button>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};
export default OnboardingStep2;
