import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    background: 'transparent',
  },
}));

const WizardSteps = ({ allSteps, classes = {}, startStep = 0, ...stepProps }) => {
  const local = useStyles();
  const [activeStep, setActiveStep] = React.useState(startStep);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function StepContent({ index }) {
    let { Component } = allSteps[index];
    return (
      <Component
        {...stepProps}
        back={handleBack}
        classes={classes}
        current={index}
        forward={handleNext}
      />
    );
  }

  return (
    <div className={local.root}>
      <Stepper className={local.stepper} activeStep={activeStep} alternativeLabel>
        {allSteps.map(s => (
          <Step key={s.name}>
            <StepLabel>{s.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === allSteps.length ? (
          <div>
            <Typography className={local.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <StepContent index={activeStep} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WizardSteps;
