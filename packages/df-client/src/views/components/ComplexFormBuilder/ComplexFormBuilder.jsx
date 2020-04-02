/***
 * ****************************
 * Dynamic Form builder
 *
 * This takes a schema, and generates a Formik form
 *
 * Schema
 * form: {
 *  name: "",
 *  fieldgroups: ["key","key","key"]
 *  fields: [
 *   {
 *    name:"", // String!
 *    label:"", // String!
 *    type: "", // String? "select" (requires options array), "file" (WIP), "checkbox", text is default (optional)
 *    multiline: true, // Boolean? (optional)
 *    placeholder: "", // String? (optional)
 *    rows: 5, // Number? (optional)
 *    options: [
 *      {
 *        label: "", // String
 *        value: "" // String!
 *       }
 *    ]
 *   }
 *  ]
 * }
 *
 *
 */
// ###
//  {
//   "name": "dish",
//   "label": "Order",
//   "group": "Mains",
//   "watch": ["diet"],
//   "show": {
//     "diet": "regular"
//   },
//   "type": "select",
//   "options": [
//     {
//       "label": "Steak",
//       "value": "steak"
//     },
//     {
//       "label": "Calamari",
//       "value": "calamari"
//     },
//     {
//       "label": "Pizza",
//       "value": "pizza"
//     },
//     {
//       "label": "Salad",
//       "value": "salad"
//     },
//     {
//       "label": "Burger",
//       "value": "burger"
//     }
//   ]
// }
// ###

/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';
// For FileUpload
// import { useDropzone } from 'react-dropzone';

import FieldGroup from './FieldGroup';
import Button from '@material-ui/core/Button';
// import stubForm from './addRestaurant.json';

/**
 *
 * Currently implementing file upload
 * Todo: see here --> https://github.com/jaredpalmer/formik/issues/45
 *
 * Notes: Use the [Apollo-Upload-Client](https://github.com/jaydenseric/apollo-upload-client)
 * Specifically: https://github.com/jaydenseric/apollo-upload-client#file
 * UI: react-dropzone, or https://www.npmjs.com/package/react-dropzone-uploader
 * Alternatively, use Ant.design's
 *
 */
// This is for the file upload stuff
// const onDrop = useCallback(acceptedFiles => {
//   // Do something with the files
// }, []);

// const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

const FormElements = props => {
  const { errors, form } = props;
  return form.fieldgroups.map(group => {
    if (typeof group === 'string') group = { name: group };
    const { name, description } = group;
    return (
      <FieldGroup
        key={`group-${name}`}
        groupname={name}
        fields={form.fields.filter(field => field.group === name)}
        description={description}
        error={errors}
      />
    );
  });
};

// const DefaultButtons = ({ isSubmitting }) => {
const DefaultButtons = props => {
  const { isSubmitting } = props;
  console.log('DefaultButtons', props);
  return (
    <>
      <Button type="reset" variant="outlined" color="secondary" disabled={isSubmitting}>
        Reset
      </Button>
      <Button type="submit" variant="outlined" color="primary" disabled={isSubmitting}>
        Submit
      </Button>
    </>
  );
};

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
    <Formik initialValues={incomingValues} onSubmit={formAction} enableReinitialize>
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
