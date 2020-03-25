import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';
import { useMutation } from '@apollo/react-hooks';

import { mutations, queries } from '~gql';
import { createYupSchema } from '~utils/helpers';

const MuiTextField = props => {
  const [error, setError] = React.useState(props.error);
  const { label, name, placeholder, value, onChange, type } = props;
  const [val, setVal] = React.useState({
    value: value || '',
  });
  const handleChange = (a, b, c) => console.log(a, b, c);
  console.log({ name, label, type, value });
  return (
    <div>
      <Field
        label={label}
        name={name}
        value={'Test'}
        type={type}
        component={TextField}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};

const SimpleDynamicForm = ({ elements, action, reset, actionButtonText, resetButtonText }) => {
  const yepSchema = elements.reduce(createYupSchema, {});
  const [formElements] = React.useState(elements);

  const validateSchema = yup.object().shape(yepSchema);

  return (
    <div id="customerForm">
      <Formik initialValues={formElements} validationSchema={validateSchema} onSubmit={action}>
        {({ submitForm, isSubmitting, values, setFieldValue, errors, handleChange }) => (
          <Form>
            {formElements.map((item, index) => {
              const fieldMap = {
                text: MuiTextField,
              };

              const Component = fieldMap[item.type];
              let error = errors.hasOwnProperty(item.id) && errors[item.id];
              console.log('===', item);
              if (item.type) {
                return (
                  <Component
                    key={index}
                    label={item.label}
                    name={item.id}
                    placeholder={item.placeholder}
                    onChange={handleChange}
                    error={errors}
                  />
                );
              }
            })}
            {/*  // error,status,touched */}
            <Button type="submit" variant="outlined" color="primary">
              {actionButtonText}
            </Button>
            <Button type="reset" variant="outlined" color="secondary">
              {resetButtonText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
// };

// const FormikApp = withFormik({
//   mapPropsToValues({ email, password }) {
//     return {
//       email: email || '',
//       password: password || '',
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .email()
//       .required(),
//     password: Yup.string()
//       .min(6)
//       .required(),
//   }),
//   handleSubmit(values) {
//     console.log(values);
//   },
// })(App);

export default SimpleDynamicForm;
