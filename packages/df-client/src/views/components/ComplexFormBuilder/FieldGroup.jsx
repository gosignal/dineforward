import React from 'react';
import { Field } from 'formik';
import isEqual from 'react-fast-compare';

import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import { TextField, Select, Checkbox, CheckboxWithLabel } from 'formik-material-ui';

const Element = ({ field }) => {
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
  return input;
};

const FieldGroup = props => {
  const { form, fields, groupname } = props;
  console.log(props);
  console.log('Rendering ' + groupname);
  return (
    <FormGroup>
      <Typography variant="h5">{groupname}</Typography>
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
