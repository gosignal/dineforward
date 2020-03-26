import React, { Fragment } from 'react';
import { withIdentity } from '~utils/withIdentity';
import Admin from '~containers/Admin/Admin';
import Typography from '@material-ui/core/Typography';
import AddRestaurantPanel from '~containers/Admin/Panels/ViewAllBusiness.panel';

let id = 0;
function createData(name, date, progress) {
  id += 1;
  return { id, name, date, progress };
}
{
  /* <textarea>
  <p>{JSON.stringify(props)}</p>
</textarea>; */
}
const AccountManagePage = props => {
  const { session, user } = props;

  React.useEffect(() => {
    console.log({ props });
  }, []);
  return (
    <div>
      <Admin>
        <AddRestaurantPanel />
      </Admin>
    </div>
  );
};

export default withIdentity(AccountManagePage);
