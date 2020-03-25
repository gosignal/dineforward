import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './AdminStyle';

import { queries, mutations } from '~gql/index'; //todo - scope by owned businesses
const { businessesAllByOwner } = queries; //Think there is a quirk w/ babel @ index includes...

import { useIdentity } from '~utils/withIdentity';
import { useQuery } from 'react-apollo';

import RequestForm from '~components/RequestForm';

const Admin = props => {
  // const { user } = props;

  const classes = useStyles();
  const user = useIdentity();
  const { loading, error, data } = useQuery(queries.businessesAllByOwner);

  return (
    <Grid container>
      <Grid item={true} className={classes.root}>
        <Typography variant="h1" className={classes.h1}>
          Header
        </Typography>
        <Typography variant="subtitle1" className={classes.h1}>
          SubHeader
        </Typography>
        <Grid item>
          <h1>Add a restaurant</h1>
          <p>{JSON.stringify(data)}</p>
          <h5>User</h5>
          <p>{JSON.stringify(user)}</p>
          <RequestForm
            action={(fields, { resetForm }) => {
              console.log({ fields });
              resetForm();
            }}
            actionButtonText="Add Business"
            resetButtonText="Clear"
            reset
            elements={[
              {
                id: 'name',
                label: 'Business Name',
                placeholder: 'Enter The Name of the business',
                type: 'text',
                validationType: 'string',
                value: 'Name',
                validations: [
                  {
                    type: 'required',
                    params: ['this field is required'],
                  },
                  {
                    type: 'min',
                    params: [5, 'name cannot be less than 5 characters'],
                  },
                ],
              },
              {
                id: 'address',
                label: 'Full name',
                placeholder: 'Enter full name',
                type: 'text',
                validationType: 'string',
                value: 'User ',
                validations: [
                  {
                    type: 'required',
                    params: ['this field is required'],
                  },
                  {
                    type: 'min',
                    params: [5, 'name cannot be less than 5 characters'],
                  },
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Admin;
