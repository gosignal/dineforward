import React from 'react';

const OnboardingWizard = ({ cnfig }) => {
  const [step, setStep] = React.useState(1);
  return <h1>Wizard - step {step}</h1>;
};

export default OnboardingWizard;
