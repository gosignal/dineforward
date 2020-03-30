import React, { Fragment } from 'react';
import { withIdentity } from '~utils/withIdentity';
import Admin from '~containers/Admin/Admin';
import Typography from '@material-ui/core/Typography';
import SettingsPanel from '~containers/Admin/Panels/SettingsPanel.panel';

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
const SettingsManagePage = props => {
  const { session, user } = props;

  React.useEffect(() => {
    console.log({ props });
  }, []);
  return (
    <div>
      <Admin>
        <SettingsPanel />
      </Admin>
    </div>
  );
};

export default withIdentity(SettingsManagePage);
