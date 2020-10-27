import React from 'react';
import PropTypes from 'prop-types';
import { IfFulfilled, IfPending, IfRejected, useAsync } from 'react-async';

import getWeatherConditions from '../../api';
import APIKey from '../../api/constants';
import { roundOff } from '../../utils';

const getWeatherData = async (latitude, longitude, key) => {
  try {
    const response = await getWeatherConditions(latitude, longitude, key);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

const GetWeather = ({ latitude, longitude }) => {
  const asyncData = useAsync({
    promiseFn: getWeatherData,
    latitude,
    longitude,
    APIKey,
  });

  return (
    <>
      <IfRejected state={asyncData} data-qa="weather-data-rejected">
        <h2>Sorry could not find data</h2>
      </IfRejected>
      <IfPending state={asyncData} data-qa="weather-data-pending">
        <h2>Loading</h2>
      </IfPending>
      <IfFulfilled state={asyncData} data-qa="weather-data-fulfilled">
        {(data) => (
          <div>
            <h2>{data.name}</h2>
            <h1>{roundOff(data.main.temp)}°C</h1>
            <h4>
              {roundOff(data.main.temp_min)}°C / {roundOff(data.main.temp_max)}
              °C
            </h4>
            <h2>{data.weather[0].main}</h2>
            <h4>{data.weather[0].description}</h4>
            <h5>Humidity: {data.main.humidity}%</h5>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather-icon"
              />
            </div>
          </div>
        )}
      </IfFulfilled>
    </>
  );
};

GetWeather.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

GetWeather.defaultProps = {
  latitude: -33.96,
  longitude: 18.51,
};

export default GetWeather;
