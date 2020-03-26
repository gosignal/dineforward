import React, { useEffect, useState } from 'react';
import {
  capitalize,
  getWeather,
  getWeatherIcon,
  windDirection
} from '../../helpers';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import format from 'date-fns/format';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  flip: {
    transform: 'rotate(-90deg)'
  },
  weatherBackground: {
    backgroundColor: theme.palette.primary.main
  },
  weatherDetails: {
    color: theme.palette.primary.contrastText
  },
  weatherIcon: {
    fontSize: 26
  }
}));

const getWindDirection = (degree, classes) => {
  const direction = windDirection(degree);
  switch (direction) {
    case 'n':
      return <ArrowUpwardIcon />;
    case 'ne':
      return <CallMadeIcon />;
    case 'e':
      return <ArrowForwardIcon />;
    case 'se':
      return <CallReceivedIcon className={classes.flip} />;
    case 's':
      return <ArrowDownwardIcon />;
    case 'sw':
      return <CallReceivedIcon />;
    case 'w':
      return <ArrowBackIcon />;
    case 'nw':
      return <CallMadeIcon className={classes.flip} />;
    default:
      break;
  }
};

const WeatherCard = ({ city, country, days }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(undefined);
  const [forecast, setForecast] = useState(undefined);

  useEffect(() => {
    (async function() {
      try {
        const forecast = await getWeather(city, country, days);

        if (forecast) {
          const current = forecast.list[0];
          setCurrent(current);
          setForecast(forecast);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [city, country, days]);

  return (
    <Card>
      {current && (
        <>
          <CardContent>
            <Grid
              container
              spacing={0}
              direction={'row'}
              justify={'space-between'}
            >
              <Grid item>
                {forecast && (
                  <Typography variant="h6">{`${forecast.city.name}, ${forecast.city.country}`}</Typography>
                )}
                <Typography variant="subtitle1">
                  {format(current.dt * 1000, 'MMMM Do YYYY, h:mm:ss a')}
                </Typography>
                <Typography variant="caption">
                  {capitalize(current.weather[0].description)}
                </Typography>
              </Grid>
              <Grid item className="text-xs-right">
                <Typography variant="h4">
                  <span>{current.main.temp}</span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignItems={'center'}
              direction={'row'}
              justify={'space-between'}
              className="my-1"
            >
              {Object.keys(current.main).map((key, index) => (
                <Grid item xs={6} key={index}>
                  <Grid
                    container
                    spacing={0}
                    alignItems={'center'}
                    direction={'row'}
                    justify={'space-between'}
                  >
                    <Grid item>
                      <Typography variant="caption">
                        <span>{capitalize(key.replace(/_/g, ' '))}</span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        <span>{current.main[key]}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <CardContent className={classes.weatherBackground}>
            {forecast && (
              <Grid
                container
                spacing={0}
                alignItems={'center'}
                direction={'row'}
                justify={'space-between'}
                className="text-xs-center"
              >
                {forecast.list.map(
                  (day, index) =>
                    index !== 0 && (
                      <Typography
                        variant="caption"
                        className={classes.weatherDetails}
                        key={index}
                      >
                        <span className="block">{day.weather.description}</span>
                        <span className="block py-xs">
                          {getWindDirection(day.wind.deg, classes)}
                        </span>
                        <span className="block pb-xs">
                          {format(current.dt * 1000, 'ddd')}
                        </span>
                        <span className="block pb-xs">
                          <i
                            className={classNames(
                              getWeatherIcon(day.weather[0].icon),
                              classes.weatherIcon
                            )}
                          />
                        </span>
                        <strong className="block pb-xs">
                          {`${day.main.temp}`} &deg;
                        </strong>
                      </Typography>
                    )
                )}
              </Grid>
            )}
          </CardContent>
        </>
      )}
      {!current && !forecast && (
        <CardContent>
          <Typography>Weather Data Not Loaded</Typography>
        </CardContent>
      )}
    </Card>
  );
};

WeatherCard.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  days: PropTypes.number
};

export default WeatherCard;
