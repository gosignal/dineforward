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
  console.log('mui input', props);
  const { label, name, placeholder, value, onChange, type } = props;
  return (
    <div>
      <Field
        label={label}
        name={name}
        type={type}
        component={TextField}
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

const useDynamicForm = ({ elements, action, reset, actionButtonText, resetButtonText }) => {
  return 'test';
};

const SimpleDynamicForm = ({ elements, action, reset, actionButtonText, resetButtonText }) => {
  const [addBizRequest, { data }] = useMutation(mutations.businessCreate);
  const yepSchema = elements.reduce(createYupSchema, {});
  const [formElements] = React.useState(elements);

  const validateSchema = yup.object().shape(yepSchema);

  return (
    <div id="customerForm">
      <Formik initialValues={formElements} validationSchema={validateSchema} onSubmit={action}>
        {props => (
          <Form>
            {formElements.map((item, index) => {
              const fieldMap = {
                text: MuiTextField,
              };

              const Component = fieldMap[item.type];
              let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
              console.log(props);
              if (item.type) {
                console.log('item ====>', item);
                return (
                  <Component
                    key={index}
                    label={item.label}
                    name={item.id}
                    placeholder={item.placeholder}
                    value={item[item.id]}
                    onChange={props.handleChange}
                    error={error}
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
};

export default SimpleDynamicForm;
