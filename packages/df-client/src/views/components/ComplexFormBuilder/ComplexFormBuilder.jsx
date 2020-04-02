/* eslint-disable no-console */
import React from 'react';
import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';

import FieldGroup from './FieldGroup';
import Button from '@material-ui/core/Button';
import stubForm from './addRestaurant.json';

const FormElements = props => {
  const { errors, form } = props;
  return form.fieldgroups.map(group => {
    return (
      <FieldGroup
        key={`group-${group}`}
        groupname={group}
        fields={form.fields.filter(field => field.group === group)}
        error={errors}
      />
    );
  });
};

// const DefaultButtons = ({ isSubmitting }) => {
const DefaultButtons = props => {
  const { isSubmitting } = props;
  console.log("DefaultButtons", props);
  return (
  <>
    <Button
      type="reset"
      variant="outlined"
      color="secondary"
      disabled={isSubmitting}
    >
      Reset
    </Button>
    <Button
      type="submit"
      variant="outlined"
      color="primary"
      disabled={isSubmitting}
    >
      Submit
    </Button>
    </>
);
  }

const ComplexFormBuilder = props => {
  const { children, formAction, values, schema } = props;
  let { incomingValues } = props;
  const [form, setForm] = React.useState(schema);
  const [formFields, setFormFields] = React.useState(form);
  const [vals, setVals] = React.useState(incomingValues);

  if (!incomingValues || incomingValues === null) {
    incomingValues = Object.assign({}, ...schema.fields.map(m => ({ [m.name]: '' })));
  }

  return (
        <Formik
          initialValues={incomingValues}
          onSubmit={formAction}
          enableReinitialize
          >
          {formikProps => (
            <Form>
              <FormElements form={form} />
              {children ? children(formikProps) : DefaultButtons(formikProps)}
            </Form>
          )}
        </Formik>
  );
};

export default ComplexFormBuilder;
