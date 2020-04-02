import React, { useCallback } from 'react';
import { Field } from 'formik';
import isEqual from 'react-fast-compare';

import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { useDropzone } from 'react-dropzone';

import { TextField, Select, Checkbox, CheckboxWithLabel } from 'formik-material-ui';

const Element = props => {
  const { description, ...field } = props.field;
  let input;

  switch (field.type) {
    case 'select':
      let options = field.options.map(option =>
        React.createElement(
          MenuItem,
          {
            key: `${field.name}-${option.value}`,
            variant: 'filled',
            value: option.value,
            defaultValue: field.options[0],
          },
          option.label,
        ),
      );
      input = React.createElement(
        Field,
        { key: field.name, component: Select, fullWidth: true, variant: 'filled', ...field },
        [...options],
      );
      break;
    case 'checkbox':
      input = React.createElement(Field, {
        key: field.name,
        component: CheckboxWithLabel,
        Label: { label: field.label },
        ...field,
      });
      break;
    // case 'file':
    //   input = React.createElement();
    default:
      input = React.createElement(Field, {
        key: field.name,
        component: TextField,
        fullWidth: true,
        variant: 'filled',
        ...field,
      });
      break;
  }
  return (
    <>
      {description && <Typography variant="body1">{description}</Typography>}
      {input}
    </>
  );
};

const FieldGroup = props => {
  const { description, form, fields, groupname } = props;
  return (
    <FormGroup>
      <Typography variant="h5">{groupname}</Typography>
      {description && <Typography variant="body1">{description}</Typography>}
      {fields.map(field => {
        return (
          <div
            label={field.label}
            key={`fc-${field.name}`}
            className={`fieldcomponent ${field.type}`}
            style={{
              padding: '10px',
            }}
          >
            <Element field={field} />
          </div>
        );
      })}
    </FormGroup>
  );
};

export default FieldGroup;
