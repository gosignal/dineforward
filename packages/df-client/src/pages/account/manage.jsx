import React, { Fragment } from 'react';
import { withIdentity } from '~utils/withIdentity';
import Admin from '~containers/Admin';

const AccountManagePage = props => {
  const { session } = props;

  console.log(props);

  return (
    <div>
      <Admin />
    </div>
  );
};

export default withIdentity(AccountManagePage);
