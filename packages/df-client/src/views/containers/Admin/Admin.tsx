import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './AdminStyle';

import { queries, mutations } from '~gql/index'; //todo - scope by owned businesses
const { businessesAllByOwner } = queries; //Think there is a quirk w/ babel @ index includes...

import { useIdentity } from '~utils/withIdentity';
import { useQuery } from 'react-apollo';

const Admin = props => {
  // const { user } = props;

  const classes = useStyles();
  const user = useIdentity();
  const { loading, error, data } = useQuery(queries.businessesAll);

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
          <p>{JSON.stringify({})}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Admin;
