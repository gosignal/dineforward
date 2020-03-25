/* eslint-disable no-console */
import React from 'react';
import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';

import FieldGroup from './FieldGroup';
import Button from '@material-ui/core/Button';
import stubForm from './config.json';

const FormElements = props => {
  const { errors, form } = props;
  return form.fieldgroups.map(group => (
    <FieldGroup
      key={`group-${group}`}
      groupname={group}
      fields={form.fields.filter(field => field.group === group)}
      error={errors}
    />
  ));
};

const ComplexFormBuilder = props => {
  const { formAction, values } = props;
  const [form, setForm] = React.useState(stubForm.form);
  const [formFields, setFormFields] = React.useState(form);

  const initVals = Object.assign({}, ...form.fields.map(m => ({ [m.name]: '' })));
  if (values) {
    console.log({ values });
    console.log({ form });
    // map incoming values to form values from google maps
    // ****
    // check the type
    // ****
    // to implement
    // ---------
  }
  return (
    <Grid container>
      <Grid item xs={8}>
        <Formik initialValues={initVals} onSubmit={formAction}>
          {({ submitForm, isSubmitting, values, setFieldValue, errors, handleChange }) => (
            <Form>
              <FormElements form={form} />
              <Button type="submit" variant="outlined" color="primary">
                Submit
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Reset
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ComplexFormBuilder;
