import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import InfoIcon from '@material-ui/icons/Info';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneMissedIcon from '@material-ui/icons/PhoneMissed';
import moment from 'moment';
import indigo from '@material-ui/core/colors/indigo';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

const styles = {
  indigoText: {
    color: indigo[500],
    backgroundColor: 'transparent',
  },
  redText: {
    color: red[500],
    backgroundColor: 'transparent',
  },
  yellowText: {
    color: yellow[500],
    backgroundColor: 'transparent',
  },
  defaultText: {
    backgroundColor: 'transparent',
    color: 'inherit',
  },
};

const date = Date.now();

export const notifications = [
  {
    avatar: (
      <Avatar style={{ ...styles.indigoText }}>
        <PeopleIcon />
      </Avatar>
    ),
    title: 'Social',
    subtitle: 'Euismod Ullamcorper Malesuada',
  },
  {
    avatar: (
      <Avatar style={{ ...styles.redText }}>
        <LocalOfferIcon />
      </Avatar>
    ),
    title: 'Promotions',
    subtitle: 'Mattis Malesuada Porta',
  },
  {
    avatar: (
      <Avatar style={{ ...styles.yellowText }}>
        <InfoIcon />
      </Avatar>
    ),
    title: 'Updates',
    subtitle: 'Amet Sem Commodo',
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <DeleteSweepIcon />
      </Avatar>
    ),
    title: 'Removed 6 items from task list',
    subtitle: moment(date).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <CheckCircleIcon />
      </Avatar>
    ),
    title: 'Completed 2 projects',
    subtitle: moment(new Date(date - 1000 * 60 * 60)).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <NotificationsPausedIcon />
      </Avatar>
    ),
    title: 'Muted notifications',
    subtitle: moment(new Date(date - 1000 * 60 * 60 * 2)).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <PersonAddIcon />
      </Avatar>
    ),
    title: 'Added Joek to contact list',
    subtitle: moment(new Date(date - 1000 * 60 * 60 * 3)).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <PhoneMissedIcon />
      </Avatar>
    ),
    title: 'Missed live call from Ellie',
    subtitle: moment(new Date(date - 1000 * 60 * 60 * 6)).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <GroupAddIcon />
      </Avatar>
    ),
    title: "You've been added to HR group",
    subtitle: moment(new Date(date - 1000 * 60 * 60 * 10)).format('MMMM Do YYYY, h:mm:ss a'),
  },
];
