import React from 'react';
import StatCard from '../Cards/StatCard';
import Grid from '@material-ui/core/Grid';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupIcon from '@material-ui/icons/Group';

const StatCardBar = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={6}>
        <StatCard
          type="fill"
          title="Donations"
          value={103}
          icon={<LocalOfferIcon />}
          color="#3f51b5"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <StatCard type="fill" title="Donors" value={230} icon={<GroupIcon />} color="#9c27b0" />
      </Grid>
    </Grid>
  );
};

export default StatCardBar;

// <Grid item xs={12} sm={6} md={3}>
//         <StatCard
//           type="fill"
//           title="Queries"
//           value={323}
//           icon={<NotificationsIcon />}
//           color="#f44336"
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <StatCard type="fill" title="Opens" value={870} icon={<EmailIcon />} color="#ffd740" />
//       </Grid>
