import React from 'react';
const requestBizForm = {
  form: {
    name: 'Request to add a business',
    fieldgroups: ['Business Info'],
    fields: [
      {
        name: 'name',
        label: 'Your Name',
        group: 'Business Info',
      },
      {
        name: 'email',
        label: 'Your Email',
        group: 'Business Info',
      },
      {
        name: 'description',
        label: 'Your Phone Number',
        group: 'Business Info',
      },
      {
        name: 'businessname',
        label: 'Business Name',
        group: 'Business Info',
      },
      {
        name: 'address1',
        label: 'Address 1',
        group: 'Business Info',
      },
      {
        name: 'adddress2',
        label: 'Address 2',
        group: 'Business Info',
      },
      {
        name: 'city',
        label: 'City',
        group: 'Business Info',
      },
      {
        name: 'state',
        label: 'State',
        group: 'Business Info',
      },
    ],
  },
};
const OnboardingStep1 = ({ cnfig }) => {
  return (
    <ComplexFormBuilder
      IncomingValues={place}
      schema={requestBizForm.form}
      formAction={vals => {
        console.log(vals);
      }}
    />
  );
};
export default OnboardingStep1;
